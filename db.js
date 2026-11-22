// ============================================================
//  EXTRA DATABASE for the Learning Studio
//  To add content, copy any line, change the text, and save.
//  Words:     [word, pronunciation in Arabic letters, Arabic meaning, emoji, topic]
//             Topics: animal, food, nature, home, school, transport, body
//             (For the Arabic target, the word has no pronunciation "" and the meaning is in French.)
//  Sentences: [sentence in the target language, Arabic meaning]
//  Stories:   { start, ends: [3 endings] }
//  Manners:   { q, c: [choices], a: index of the correct choice }
//  Prayer quiz: same format as manners
// ============================================================
const DB = {
  words: {
    en: [
      ["horse","هورس","حصان","🐴","animal"], ["cow","كاو","بقرة","🐮","animal"],
      ["bird","بيرد","طائر","🐦","animal"], ["fish","فيش","سمكة","🐟","animal"],
      ["bread","برد","خبز","🍞","food"], ["milk","ميلك","حليب","🥛","food"],
      ["orange","أورانج","برتقالة","🍊","food"], ["rice","رايس","أرز","🍚","food"],
      ["tree","تري","شجرة","🌳","nature"], ["moon","مون","قمر","🌙","nature"],
      ["rain","رين","مطر","🌧️","nature"], ["mountain","ماونتن","جبل","⛰️","nature"],
      ["door","دور","باب","🚪","home"], ["bed","بد","سرير","🛏️","home"],
      ["book","بوك","كتاب","📚","school"], ["pencil","بنسل","قلم رصاص","✏️","school"],
      ["car","كار","سيارة","🚗","transport"], ["bus","باص","حافلة","🚌","transport"],
      ["hand","هاند","يد","✋","body"], ["eye","آي","عين","👁️","body"]
    ],
    fr: [
      ["cheval","شوفال","حصان","🐴","animal"], ["vache","فاش","بقرة","🐮","animal"],
      ["oiseau","وازو","طائر","🐦","animal"], ["poisson","بواسون","سمكة","🐟","animal"],
      ["pain","بان","خبز","🍞","food"], ["lait","لي","حليب","🥛","food"],
      ["orange","أورانج","برتقالة","🍊","food"], ["riz","ري","أرز","🍚","food"],
      ["arbre","أربر","شجرة","🌳","nature"], ["lune","لون","قمر","🌙","nature"],
      ["pluie","بلوي","مطر","🌧️","nature"], ["montagne","مونتان","جبل","⛰️","nature"],
      ["porte","بورت","باب","🚪","home"], ["lit","لي","سرير","🛏️","home"],
      ["livre","ليفر","كتاب","📚","school"], ["crayon","كريون","قلم رصاص","✏️","school"],
      ["voiture","فوتير","سيارة","🚗","transport"], ["bus","بوس","حافلة","🚌","transport"],
      ["main","مان","يد","✋","body"], ["œil","أوي","عين","👁️","body"]
    ],
    es: [
      ["caballo","كاباييو","حصان","🐴","animal"], ["vaca","باكا","بقرة","🐮","animal"],
      ["pájaro","باخارو","طائر","🐦","animal"], ["pez","بيس","سمكة","🐟","animal"],
      ["pan","بان","خبز","🍞","food"], ["leche","ليتشي","حليب","🥛","food"],
      ["naranja","نارانخا","برتقالة","🍊","food"], ["arroz","آروس","أرز","🍚","food"],
      ["árbol","أربول","شجرة","🌳","nature"], ["luna","لونا","قمر","🌙","nature"],
      ["lluvia","يوفيا","مطر","🌧️","nature"], ["montaña","مونتانيا","جبل","⛰️","nature"],
      ["puerta","بويرتا","باب","🚪","home"], ["cama","كاما","سرير","🛏️","home"],
      ["libro","ليبرو","كتاب","📚","school"], ["lápiz","لابيس","قلم رصاص","✏️","school"],
      ["coche","كوتشي","سيارة","🚗","transport"], ["autobús","آوتوبوس","حافلة","🚌","transport"],
      ["mano","مانو","يد","✋","body"], ["ojo","أوخو","عين","👁️","body"]
    ],
    de: [
      ["Pferd","فيرد","حصان","🐴","animal"], ["Kuh","كو","بقرة","🐮","animal"],
      ["Vogel","فوغل","طائر","🐦","animal"], ["Fisch","فيش","سمكة","🐟","animal"],
      ["Brot","بروت","خبز","🍞","food"], ["Milch","ميلش","حليب","🥛","food"],
      ["Orange","أورانجه","برتقالة","🍊","food"], ["Reis","رايس","أرز","🍚","food"],
      ["Baum","باوم","شجرة","🌳","nature"], ["Mond","مونت","قمر","🌙","nature"],
      ["Regen","ريغن","مطر","🌧️","nature"], ["Berg","بيرغ","جبل","⛰️","nature"],
      ["Tür","تور","باب","🚪","home"], ["Bett","بيت","سرير","🛏️","home"],
      ["Buch","بوخ","كتاب","📚","school"], ["Bleistift","بلايشتيفت","قلم رصاص","✏️","school"],
      ["Auto","آوتو","سيارة","🚗","transport"], ["Bus","بوس","حافلة","🚌","transport"],
      ["Hand","هاند","يد","✋","body"], ["Auge","آوغه","عين","👁️","body"]
    ],
    tr: [
      ["at","آت","حصان","🐴","animal"], ["inek","إينيك","بقرة","🐮","animal"],
      ["kuş","كوش","طائر","🐦","animal"], ["balık","باليك","سمكة","🐟","animal"],
      ["ekmek","إكمك","خبز","🍞","food"], ["süt","سوت","حليب","🥛","food"],
      ["portakal","بورتاكال","برتقالة","🍊","food"], ["pirinç","بيرينتش","أرز","🍚","food"],
      ["ağaç","آغاتش","شجرة","🌳","nature"], ["ay","آي","قمر","🌙","nature"],
      ["yağmur","ياغمور","مطر","🌧️","nature"], ["dağ","داغ","جبل","⛰️","nature"],
      ["kapı","كابي","باب","🚪","home"], ["yatak","ياتاك","سرير","🛏️","home"],
      ["kitap","كيتاب","كتاب","📚","school"], ["kalem","كالم","قلم","✏️","school"],
      ["araba","عربة","سيارة","🚗","transport"], ["otobüs","أوتوبوس","حافلة","🚌","transport"],
      ["el","إل","يد","✋","body"], ["göz","غوز","عين","👁️","body"]
    ],
    ru: [
      ["лошадь","لاشاد","حصان","🐴","animal"], ["корова","كوروفا","بقرة","🐮","animal"],
      ["птица","بتيتسا","طائر","🐦","animal"], ["рыба","ريبا","سمكة","🐟","animal"],
      ["хлеб","خليب","خبز","🍞","food"], ["молоко","مالاكو","حليب","🥛","food"],
      ["апельсин","أبيلسين","برتقالة","🍊","food"], ["рис","ريس","أرز","🍚","food"],
      ["дерево","دييريفا","شجرة","🌳","nature"], ["луна","لونا","قمر","🌙","nature"],
      ["дождь","دوجد","مطر","🌧️","nature"], ["гора","غورا","جبل","⛰️","nature"],
      ["дверь","دفيير","باب","🚪","home"], ["кровать","كروفات","سرير","🛏️","home"],
      ["книга","كنيغا","كتاب","📚","school"], ["карандаш","كارانداش","قلم رصاص","✏️","school"],
      ["машина","ماشينا","سيارة","🚗","transport"], ["автобус","أفتوبوس","حافلة","🚌","transport"],
      ["рука","روكا","يد","✋","body"], ["глаз","غلاس","عين","👁️","body"]
    ],
    ar: [
      ["حصان","","cheval","🐴","animal"], ["بقرة","","vache","🐮","animal"],
      ["طائر","","oiseau","🐦","animal"], ["سمكة","","poisson","🐟","animal"],
      ["خبز","","pain","🍞","food"], ["حليب","","lait","🥛","food"],
      ["برتقالة","","orange","🍊","food"], ["أرز","","riz","🍚","food"],
      ["شجرة","","arbre","🌳","nature"], ["قمر","","lune","🌙","nature"],
      ["مطر","","pluie","🌧️","nature"], ["جبل","","montagne","⛰️","nature"],
      ["باب","","porte","🚪","home"], ["سرير","","lit","🛏️","home"],
      ["كتاب","","livre","📚","school"], ["قلم","","stylo","✏️","school"],
      ["سيارة","","voiture","🚗","transport"], ["حافلة","","bus","🚌","transport"],
      ["يد","","main","✋","body"], ["عين","","œil","👁️","body"]
    ],
    it: [
      ["cavallo","كافالو","حصان","🐴","animal"], ["mucca","موكا","بقرة","🐮","animal"],
      ["uccello","أوتشيللو","طائر","🐦","animal"], ["pesce","بيشيه","سمكة","🐟","animal"],
      ["pane","بانيه","خبز","🍞","food"], ["latte","لاتّيه","حليب","🥛","food"],
      ["arancia","أرانتشا","برتقالة","🍊","food"], ["riso","ريزو","أرز","🍚","food"],
      ["albero","ألبيرو","شجرة","🌳","nature"], ["luna","لونا","قمر","🌙","nature"],
      ["pioggia","بيوجا","مطر","🌧️","nature"], ["montagna","مونتانيا","جبل","⛰️","nature"],
      ["porta","بورتا","باب","🚪","home"], ["letto","لتّو","سرير","🛏️","home"],
      ["libro","ليبرو","كتاب","📚","school"], ["matita","ماتيتا","قلم رصاص","✏️","school"],
      ["macchina","ماكينا","سيارة","🚗","transport"], ["autobus","آوتوبوس","حافلة","🚌","transport"],
      ["mano","مانو","يد","✋","body"], ["occhio","أوكيو","عين","👁️","body"]
    ]
  },

  sentences: {
    en: [["She has a red bag","عندها حقيبة حمراء"],["We go to school","نذهب إلى المدرسة"],["The bird can fly","الطائر يستطيع الطيران"],["I drink water","أشرب الماء"]],
    fr: [["Elle a un sac rouge","عندها حقيبة حمراء"],["Nous allons à l'école","نذهب إلى المدرسة"],["L'oiseau peut voler","الطائر يستطيع الطيران"],["Je bois de l'eau","أشرب الماء"]],
    es: [["Ella tiene una mochila roja","عندها حقيبة حمراء"],["Vamos a la escuela","نذهب إلى المدرسة"],["El pájaro puede volar","الطائر يستطيع الطيران"],["Bebo agua","أشرب الماء"]],
    de: [["Sie hat eine rote Tasche","عندها حقيبة حمراء"],["Wir gehen zur Schule","نذهب إلى المدرسة"],["Der Vogel kann fliegen","الطائر يستطيع الطيران"],["Ich trinke Wasser","أشرب الماء"]],
    tr: [["Onun kırmızı bir çantası var","عندها حقيبة حمراء"],["Okula gidiyoruz","نذهب إلى المدرسة"],["Kuş uçabilir","الطائر يستطيع الطيران"],["Su içiyorum","أشرب الماء"]],
    ru: [["У неё красная сумка","عندها حقيبة حمراء"],["Мы идём в школу","نذهب إلى المدرسة"],["Птица умеет летать","الطائر يستطيع الطيران"],["Я пью воду","أشرب الماء"]],
    ar: [["هذه حقيبة حمراء","C'est un sac rouge"],["نذهب إلى المدرسة","Nous allons à l'école"],["الطائر يطير","L'oiseau vole"],["أشرب الماء","Je bois de l'eau"]],
    it: [["Lei ha una borsa rossa","عندها حقيبة حمراء"],["Andiamo a scuola","نذهب إلى المدرسة"],["L'uccello può volare","الطائر يستطيع الطيران"],["Bevo acqua","أشرب الماء"]]
  },

  stories: [
    { start: "في الحديقة وجدتُ بذرة صغيرة تتكلم...",
      ends: ["قالت: ازرعني وسأكبر كشجرة عملاقة 🌱", "ابتسمت وقالت: شكراً لأنك لاحظتني 🌼", "ضحكت ثم قفزت إلى جيبي لتصبح صديقتي 🐞"] },
    { start: "ذات مساء، أضاء القمر طريقاً لم أره من قبل...",
      ends: ["مشيت فيه حتى وجدت مدينة من الحلوى 🍬", "تبعته حتى وصلت إلى نجمة تغني 🎵", "وجدت في نهايته باباً مكتوباً عليه: مرحباً يا مغامر 🚪"] },
    { start: "اشترى أبي سيارة جديدة، لكنها بدأت تتحدث معي...",
      ends: ["قالت: هيا بنا نسافر إلى الغيوم ☁️", "قالت: دعنا نساعد الحيوانات في الغابة 🦁", "قالت: سنتعلم معاً كيف نرسم خريطة الكون 🌌"] },
    { start: "في المدرسة، وجدت كتاباً يفتح نفسه بنفسه...",
      ends: ["خرجت منه شخصيات من كل الكتب 📖", "ظهرت منه خريطة إلى مكتبة سحرية 🏛️", "كان يحكي قصة طفل يشبهني تماماً ✨"] }
  ],

  manners: [
    { q: "ماذا نقول عند الدخول إلى البيت؟", c: ["السلام عليكم", "لا شيء"], a: 0 },
    { q: "كيف نتصرف مع الصغار؟", c: ["نرحم ونرشد", "نسخر منهم"], a: 0 },
    { q: "عند الأكل، ماذا نفعل؟", c: ["نقول بسم الله ونأكل بيميننا", "نأكل بشراهة"], a: 0 },
    { q: "هل نكذب على أصدقائنا؟", c: ["لا، الصدق أفضل", "نعم دائماً"], a: 0 },
    { q: "ماذا نفعل إذا رأينا زميلاً حزيناً؟", c: ["نواسيه ونساعده", "نضحك عليه"], a: 0 },
    { q: "كيف نحافظ على نظافة الأسنان؟", c: ["نفرشها كل يوم", "لا نفرشها أبداً"], a: 0 },
    { q: "متى نقول: جزاك الله خيراً؟", c: ["عندما يساعدنا أحد", "عندما نغضب"], a: 0 },
    { q: "ماذا نفعل بالماء؟", c: ["نحافظ عليه ولا نهدره", "نتركه يسيل كثيراً"], a: 0 }
  ],

  // Dream professions: names in each language, what the job does (Arabic), and its tools
  professions: [
    { emoji: "👨‍⚕️", what: "يفحص المرضى ويعالجهم", tools: ["🩺","💊"], names: { en: "Doctor", fr: "Médecin", es: "Médico", de: "Arzt", tr: "Doktor", ru: "Врач", ar: "طبيب", it: "Medico" } },
    { emoji: "🚗", what: "يقود السيارة بأمان ويوصل الناس", tools: ["🚗","🛣️"], names: { en: "Driver", fr: "Chauffeur", es: "Conductor", de: "Fahrer", tr: "Şoför", ru: "Водитель", ar: "سائق", it: "Autista" } },
    { emoji: "🧑‍⚕️", what: "يعتني بالمرضى ويعطيهم الدواء", tools: ["💉","🩹"], names: { en: "Nurse", fr: "Infirmier", es: "Enfermera", de: "Krankenpfleger", tr: "Hemşire", ru: "Медсестра", ar: "ممرض", it: "Infermiere" } },
    { emoji: "🦷", what: "يعتني بأسنان الناس ويعالجها", tools: ["🦷","🪥"], names: { en: "Dentist", fr: "Dentiste", es: "Dentista", de: "Zahnarzt", tr: "Diş hekimi", ru: "Стоматолог", ar: "طبيب أسنان", it: "Dentista" } },
    { emoji: "👩‍🏫", what: "يعلّم الطلاب ويساعدهم على التعلم", tools: ["📚","✏️"], names: { en: "Teacher", fr: "Professeur", es: "Maestra", de: "Lehrer", tr: "Öğretmen", ru: "Учитель", ar: "معلم", it: "Insegnante" } },
    { emoji: "⚽", what: "يلعب كرة القدم ويسجل الأهداف", tools: ["⚽","🥅"], names: { en: "Football player", fr: "Joueur de football", es: "Futbolista", de: "Fußballspieler", tr: "Futbolcu", ru: "Футболист", ar: "لاعب كرة القدم", it: "Calciatore" } },
    { emoji: "🏀", what: "يلعب كرة السلة ويسجل في السلة", tools: ["🏀","🏆"], names: { en: "Basketball player", fr: "Joueur de basket", es: "Jugador de baloncesto", de: "Basketballspieler", tr: "Basketbolcu", ru: "Баскетболист", ar: "لاعب كرة السلة", it: "Cestista" } },
    { emoji: "👷", what: "يصمم المباني والجسور والمشاريع", tools: ["📐","🛠️"], names: { en: "Engineer", fr: "Ingénieur", es: "Ingeniero", de: "Ingenieur", tr: "Mühendis", ru: "Инженер", ar: "مهندس", it: "Ingegnere" } },
    { emoji: "⚡", what: "يصمم الدوائر الكهربائية ويصلحها", tools: ["⚡","🔌"], names: { en: "Electrical engineer", fr: "Ingénieur électricien", es: "Ingeniero eléctrico", de: "Elektroingenieur", tr: "Elektrik mühendisi", ru: "Инженер-электрик", ar: "مهندس كهرباء", it: "Ingegnere elettrico" } },
    { emoji: "🔧", what: "يصمم الآلات والمحركات ويصلحها", tools: ["🔧","⚙️"], names: { en: "Mechanical engineer", fr: "Ingénieur mécanicien", es: "Ingeniero mecánico", de: "Maschinenbauingenieur", tr: "Makine mühendisi", ru: "Инженер-механик", ar: "مهندس ميكانيكي", it: "Ingegnere meccanico" } },
    { emoji: "✈️", what: "يقود الطائرة ويسافر بالركاب", tools: ["✈️","🧭"], names: { en: "Pilot", fr: "Pilote", es: "Piloto", de: "Pilot", tr: "Pilot", ru: "Пилот", ar: "طيار", it: "Pilota" } },
    { emoji: "👨‍🍳", what: "يطبخ ويصنع أطيب الوجبات", tools: ["🍳","🥄"], names: { en: "Chef", fr: "Cuisinier", es: "Cocinero", de: "Koch", tr: "Aşçı", ru: "Повар", ar: "طاهٍ", it: "Cuoco" } },
    { emoji: "🧑‍🌾", what: "يزرع الأرض ويعتني بالحيوانات", tools: ["🌾","🚜"], names: { en: "Farmer", fr: "Agriculteur", es: "Agricultor", de: "Bauer", tr: "Çiftçi", ru: "Фермер", ar: "فلاح", it: "Contadino" } },
    { emoji: "👮", what: "يحافظ على الأمن ويساعد الناس", tools: ["🚓","👮"], names: { en: "Police officer", fr: "Policier", es: "Policía", de: "Polizist", tr: "Polis", ru: "Полицейский", ar: "شرطي", it: "Poliziotto" } },
    { emoji: "🧑‍🚒", what: "يطفئ الحرائق وينقذ الناس", tools: ["🚒","🧯"], names: { en: "Firefighter", fr: "Pompier", es: "Bombero", de: "Feuerwehrmann", tr: "İtfaiyeci", ru: "Пожарный", ar: "رجل إطفاء", it: "Pompiere" } },
    { emoji: "🧑‍🔬", what: "يجري التجارب ويكتشف أشياء جديدة", tools: ["🔬","🧪"], names: { en: "Scientist", fr: "Scientifique", es: "Científico", de: "Wissenschaftler", tr: "Bilim insanı", ru: "Учёный", ar: "عالم", it: "Scienziato" } }
  ],

  // Family members: emoji, Arabic meaning, names in each language
  family: [
    { emoji: "👨", ar: "أب", names: { en: "Father", fr: "Père", es: "Padre", de: "Vater", tr: "Baba", ru: "Отец", ar: "أب", it: "Padre" } },
    { emoji: "👩", ar: "أم", names: { en: "Mother", fr: "Mère", es: "Madre", de: "Mutter", tr: "Anne", ru: "Мать", ar: "أم", it: "Madre" } },
    { emoji: "👦", ar: "أخ", names: { en: "Brother", fr: "Frère", es: "Hermano", de: "Bruder", tr: "Erkek kardeş", ru: "Брат", ar: "أخ", it: "Fratello" } },
    { emoji: "👧", ar: "أخت", names: { en: "Sister", fr: "Sœur", es: "Hermana", de: "Schwester", tr: "Kız kardeş", ru: "Сестра", ar: "أخت", it: "Sorella" } },
    { emoji: "👴", ar: "جد", names: { en: "Grandfather", fr: "Grand-père", es: "Abuelo", de: "Großvater", tr: "Dede", ru: "Дедушка", ar: "جد", it: "Nonno" } },
    { emoji: "👵", ar: "جدة", names: { en: "Grandmother", fr: "Grand-mère", es: "Abuela", de: "Großmutter", tr: "Babaanne", ru: "Бабушка", ar: "جدة", it: "Nonna" } },
    { emoji: "🧔", ar: "عم", names: { en: "Uncle", fr: "Oncle", es: "Tío", de: "Onkel", tr: "Amca", ru: "Дядя", ar: "عم", it: "Zio" } },
    { emoji: "👩‍🦱", ar: "عمة", names: { en: "Aunt", fr: "Tante", es: "Tía", de: "Tante", tr: "Teyze", ru: "Тётя", ar: "عمة", it: "Zia" } },
    { emoji: "👶", ar: "طفل", names: { en: "Baby", fr: "Bébé", es: "Bebé", de: "Baby", tr: "Bebek", ru: "Малыш", ar: "رضيع", it: "Bambino" } }
  ],

  prayerQuiz: [
    { q: "ما الصلاة التي تكون بعد غروب الشمس؟", c: ["الفجر", "المغرب", "الظهر"], a: 1 },
    { q: "ما أول صلاة في اليوم؟", c: ["الفجر", "العصر", "العشاء"], a: 0 },
    { q: "ما الصلاة التي تكون ليلاً؟", c: ["العشاء", "الظهر", "العصر"], a: 0 },
    { q: "ماذا نقول عند بداية الصلاة؟", c: ["الله أكبر", "سبحان الله", "الحمد لله"], a: 0 },
    { q: "ماذا نقول في الركوع؟", c: ["سبحان ربي العظيم", "سبحان ربي الأعلى", "رب اغفر لي"], a: 0 },
    { q: "ماذا نقول في السجود؟", c: ["سبحان ربي الأعلى", "سبحان ربي العظيم", "الله أكبر"], a: 0 }
  ]
};

// ============ ADDED: Chinese, car types and the dictionary ============
DB.words.zh = [
  ["马","ما","حصان","🐴","animal"], ["牛","نيو","بقرة","🐮","animal"], ["鸟","نياو","طائر","🐦","animal"], ["鱼","يو","سمكة","🐟","animal"],
  ["面包","ميان باو","خبز","🍞","food"], ["牛奶","نيو ناي","حليب","🥛","food"], ["橘子","جو زي","برتقالة","🍊","food"], ["米饭","مي فان","أرز","🍚","food"],
  ["树","شو","شجرة","🌳","nature"], ["月亮","يوي ليانغ","قمر","🌙","nature"], ["雨","يو","مطر","🌧️","nature"], ["山","شان","جبل","⛰️","nature"],
  ["门","مين","باب","🚪","home"], ["手","شو","يد","✋","body"], ["书","شو","كتاب","📚","school"], ["学校","شيوه شياو","مدرسة","🏫","school"],
  ["老师","لاو شي","معلم","👩‍🏫","school"], ["爸爸","بابا","أب","👨","family"], ["妈妈","ماما","أم","👩","family"], ["汽车","تشي تشي","سيارة","🚗","transport"]
];
DB.sentences.zh = [["我 喝 水","أشرب الماء"],["我 有 一 本 书","عندي كتاب"],["我们 去 学校","نذهب إلى المدرسة"],["妈妈 爱 我","أمي تحبني"],["鸟 会 飞","الطائر يطير"]];
DB.zhProfessions = ["医生","司机","护士","牙医","老师","足球运动员","篮球运动员","工程师","电气工程师","机械工程师","飞行员","厨师","农民","警察","消防员","科学家"];
DB.zhFamily = ["父亲","母亲","哥哥","姐姐","爷爷","奶奶","叔叔","阿姨","婴儿"];

// Car types with icons
DB.cars = [
  { emoji: "🚗", ar: "سيدان", explain: "سيارة عائلية مريحة بصندوق خلفي.", names: { en: "Sedan", fr: "Berline", es: "Sedán", de: "Limousine", zh: "轿车", ru: "Седан", ar: "سيدان", it: "Berlina" } },
  { emoji: "🚙", ar: "دفع رباعي", explain: "سيارة كبيرة قوية تصلح للطرق الوعرة.", names: { en: "SUV", fr: "SUV", es: "SUV", de: "SUV", zh: "越野车", ru: "Внедорожник", ar: "دفع رباعي", it: "SUV" } },
  { emoji: "🚕", ar: "تاكسي", explain: "سيارة تنقل الركاب مقابل أجرة.", names: { en: "Taxi", fr: "Taxi", es: "Taxi", de: "Taxi", zh: "出租车", ru: "Такси", ar: "تاكسي", it: "Taxi" } },
  { emoji: "🏎️", ar: "سيارة رياضية", explain: "سيارة سريعة مصممة للسباق.", names: { en: "Sports car", fr: "Voiture de sport", es: "Coche deportivo", de: "Sportwagen", zh: "跑车", ru: "Спорткар", ar: "سيارة رياضية", it: "Auto sportiva" } },
  { emoji: "🚓", ar: "سيارة شرطة", explain: "سيارة تحمل رجال الشرطة لحماية الناس.", names: { en: "Police car", fr: "Voiture de police", es: "Coche de policía", de: "Polizeiauto", zh: "警车", ru: "Полицейская машина", ar: "سيارة شرطة", it: "Auto della polizia" } },
  { emoji: "🚑", ar: "سيارة إسعاف", explain: "سيارة تنقل المرضى والمصابين بسرعة إلى المستشفى.", names: { en: "Ambulance", fr: "Ambulance", es: "Ambulancia", de: "Krankenwagen", zh: "救护车", ru: "Скорая помощь", ar: "سيارة إسعاف", it: "Ambulanza" } },
  { emoji: "🚒", ar: "شاحنة إطفاء", explain: "شاحنة كبيرة تحمل رجال الإطفاء والماء.", names: { en: "Fire truck", fr: "Camion de pompiers", es: "Camión de bomberos", de: "Feuerwehrauto", zh: "消防车", ru: "Пожарная машина", ar: "شاحنة إطفاء", it: "Autopompa" } },
  { emoji: "🚌", ar: "حافلة", explain: "حافلة كبيرة تنقل عدداً كبيراً من الناس.", names: { en: "Bus", fr: "Bus", es: "Autobús", de: "Bus", zh: "公交车", ru: "Автобус", ar: "حافلة", it: "Autobus" } },
  { emoji: "🚚", ar: "شاحنة", explain: "مركبة كبيرة تنقل البضائع والأثاث.", names: { en: "Truck", fr: "Camion", es: "Camión", de: "LKW", zh: "卡车", ru: "Грузовик", ar: "شاحنة", it: "Camion" } },
  { emoji: "🛻", ar: "شاحنة صغيرة", explain: "شاحنة صغيرة لها منصة مفتوحة في الخلف.", names: { en: "Pickup truck", fr: "Pick-up", es: "Pickup", de: "Pickup", zh: "皮卡", ru: "Пикап", ar: "شاحنة صغيرة", it: "Pick-up" } }
];

// Dictionary: word in 8 languages, pronunciation in Arabic letters, and an Arabic explanation
DB.dictionary = [
  { emoji: "🐱", ar: "قطة", explain: "حيوان أليف صغير يموء ويحب اللعب.", names: { en: "Cat", fr: "Chat", es: "Gato", de: "Katze", zh: "猫", ru: "Кошка", ar: "قطة", it: "Gatto" }, pron: { en: "كات", fr: "شا", es: "غاتو", de: "كاتسه", zh: "ماو", ru: "كوشكا", it: "غاتو" } },
  { emoji: "🐶", ar: "كلب", explain: "حيوان أليف وفيّ يحرس البيت ويحب أصحابه.", names: { en: "Dog", fr: "Chien", es: "Perro", de: "Hund", zh: "狗", ru: "Собака", ar: "كلب", it: "Cane" }, pron: { en: "دوغ", fr: "شيان", es: "بيرو", de: "هوند", zh: "قو", ru: "سوباكا", it: "كانيه" } },
  { emoji: "🍎", ar: "تفاحة", explain: "فاكهة مستديرة حلوة لونها أحمر أو أخضر.", names: { en: "Apple", fr: "Pomme", es: "Manzana", de: "Apfel", zh: "苹果", ru: "Яблоко", ar: "تفاحة", it: "Mela" }, pron: { en: "أبل", fr: "بوم", es: "مانسانا", de: "آبفل", zh: "بينغ قو", ru: "ياب لاكا", it: "ميلا" } },
  { emoji: "☀️", ar: "شمس", explain: "النجم الذي يضيء نهارنا ويعطينا الدفء.", names: { en: "Sun", fr: "Soleil", es: "Sol", de: "Sonne", zh: "太阳", ru: "Солнце", ar: "شمس", it: "Sole" }, pron: { en: "صن", fr: "سولاي", es: "سول", de: "زونه", zh: "تاي يانغ", ru: "سولنتسه", it: "سولِه" } },
  { emoji: "💧", ar: "ماء", explain: "سائل نشربه كل يوم، وهو أساس الحياة.", names: { en: "Water", fr: "Eau", es: "Agua", de: "Wasser", zh: "水", ru: "Вода", ar: "ماء", it: "Acqua" }, pron: { en: "واتر", fr: "أو", es: "آغوا", de: "فاسر", zh: "شوي", ru: "فادا", it: "أكوا" } },
  { emoji: "🏠", ar: "بيت", explain: "المكان الذي نعيش فيه مع عائلتنا.", names: { en: "House", fr: "Maison", es: "Casa", de: "Haus", zh: "房子", ru: "Дом", ar: "بيت", it: "Casa" }, pron: { en: "هاوس", fr: "ميزون", es: "كاسا", de: "هاوس", zh: "فانغ زي", ru: "دوم", it: "كازا" } },
  { emoji: "🌸", ar: "زهرة", explain: "نبتة جميلة لها ألوان وعطر.", names: { en: "Flower", fr: "Fleur", es: "Flor", de: "Blume", zh: "花", ru: "Цветок", ar: "زهرة", it: "Fiore" }, pron: { en: "فلاور", fr: "فلور", es: "فلور", de: "بلومه", zh: "هوا", ru: "تسفيتوك", it: "فيوري" } },
  { emoji: "🦋", ar: "فراشة", explain: "حشرة جميلة تطير بأجنحة ملونة.", names: { en: "Butterfly", fr: "Papillon", es: "Mariposa", de: "Schmetterling", zh: "蝴蝶", ru: "Бабочка", ar: "فراشة", it: "Farfalla" }, pron: { en: "باترفلاي", fr: "بابيون", es: "ماريبوسا", de: "شميتِرلينغ", zh: "هو دييه", ru: "بابوتشكا", it: "فارفالا" } },
  { emoji: "⚽", ar: "كرة القدم", explain: "لعبة يلعبها فريقان بكرة ويسجلان الأهداف.", names: { en: "Football", fr: "Football", es: "Fútbol", de: "Fußball", zh: "足球", ru: "Футбол", ar: "كرة القدم", it: "Calcio" }, pron: { en: "فوتبول", fr: "فوتبول", es: "فوتبول", de: "فوسبال", zh: "زو تشيو", ru: "فوتبول", it: "كالتشو" } },
  { emoji: "🐘", ar: "فيل", explain: "أكبر حيوان بري له خرطوم طويل.", names: { en: "Elephant", fr: "Éléphant", es: "Elefante", de: "Elefant", zh: "大象", ru: "Слон", ar: "فيل", it: "Elefante" }, pron: { en: "إليفانت", fr: "إليفان", es: "إليفانتي", de: "إيليفانت", zh: "دا شيانغ", ru: "سلون", it: "إليفانتي" } },
  { emoji: "📚", ar: "كتاب", explain: "صفحات مكتوبة نقرأ فيها ونتعلم منها.", names: { en: "Book", fr: "Livre", es: "Libro", de: "Buch", zh: "书", ru: "Книга", ar: "كتاب", it: "Libro" }, pron: { en: "بوك", fr: "ليفر", es: "ليبرو", de: "بوخ", zh: "شو", ru: "كنيغا", it: "ليبرو" } },
  { emoji: "🏫", ar: "مدرسة", explain: "المكان الذي نتعلم فيه مع المعلمين والأصدقاء.", names: { en: "School", fr: "École", es: "Escuela", de: "Schule", zh: "学校", ru: "Школа", ar: "مدرسة", it: "Scuola" }, pron: { en: "سكول", fr: "إيكول", es: "إسكويلا", de: "شولّه", zh: "شيوه شياو", ru: "شكولا", it: "سكولا" } },
  { emoji: "👩‍🏫", ar: "معلم", explain: "شخص يعلّم الطلاب ويساعدهم على الفهم.", names: { en: "Teacher", fr: "Professeur", es: "Maestra", de: "Lehrer", zh: "老师", ru: "Учитель", ar: "معلم", it: "Insegnante" }, pron: { en: "تيتشر", fr: "بروفيسور", es: "مايسترا", de: "لهرر", zh: "لاو شي", ru: "أوتشيتيل", it: "إنسيغنانتي" } },
  { emoji: "👩", ar: "أم", explain: "من تحنو علينا وتعتني بنا.", names: { en: "Mother", fr: "Mère", es: "Madre", de: "Mutter", zh: "母亲", ru: "Мать", ar: "أم", it: "Madre" }, pron: { en: "ماذر", fr: "مير", es: "مادري", de: "موتر", zh: "مو تشين", ru: "ماتْ", it: "مادري" } },
  { emoji: "👨", ar: "أب", explain: "من يعمل ويحمي عائلته ويهتم بها.", names: { en: "Father", fr: "Père", es: "Padre", de: "Vater", zh: "父亲", ru: "Отец", ar: "أب", it: "Padre" }, pron: { en: "فاذر", fr: "بير", es: "بادري", de: "فاتر", zh: "فو چين", ru: "أتيتس", it: "بادري" } },
  { emoji: "🚗", ar: "سيارة", explain: "وسيلة نقل بأربع عجلات نركبها للسفر.", names: { en: "Car", fr: "Voiture", es: "Coche", de: "Auto", zh: "汽车", ru: "Машина", ar: "سيارة", it: "Macchina" }, pron: { en: "كار", fr: "فوتير", es: "كوتشي", de: "آوتو", zh: "تشي تشي", ru: "ماشينا", it: "ماكينا" } },
  { emoji: "🌳", ar: "شجرة", explain: "نبات كبير له جذع وأغصان وأوراق.", names: { en: "Tree", fr: "Arbre", es: "Árbol", de: "Baum", zh: "树", ru: "Дерево", ar: "شجرة", it: "Albero" }, pron: { en: "تري", fr: "أربر", es: "أربول", de: "باوم", zh: "شو", ru: "دييريفو", it: "ألبيرو" } },
  { emoji: "🌙", ar: "قمر", explain: "جسم يدور حول الأرض ويضيء لياليها.", names: { en: "Moon", fr: "Lune", es: "Luna", de: "Mond", zh: "月亮", ru: "Луна", ar: "قمر", it: "Luna" }, pron: { en: "مون", fr: "لون", es: "لونا", de: "مونت", zh: "يوي ليانغ", ru: "لونا", it: "لونا" } },
  { emoji: "🍞", ar: "خبز", explain: "طعام يُصنع من الدقيق ويُخبز في الفرن.", names: { en: "Bread", fr: "Pain", es: "Pan", de: "Brot", zh: "面包", ru: "Хлеб", ar: "خبز", it: "Pane" }, pron: { en: "برد", fr: "بان", es: "بان", de: "بروت", zh: "ميان باو", ru: "خليب", it: "بانيه" } },
  { emoji: "🥛", ar: "حليب", explain: "شراب أبيض مغذٍّ يأتي من الحيوانات.", names: { en: "Milk", fr: "Lait", es: "Leche", de: "Milch", zh: "牛奶", ru: "Молоко", ar: "حليب", it: "Latte" }, pron: { en: "ميلك", fr: "لي", es: "ليتشي", de: "ميلش", zh: "نيو ناي", ru: "مالاكو", it: "لاتّيه" } },
  { emoji: "🚪", ar: "باب", explain: "قطعة نفتحها ونغلقها لندخل ونخرج من المكان.", names: { en: "Door", fr: "Porte", es: "Puerta", de: "Tür", zh: "门", ru: "Дверь", ar: "باب", it: "Porta" }, pron: { en: "دور", fr: "بورت", es: "بويرتا", de: "تور", zh: "مين", ru: "دفيير", it: "بورتا" } },
  { emoji: "✋", ar: "يد", explain: "جزء من الجسم نمسك به الأشياء ونكتب بها.", names: { en: "Hand", fr: "Main", es: "Mano", de: "Hand", zh: "手", ru: "Рука", ar: "يد", it: "Mano" }, pron: { en: "هاند", fr: "مان", es: "مانو", de: "هاند", zh: "شو", ru: "روكا", it: "مانو" } },
  { emoji: "🌧️", ar: "مطر", explain: "قطرات ماء تسقط من السماء.", names: { en: "Rain", fr: "Pluie", es: "Lluvia", de: "Regen", zh: "雨", ru: "Дождь", ar: "مطر", it: "Pioggia" }, pron: { en: "رين", fr: "بلوي", es: "يوفيا", de: "ريغن", zh: "يو", ru: "دوجد", it: "بيوجا" } },
  { emoji: "🐦", ar: "طائر", explain: "حيوان له أجنحة وريش ويطير.", names: { en: "Bird", fr: "Oiseau", es: "Pájaro", de: "Vogel", zh: "鸟", ru: "Птица", ar: "طائر", it: "Uccello" }, pron: { en: "بيرد", fr: "وازو", es: "باخارو", de: "فوغل", zh: "نياو", ru: "بتيتسا", it: "أوتشيلّو" } }
];

// Chinese names for professions and family members are used by the main page

// ============ ADDED: hair, new cars, kitchen and home sports, Arabic stories, riddles ============
// Hair styles. place: "dz" (Algeria), "eu" (Europe) or "both"
DB.hair = [
  { place: "both", name: "القصة الكلاسيكية المرتبة (Classic)", desc: "شعر مرتب من الأعلى مع جوانب مقصوصة بعناية، مناسب للمدرسة والمناسبات." },
  { place: "both", name: "القصة القصيرة (Buzz cut)", desc: "شعر قصير متساوٍ من كل الجهات، سهل العناية ومريح في الصيف." },
  { place: "both", name: "الحلاقة بالتدريج (Taper)", desc: "الجوانب تصبح أقصر تدريجياً نحو الرقبة، وشكل مرتب وأنيق." },
  { place: "dz",   name: "الشعر المجعد الطبيعي", desc: "يُحافَظ على التجعيد بترطيب مناسب وقص متوازن يبرز شكل الشعر." },
  { place: "eu",   name: "الفيد (Fade)", desc: "الجوانب تتدرج من القصير جداً إلى الطول، ويمكن أن يكون التدرج عالياً أو منخفضاً." },
  { place: "eu",   name: "القصة الجانبية (Side part)", desc: "شعر أطول قليلاً من الأعلى مع فرق على جانب واحد." },
  { place: "eu",   name: "الشعر المرتفع (Quiff)", desc: "شعر مرفوع من الأمام إلى الأعلى، ويحتاج إلى مادة تثبيت خفيفة." },
  { place: "eu",   name: "الشعر المجمّع للخلف (Man bun)", desc: "شعر طويل مجمّع إلى الخلف، ويحتاج إلى عناية وتنظيف منتظم." }
];

// New car technologies, explained simply
DB.newCars = [
  { emoji: "🔋", name: "السيارة الكهربائية", desc: "تعمل بالبطارية بدل الوقود، ولا تخرج منها عادم في الشارع." },
  { emoji: "♻️", name: "السيارة الهجينة", desc: "تجمع بين محرك الوقود ومحرك كهربائي، وتوفر الوقود في المدينة." },
  { emoji: "🅿️", name: "الركن التلقائي", desc: "تتحرك السيارة وحدها لتركن نفسها داخل المكان المناسب." },
  { emoji: "🛣️", name: "مساعد البقاء في المسار", desc: "يلاحظ السائق إذا خرج عن المسار ويعيده بلطف إلى الداخل." },
  { emoji: "📷", name: "كاميرا 360 درجة", desc: "تُظهر ما حول السيارة من جميع الجهات على الشاشة، وتسهل الركن." },
  { emoji: "📱", name: "شاشة اللمس الكبيرة", desc: "تتحكم بالموسيقى والملاحة والإعدادات بلمسة واحدة." },
  { emoji: "🎯", name: "التحكم الذكي بالسرعة", desc: "يحافظ على مسافة آمنة من السيارة التي أمامك تلقائياً." },
  { emoji: "⚡", name: "فرامل تعيد الطاقة", desc: "عند الكبح تُعاد جزء من الطاقة لتشحن البطارية." }
];

// Kitchen ideas for healthy food
DB.kitchen = [
  { emoji: "🥗", name: "سلطة الخضار الملونة", desc: "خضار متنوعة مقطعة مع قليل من زيت الزيتون والليمون، تعطي فيتامينات متنوعة." },
  { emoji: "🥣", name: "فطور الشوفان بالفاكهة", desc: "شوفان يُطبخ بالحليب أو الماء، ويُضاف إليه قطع من الفاكهة الطازجة." },
  { emoji: "🍲", name: "شوربة العدس", desc: "شوربة خفيفة ومغذية تُطبخ بالعدس والخضار مع بهارات معتدلة." },
  { emoji: "🐟", name: "السمك المشوي مع الخضار", desc: "سمك مشوي بدون قلي مع خضار مشوية، وجبة غنية بالبروتين." },
  { emoji: "🍊", name: "عصير الفواكه الطبيعي", desc: "فواكه طازجة مخلوطة بدون سكر مضاف، ويُفضل شربه مع الوجبة وليس بكثرة." },
  { emoji: "🥚", name: "خبز الحبوب الكاملة مع البيض", desc: "خبز من الحبوب الكاملة مع بيض مسلوق، أو بيض مقلي بقليل من الزيت." }
];

// Home sports moves
DB.workouts = [
  { emoji: "💪", name: "الضغط (Push-ups)", desc: "ضعي يديك تحت الكتفين واجعلي جسمك مستقيماً، ثم انزلي بالصدر قريباً من الأرض وارتفعي. يمكن البدء بالركبتين على الأرض.", time: "3 مرات من 8 تكرارات" },
  { emoji: "🦵", name: "القرفصاء (Squats)", desc: "قفي بقدمين مفتوحتين بعرض الكتفين، واثني الركبتين كأنك تجلسين على كرسي، ثم ارتفعي ببطء.", time: "3 مرات من 10 تكرارات" },
  { emoji: "🧘", name: "اللوح (Plank)", desc: "استندي على الساعدين وأصابع القدمين، واجعلي الجسم مستقيماً من الرأس إلى القدمين، وحافظي على هذه الوضعية.", time: "3 مرات، كل مرة 20 ثانية" },
  { emoji: "🚶", name: "المشي في المكان مع رفع الركبتين", desc: "امشي في مكانك وارفعي الركبتين بالتناوب بسرعة معتدلة.", time: "دقيقتان" },
  { emoji: "🌉", name: "الجسر (Glute bridge)", desc: "استلقي على ظهرك وركبتاك مثنيتان، ارفعي الحوض للأعلى ثم أنزليه ببطء.", time: "3 مرات من 10 تكرارات" },
  { emoji: "🤸", name: "إطالة الظهر والكتفين", desc: "اجلسي باستقامة، وأمسكي كفيك خلف ظهرك، وافتحي الصدر برفق بدون ألم.", time: "30 ثانية لكل إطالة" }
];

// Arabic stories with a lesson
DB.stories_ar = [
  { title: "النحلة الصغيرة", text: "عاشت نحلة صغيرة مع أصدقائها في خلية كبيرة. كل صباح كانت تطير بين الزهور لتجمع الرحيق، ثم تعود لتشارك الجميع العسل. ذات يوم تعبت إحدى النحلات، فساعدتها النحلة الصغيرة حتى استراحت.", moral: "التعاون يجعل الأعمال أسهل وأجمل." },
  { title: "الولد الذي أحب الكتب", text: "كان ولد صغير لا يترك كتاباً دون أن يقرأه. كل يوم كان يقرأ صفحة جديدة، ويتعلم كلمة جديدة. وبعد سنة أصبح يتحدث بثقة، ويحكي القصص لأصدقائه.", moral: "القراءة قليلاً كل يوم تصنع فرقاً كبيراً." },
  { title: "السيارة التي صبرت", text: "أراد صانع السيارات أن يصنع سيارة سريعة جداً، لكنه أخذ وقتاً طويلاً في التصميم حتى يكون كل شيء آمناً. وفي النهاية صارت السيارة أكثر أماناً، وأعجب بها الجميع.", moral: "الصبر يصنع الأفضل." },
  { title: "الصديق الوفي", text: "كان لولد كلب صغير يلعب معه كل يوم. وفي يوم ماطر سقط الولد وجرح ركبته، فجاء الكلب يقفز حوله ويجلب له المنديل.", moral: "الصديق الوفي هو من يقف بجانبك في وقت الشدة." }
];

// Riddles with three choices
DB.riddles = [
  { q: "له أسنان كثيرة لكنه لا يعض، ما هو؟", a: "المشط", w: ["الكرسي", "الكتاب", "الباب"] },
  { q: "كلما أخذت منه كبر، فما هو؟", a: "الحفرة", w: ["الكرة", "الشمعة", "الكتاب"] },
  { q: "ما الذي يضيء الليل ولا يحترق؟", a: "القمر", w: ["الشمعة", "المصباح", "النار"] },
  { q: "له مدن بلا بيوت، وجبال بلا صخور، وأنهار بلا ماء، فما هو؟", a: "الخريطة", w: ["التلفاز", "الثلاجة", "الساعة"] },
  { q: "ما الشيء الذي له رقبة ولا رأس له؟", a: "القارورة", w: ["الشجرة", "الطائرة", "الكرة"] },
  { q: "أكتب عليّ وأُمحى، فما أنا؟", a: "السبورة", w: ["الكتاب", "الحقيبة", "الورقة"] },
  { q: "أمشي بلا رجلين، وأبكي بلا عينين، فما أنا؟", a: "السحاب", w: ["الكرسي", "الطاولة", "النهر"] }
];
