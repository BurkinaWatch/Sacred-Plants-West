export type TotemPlanteId = 'baobab' | 'fromager' | 'moringa' | 'iboga' | 'karite' | 'kinkeliba' | 'acacia';


export interface QuizOption {
  texte: string;
  scores: Partial<Record<TotemPlanteId, number>>;
  dimension: 'R' | 'F' | 'G' | 'L' | 'C';
}

export interface QuizQuestion {
  id: number;
  question: string;
  optionA: QuizOption;
  optionB: QuizOption;
  dimension: 'R' | 'F' | 'G' | 'L' | 'C';
  dimensionLabel: string;
}

export interface TotemResult {
  id: TotemPlanteId;
  nom: string;
  description: string;
  forces: string[];
  defis: string[];
  mantra: string;
  planteSecondaire: TotemPlanteId;
  couleur: string;
  profilDimensions: Record<'R' | 'F' | 'G' | 'L' | 'C', 'haut' | 'moyen' | 'bas'>;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [

  // D1 : RACINES — Ancrage, fidélité aux origines, mémoire
  {
    id: 1,
    dimension: 'R',
    dimensionLabel: 'Racines',
    question: "Face à une décision importante, vous vous référez d'abord à...",
    optionA: { texte: "Vos valeurs profondes et ce que vos ancêtres auraient choisi", scores: { baobab: 2, karite: 1 }, dimension: 'R' },
    optionB: { texte: "Ce que vous ressentez dans l'instant présent", scores: { moringa: 2, kinkeliba: 1 }, dimension: 'R' },
  },
  {
    id: 2,
    dimension: 'R',
    dimensionLabel: 'Racines',
    question: "Votre rapport à votre terre natale et vos origines est...",
    optionA: { texte: "Central — vos racines définissent qui vous êtes profondément", scores: { baobab: 2, tamarinier: 1 }, dimension: 'R' },
    optionB: { texte: "Respectueux, mais vous vous construisez par-delà vos origines", scores: { acacia: 2, fromager: 1 }, dimension: 'R' },
  },
  {
    id: 3,
    dimension: 'R',
    dimensionLabel: 'Racines',
    question: "Face à un changement radical imposé, vous...",
    optionA: { texte: "Vous ancrez davantage dans vos valeurs fondamentales", scores: { baobab: 2, karite: 1 }, dimension: 'R' },
    optionB: { texte: "Vous adaptez avec fluidité à la nouvelle situation", scores: { moringa: 2, kinkeliba: 1 }, dimension: 'R' },
  },
  {
    id: 4,
    dimension: 'R',
    dimensionLabel: 'Racines',
    question: "La transmission de la sagesse à la génération suivante est pour vous...",
    optionA: { texte: "Une responsabilité sacrée — vous portez ce devoir profondément", scores: { baobab: 2, karite: 1 }, dimension: 'R' },
    optionB: { texte: "Quelque chose que vous faites si l'autre est prêt à recevoir", scores: { fromager: 2, acacia: 1 }, dimension: 'R' },
  },

  // D2 : FLORAISON — Expression, leadership, visibilité
  {
    id: 5,
    dimension: 'F',
    dimensionLabel: 'Floraison',
    question: "Face à un groupe sans direction claire, vous...",
    optionA: { texte: "Prenez naturellement les rênes et proposez une direction", scores: { fromager: 2, acacia: 1 }, dimension: 'F' },
    optionB: { texte: "Observez d'abord, puis conseillez discrètement", scores: { baobab: 2, kinkeliba: 1 }, dimension: 'F' },
  },
  {
    id: 6,
    dimension: 'F',
    dimensionLabel: 'Floraison',
    question: "Exprimer votre singularité et vos dons vous semble...",
    optionA: { texte: "Naturel — votre expression est votre offrande au monde", scores: { fromager: 2, moringa: 1 }, dimension: 'F' },
    optionB: { texte: "Délicat — vous préférez que vos actes parlent pour vous", scores: { karite: 2, baobab: 1 }, dimension: 'F' },
  },
  {
    id: 7,
    dimension: 'F',
    dimensionLabel: 'Floraison',
    question: "Votre façon d'influencer les autres est...",
    optionA: { texte: "Par la présence directe et l'audace visible", scores: { fromager: 2, acacia: 1 }, dimension: 'F' },
    optionB: { texte: "Par la profondeur de votre sagesse et votre exemple silencieux", scores: { baobab: 2, iboga: 1 }, dimension: 'F' },
  },
  {
    id: 8,
    dimension: 'F',
    dimensionLabel: 'Floraison',
    question: "Après une longue journée de contact avec les autres, vous ressentez...",
    optionA: { texte: "De l'énergie — le contact humain vous ressource", scores: { fromager: 2, moringa: 1 }, dimension: 'F' },
    optionB: { texte: "Du besoin de solitude pour vous régénérer", scores: { iboga: 2, kinkeliba: 1 }, dimension: 'F' },
  },

  // D3 : GUÉRISON — Empathie, soin, communauté
  {
    id: 9,
    dimension: 'G',
    dimensionLabel: 'Guérison',
    question: "Quand quelqu'un de proche souffre, vous...",
    optionA: { texte: "Êtes immédiatement présent, avec chaleur et soutien actif", scores: { moringa: 2, karite: 1 }, dimension: 'G' },
    optionB: { texte: "Lui offrez la vérité dont il a besoin, même difficile à entendre", scores: { iboga: 2, acacia: 1 }, dimension: 'G' },
  },
  {
    id: 10,
    dimension: 'G',
    dimensionLabel: 'Guérison',
    question: "Votre manière de prendre soin des autres ressemble plutôt à...",
    optionA: { texte: "Nourrir, accueillir, être disponible sans condition", scores: { moringa: 2, baobab: 1 }, dimension: 'G' },
    optionB: { texte: "Pousser à la transformation, même si c'est inconfortable", scores: { iboga: 2, acacia: 1 }, dimension: 'G' },
  },
  {
    id: 11,
    dimension: 'G',
    dimensionLabel: 'Guérison',
    question: "Ce qui vous tient le plus à coeur est...",
    optionA: { texte: "Le bien-être et la cohésion de votre cercle proche", scores: { karite: 2, moringa: 1 }, dimension: 'G' },
    optionB: { texte: "Votre propre mission et ce que vous devez accomplir", scores: { fromager: 2, acacia: 1 }, dimension: 'G' },
  },
  {
    id: 12,
    dimension: 'G',
    dimensionLabel: 'Guérison',
    question: "La vérité que vous portez, vous la partagez...",
    optionA: { texte: "Avec douceur, dans la forme qui peut être reçue", scores: { moringa: 2, kinkeliba: 1 }, dimension: 'G' },
    optionB: { texte: "Directement, même si ça fait mal — l'amertume guérit", scores: { iboga: 2, acacia: 1 }, dimension: 'G' },
  },

  // D4 : LUMIÈRE — Vision, intuition, spiritualité
  {
    id: 13,
    dimension: 'L',
    dimensionLabel: 'Lumière',
    question: "Quand vous devez prendre une décision importante, vous faites confiance à...",
    optionA: { texte: "Votre intuition profonde — quelque chose en vous sait", scores: { iboga: 2, kinkeliba: 1 }, dimension: 'L' },
    optionB: { texte: "L'observation rigoureuse et les faits vérifiables", scores: { acacia: 2, baobab: 1 }, dimension: 'L' },
  },
  {
    id: 14,
    dimension: 'L',
    dimensionLabel: 'Lumière',
    question: "Les rêves, les signes et les coïncidences sont pour vous...",
    optionA: { texte: "Des messages à décoder — ils portent une vérité cachée", scores: { iboga: 2, fromager: 1 }, dimension: 'L' },
    optionB: { texte: "Des phénomènes intéressants, mais vous préférez le concret", scores: { acacia: 1, karite: 2 }, dimension: 'L' },
  },
  {
    id: 15,
    dimension: 'L',
    dimensionLabel: 'Lumière',
    question: "Face à l'inconnu, vous ressentez...",
    optionA: { texte: "Une fascination — l'inconnu est un espace à explorer", scores: { fromager: 2, iboga: 1 }, dimension: 'L' },
    optionB: { texte: "Une vigilance — il faut comprendre avant d'avancer", scores: { baobab: 2, kinkeliba: 1 }, dimension: 'L' },
  },
  {
    id: 16,
    dimension: 'L',
    dimensionLabel: 'Lumière',
    question: "Votre rapport à la spiritualité est...",
    optionA: { texte: "Mystique et personnel — vous cherchez votre propre accès au sacré", scores: { iboga: 2, fromager: 1 }, dimension: 'L' },
    optionB: { texte: "Ancré dans les traditions — vous respectez les formes transmises", scores: { baobab: 2, karite: 1 }, dimension: 'L' },
  },

  // D5 : CROISSANCE — Transformation, adaptabilité, renaissance
  {
    id: 17,
    dimension: 'C',
    dimensionLabel: 'Croissance',
    question: "Un bouleversement majeur dans votre vie vous amène à...",
    optionA: { texte: "Vous transformer profondément — vous n'êtes plus le même après", scores: { moringa: 2, kinkeliba: 1 }, dimension: 'C' },
    optionB: { texte: "Vous ancrer plus profondément dans vos valeurs fondamentales", scores: { baobab: 2, karite: 1 }, dimension: 'C' },
  },
  {
    id: 18,
    dimension: 'C',
    dimensionLabel: 'Croissance',
    question: "Votre identité au fil des années est...",
    optionA: { texte: "En évolution constante — vous vous réinventez par cycles", scores: { moringa: 2, acacia: 1 }, dimension: 'C' },
    optionB: { texte: "Stable et cohérente — vous approfondissez ce que vous êtes", scores: { baobab: 2, karite: 1 }, dimension: 'C' },
  },
  {
    id: 19,
    dimension: 'C',
    dimensionLabel: 'Croissance',
    question: "Face à l'échec, votre premier mouvement est...",
    optionA: { texte: "Chercher une voie entièrement nouvelle, différente de l'ancienne", scores: { moringa: 2, kinkeliba: 1 }, dimension: 'C' },
    optionB: { texte: "Repartir avec plus de force sur le même chemin", scores: { acacia: 2, fromager: 1 }, dimension: 'C' },
  },
  {
    id: 20,
    dimension: 'C',
    dimensionLabel: 'Croissance',
    question: "Votre rapport au passé est...",
    optionA: { texte: "Vous vous en libérez — chaque saison apporte de nouvelles feuilles", scores: { moringa: 2, acacia: 1 }, dimension: 'C' },
    optionB: { texte: "Vous le portez avec vous — il est une ressource, pas un poids", scores: { baobab: 2, karite: 1 }, dimension: 'C' },
  },
];

export const TOTEM_RESULTS: Record<TotemPlanteId, TotemResult> = {
  baobab: {
    id: 'baobab',
    nom: 'Baobab',
    description: "Votre profil révèle un ancrage ancestral profond et une générosité naturelle — attributs du Baobab, gardien millénaire des savanes. Dans les traditions mandingues et wolof, le baobab est l'arbre du rassemblement, celui sous lequel les griots parlent et les anciens décident. Vous portez cette sagesse collective.",
    forces: ["Ancrage profond dans vos valeurs", "Générosité inépuisable envers la communauté", "Mémoire et continuité intergénérationnelle", "Résilience face aux tempêtes de la vie"],
    defis: ["Tendance à l'immobilisme face au changement", "Difficulté à lâcher les anciennes formes", "Risque de tout porter seul jusqu'à l'épuisement"],
    mantra: "Je nourris ma communauté de mes racines profondes.",
    planteSecondaire: 'karite',
    couleur: '#8B4513',
    profilDimensions: { R: 'haut', F: 'bas', G: 'moyen', L: 'bas', C: 'bas' },
  },
  fromager: {
    id: 'fromager',
    nom: 'Fromager',
    description: "Votre profil révèle une présence majestueuse et une vision qui transcende le quotidien — marque du Fromager, axis mundi de l'Afrique de l'Ouest. Dans les traditions yoruba et akan, le fromager est l'arbre des génies et des ancêtres, le pont entre les mondes. Vous êtes naturellement un espace sacré pour les autres.",
    forces: ["Présence qui change l'atmosphère d'un lieu", "Vision transcendante et stratégique", "Capacité à protéger et accueillir", "Leadership naturel par la grandeur"],
    defis: ["Détachement possible du quotidien concret", "Solitude du géant", "Difficulté à s'ancrer dans les petites choses"],
    mantra: "Je suis l'espace sacré où les âmes trouvent refuge.",
    planteSecondaire: 'iboga',
    couleur: '#5C7A3E',
    profilDimensions: { R: 'bas', F: 'haut', G: 'moyen', L: 'haut', C: 'moyen' },
  },
  moringa: {
    id: 'moringa',
    nom: 'Moringa',
    description: "Votre profil révèle une générosité adaptative et une vocation à guérir — signature du Moringa, 'l'arbre miracle' du Sahel. Chacune de ses parties nourrit et soigne; comme lui, vous avez le don de vous adapter à chaque besoin et de donner sans compter. Les traditions haoussa et mandingue le voient comme un don divin aux hommes.",
    forces: ["Adaptabilité et polyvalence remarquables", "Générosité sans calcul", "Capacité de guérison et de soin", "Accessibilité et proximité avec tous"],
    defis: ["Risque de se disperser dans trop de directions", "Difficulté à poser des limites", "Manque de profondeur perçu par les autres"],
    mantra: "Je me donne pleinement, je me renouvelle entièrement.",
    planteSecondaire: 'kinkeliba',
    couleur: '#4A7C59',
    profilDimensions: { R: 'bas', F: 'moyen', G: 'haut', L: 'moyen', C: 'haut' },
  },
  iboga: {
    id: 'iboga',
    nom: 'Iboga',
    description: "Votre profil révèle une profondeur transformatrice et une connexion au mystère — attributs de l'Iboga, maître de l'initiation dans les traditions Bwiti. L'iboga ne ment jamais : il confronte, il révèle, il transforme. Comme lui, vous avez la capacité de toucher les profondeurs que d'autres évitent.",
    forces: ["Profondeur psychologique et spirituelle", "Courage de la vérité sans détour", "Capacité de transformation radicale", "Connexion aux dimensions invisibles"],
    defis: ["Intensité pouvant être difficile à supporter pour les autres", "Tendance à l'isolement des non-initiés", "Difficulté dans les interactions superficielles"],
    mantra: "Je descends dans les profondeurs pour en remonter la lumière.",
    planteSecondaire: 'fromager',
    couleur: '#4A2D7A',
    profilDimensions: { R: 'moyen', F: 'bas', G: 'moyen', L: 'haut', C: 'moyen' },
  },
  karite: {
    id: 'karite',
    nom: 'Karité',
    description: "Votre profil révèle une richesse intérieure profonde et un sens aigu du soin communautaire — marque du Karité, 'l'arbre des femmes' sacré du Sahel. Dans les traditions mossi et bambara, le karité appartient aux femmes par droit coutumier immémoriel. Sa richesse est cachée, patiente, précieuse.",
    forces: ["Richesse intérieure profonde et durable", "Sens du soin et de la protection", "Patience et persévérance exemplaires", "Solidarité ancrée dans le territoire"],
    defis: ["Lenteur à révéler sa vraie valeur", "Difficulté à se transformer rapidement", "Tendance à garder sa richesse pour soi"],
    mantra: "Ma richesse intérieure se révèle à ceux qui savent attendre.",
    planteSecondaire: 'baobab',
    couleur: '#C4822D',
    profilDimensions: { R: 'haut', F: 'bas', G: 'haut', L: 'bas', C: 'bas' },
  },
  kinkeliba: {
    id: 'kinkeliba',
    nom: 'Kinkeliba',
    description: "Votre profil révèle une sensibilité purificatrice et un sens aigu du rituel quotidien — signature du Kinkeliba, plante de la clarté dans les traditions sérère et mandingue. Le thé de kinkeliba bu à l'aube purifie le corps et ouvre l'esprit. Comme lui, vous avez le don de nettoyer ce qui trouble et d'ouvrir ce qui est fermé.",
    forces: ["Clarté d'esprit et discernement subtil", "Sens du rituel et du soin quotidien", "Capacité de purification et de renouvellement", "Sensibilité aux atmosphères et aux énergies"],
    defis: ["Perfectionnisme qui peut bloquer l'action", "Hypersensibilité aux environnements toxiques", "Difficulté à tolérer l'imparfait"],
    mantra: "Je purifie mon regard pour voir la vérité de chaque instant.",
    planteSecondaire: 'moringa',
    couleur: '#2E7D6B',
    profilDimensions: { R: 'moyen', F: 'moyen', G: 'moyen', L: 'moyen', C: 'haut' },
  },
  acacia: {
    id: 'acacia',
    nom: 'Acacia',
    description: "Votre profil révèle une résilience ardente et une capacité à produire de la valeur dans l'adversité — attributs de l'Acacia, survivant des terres arides. Dans les traditions peules et touarègues, l'acacia est l'arbre totem des nomades, celui qui nourrit quand tout le reste brûle. Comme lui, vous vous fortifiez là où d'autres se brisent.",
    forces: ["Résilience exceptionnelle face à l'adversité", "Capacité à créer de la valeur dans les conditions difficiles", "Endurance et ténacité dans la durée", "Protection naturelle de ce qui est sous sa garde"],
    defis: ["Agressivité défensive qui peut repousser les proches", "Dureté excessive dans les situations de tendresse", "Difficulté à laisser entrer les autres"],
    mantra: "Je me renforce dans l'adversité et je protège ce qui compte.",
    planteSecondaire: 'baobab',
    couleur: '#D4A017',
    profilDimensions: { R: 'moyen', F: 'haut', G: 'bas', L: 'bas', C: 'moyen' },
  },
};

export type QuizAnswers = Record<number, 'A' | 'B'>;

export function calculateTotem(answers: QuizAnswers): {
  primary: TotemPlanteId;
  secondary: TotemPlanteId;
  scores: Record<TotemPlanteId, number>;
  dimensionScores: Record<'R' | 'F' | 'G' | 'L' | 'C', number>;
} {
  const scores: Record<TotemPlanteId, number> = {
    baobab: 0, fromager: 0, moringa: 0,
    iboga: 0, karite: 0, kinkeliba: 0, acacia: 0,
  };

  const dimensionScores: Record<'R' | 'F' | 'G' | 'L' | 'C', number> = {
    R: 0, F: 0, G: 0, L: 0, C: 0,
  };

  QUIZ_QUESTIONS.forEach((q) => {
    const answer = answers[q.id];
    if (!answer) return;
    const option = answer === 'A' ? q.optionA : q.optionB;
    (Object.entries(option.scores) as [TotemPlanteId, number][]).forEach(([id, pts]) => {
      scores[id] += pts;
    });
  });

  QUIZ_QUESTIONS.forEach((q) => {
    const answer = answers[q.id];
    if (!answer) return;
    const option = answer === 'A' ? q.optionA : q.optionB;
    const primary = (Object.entries(option.scores) as [TotemPlanteId, number][])
      .sort((a, b) => b[1] - a[1])[0];
    if (primary) {
      dimensionScores[q.dimension] += primary[1];
    }
  });

  const sorted = (Object.entries(scores) as [TotemPlanteId, number][]).sort((a, b) => b[1] - a[1]);
  const primary = sorted[0][0];

  const primaryProfile = TOTEM_RESULTS[primary].profilDimensions;
  let secondary = sorted[1][0];

  for (let i = 1; i < sorted.length; i++) {
    const candidate = sorted[i][0];
    const candidateProfile = TOTEM_RESULTS[candidate].profilDimensions;
    const differences = (['R', 'F', 'G', 'L', 'C'] as const).filter(
      (d) => primaryProfile[d] !== candidateProfile[d]
    ).length;
    if (differences >= 2) {
      secondary = candidate;
      break;
    }
  }

  return { primary, secondary, scores, dimensionScores };
}
