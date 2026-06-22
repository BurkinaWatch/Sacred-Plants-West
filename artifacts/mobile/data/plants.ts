export type PlantCategorie =
  | 'Arbres'
  | 'Arbustes'
  | 'Herbes'
  | 'Lianes'
  | 'Racines'
  | 'Bois';

export type Element = 'Feu' | 'Eau' | 'Terre' | 'Air';

export interface Plante {
  id: string;
  nom: string;
  nomAnglais: string;
  nomScientifique: string;
  categorie: PlantCategorie;
  element: Element;
  description: string;
  symboliqueAfricaine: string;
  symboliqueSpirirtuelle: string;
  symbolique: string;
  qualites: string[];
  defauts: string[];
  pouvoirs: string[];
  enseignements: string[];
  citation: string;
  proverbes: string[];
  legendes: string[];
  conseilsDeVie: string[];
  niveauSpirituel: number;
  regionOrigine: string;
  couleur: string;
  couleurSecondaire: string;
  enseignementDuJour: string;
  usagesMedicinaux: string[];
  partiesUtilisees: string[];
  peuplesConcernes: string[];
  habitat: string;
}

export const PLANTS: Plante[] = [

  {
    id: 'baobab',
    nom: 'Baobab',
    nomAnglais: 'Baobab',
    nomScientifique: 'Adansonia digitata',
    categorie: 'Arbres',
    element: 'Terre',
    description:
      "Le Baobab est l'Arbre de Vie par excellence, gardien des savanes d'Afrique de l'Ouest depuis des millénaires. Ses troncs colossaux peuvent stocker des milliers de litres d'eau, symbole de résilience et de générosité inépuisable.",
    symboliqueAfricaine:
      "Dans toute l'Afrique de l'Ouest, le Baobab est le lieu sacré de rassemblement — on tient conseil à son ombre, on enterre les griots dans son tronc creux pour que leur sagesse reste dans l'arbre à jamais. Les Wolof l'appellent 'Guy' et lui font des offrandes lors des grandes décisions communautaires.",
    symboliqueSpirirtuelle:
      "Le Baobab incarne la connexion entre les mondes : ses racines s'enfoncent vers les ancêtres, son tronc traverse le présent, ses branches touchent le ciel des dieux. Il est le pilier cosmique autour duquel la vie s'organise.",
    symbolique: "Symbole d'éternité, de mémoire collective et de générosité absolue.",
    qualites: ['Sagesse millénaire', 'Générosité inépuisable', 'Résilience face aux épreuves', 'Ancrage profond', 'Mémoire ancestrale'],
    defauts: ['Immobilisme', 'Résistance au changement', 'Tendance à tout vouloir porter seul', 'Lenteur décisionnelle'],
    pouvoirs: ['Mémoire des ancêtres', 'Force tranquille', 'Nourriture de la communauté', 'Ancrage cosmique'],
    enseignements: [
      "La vraie force ne s'exhibe pas — elle nourrit silencieusement ceux qui l'entourent",
      "Tes racines définissent ta hauteur — honore tes origines",
      "La communauté est ton eau vitale — sans elle, ton tronc se vide",
      "Offre l'ombre avant d'en avoir besoin toi-même",
    ],
    citation: "L'arbre qui a de profondes racines ne craint pas le vent violent.",
    proverbes: [
      "L'arbre qui a de profondes racines ne craint pas le vent violent.",
      "Le baobab ne pousse pas en une saison — la grandeur se construit dans la patience.",
      "Sous le baobab, même l'ennemi reçoit de l'ombre.",
      "Un baobab mort nourrit encore mille êtres vivants.",
    ],
    legendes: [
      "La légende mandingue raconte que le Dieu créateur planta le Baobab à l'envers — ses racines vers le ciel pour qu'il soit toujours connecté au divin. C'est pourquoi il semble déraciné : il appartient aux deux mondes à la fois.",
      "Les griots du Mali racontent que les premiers mots de sagesse furent prononcés à l'ombre d'un baobab. Depuis, tout baobab porte en lui la mémoire de toutes les paroles sacrées jamais dites sous son ombre.",
    ],
    conseilsDeVie: [
      "Cultive tes racines aussi profondément que tu veux monter — la stabilité précède la grandeur.",
      "Deviens le lieu où les autres trouvent refuge — c'est ta plus haute vocation.",
      "Ta lenteur n'est pas une faiblesse : c'est la profondeur qui mûrit la sagesse.",
      "Ne te vide pas pour les autres — un baobab sec ne peut plus nourrir personne.",
    ],
    niveauSpirituel: 5,
    regionOrigine: "Savanes du Sahel, du Sénégal au Mali",
    couleur: '#8B4513',
    couleurSecondaire: '#5C2D0A',
    enseignementDuJour:
      "Aujourd'hui, sois le baobab — offre ton ombre sans calcul. La vraie générosité ne comptabilise pas.",
    usagesMedicinaux: ['Fièvres et malaria (pulpe)', 'Diarrhée (écorce)', 'Anémie (feuilles)', 'Scorbut (fruit riche en vitamine C)'],
    partiesUtilisees: ['Pulpe du fruit', 'Feuilles', 'Écorce', 'Graines', 'Racines'],
    peuplesConcernes: ['Wolof', 'Mandingue', 'Peul', 'Bambara', 'Sérère'],
    habitat: "Savanes sèches et semi-arides, zones soudano-sahéliennes",
  },

  {
    id: 'moringa',
    nom: 'Moringa',
    nomAnglais: 'Moringa',
    nomScientifique: 'Moringa oleifera',
    categorie: 'Arbres',
    element: 'Air',
    description:
      "Le Moringa est 'l'arbre qui ne ment jamais' — chacune de ses parties est un médicament, un aliment, une purification. Surnommé 'l'arbre miracle', il concentre en lui une nutrition exceptionnelle que les traditions de l'Ouest africain ont su lire bien avant la science moderne.",
    symboliqueAfricaine:
      "En pays Mandingue, le Moringa est planté à l'entrée des concessions pour purifier les entrées et protéger la famille. Ses feuilles sont données aux femmes allaitantes et aux enfants malnutris depuis des siècles. Les guérisseurs haoussa du Niger en font la base de leurs préparations les plus efficaces.",
    symboliqueSpirirtuelle:
      "Le Moringa incarne la Providence — la capacité du ciel à offrir exactement ce dont la vie a besoin. Il enseigne que la guérison est dans la nature si on sait la voir, et que donner sans compter est la loi sacrée de l'existence.",
    symbolique: "Symbole de providence divine, de guérison totale et de générosité céleste.",
    qualites: ['Générosité sans limite', 'Adaptabilité remarquable', 'Pouvoir de guérison', 'Clarté et légèreté', 'Puissance discrète'],
    defauts: ["Se disperser dans trop de directions à la fois", 'Manque de profondeur perçu', 'Instabilité face aux conditions extrêmes'],
    pouvoirs: ['Guérison holistique', 'Purification', 'Nutrition spirituelle', 'Légèreté et élévation'],
    enseignements: [
      "La vraie richesse se distribue — elle ne s'accumule pas",
      "Chaque partie de toi a une valeur — ne t'amputre pas de tes dons",
      "La guérison véritable nourrit avant de soigner",
      "Être utile n'est pas une servitude : c'est une vocation sacrée",
    ],
    citation: "L'arbre le plus utile est celui qu'on ignore le plus souvent.",
    proverbes: [
      "L'arbre le plus utile est celui qu'on ignore le plus souvent.",
      "Les feuilles du moringa connaissent le secret de la vie — elles la donnent sans retenue.",
      "Celui qui plante un moringa plante mille médicaments.",
    ],
    legendes: [
      "La légende haoussa raconte qu'un ange en visite sur Terre, voyant tant de souffrance, demanda à Dieu comment aider les hommes. Dieu fit pousser le Moringa en une nuit et lui dit : 'Voilà ta réponse.' Depuis, ceux qui soignent avec le moringa agissent par main divine.",
    ],
    conseilsDeVie: [
      "Partage tes dons sans calculer — la vraie abondance se multiplie en se donnant.",
      "Tu n'as pas besoin de grandes ressources pour avoir un grand impact.",
      "Prends soin de ta propre santé avant de guérir les autres.",
      "Ta légèreté est une force : elle te permet de t'adapter et de toucher là où les autres ne peuvent pas.",
    ],
    niveauSpirituel: 4,
    regionOrigine: "Zone sahélienne, du Sénégal au Niger",
    couleur: '#4A7C59',
    couleurSecondaire: '#2D5038',
    enseignementDuJour:
      "Aujourd'hui, identifie un don que tu retiens par peur de le gaspiller — et offre-le.",
    usagesMedicinaux: ['Malnutrition (feuilles)', 'Diabète (graines)', 'Hypertension (fleurs)', 'Infections (racines)', "Purification de l'eau (graines)"],
    partiesUtilisees: ['Feuilles', 'Graines', 'Fleurs', 'Écorce', 'Racines', 'Huile'],
    peuplesConcernes: ['Haoussa', 'Mandingue', 'Peul', 'Zarma'],
    habitat: "Zones tropicales et subtropicales, résistant à la sécheresse",
  },

  {
    id: 'karite',
    nom: 'Karité',
    nomAnglais: 'Shea Tree',
    nomScientifique: 'Vitellaria paradoxa',
    categorie: 'Arbres',
    element: 'Terre',
    description:
      "Le Karité est 'l'arbre des femmes' par excellence — vénéré dans tout le Sahel comme protecteur des mères et nourrisseur de générations entières. Son beurre sacré est à la fois aliment, cosmétique, remède et offrande spirituelle.",
    symboliqueAfricaine:
      "En pays Mossi (Burkina Faso) et Bambara (Mali), le Karité appartient aux femmes par droit coutumier immémoriel. Personne ne peut l'abattre sans leur accord. Les vieilles femmes initient les jeunes filles à sa récolte comme rite de passage. Il symbolise la puissance féminine ancrée dans la terre.",
    symboliqueSpirirtuelle:
      "Le Karité incarne l'archétype de la Mère Nourricière — celle qui donne sans jamais s'épuiser, dont la richesse est cachée dans son cœur (le beurre) et ne se révèle qu'après la transformation patiente. Il enseigne que les vraies richesses demandent du temps et du travail.",
    symbolique: "Symbole de maternité sacrée, de richesse intérieure et de transformation lente.",
    qualites: ['Générosité maternelle', 'Patience et persévérance', 'Profondeur cachée', 'Solidarité féminine', 'Ancrage dans le territoire'],
    defauts: ['Résistance à partager sa richesse', 'Difficulté à se laisser transformer', 'Lenteur à révéler sa valeur'],
    pouvoirs: ["Nourriture de l'âme", 'Protection maternelle', 'Richesse cachée', 'Transformation alchimique'],
    enseignements: [
      "Tes richesses les plus précieuses sont celles que tu portes en toi — non en surface",
      "La transformation vraie demande du travail, de la chaleur et de la patience",
      "Protège ce qui est sous ta garde avec la force tranquille d'une mère",
      "La solidarité avec les tiens est ta première richesse",
    ],
    citation: "Le beurre de karité ne vient pas à ceux qui ont peur du travail.",
    proverbes: [
      "Le beurre de karité ne vient pas à ceux qui ont peur du travail.",
      "L'arbre à karité ne se laisse pas couper par n'importe qui — il connaît ses maîtresses.",
      "Comme le beurre de karité fond pour soigner, la sagesse se donne pour guérir.",
    ],
    legendes: [
      "La légende mossi raconte que lors d'une grande famine, une femme qui n'avait plus rien à donner s'agenouilla sous un karité et pria. L'arbre lui offrit ses noix en abondance. Elle partagea avec tout le village. Depuis, les femmes mossi considèrent le karité comme leur ancêtre protecteur.",
    ],
    conseilsDeVie: [
      "Reconnais la richesse de ce qui est en toi — ne la cherche pas toujours ailleurs.",
      "Les processus lents produisent les résultats les plus profonds et durables.",
      "Prends soin de ton territoire — les dons que tu défends honorent ceux qui t'ont précédé.",
      "Transforme patiemment tes expériences brutes en sagesse utilisable.",
    ],
    niveauSpirituel: 4,
    regionOrigine: "Savanes du Burkina Faso, Mali, Ghana, Côte d'Ivoire",
    couleur: '#C4822D',
    couleurSecondaire: '#8B5A1A',
    enseignementDuJour:
      "Aujourd'hui, reconnais une richesse intérieure que tu n'as pas encore osé partager.",
    usagesMedicinaux: ['Cicatrisation (beurre)', 'Rhumatismes (écorce)', 'Fièvre (feuilles)', 'Soins de la peau et des cheveux (beurre)'],
    partiesUtilisees: ['Noix (beurre)', 'Feuilles', 'Écorce', 'Fleurs'],
    peuplesConcernes: ['Mossi', 'Bambara', 'Dioula', 'Akan', 'Peul'],
    habitat: "Savanes soudanaises et soudano-sahéliennes",
  },

  {
    id: 'acacia',
    nom: 'Acacia',
    nomAnglais: 'Gum Arabic Tree',
    nomScientifique: 'Acacia senegal',
    categorie: 'Arbres',
    element: 'Feu',
    description:
      "L'Acacia est le survivant des terres arides, capable de pousser là où rien d'autre ne peut. Sa gomme sacrée est un lien entre les peuples depuis des millénaires, et ses épines protègent un cœur d'une générosité rare.",
    symboliqueAfricaine:
      "L'Acacia du Sahel est l'arbre totem des peuples nomades Peul et Touareg. Sa gomme arabique fut la première monnaie d'échange entre l'Afrique subsaharienne et la Méditerranée. Les forgerons mandingues utilisent son bois dur pour les outils sacrés. Il incarne la résistance et le commerce équitable.",
    symboliqueSpirirtuelle:
      "L'Acacia symbolise l'initiation par le feu — la capacité à se transformer dans les conditions les plus hostiles pour produire quelque chose de précieux. Ses épines enseignent que la protection est nécessaire, mais que son cœur offre toujours quelque chose de doux.",
    symbolique: "Symbole de résilience ardente, de protection et de don précieux dans l'adversité.",
    qualites: ['Résilience extraordinaire', 'Protection naturelle', 'Créativité dans la contrainte', 'Endurance au feu', 'Générosité sous les épines'],
    defauts: ['Agressivité défensive', 'Fermeture aux autres', 'Dureté excessive', 'Difficulté à la tendresse'],
    pouvoirs: ["Survie dans l'hostile", 'Protection des vulnérables', 'Lien entre les mondes', 'Feu purificateur'],
    enseignements: [
      "Les meilleures protections permettent quand même l'accès à qui sait approcher avec respect",
      "Tes conditions difficiles sont ta force — pas ta faiblesse",
      "Ce que tu produis dans l'adversité a une valeur incomparable",
      "Résiste au feu — il t'illumine sans te détruire",
    ],
    citation: "L'acacia se fortifie dans la sécheresse là où d'autres se desséchent.",
    proverbes: [
      "L'acacia se fortifie dans la sécheresse là où d'autres se desséchent.",
      "Ses épines gardent ses fruits — la protection n'est pas un refus d'aimer.",
      "La gomme de l'acacia unit ce qui était séparé — elle a toujours servi de pont.",
    ],
    legendes: [
      "La légende peule raconte que lors de la grande sécheresse qui mit à genoux toute la savane, l'Acacia continua de nourrir les singes, les oiseaux et les nomades. Le dieu Gueno lui dit : 'Parce que tu as gardé en toi la générosité quand tout brûlait, je te fais l'arbre éternel du Sahel.'",
    ],
    conseilsDeVie: [
      "Ne confonds pas ta carapace avec ton identité — tu n'es pas tes défenses.",
      "Les conditions arides de ta vie ont forgé quelque chose que la facilité n'aurait jamais produit.",
      "Apprends à laisser entrer ceux qui t'approchent avec respect — même sous tes épines.",
      "Ton endurance est un don que tu peux offrir à ceux qui fléchissent.",
    ],
    niveauSpirituel: 3,
    regionOrigine: "Bande sahélienne, du Sénégal au Soudan",
    couleur: '#D4A017',
    couleurSecondaire: '#9B7210',
    enseignementDuJour:
      "Aujourd'hui, identifie la force que l'adversité t'a donnée — et remercie-la.",
    usagesMedicinaux: ['Toux et bronchite (gomme)', 'Plaies et brûlures (écorce)', 'Diarrhée (écorce)', 'Malaria (feuilles)'],
    partiesUtilisees: ['Gomme', 'Écorce', 'Feuilles', 'Graines', 'Racines'],
    peuplesConcernes: ['Peul', 'Touareg', 'Mandingue', 'Haoussa', 'Wolof'],
    habitat: "Zones sahéliennes et soudano-sahéliennes semi-arides",
  },

  {
    id: 'kinkeliba',
    nom: 'Kinkeliba',
    nomAnglais: 'Kinkeliba',
    nomScientifique: 'Combretum micranthum',
    categorie: 'Arbustes',
    element: 'Eau',
    description:
      "Le Kinkeliba est la plante de la clarté intérieure, son thé sacré bu à l'aube dans tout le Sahel pour purifier le corps et ouvrir l'esprit. Ses feuilles portent en elles la sagesse des eaux profondes qui nettoient sans détruire.",
    symboliqueAfricaine:
      "Au Sénégal et en Guinée, le thé de kinkeliba est rituel du matin — on ne commence pas une journée importante sans l'avoir bu. Les guérisseurs Sérère et Mandingue l'utilisent pour purifier les espaces et les personnes avant les cérémonies. Il est la frontière entre la nuit et le jour.",
    symboliqueSpirirtuelle:
      "Le Kinkeliba est la plante de la purification consciente — non la purification violente du feu, mais celle douce et profonde de l'eau qui coule. Il enseigne que la clarté vient de l'intérieur, que le nettoyage précède la création, et que le matin est sacré.",
    symbolique: "Symbole de purification, de clarté matinale et de recommencement conscient.",
    qualites: ['Clarté d\'esprit', 'Puissance purificatrice', 'Sensibilité subtile', 'Ritualisation de la vie', 'Capacité à recommencer'],
    defauts: ['Perfectionnisme puriste', "Difficulté à tolérer l'impur", 'Hypersensibilité aux pollutions énergétiques'],
    pouvoirs: ['Purification profonde', "Ouverture de l'esprit", 'Connexion au sacré quotidien', 'Clarté dans les décisions'],
    enseignements: [
      "Commence chaque journée par un rituel de clarté — ton esprit mérite ce soin",
      "La purification précède la création — nettoie avant de construire",
      "La subtilité est une force : elle perçoit ce que la brutalité rate",
      "Chaque matin est une nouvelle naissance — honore-la",
    ],
    citation: "L'eau pure du kinkeliba lave ce que l'œil ne voit pas.",
    proverbes: [
      "L'eau pure du kinkeliba lave ce que l'œil ne voit pas.",
      "Celui qui boit le kinkeliba à l'aube voit la journée avant qu'elle commence.",
      "Comme le kinkeliba purifie le sang, la vérité purifie les relations.",
    ],
    legendes: [
      "La tradition sérère raconte qu'une femme initiée reçut en rêve la recette du thé de kinkeliba d'un esprit de rivière. Elle l'enseigna à son village qui, depuis, commence chaque rassemblement sacré par cette purification. Le kinkeliba devint le gardien de la frontière entre le profane et le sacré.",
    ],
    conseilsDeVie: [
      "Crée des rituels matinaux qui te préparent — ils déterminent la qualité de ta journée.",
      "Purge régulièrement ce qui t'encombre : pensées, relations, habitudes toxiques.",
      "Ta sensibilité n'est pas une faiblesse : elle te permet de percevoir ce que d'autres manquent.",
      "Recommence avec la même fraîcheur qu'un matin après la pluie.",
    ],
    niveauSpirituel: 4,
    regionOrigine: "Savanes du Sénégal, Guinée, Mali, Burkina Faso",
    couleur: '#2E7D6B',
    couleurSecondaire: '#1A4D40',
    enseignementDuJour:
      "Aujourd'hui, crée un moment de clarté consciente avant d'entrer dans l'action.",
    usagesMedicinaux: ['Foie et vésicule biliaire (feuilles)', 'Diabète (feuilles)', 'Hypertension (décoction)', 'Paludisme (feuilles)'],
    partiesUtilisees: ['Feuilles', 'Tiges', 'Racines'],
    peuplesConcernes: ['Sérère', 'Mandingue', 'Wolof', 'Peul', 'Bambara'],
    habitat: "Savanes soudaniennes et forêts galeries",
  },

  {
    id: 'fromager',
    nom: 'Fromager',
    nomAnglais: 'Kapok Tree',
    nomScientifique: 'Ceiba pentandra',
    categorie: 'Arbres',
    element: 'Air',
    description:
      "Le Fromager est le colosse sacré des forêts et villages d'Afrique de l'Ouest — son tronc immense peut abriter des sanctuaires entiers, et ses racines aériennes créent des espaces où les esprits se rassemblent. Nul ne l'abat impunément.",
    symboliqueAfricaine:
      "Dans toute l'Afrique de l'Ouest, le Fromager (appelé 'Ficus' dans certaines traditions) est l'arbre des génies et des ancêtres. À Dakar, Abidjan, Cotonou — on tourne autour de lui pour demander des faveurs. Les Akan lui attachent des bandelettes et lui font des libations. Ses racines-contreforts sont les portes entre les mondes.",
    symboliqueSpirirtuelle:
      "Le Fromager est l'axis mundi africain — l'axe du monde qui relie la terre souterraine des ancêtres, le monde des vivants et les cieux des dieux. Ses branches s'élèvent vers le divin, ses racines descendent vers les morts, son tronc est le monde des vivants.",
    symbolique: "Symbole de l'axe du monde, de la communication entre les plans et du sanctuaire sacré.",
    qualites: ['Vision transcendante', 'Connexion aux multiples mondes', 'Espace de protection absolue', 'Présence majestueuse', 'Sagesse transpersonnelle'],
    defauts: ['Détachement excessif du quotidien', "Difficulté à s'ancrer dans le concret", 'Solitude du géant'],
    pouvoirs: ['Communication inter-dimensionnelle', 'Protection absolue', 'Vision de long terme', "Sanctuaire de l'âme"],
    enseignements: [
      "Ta grandeur ne t'exempte pas d'être utile à ceux qui sont sous toi",
      "Sois l'espace où les autres se sentent en sécurité",
      "Ta présence seule peut changer l'atmosphère d'un lieu",
      "Les grandes âmes voient plusieurs niveaux de réalité simultanément",
    ],
    citation: "Celui qui s'abrite sous le fromager n'est jamais seul.",
    proverbes: [
      "Celui qui s'abrite sous le fromager n'est jamais seul.",
      "Le fromager ne se compare pas aux arbustes autour de lui — il sait ce qu'il est.",
      "Quand le fromager tombe, c'est tout le quartier qui perd son ancre.",
    ],
    legendes: [
      "La légende yoruba raconte que le premier sanctuaire d'Oshun, déesse des rivières, fut érigé dans les racines d'un fromager au bord de l'Oshun River. Les prêtresses v initiaient les candidates dans cet espace sacré entre les racines — ni tout à fait en ce monde, ni dans l'autre.",
    ],
    conseilsDeVie: [
      "Développe ta capacité à être un espace sûr pour les autres — ta présence est un don.",
      "Ne te laisse pas intimider par ta propre grandeur — assume-la avec humilité.",
      "Ancre tes visions élevées dans des actions terrestres concrètes.",
      "Le sanctuaire que tu offres aux autres finit par te protéger en retour.",
    ],
    niveauSpirituel: 5,
    regionOrigine: "Forêts et villages d'Afrique de l'Ouest tropicale",
    couleur: '#5C7A3E',
    couleurSecondaire: '#3A5226',
    enseignementDuJour:
      "Aujourd'hui, crée un espace sacré — dans ta maison, ton cœur ou ta relation à quelqu'un.",
    usagesMedicinaux: ['Fièvre (écorce)', 'Hémorragies (feuilles)', 'Asthme (racines)', 'Douleurs articulaires (gomme résine)'],
    partiesUtilisees: ['Écorce', 'Feuilles', 'Racines', 'Coton (kapok)', 'Graines'],
    peuplesConcernes: ['Yoruba', 'Akan', 'Fon', 'Wolof', 'Mandingue', 'Dogon'],
    habitat: "Forêts tropicales humides, galeries forestières, zones péri-urbaines",
  },

  {
    id: 'neem',
    nom: 'Neem',
    nomAnglais: 'Neem Tree',
    nomScientifique: 'Azadirachta indica',
    categorie: 'Arbres',
    element: 'Feu',
    description:
      "Le Neem est le guerrier végétal de l'Afrique de l'Ouest — ses propriétés antiparasitaires, antibactériennes et antivirales en font le médicament naturel le plus complet du Sahel. Amer en bouche, mais d'une douceur absolue pour la santé.",
    symboliqueAfricaine:
      "Introduit en Afrique de l'Ouest depuis l'Inde, le Neem est rapidement devenu incontournable dans les traditions thérapeutiques haoussa, yoruba et mandingue. Les bâtons à mâcher de neem sont utilisés comme brosses à dents sacrées. Les mères baignent leurs enfants fiévreux dans ses feuilles bouillies. Il est 'le médicament du pauvre' — accessible à tous.",
    symboliqueSpirirtuelle:
      "Le Neem symbolise la vérité qui fait mal mais guérit. Son amertume est le chemin vers la santé — il enseigne qu'on ne peut pas guérir sans passer par l'inconfort de la vérité. Il est la plante de l'honnêteté radicale et de la guérison couragea.",
    symbolique: "Symbole de vérité guérissante, de rigueur bienveillante et de protection intégrale.",
    qualites: ['Honnêteté radicale', 'Protection totale', 'Rigueur bienveillante', 'Accessibilité universelle', 'Efficacité sans prétention'],
    defauts: ['Amertume blessante', 'Trop de rigueur qui décourage', 'Tendance à tout vouloir purifier'],
    pouvoirs: ['Guérison par la vérité', 'Protection antiparasitaire', 'Purification environnementale', 'Médecine du peuple'],
    enseignements: [
      "La vérité amère guérit mieux que le mensonge doux",
      "La meilleure protection est celle qui s'adapte à l'ennemi",
      "Rends-toi accessible — la sagesse est pour tous, pas pour quelques-uns",
      "L'efficacité n'a pas besoin de spectacle",
    ],
    citation: "L'amer qui guérit vaut mille fois le doux qui empoisonne.",
    proverbes: [
      "L'amer qui guérit vaut mille fois le doux qui empoisonne.",
      "Le neem ne demande pas à être aimé — il demande à être utile.",
      "Celui qui accepte l'amertume du neem gagne la douceur de la santé.",
    ],
    legendes: [
      "Les guérisseurs haoussa racontent que le Neem fut offert aux hommes par un esprit guerrier qui voulait les protéger de tous les maux. L'esprit dit : 'Je vous donne l'amertume parce que les parasites fuient la vérité. Buvez-la sans peur et vous vivrez libres.'",
    ],
    conseilsDeVie: [
      "Dis les vérités difficiles avec amour — c'est une forme de guérison, pas d'agression.",
      "Protège ton espace de vie contre ce qui le parasite — énergies, pensées, relations.",
      "L'efficacité dans la discrétion est plus puissante que le bruit dans l'inefficacité.",
      "Rends ton savoir accessible — la sagesse qui ne circule pas est une sagesse morte.",
    ],
    niveauSpirituel: 3,
    regionOrigine: "Zones tropicales d'Afrique de l'Ouest (introduit d'Asie du Sud)",
    couleur: '#4A7A3E',
    couleurSecondaire: '#2D5226',
    enseignementDuJour:
      "Aujourd'hui, dis une vérité que tu as retenue par peur de déplaire — avec douceur mais sans détour.",
    usagesMedicinaux: ['Paludisme (feuilles)', 'Infections dentaires (bâtons)', 'Poux et parasites cutanés (huile)', 'Fièvre (décoction de feuilles)', 'Champignons (huile)'],
    partiesUtilisees: ['Feuilles', 'Écorce', 'Graines (huile)', 'Racines', 'Fleurs'],
    peuplesConcernes: ['Haoussa', 'Yoruba', 'Mandingue', 'Mossi', 'Peul'],
    habitat: "Zones tropicales et semi-arides, très résistant à la chaleur",
  },

  {
    id: 'bissap',
    nom: 'Bissap',
    nomAnglais: 'Roselle Hibiscus',
    nomScientifique: 'Hibiscus sabdariffa',
    categorie: 'Herbes',
    element: 'Eau',
    description:
      "Le Bissap est la fleur de la joie et de la célébration en Afrique de l'Ouest — son rouge intense colore les fêtes, les mariages, les retrouvailles. Rafraîchissant et thérapeutique, il unit la beauté et la guérison en une même fleur.",
    symboliqueAfricaine:
      "Au Sénégal, la 'jus de bissap' est boisson d'hospitalité par excellence — l'offrir à un visiteur est un acte sacré de bienvenue. Dans les cérémonies wolof et mandingue, sa couleur rouge symbolise la vitalité, le sang de la vie et la fertilité. On l'offre aux mariées pour bénir leur union.",
    symboliqueSpirirtuelle:
      "Le Bissap incarne la joie comme pratique spirituelle — non la joie superficielle, mais celle ancrée dans la beauté du corps, le partage et la célébration de la vie. Il enseigne que le sacré n'est pas austère, et que la fête est une forme de prière.",
    symbolique: "Symbole de vitalité, d'hospitalité sacrée et de joie comme pratique spirituelle.",
    qualites: ['Joie communicative', "Générosité de l'accueil", 'Beauté naturelle', 'Vitalité rayonnante', 'Capacité de célébration'],
    defauts: ['Légèreté excessive', 'Difficulté à tenir dans la durée', 'Superficialité possible'],
    pouvoirs: ['Hospitalité sacrée', 'Vitalité régénératrice', 'Beauté guérissante', 'Fête comme rituel'],
    enseignements: [
      "La joie est une discipline spirituelle — cultive-la comme tu cultiverais la sagesse",
      "L'hospitalité est le premier acte sacré envers l'autre",
      "La beauté n'est pas vaine — elle nourrit l'âme",
      "Célèbre — chaque moment ordinaire mérite d'être honoré",
    ],
    citation: "La fleur rouge ne s'excuse pas de sa couleur — elle la donne.",
    proverbes: [
      "La fleur rouge ne s'excuse pas de sa couleur — elle la donne.",
      "Là où le bissap est offert, les cœurs s'ouvrent.",
      "La joie du bissap ne dure qu'un verre — mais elle laisse le goût de la vie.",
    ],
    legendes: [
      "La légende wolof raconte qu'une femme dont le mari revenait de longue absence fit pousser en une nuit un champ entier de bissap rouge pour le célébrer. Son amour avait parlé à la terre. Depuis, offrir du bissap signifie : 'Ta venue me rend rouge de bonheur.'",
    ],
    conseilsDeVie: [
      "Célèbre plus — les petites victoires, les présences chères, les matins qui recommencent.",
      "Accueille chaque personne comme si elle t'apportait quelque chose de précieux — souvent elle le fait.",
      "Ta joie est contagieuse — ne la cache pas par modestie ou par peur.",
      "Prends soin de ta vitalité physique : elle est le vase de ta joie spirituelle.",
    ],
    niveauSpirituel: 3,
    regionOrigine: "Zones tropicales du Sénégal, Mali, Guinée, Niger",
    couleur: '#B03060',
    couleurSecondaire: '#7A1A3A',
    enseignementDuJour:
      "Aujourd'hui, offre ta joie à quelqu'un sans raison particulière — juste parce que tu peux.",
    usagesMedicinaux: ['Hypertension (calices)', 'Cholestérol (infusion)', 'Anémie (fer)', 'Infections urinaires (calices)', 'Digestion (calices)'],
    partiesUtilisees: ['Calices (fleurs)', 'Feuilles', 'Graines', 'Tiges'],
    peuplesConcernes: ['Wolof', 'Mandingue', 'Peul', 'Mossi', 'Haoussa'],
    habitat: "Zones tropicales humides, jardins, champs cultivés",
  },

  {
    id: 'iboga',
    nom: 'Iboga',
    nomAnglais: 'Iboga',
    nomScientifique: 'Tabernanthe iboga',
    categorie: 'Arbustes',
    element: 'Terre',
    description:
      "L'Iboga est la plante de l'initiation ultime — son usage dans le Bwiti du Gabon et ses extensions vers l'Afrique de l'Ouest fait de lui l'un des maîtres végétaux les plus puissants du continent. Il confronte l'initié à lui-même sans complaisance.",
    symboliqueAfricaine:
      "Dans la tradition Bwiti (Gabon, Cameroun, Guinée équatoriale), l'Iboga est la plante sacrée de l'initiation. Absorber sa racine râpée lors de la cérémonie du Bwiti est une mort et une renaissance symboliques. Les Fang le considèrent comme le lien direct avec les ancêtres et les vérités cachées de l'existence.",
    symboliqueSpirirtuelle:
      "L'Iboga est la plante du miroir absolu — elle montre à l'initié qui il est réellement, sans filtre ni pitié, et lui offre la possibilité de se transformer de l'intérieur. C'est la mort de l'ego et la naissance de l'être véritable.",
    symbolique: "Symbole d'initiation absolue, de mort symbolique et de renaissance consciente.",
    qualites: ['Courage de la vérité sur soi', 'Profondeur transformatrice', 'Connexion aux ancêtres', 'Endurance initiatique', "Vision de l'essentiel"],
    defauts: ['Intensité pouvant être destructrice', 'Difficulté à fonctionner dans le quotidien', 'Isolement des non-initiés'],
    pouvoirs: ['Initiation profonde', 'Confrontation avec soi-même', 'Connexion ancestrale directe', "Guérison de l'âme blessée"],
    enseignements: [
      "La vérité sur soi-même est le plus grand voyage que tu puisses entreprendre",
      "Mourir à ce que tu étais est la condition de devenir ce que tu es",
      "Les ancêtres parlent à celui qui accepte d'écouter dans le silence et l'obscurité",
      "Le courage véritable est de regarder en face ce que l'on préfère fuir",
    ],
    citation: "Celui qui n'est pas passé par la nuit ne connaît pas la valeur du matin.",
    proverbes: [
      "Celui qui n'est pas passé par la nuit ne connaît pas la valeur du matin.",
      "L'iboga ne ment pas — il est le seul miroir qui ne peut pas mentir.",
      "Qui prend l'iboga sans y être prêt rencontre ses démons. Qui y est prêt rencontre ses ancêtres.",
    ],
    legendes: [
      "La légende Fang raconte qu'un chasseur, perdu dans la forêt primaire, trouva un porc-épic qui mangeait des racines d'iboga. L'animal, en transe, se mit à danser et à chanter dans une langue que l'homme comprit : c'était la langue des ancêtres. Il ramena les racines au village — c'est ainsi que le Bwiti naquit.",
    ],
    conseilsDeVie: [
      "Affronte ce que tu évites — c'est là que réside ta transformation.",
      "L'initiation n'a pas besoin d'être spectaculaire pour être vraie : chaque crise traversée peut être une renaissance.",
      "Prépare-toi avant les grandes épreuves — le courage sans préparation est de la témérité.",
      "Ce que tu as traversé de plus difficile est ton trésor le plus précieux.",
    ],
    niveauSpirituel: 5,
    regionOrigine: "Forêts équatoriales du Gabon, Cameroun, Guinée équatoriale",
    couleur: '#4A2D7A',
    couleurSecondaire: '#2D1A4D',
    enseignementDuJour:
      "Aujourd'hui, affronte une vérité sur toi-même que tu as évitée. La transformation t'attend là.",
    usagesMedicinaux: ['Initiation et guérison psycho-spirituelle', 'Fatigue intense (doses faibles)', 'Dépendances (usage encadré)', 'Fièvre (racine diluée)'],
    partiesUtilisees: ['Racine (râpée)', 'Écorce de racine'],
    peuplesConcernes: ['Fang', 'Bwiti', 'Mitsogho', 'Pygmées Aka'],
    habitat: "Sous-bois des forêts tropicales humides d'Afrique centrale",
  },

  {
    id: 'tamarinier',
    nom: 'Tamarinier',
    nomAnglais: 'Tamarind Tree',
    nomScientifique: 'Tamarindus indica',
    categorie: 'Arbres',
    element: 'Air',
    description:
      "Le Tamarinier est l'arbre de la mémoire douce-amère — son fruit est acide et sucré à la fois, comme le souvenir des choses aimées et perdues. Présent dans tous les villages d'Afrique de l'Ouest, il marque les lieux, garde les histoires et nourrit les générations.",
    symboliqueAfricaine:
      "Au Mali, en Guinée et au Sénégal, le Tamarinier est l'arbre des palabres — les anciens se réunissent à son ombre pour trancher les litiges. En pays Dogon, ses gousses sèches servent de hochets dans les cérémonies rituelles. Les griots bambaras chantent 'l'ombre du tamarinier' comme métaphore du foyer ancestral.",
    symboliqueSpirirtuelle:
      "Le Tamarinier symbolise la sagesse qui accepte la complexité de l'existence — la douceur et l'amertume ensemble, le passé et le présent entrelacés, la justice et la clémence coexistant. Il est l'arbre de la maturité spirituelle.",
    symbolique: "Symbole de maturité sagace, d'équilibre des contraires et de mémoire vivante.",
    qualites: ['Maturité émotionnelle', 'Acceptation de la complexité', 'Sens de la justice', 'Mémoire des lieux', 'Équilibre des contraires'],
    defauts: ['Nostalgie paralysante', 'Difficulté à lâcher le passé', 'Lenteur à se renouveler'],
    pouvoirs: ['Sagesse de la maturité', 'Justice équilibrée', 'Mémoire ancestrale douce', 'Réconciliation des opposés'],
    enseignements: [
      "La vie est acide et douce à la fois — apprends à aimer les deux",
      "La justice vraie tient compte de la complexité de chaque situation",
      "Les lieux ont une mémoire — respecte les espaces sacrés",
      "La maturité n'est pas la rigidité : c'est la capacité à tenir les contraires",
    ],
    citation: "Le tamarinier a gardé en lui le goût de tous les étés qui l'ont traversé.",
    proverbes: [
      "Le tamarinier a gardé en lui le goût de tous les étés qui l'ont traversé.",
      "L'ombre du tamarinier est le meilleur tribunal — il a vu trop de mensonges pour en tolérer.",
      "Le tamarin est acide quand on le cueille trop tôt — il faut attendre la maturité.",
    ],
    legendes: [
      "La légende bambara raconte qu'un tamarinier centenaire fut le témoin d'un serment entre deux clans ennemis. L'arbre, dit-on, incorpora le serment dans sa sève. Depuis, tout tamarin ancien est consulté par les anciens comme gardien de parole — celui qui rompt un serment fait sous un tamarin voit son existence devenir aussi amère que le fruit vert.",
    ],
    conseilsDeVie: [
      "Accepte la complexité de ta vie — le doux et l'amer coexistent et s'enrichissent mutuellement.",
      "Garde la mémoire sans te laisser emprisonner par elle.",
      "Sois un espace de justice équitable — ni trop sévère, ni trop clément.",
      "Laisse le temps agir : certaines sagesses ne mûrissent qu'avec les années.",
    ],
    niveauSpirituel: 4,
    regionOrigine: "Savanes d'Afrique de l'Ouest, du Sénégal au Tchad",
    couleur: '#7A5C3E',
    couleurSecondaire: '#4D3826',
    enseignementDuJour:
      "Aujourd'hui, trouve la douceur dans quelque chose d'amer de ta vie — et laisse les deux coexister.",
    usagesMedicinaux: ['Constipation (pulpe)', 'Fièvre (feuilles)', 'Blessures et brûlures (feuilles écrasées)', 'Malaria (écorce)', 'Problèmes digestifs (pulpe)'],
    partiesUtilisees: ['Pulpe du fruit', 'Feuilles', 'Écorce', 'Graines', 'Fleurs'],
    peuplesConcernes: ['Bambara', 'Dogon', 'Mandingue', 'Wolof', 'Mossi', 'Peul'],
    habitat: "Savanes tropicales, galeries forestières, zones péri-urbaines",
  },

];

export const PLANT_CATEGORIES: PlantCategorie[] = [
  'Arbres',
  'Arbustes',
  'Herbes',
  'Lianes',
  'Racines',
  'Bois',
];

export const CATEGORIES = PLANT_CATEGORIES;

export function getPlanteById(id: string): Plante | undefined {
  return PLANTS.find((p) => p.id === id);
}

export function getPlantesByCategorie(categorie: PlantCategorie): Plante[] {
  return PLANTS.filter((p) => p.categorie === categorie);
}

export { getPlanteById as getAnimalById };
