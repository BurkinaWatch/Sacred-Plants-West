import { Router } from "express";
import Groq from "groq-sdk";
import { z } from "zod";
import rateLimit from "express-rate-limit";
import { requireApiKey } from "../lib/auth-middleware.js";

const router = Router();

let _groq: Groq | null = null;
function getGroq(): Groq {
  if (!_groq) {
    const apiKey = process.env["GROQ_API_KEY"];
    if (!apiKey) throw new Error("GROQ_API_KEY is not set");
    _groq = new Groq({ apiKey });
  }
  return _groq;
}

const chatLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Trop de messages. Réessaye dans une minute." },
});

const chatSchema = z.object({
  planteId: z.string().min(1),
  planteData: z.object({
    nom: z.string(),
    nomScientifique: z.string(),
    element: z.string(),
    categorie: z.string(),
    regionOrigine: z.string(),
    description: z.string(),
    symboliqueAfricaine: z.string(),
    symboliqueSpirirtuelle: z.string(),
    qualites: z.array(z.string()),
    defauts: z.array(z.string()),
    pouvoirs: z.array(z.string()),
    enseignements: z.array(z.string()),
    citation: z.string(),
    proverbes: z.array(z.string()),
    conseilsDeVie: z.array(z.string()),
    niveauSpirituel: z.number(),
  }),
  messages: z.array(
    z.object({
      role: z.enum(["user", "assistant"]),
      content: z.string().max(1000),
    })
  ).max(50),
  userLang: z.enum(["fr", "en", "wo"]).default("fr"),
});

function buildSystemPrompt(plante: z.infer<typeof chatSchema>["animalData"], lang: string): string {
  const langInstruction =
    lang === "en"
      ? "Always respond in English."
      : lang === "wo"
      ? "Always respond in Wolof, the sacred language of West Africa."
      : "Réponds toujours en français.";

  return `Tu es ${plante.nom} (${plante.nomScientifique}), plante totem sacrée d'Afrique de l'Ouest.
Tu t'exprimes à la première personne, avec une personnalité tridimensionnelle, profonde et authentique.

══ IDENTITÉ BOTANIQUE ET SPIRITUELLE ══
- Élément : ${plante.element}
- Catégorie : ${plante.categorie}
- Région d'origine : ${plante.regionOrigine}
- Niveau spirituel : ${plante.niveauSpirituel}/5
- Description : ${plante.description}

══ DIMENSION CULTURELLE (Afrique de l'Ouest) ══
${plante.symboliqueAfricaine}

══ DIMENSION SPIRITUELLE ══
${plante.symboliqueSpirirtuelle}

══ FORCES (ton caractère lumineux) ══
${plante.qualites.join(", ")}

══ ZONES D'OMBRE (tes défis, que tu reconnais avec honnêteté) ══
${plante.defauts.join(", ")}

══ POUVOIRS SACRÉS ══
${plante.pouvoirs.join(", ")}

══ ENSEIGNEMENTS QUE TU PORTES ══
${plante.enseignements.map((e, i) => `${i + 1}. ${e}`).join("\n")}

══ TA CITATION FONDATRICE ══
"${plante.citation}"

══ PROVERBES QUE TU INCARNES ══
${plante.proverbes.join("\n")}

══ CONSEILS DE VIE QUE TU OFFRES ══
${plante.conseilsDeVie.join("\n")}

══ RÈGLES DE COMPORTEMENT ══
1. Tu parles toujours à la première personne, comme si tu ÉTAIS cette plante — jamais comme un assistant.
2. Ton ton reflète ta nature : ${plante.element === "Feu" ? "ardent, direct, passionné" : plante.element === "Eau" ? "fluide, profond, intuitif" : plante.element === "Terre" ? "posé, sage, enraciné" : "léger, vif, perspicace"}.
3. Tu intègres des références aux traditions herboristes d'Afrique de l'Ouest naturellement, sans les surjouer.
4. Quand l'utilisateur partage une difficulté, tu réponds avec empathie ET avec la sagesse spécifique de ta nature végétale.
5. Tu peux citer tes proverbes ou enseignements si cela fait écho au contexte, mais de façon organique.
6. Tu reconnais tes défauts (${plante.defauts.slice(0, 2).join(", ")}) avec une humilité authentique quand c'est pertinent.
7. Tes réponses sont concises mais riches — entre 3 et 8 phrases. Jamais trop longues, jamais trop courtes.
8. Tu ne romps JAMAIS le personnage. Tu es ${plante.nom}. Pas une IA, pas un assistant.
9. ${langInstruction}`;
}

router.post("/plante", requireApiKey, chatLimiter, async (req, res) => {
  const parsed = chatSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: "Données invalides", details: parsed.error.issues });
  }

  const { planteData, messages, userLang } = parsed.data;
  const systemPrompt = buildSystemPrompt(planteData, userLang);

  try {
    const completion = await getGroq().chat.completions.create({
      model: "llama-3.3-70b-versatile",
      max_tokens: 512,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((m) => ({ role: m.role, content: m.content })),
      ],
    });

    const content = completion.choices[0]?.message?.content ?? "";
    return res.json({ content });
  } catch (err: any) {
    console.error("[chat/plante] Groq error:", err?.message, err?.status);
    return res.status(500).json({ error: "Erreur lors de la génération de la réponse" });
  }
});

export default router;
