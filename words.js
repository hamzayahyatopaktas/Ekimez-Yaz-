/* Eskimez Yazı — Kelime Verisi — 704 kelime */
/* <script src="words.js"></script> */
const DEF=
[
  {
    "latin": "ab",
    "ottoman": "‏آب",
    "meaning": "âb  (su)  (fâr)"
  },
  {
    "latin": "ab",
    "ottoman": "‏عاب",
    "meaning": "âb  (ayıb)  (ar)"
  },
  {
    "latin": "ab-berin",
    "ottoman": "‏آببرين",
    "meaning": "âb-berîn  (fâr)"
  },
  {
    "latin": "ab-came",
    "ottoman": "‏آبجامە",
    "meaning": "âb-câme  (fâr)"
  },
  {
    "latin": "ab-gah",
    "ottoman": "‏آبگاە",
    "meaning": "âb-gâh  (fâr)"
  },
  {
    "latin": "ab-gine",
    "ottoman": "‏آبگينە",
    "meaning": "âb-gîne  (fâr)"
  },
  {
    "latin": "ab-gir",
    "ottoman": "‏آبگير",
    "meaning": "âb-gîr  (fâr)"
  },
  {
    "latin": "ab-hane",
    "ottoman": "‏آبخانە",
    "meaning": "âb-hâne  (fâr)"
  },
  {
    "latin": "ab-hurde",
    "ottoman": "‏آبخوردە",
    "meaning": "âb-hûrde  (fâr)"
  },
  {
    "latin": "ab-kar",
    "ottoman": "‏آبكار",
    "meaning": "âb-kâr  (fâr)"
  },
  {
    "latin": "ab-kend",
    "ottoman": "‏آبكند",
    "meaning": "âb-kend  (fâr)"
  },
  {
    "latin": "ab-keş",
    "ottoman": "‏آبكش",
    "meaning": "âb-keş  (fâr)"
  },
  {
    "latin": "ab-kur",
    "ottoman": "‏آبكور",
    "meaning": "âb-kûr  (fâr)"
  },
  {
    "latin": "ab-nak",
    "ottoman": "‏آبناك",
    "meaning": "âb-nâk  (fâr)"
  },
  {
    "latin": "ab-rane",
    "ottoman": "‏آبرانە",
    "meaning": "âb-râne  (fâr)"
  },
  {
    "latin": "ab-süvar",
    "ottoman": "‏آبسوار",
    "meaning": "âb-süvâr  (fâr)"
  },
  {
    "latin": "ab-vend",
    "ottoman": "‏آبوند",
    "meaning": "âb-vend  (fâr)"
  },
  {
    "latin": "ab-yar",
    "ottoman": "‏آبيار",
    "meaning": "âb-yâr  (fâr)"
  },
  {
    "latin": "ab-zen",
    "ottoman": "‏آبزن",
    "meaning": "âb-zen  (fâr)"
  },
  {
    "latin": "ab-çera",
    "ottoman": "‏آبچرا",
    "meaning": "âb-çerâ  (fâr)"
  },
  {
    "latin": "aba",
    "ottoman": "‏عبا",
    "meaning": "abâ  (elbise)  (ar)"
  },
  {
    "latin": "aba",
    "ottoman": "‏آبا",
    "meaning": "âbâ  (babalar)  (ar)"
  },
  {
    "latin": "aba",
    "ottoman": "‏اعبا",
    "meaning": "a‘bâ  (ağırlıklar)  (ar)"
  },
  {
    "latin": "aba-puş",
    "ottoman": "‏عباپوش",
    "meaning": "abâ-pûş  (a/f)"
  },
  {
    "latin": "abab",
    "ottoman": "‏آباب",
    "meaning": "âbâb  (çayırlar)  (ar)"
  },
  {
    "latin": "abab",
    "ottoman": "‏عبعب",
    "meaning": "ab‘ab (karından konuşan) (ar)"
  },
  {
    "latin": "abad",
    "ottoman": "‏آباد",
    "meaning": "âbâd  (bayındır)  (fâr)"
  },
  {
    "latin": "abad",
    "ottoman": "‏آباد",
    "meaning": "âbâd  (ebedler)  (ar)"
  },
  {
    "latin": "abad",
    "ottoman": "‏اعباد",
    "meaning": "a‘bâd  (köleler)  (ar)"
  },
  {
    "latin": "abadan",
    "ottoman": "‏آبادان",
    "meaning": "âbâdân  (fâr)"
  },
  {
    "latin": "abadi",
    "ottoman": "‏آبادی",
    "meaning": "âbâdî  (fâr)"
  },
  {
    "latin": "abadile",
    "ottoman": "‏عبادلە",
    "meaning": "abâdile  (ar)"
  },
  {
    "latin": "abaft",
    "ottoman": "‏آبافت",
    "meaning": "âbâft  (fâr)"
  },
  {
    "latin": "abajur",
    "ottoman": "‏آباژور",
    "meaning": "abajur  (fr)"
  },
  {
    "latin": "abak",
    "ottoman": "‏عبق",
    "meaning": "abak  (ar)"
  },
  {
    "latin": "abaka han",
    "ottoman": "‏آباقه خان",
    "meaning": "Abaka Han"
  },
  {
    "latin": "abakiye",
    "ottoman": "‏عباقيە",
    "meaning": "abâkiye  (ar)"
  },
  {
    "latin": "abaküs",
    "ottoman": "‏آباكوس",
    "meaning": "abaküs  (fr)"
  },
  {
    "latin": "abal",
    "ottoman": "‏آبال",
    "meaning": "âbâl  (ar)"
  },
  {
    "latin": "abalet",
    "ottoman": "‏عبالت",
    "meaning": "abâlet  (ar)"
  },
  {
    "latin": "abam",
    "ottoman": "‏عبام",
    "meaning": "abâm  (ar)"
  },
  {
    "latin": "aban",
    "ottoman": "‏آبان",
    "meaning": "âbân  (fâr)"
  },
  {
    "latin": "aban-gah",
    "ottoman": "‏آبانگاە",
    "meaning": "âbân-gâh  (fâr)"
  },
  {
    "latin": "abana",
    "ottoman": "‏آبانە",
    "meaning": "Abana  (yer ismi)"
  },
  {
    "latin": "abanmak",
    "ottoman": "‏آبانمق",
    "meaning": "abanmak"
  },
  {
    "latin": "abanoz",
    "ottoman": "‏آبانوز",
    "meaning": "abanoz  (fâr)"
  },
  {
    "latin": "abar",
    "ottoman": "‏آبار",
    "meaning": "âbâr  (ar)"
  },
  {
    "latin": "abartmak",
    "ottoman": "‏آبارتمق",
    "meaning": "abartmak"
  },
  {
    "latin": "abasu",
    "ottoman": "‏آباصو",
    "meaning": "Abasu  (Cezâir-i B. Sefîd)"
  },
  {
    "latin": "abay",
    "ottoman": "‏آبای",
    "meaning": "Abay"
  },
  {
    "latin": "abaza",
    "ottoman": "‏آبازە",
    "meaning": "Abaza"
  },
  {
    "latin": "abazan",
    "ottoman": "‏آبازان",
    "meaning": "abazan"
  },
  {
    "latin": "abb",
    "ottoman": "‏عب",
    "meaning": "abb  (ar)"
  },
  {
    "latin": "abbad",
    "ottoman": "‏عباد",
    "meaning": "Abbâd  (ar)"
  },
  {
    "latin": "abbas",
    "ottoman": "‏عباس",
    "meaning": "Abbâs  (ar)"
  },
  {
    "latin": "abbaz",
    "ottoman": "‏آبباز",
    "meaning": "Âbbâz  (fâr)"
  },
  {
    "latin": "abd",
    "ottoman": "‏عبد",
    "meaning": "abd  (ar)"
  },
  {
    "latin": "abdal",
    "ottoman": "‏آبدال",
    "meaning": "âbdâl  (ar)"
  },
  {
    "latin": "abdalan",
    "ottoman": "‏عبدالان",
    "meaning": "Abdalan  (Diyârbekir)"
  },
  {
    "latin": "abdalan",
    "ottoman": "‏آبدالان",
    "meaning": "âbdâlân  (ar)"
  },
  {
    "latin": "abdan",
    "ottoman": "‏آبدان",
    "meaning": "âbdân  (fâr)"
  },
  {
    "latin": "abdar",
    "ottoman": "‏آبدار",
    "meaning": "âbdâr  (fâr)"
  },
  {
    "latin": "abdest",
    "ottoman": "‏آبدست",
    "meaning": "âbdest  (fâr)"
  },
  {
    "latin": "abdestan",
    "ottoman": "‏آبدستان",
    "meaning": "abdestân  (fâr)"
  },
  {
    "latin": "abdesthane",
    "ottoman": "‏آبدستخانە",
    "meaning": "abdesthâne  (fâr)"
  },
  {
    "latin": "abdi",
    "ottoman": "‏عبدی",
    "meaning": "Abdî  (ar)"
  },
  {
    "latin": "abdiyet",
    "ottoman": "‏عبديت",
    "meaning": "abdiyet  (ar)"
  },
  {
    "latin": "abdullah",
    "ottoman": "‏عبد اللّٰە",
    "meaning": "Abdullâh  (Ai)"
  },
  {
    "latin": "abdurrahman",
    "ottoman": "‏عبد الرحمن",
    "meaning": "Abdurrahmân  (ar)"
  },
  {
    "latin": "abdurrauf",
    "ottoman": "‏عبد الرئوف",
    "meaning": "Abdurraûf  (Ai)"
  },
  {
    "latin": "abdussabur",
    "ottoman": "‏عبد الصبور",
    "meaning": "Abdussabûr  (Ai)"
  },
  {
    "latin": "abdüddar",
    "ottoman": "‏عبد الضار",
    "meaning": "Abdüddâr  (Ai)"
  },
  {
    "latin": "abdülafüv",
    "ottoman": "‏عبد العفو",
    "meaning": "Abdülafüv  (Ai)"
  },
  {
    "latin": "abdülala",
    "ottoman": "‏عبد الاعلی",
    "meaning": "Abdüla‘lâ  (Ai)"
  },
  {
    "latin": "abdülali",
    "ottoman": "‏عبد العالی",
    "meaning": "Abdülâlî  (Ai)"
  },
  {
    "latin": "abdülalim",
    "ottoman": "‏عبد العليم",
    "meaning": "Abdülalîm  (Ai)"
  },
  {
    "latin": "abdülazim",
    "ottoman": "‏عبد العظيم",
    "meaning": "Abdülazîm  (Ai)"
  },
  {
    "latin": "abdülaziz",
    "ottoman": "‏عبد العزيز",
    "meaning": "Abdülazîz  (Ai)"
  },
  {
    "latin": "abdülbaki",
    "ottoman": "‏عبد الباقی",
    "meaning": "Abdülbâkî  (Ai)"
  },
  {
    "latin": "abdülbari",
    "ottoman": "‏عبد الباری",
    "meaning": "Abdülbârî  (Ai)"
  },
  {
    "latin": "abdülbasir",
    "ottoman": "‏عبد البصير",
    "meaning": "Abdülbasîr  (Ai)"
  },
  {
    "latin": "abdülbasit",
    "ottoman": "‏عبد الباسط",
    "meaning": "Abdülbâsit  (Ai)"
  },
  {
    "latin": "abdülbedi",
    "ottoman": "‏عبد البديع",
    "meaning": "Abdülbedî‘  (Ai)"
  },
  {
    "latin": "abdülberr",
    "ottoman": "‏عبد البر",
    "meaning": "Abdülberr  (Ai)"
  },
  {
    "latin": "abdülcebbar",
    "ottoman": "‏عبد الجبار",
    "meaning": "Abdülcebbâr  (Ai)"
  },
  {
    "latin": "abdülcelil",
    "ottoman": "‏عبد الجليل",
    "meaning": "Abdülcelîl  (Ai)"
  },
  {
    "latin": "abdülcemal",
    "ottoman": "‏عبد الجمال",
    "meaning": "Abdülcemâl  (Ai)"
  },
  {
    "latin": "abdülcemil",
    "ottoman": "‏عبد الجميل",
    "meaning": "Abdülcemîl  (Ai)"
  },
  {
    "latin": "abdülcevad",
    "ottoman": "‏عبد الجواد",
    "meaning": "Abdülcevâd  (Ai)"
  },
  {
    "latin": "abdülehad",
    "ottoman": "‏عبد الاحد",
    "meaning": "Abdülehad  (Ai)"
  },
  {
    "latin": "abdülesed",
    "ottoman": "‏عبد الاسد",
    "meaning": "Abdülesed  (Ai)"
  },
  {
    "latin": "abdülevvel",
    "ottoman": "‏عبد الاول",
    "meaning": "Abdülevvel  (Ai)"
  },
  {
    "latin": "abdülezel",
    "ottoman": "‏عبد الازل",
    "meaning": "Abdülezel  (Ai)"
  },
  {
    "latin": "abdülferid",
    "ottoman": "‏عبد الفريد",
    "meaning": "Abdülferîd  (Ai)"
  },
  {
    "latin": "abdülfettah",
    "ottoman": "‏عبد الفتاح",
    "meaning": "Abdülfettâh  (Ai)"
  },
  {
    "latin": "abdülgaffar",
    "ottoman": "‏عبد الغفار",
    "meaning": "Abdülgaffâr  (Ai)"
  },
  {
    "latin": "abdülgafur",
    "ottoman": "‏عبد الغفور",
    "meaning": "Abdülgafûr  (Ai)"
  },
  {
    "latin": "abdülganiy",
    "ottoman": "‏عبد الغنی",
    "meaning": "Abdülganiy  (Ai)"
  },
  {
    "latin": "abdülhabir",
    "ottoman": "‏عبد الخبير",
    "meaning": "Abdülhabîr  (Ai)"
  },
  {
    "latin": "abdülhadi",
    "ottoman": "‏عبد الهادی",
    "meaning": "Abdülhâdî  (Ai)"
  },
  {
    "latin": "abdülhafiz",
    "ottoman": "‏عبد الحفيظ",
    "meaning": "Abdülhafîz  (Ai)"
  },
  {
    "latin": "abdülhak",
    "ottoman": "‏عبد الحق",
    "meaning": "Abdülhak  (Ai)"
  },
  {
    "latin": "abdülhakem",
    "ottoman": "‏عبد الحكم",
    "meaning": "Abdülhakem  (Ai)"
  },
  {
    "latin": "abdülhakim",
    "ottoman": "‏عبد الحكيم",
    "meaning": "Abdülhakîm  (Ai)"
  },
  {
    "latin": "abdülhalim",
    "ottoman": "‏عبد الحليم",
    "meaning": "Abdülhalîm  (Ai)"
  },
  {
    "latin": "abdülhalık",
    "ottoman": "‏عبد الخالق",
    "meaning": "Abdülhâlık  (Ai)"
  },
  {
    "latin": "abdülhamid",
    "ottoman": "‏عبد الحميد",
    "meaning": "Abdülhamîd  (Ai)"
  },
  {
    "latin": "abdülhasib",
    "ottoman": "‏عبد الحسيب",
    "meaning": "Abdülhasîb  (Ai)"
  },
  {
    "latin": "abdülhayy",
    "ottoman": "‏عبد الحی",
    "meaning": "Abdülhayy  (Ai)"
  },
  {
    "latin": "abdülkadir",
    "ottoman": "‏عبد القادر",
    "meaning": "Abdülkādir  (Ai)"
  },
  {
    "latin": "abdülkaviy",
    "ottoman": "‏عبد القوی",
    "meaning": "Abdülkaviy  (Ai)"
  },
  {
    "latin": "abdülkayyum",
    "ottoman": "‏عبد القيوم",
    "meaning": "Abdülkayyûm  (Ai)"
  },
  {
    "latin": "abdülkebir",
    "ottoman": "‏عبد الكبير",
    "meaning": "Abdülkebîr  (Ai)"
  },
  {
    "latin": "abdülkerim",
    "ottoman": "‏عبد الكريم",
    "meaning": "Abdülkerîm  (Ai)"
  },
  {
    "latin": "abdüllatif",
    "ottoman": "‏عبد الطيف",
    "meaning": "Abdüllatîf  (Ai)"
  },
  {
    "latin": "abdüllaziz",
    "ottoman": "‏عبد العزيز",
    "meaning": "Abdüllazîz  (Ai)"
  },
  {
    "latin": "abdülmacid",
    "ottoman": "‏عبد الماجد",
    "meaning": "Abdülmâcid  (Ai)"
  },
  {
    "latin": "abdülmalik",
    "ottoman": "‏عبد المالك",
    "meaning": "Abdülmâlik  (Ai)"
  },
  {
    "latin": "abdülmecid",
    "ottoman": "‏عبد المجيد",
    "meaning": "Abdülmecîd  (Ai)"
  },
  {
    "latin": "abdülmelik",
    "ottoman": "عبد الملك",
    "meaning": "Abdülmelik (ar)"
  },
  {
    "latin": "abdülmennan",
    "ottoman": "‏عبد المنان",
    "meaning": "Abdülmennân  (Ai)"
  },
  {
    "latin": "abdülmesih",
    "ottoman": "‏عبد المسيح",
    "meaning": "Abdülmesîh  (Ai)"
  },
  {
    "latin": "abdülmetin",
    "ottoman": "‏عبد المتين",
    "meaning": "Abdülmetîn  (Ai)"
  },
  {
    "latin": "abdülmucib",
    "ottoman": "‏عبد المجيب",
    "meaning": "Abdülmucîb  (Ai)"
  },
  {
    "latin": "abdülmuhsi",
    "ottoman": "‏عبد المحصی",
    "meaning": "Abdülmuhsî  (Ai)"
  },
  {
    "latin": "abdülmuhyi",
    "ottoman": "‏عبد المحيی",
    "meaning": "Abdülmuhyî  (Ai)"
  },
  {
    "latin": "abdülmuid",
    "ottoman": "‏عبد المعيد",
    "meaning": "Abdülmuîd  (Ai)"
  },
  {
    "latin": "abdülmuiz",
    "ottoman": "‏عبد المعز",
    "meaning": "Abdülmuiz  (Ai)"
  },
  {
    "latin": "abdülmuttalib",
    "ottoman": "عبد المطّلب",
    "meaning": "Abdülmuttalib (ar)"
  },
  {
    "latin": "abdülmümin",
    "ottoman": "‏عبد المؤمن",
    "meaning": "Abdülmü’min  (Ai)"
  },
  {
    "latin": "abdülvacid",
    "ottoman": "‏عبد الواجد",
    "meaning": "Abdülvâcid  (Ai)"
  },
  {
    "latin": "abdülvahid",
    "ottoman": "‏عبد الواحد",
    "meaning": "Abdülvâhid  (Ai)"
  },
  {
    "latin": "abdülvali",
    "ottoman": "‏عبد الوالی",
    "meaning": "Abdülvâlî  (Ai)"
  },
  {
    "latin": "abdülvaris",
    "ottoman": "‏عبد الوارث",
    "meaning": "Abdülvâris  (Ai)"
  },
  {
    "latin": "abdülvasi",
    "ottoman": "‏عبد الواسع",
    "meaning": "Abdülvâsi‘  (Ai)"
  },
  {
    "latin": "abdülvedud",
    "ottoman": "‏عبد الودود",
    "meaning": "Abdülvedûd  (Ai)"
  },
  {
    "latin": "abdülvehhab",
    "ottoman": "‏عبد الوهاب",
    "meaning": "Abdülvehhâb  (Ai)"
  },
  {
    "latin": "abdülvekil",
    "ottoman": "‏عبد الوكيل",
    "meaning": "Abdülvekîl  (Ai)"
  },
  {
    "latin": "abdülveli",
    "ottoman": "‏عبد الولی",
    "meaning": "Abdülvelî  (Ai)"
  },
  {
    "latin": "abdünnafi",
    "ottoman": "‏عبد النافع",
    "meaning": "Abdünnâfi‘  (Ai)"
  },
  {
    "latin": "abdünnasır",
    "ottoman": "‏عبد الناصر",
    "meaning": "Abdünnâsır  (Ai)"
  },
  {
    "latin": "abdünnur",
    "ottoman": "‏عبد النور",
    "meaning": "Abdünnûr  (Ai)"
  },
  {
    "latin": "abdürrafi",
    "ottoman": "‏عبد الرافع",
    "meaning": "Abdürrâfi‘  (Ai)"
  },
  {
    "latin": "abdürrahim",
    "ottoman": "‏عبد الرحيم",
    "meaning": "Abdürrahîm  (Ai)"
  },
  {
    "latin": "abdürrauf",
    "ottoman": "‏عبد الرؤف",
    "meaning": "Abdürraûf  (Ai)"
  },
  {
    "latin": "abdürrezzak",
    "ottoman": "‏عبد الرزاق",
    "meaning": "Abdürrezzâk  (Ai)"
  },
  {
    "latin": "abdürreşid",
    "ottoman": "‏عبد الرشيد",
    "meaning": "Abdürreşîd  (Ai)"
  },
  {
    "latin": "abdüssamed",
    "ottoman": "‏عبد الصمد",
    "meaning": "Abdüssamed  (Ai)"
  },
  {
    "latin": "abdüsselam",
    "ottoman": "‏عبد السلام",
    "meaning": "Abdüsselâm  (Ai)"
  },
  {
    "latin": "abdüssemi",
    "ottoman": "‏عبد السميع",
    "meaning": "Abdüssemî‘  (Ai)"
  },
  {
    "latin": "abdüssettar",
    "ottoman": "‏عبد الستار",
    "meaning": "Abdüssettâr  (Ai)"
  },
  {
    "latin": "abdüzzahir",
    "ottoman": "‏عبد الظاهر",
    "meaning": "Abdüzzâhir  (Ai)"
  },
  {
    "latin": "abdüşşahid",
    "ottoman": "‏عبد الشاهد",
    "meaning": "Abdüşşâhid  (Ai)"
  },
  {
    "latin": "abdüşşekur",
    "ottoman": "‏عبد الشكور",
    "meaning": "Abdüşşekûr  (Ai)"
  },
  {
    "latin": "abe",
    "ottoman": "‏عبأ",
    "meaning": "abe’  (kıymet)  (ar)"
  },
  {
    "latin": "abe",
    "ottoman": "‏آبە",
    "meaning": "âbe  (işâret)  (ar)"
  },
  {
    "latin": "abece",
    "ottoman": "‏عبجە",
    "meaning": "abece  (ar)"
  },
  {
    "latin": "abecesel",
    "ottoman": "‏آبه جه سل",
    "meaning": "abecesel"
  },
  {
    "latin": "abed",
    "ottoman": "‏عبد",
    "meaning": "abed  (ar)"
  },
  {
    "latin": "abede",
    "ottoman": "‏عبدە",
    "meaning": "abede  (ar)"
  },
  {
    "latin": "abede-cu",
    "ottoman": "‏عبده جو",
    "meaning": "abede-cû  (a/f)"
  },
  {
    "latin": "abek",
    "ottoman": "‏آبك",
    "meaning": "âbek  (fâr)"
  },
  {
    "latin": "abeket",
    "ottoman": "‏عبكت",
    "meaning": "abeket  (ar)"
  },
  {
    "latin": "abel",
    "ottoman": "‏عبل",
    "meaning": "abel  (yaprak)  (ar)"
  },
  {
    "latin": "abel",
    "ottoman": "‏اعبل",
    "meaning": "a‘bel  (taş)  (ar)"
  },
  {
    "latin": "aberat",
    "ottoman": "‏عبرات",
    "meaning": "aberât  (ar)"
  },
  {
    "latin": "abes",
    "ottoman": "‏عبث",
    "meaning": "abes  (ar)"
  },
  {
    "latin": "abese",
    "ottoman": "‏عبس",
    "meaning": "abese  (ar)"
  },
  {
    "latin": "abese irca",
    "ottoman": "‏عبثه ارجاع",
    "meaning": "abese ircâ‘  (ar)"
  },
  {
    "latin": "abesiyat",
    "ottoman": "‏عبثيات",
    "meaning": "abesiyât  (ar)"
  },
  {
    "latin": "abey-seran",
    "ottoman": "‏عبيثران",
    "meaning": "abey-serân  (ar)"
  },
  {
    "latin": "abgun",
    "ottoman": "‏آبگون",
    "meaning": "Âbgûn  (fâr)"
  },
  {
    "latin": "abha",
    "ottoman": "‏ابها",
    "meaning": "Abhâ  (Yemen)"
  },
  {
    "latin": "abher",
    "ottoman": "‏عبهر",
    "meaning": "abher  (ar)"
  },
  {
    "latin": "abhiz",
    "ottoman": "‏آبخيز",
    "meaning": "Âbhîz  (fâr)"
  },
  {
    "latin": "abi",
    "ottoman": "‏آغابك",
    "meaning": "abi  (aslı ağabey)"
  },
  {
    "latin": "abi",
    "ottoman": "‏عبی",
    "meaning": "abî  (kurban payı)  (ar)"
  },
  {
    "latin": "abi",
    "ottoman": "‏آبی",
    "meaning": "âbî  (çekinen)  (ar)"
  },
  {
    "latin": "abid",
    "ottoman": "‏آبيد",
    "meaning": "âbîd  (kıvılcım)  (fâr)"
  },
  {
    "latin": "abid",
    "ottoman": "‏عبيد",
    "meaning": "abîd  (kullar)  (ar)"
  },
  {
    "latin": "abid",
    "ottoman": "‏عابد",
    "meaning": "âbid  (ibâdet eden)  (ar)"
  },
  {
    "latin": "abidat",
    "ottoman": "‏آبدات",
    "meaning": "âbidât  (âbideler)  (fâr)"
  },
  {
    "latin": "abidat",
    "ottoman": "‏عابدات",
    "meaning": "âbidât  (inanmış kadınlar)  (ar)"
  },
  {
    "latin": "abide",
    "ottoman": "‏آبدە",
    "meaning": "âbide  (şâheser)  (ar)"
  },
  {
    "latin": "abide",
    "ottoman": "‏عابدە",
    "meaning": "âbide  (ibâdet eden kadın)  (ar)"
  },
  {
    "latin": "abide",
    "ottoman": "‏اعبدە",
    "meaning": "a‘bide  (köleler)  (ar)"
  },
  {
    "latin": "abidin",
    "ottoman": "‏عابدين",
    "meaning": "Âbidîn  (ar)"
  },
  {
    "latin": "abil",
    "ottoman": "‏آبل",
    "meaning": "âbil  (ar)"
  },
  {
    "latin": "abile",
    "ottoman": "‏آبلە",
    "meaning": "âbile  (fâr)"
  },
  {
    "latin": "abir",
    "ottoman": "‏عابر",
    "meaning": "âbir  (geçici)  (ar)"
  },
  {
    "latin": "abir",
    "ottoman": "‏عبير",
    "meaning": "abîr  (koku)  (ar)"
  },
  {
    "latin": "abir",
    "ottoman": "‏عابر",
    "meaning": "Âbir  (ar)"
  },
  {
    "latin": "abis",
    "ottoman": "‏آبس",
    "meaning": "âbis  (derinlik)  (ar)"
  },
  {
    "latin": "abis",
    "ottoman": "‏عابث",
    "meaning": "âbis  (saygısız)  (ar)"
  },
  {
    "latin": "abis",
    "ottoman": "‏عابس",
    "meaning": "âbis  (asık suratlı)  (ar)"
  },
  {
    "latin": "abise",
    "ottoman": "‏عبيثە",
    "meaning": "abîse  (ar)"
  },
  {
    "latin": "abist",
    "ottoman": "‏آبست",
    "meaning": "âbist  (fâr)"
  },
  {
    "latin": "abistan",
    "ottoman": "‏آبستان",
    "meaning": "âbistân  (fâr)"
  },
  {
    "latin": "abisten",
    "ottoman": "‏آبستن",
    "meaning": "âbisten  (fâr)"
  },
  {
    "latin": "abisteni",
    "ottoman": "‏آبستنی",
    "meaning": "âbistenî  (fâr)"
  },
  {
    "latin": "abiy",
    "ottoman": "‏عبی",
    "meaning": "abiy  (ar)"
  },
  {
    "latin": "abiye",
    "ottoman": "‏آبييە",
    "meaning": "abiye  (elbise)  (fr)"
  },
  {
    "latin": "abiye",
    "ottoman": "‏عابيە",
    "meaning": "abiye  (zarif kız)  (ar)"
  },
  {
    "latin": "abiye",
    "ottoman": "‏آبيە",
    "meaning": "âbiye  (yüzünü örten bayan)  (ar)"
  },
  {
    "latin": "abişhor",
    "ottoman": "‏آبشخور",
    "meaning": "âbişhor  (fâr)"
  },
  {
    "latin": "abişt-gah",
    "ottoman": "‏آبشتگاە",
    "meaning": "âbişt-gâh  (fâr)"
  },
  {
    "latin": "abkame",
    "ottoman": "‏آبكامە",
    "meaning": "âbkâme  (fâr)"
  },
  {
    "latin": "abkar",
    "ottoman": "‏آبكار",
    "meaning": "âbkâr  (fâr)"
  },
  {
    "latin": "abkari",
    "ottoman": "‏عبقری",
    "meaning": "abkarî  (ar)"
  },
  {
    "latin": "abl",
    "ottoman": "‏عبل",
    "meaning": "abl  (ar)"
  },
  {
    "latin": "abla",
    "ottoman": "‏آبلا",
    "meaning": "abla"
  },
  {
    "latin": "ablise",
    "ottoman": "‏آبليسە",
    "meaning": "âblîse  (fâr)"
  },
  {
    "latin": "abluka",
    "ottoman": "‏آبلوقە",
    "meaning": "abluka  (it)"
  },
  {
    "latin": "abone",
    "ottoman": "‏آبونە",
    "meaning": "abone  (fr)"
  },
  {
    "latin": "abonman",
    "ottoman": "‏آبونمان",
    "meaning": "abonman  (fr)"
  },
  {
    "latin": "abr",
    "ottoman": "‏عبر",
    "meaning": "abr  (ar)"
  },
  {
    "latin": "abra",
    "ottoman": "‏آبرە",
    "meaning": "abra"
  },
  {
    "latin": "abramak",
    "ottoman": "‏آبره مق",
    "meaning": "abramak"
  },
  {
    "latin": "abran",
    "ottoman": "‏عبران",
    "meaning": "abrân  (ar)"
  },
  {
    "latin": "abraş",
    "ottoman": "‏آبراش",
    "meaning": "âbrâş  (ar)"
  },
  {
    "latin": "abre",
    "ottoman": "‏عبرە",
    "meaning": "abre  (ar)"
  },
  {
    "latin": "abril",
    "ottoman": "‏آبريل",
    "meaning": "abril  (rûm)"
  },
  {
    "latin": "abs",
    "ottoman": "‏عبث",
    "meaning": "abs  (karıştırmak)  (ar)"
  },
  {
    "latin": "abs",
    "ottoman": "‏عبس",
    "meaning": "abs  (çehreyi çatmak)  (ar)"
  },
  {
    "latin": "abs",
    "ottoman": "‏ابس",
    "meaning": "abs  (kurumak)  (ar)"
  },
  {
    "latin": "absal",
    "ottoman": "‏آبسال",
    "meaning": "âbsâl  (fâr)"
  },
  {
    "latin": "abstre",
    "ottoman": "‏آبسترە",
    "meaning": "abstre  (fr)"
  },
  {
    "latin": "abt",
    "ottoman": "‏عبط",
    "meaning": "abt  (ar)"
  },
  {
    "latin": "abu",
    "ottoman": "‏آبو",
    "meaning": "âbû  (fâr)"
  },
  {
    "latin": "abuk sabuk",
    "ottoman": "‏آبوق صابوق",
    "meaning": "abuk sabuk"
  },
  {
    "latin": "abuli",
    "ottoman": "‏آبولی",
    "meaning": "abuli  (fr)"
  },
  {
    "latin": "abullabut",
    "ottoman": "‏آبوللابوط",
    "meaning": "abullabut"
  },
  {
    "latin": "aburcubur",
    "ottoman": "‏آبور جوبور",
    "meaning": "aburcubur"
  },
  {
    "latin": "abus",
    "ottoman": "‏عبوس",
    "meaning": "abûs  (ar)"
  },
  {
    "latin": "abuzer",
    "ottoman": "‏ابوذر",
    "meaning": "Abûzer  (ar)"
  },
  {
    "latin": "abuşka",
    "ottoman": "‏آبوشقە",
    "meaning": "Abuşka"
  },
  {
    "latin": "abv",
    "ottoman": "‏عبو",
    "meaning": "abv  (ar)"
  },
  {
    "latin": "abık",
    "ottoman": "‏آبق",
    "meaning": "âbık  (ar)"
  },
  {
    "latin": "abış",
    "ottoman": "‏عبش",
    "meaning": "Abış  (Sivas)"
  },
  {
    "latin": "abşar",
    "ottoman": "‏آبشار",
    "meaning": "Âbşâr  (fâr)"
  },
  {
    "latin": "ac",
    "ottoman": "‏عاج",
    "meaning": "âc  (ar)"
  },
  {
    "latin": "aca",
    "ottoman": "‏آجە",
    "meaning": "Aca"
  },
  {
    "latin": "acaba",
    "ottoman": "‏عجبًا",
    "meaning": "acabâ  (ar)"
  },
  {
    "latin": "acac",
    "ottoman": "‏عجاج",
    "meaning": "acâc  (bulut)  (ar)"
  },
  {
    "latin": "acac",
    "ottoman": "‏عجعاج",
    "meaning": "ac‘âc  (çağırış)  (ar)"
  },
  {
    "latin": "acace",
    "ottoman": "‏عجعجە",
    "meaning": "ac‘ace  (ar)"
  },
  {
    "latin": "acafet",
    "ottoman": "‏عجافت",
    "meaning": "acâfet  (ar)"
  },
  {
    "latin": "acaib",
    "ottoman": "‏عجائب",
    "meaning": "acâib  (ar)"
  },
  {
    "latin": "acaiz",
    "ottoman": "‏عجائز",
    "meaning": "acâiz  (ar)"
  },
  {
    "latin": "acak",
    "ottoman": "‏آجاك",
    "meaning": "âcâk  (fâr)"
  },
  {
    "latin": "acal",
    "ottoman": "‏آجال",
    "meaning": "âcâl  (ar)"
  },
  {
    "latin": "acalit",
    "ottoman": "‏عجالط",
    "meaning": "acâlit  (ar)"
  },
  {
    "latin": "acam",
    "ottoman": "‏اعجام",
    "meaning": "a‘câm  (acemler)  (ar)"
  },
  {
    "latin": "acam",
    "ottoman": "‏آجام",
    "meaning": "âcâm  (meşelik)  (ar)"
  },
  {
    "latin": "acan",
    "ottoman": "‏آجان",
    "meaning": "âcân  (fâr)"
  },
  {
    "latin": "acar",
    "ottoman": "‏آجار",
    "meaning": "Acar"
  },
  {
    "latin": "acar",
    "ottoman": "‏آجار",
    "meaning": "âcâr  (ecirler)  (ar)"
  },
  {
    "latin": "acasa",
    "ottoman": "‏عجاسا",
    "meaning": "acâsâ  (ar)"
  },
  {
    "latin": "acb",
    "ottoman": "‏عجب",
    "meaning": "acb  (ar)"
  },
  {
    "latin": "acc",
    "ottoman": "‏عاج",
    "meaning": "âcc  (bağıran)  (ar)"
  },
  {
    "latin": "acc",
    "ottoman": "‏عج",
    "meaning": "acc  (bağırmak)  (ar)"
  },
  {
    "latin": "accac",
    "ottoman": "‏عجاج",
    "meaning": "accâc  (ar)"
  },
  {
    "latin": "aceb",
    "ottoman": "‏اعجب",
    "meaning": "a‘ceb  (çok acâib)  (ar)"
  },
  {
    "latin": "aceb",
    "ottoman": "‏عجب",
    "meaning": "aceb  (hayret)  (ar)"
  },
  {
    "latin": "aceblat",
    "ottoman": "‏عجبلات",
    "meaning": "Aceblât  (Trâblusgarb)"
  },
  {
    "latin": "aced",
    "ottoman": "‏عجد",
    "meaning": "aced  (ar)"
  },
  {
    "latin": "acef",
    "ottoman": "‏اعجف",
    "meaning": "a‘cef  (ar)"
  },
  {
    "latin": "acel",
    "ottoman": "‏اعجل",
    "meaning": "a‘cel  (ar)"
  },
  {
    "latin": "acele",
    "ottoman": "‏عجلە",
    "meaning": "acele  (ar)"
  },
  {
    "latin": "aceleten",
    "ottoman": "‏عجلةً",
    "meaning": "aceleten  (bitki)  (ar)"
  },
  {
    "latin": "acem",
    "ottoman": "‏عجم",
    "meaning": "acem  (ar)"
  },
  {
    "latin": "acemistan",
    "ottoman": "‏عجمستان",
    "meaning": "Acemistân  (a/f)"
  },
  {
    "latin": "acemiyan",
    "ottoman": "‏عجميان",
    "meaning": "acemiyân  (a/f)"
  },
  {
    "latin": "acente",
    "ottoman": "‏آجنتە",
    "meaning": "acente  (it)"
  },
  {
    "latin": "acep",
    "ottoman": "‏عجب",
    "meaning": "acep  (ar)"
  },
  {
    "latin": "acez",
    "ottoman": "‏اعجز",
    "meaning": "a‘cez  (ar)"
  },
  {
    "latin": "aceze",
    "ottoman": "‏عجزە",
    "meaning": "aceze  (ar)"
  },
  {
    "latin": "acib",
    "ottoman": "‏عجيب",
    "meaning": "acîb  (tuhaf)  (ar)"
  },
  {
    "latin": "acib",
    "ottoman": "‏عاجب",
    "meaning": "âcib  (hayret veren)  (ar)"
  },
  {
    "latin": "acibe",
    "ottoman": "‏عجيبە",
    "meaning": "acîbe  (ar)"
  },
  {
    "latin": "acic",
    "ottoman": "‏عجيج",
    "meaning": "acîc  (ar)"
  },
  {
    "latin": "acil",
    "ottoman": "‏عاجل",
    "meaning": "âcil  (acele)  (ar)"
  },
  {
    "latin": "acil",
    "ottoman": "‏آجل",
    "meaning": "âcil  (ertelenmiş)  (ar)"
  },
  {
    "latin": "acilane",
    "ottoman": "‏عاجلانە",
    "meaning": "âcilâne  (a/f)"
  },
  {
    "latin": "acilat",
    "ottoman": "‏عجيلات",
    "meaning": "Acîlât  (Trâblusgarb)"
  },
  {
    "latin": "acilen",
    "ottoman": "‏آجلاً",
    "meaning": "âcilen  (sonradan)  (ar)"
  },
  {
    "latin": "acilen",
    "ottoman": "‏عاجلاً",
    "meaning": "âcilen  (derhal)  (ar)"
  },
  {
    "latin": "acin",
    "ottoman": "‏عجين",
    "meaning": "acîn  (yoğurulmuş nesne)  (ar)"
  },
  {
    "latin": "acin",
    "ottoman": "‏آجن",
    "meaning": "âcin  (pis su)  (ar)"
  },
  {
    "latin": "acini",
    "ottoman": "‏عجينی",
    "meaning": "acînî  (ar)"
  },
  {
    "latin": "aciniyet",
    "ottoman": "‏عجينيت",
    "meaning": "acîniyet  (ar)"
  },
  {
    "latin": "acir",
    "ottoman": "‏آجر",
    "meaning": "âcir  (ar)"
  },
  {
    "latin": "aciyy",
    "ottoman": "‏عجی",
    "meaning": "aciyy  (ar)"
  },
  {
    "latin": "aciyye",
    "ottoman": "‏عجيە",
    "meaning": "aciyye  (ar)"
  },
  {
    "latin": "aciz",
    "ottoman": "‏عاجز",
    "meaning": "âciz  (ar)"
  },
  {
    "latin": "acizan",
    "ottoman": "‏عاجزان",
    "meaning": "âcizân  (ar)"
  },
  {
    "latin": "aciziyet",
    "ottoman": "‏عاجزيت",
    "meaning": "âciziyet  (ar)"
  },
  {
    "latin": "aciş",
    "ottoman": "‏آجيش",
    "meaning": "âcîş  (fâr)"
  },
  {
    "latin": "aclan",
    "ottoman": "‏عجلان",
    "meaning": "Aclân  (ar)"
  },
  {
    "latin": "acled",
    "ottoman": "‏عجلد",
    "meaning": "acled  (ar)"
  },
  {
    "latin": "aclez",
    "ottoman": "‏عجلز",
    "meaning": "aclez  (ar)"
  },
  {
    "latin": "aclun",
    "ottoman": "‏عجلون",
    "meaning": "Aclûn  (Sûriye)"
  },
  {
    "latin": "acm",
    "ottoman": "‏عجم",
    "meaning": "acm  (ar)"
  },
  {
    "latin": "acmi",
    "ottoman": "‏عجمی",
    "meaning": "acmî  (ar)"
  },
  {
    "latin": "acn",
    "ottoman": "‏عجن",
    "meaning": "acn  (ar)"
  },
  {
    "latin": "acul",
    "ottoman": "‏عجول",
    "meaning": "acûl  (ar)"
  },
  {
    "latin": "aculane",
    "ottoman": "‏عجولانە",
    "meaning": "acûlâne  (a/f)"
  },
  {
    "latin": "aculiyet",
    "ottoman": "‏عجوليت",
    "meaning": "acûliyet  (ar)"
  },
  {
    "latin": "acun",
    "ottoman": "‏آجون",
    "meaning": "Acun"
  },
  {
    "latin": "acunal",
    "ottoman": "‏آجونال",
    "meaning": "Acunal"
  },
  {
    "latin": "acunman",
    "ottoman": "‏آجونمان",
    "meaning": "Acunman"
  },
  {
    "latin": "acur",
    "ottoman": "‏عجور",
    "meaning": "acûr  (bitki)  (ar)"
  },
  {
    "latin": "acuz",
    "ottoman": "‏عجوز",
    "meaning": "acûz  (ar)"
  },
  {
    "latin": "acuz",
    "ottoman": "‏عجوز",
    "meaning": "Acûz  (Diyârbekir)"
  },
  {
    "latin": "acuze",
    "ottoman": "‏عجوزە",
    "meaning": "acûze  (ar)"
  },
  {
    "latin": "acv",
    "ottoman": "‏عجو",
    "meaning": "acv  (ar)"
  },
  {
    "latin": "acve",
    "ottoman": "‏عجوە",
    "meaning": "acve  (ar)"
  },
  {
    "latin": "acvet",
    "ottoman": "‏عجوت",
    "meaning": "acvet  (ar)"
  },
  {
    "latin": "acyo",
    "ottoman": "‏آجيو",
    "meaning": "acyo  (it)"
  },
  {
    "latin": "acz",
    "ottoman": "‏عجز",
    "meaning": "acz  (ar)"
  },
  {
    "latin": "acz-mendi",
    "ottoman": "‏عجز مندی",
    "meaning": "acz-mendî  (a/f)"
  },
  {
    "latin": "acza",
    "ottoman": "‏عجزا",
    "meaning": "aczâ  (ar)"
  },
  {
    "latin": "acze",
    "ottoman": "‏عجزە",
    "meaning": "acze  (ar)"
  },
  {
    "latin": "acür",
    "ottoman": "‏آجر",
    "meaning": "âcür  (tuğla)  (ar)"
  },
  {
    "latin": "acür",
    "ottoman": "‏عجر",
    "meaning": "acür  (yoğun)  (ar)"
  },
  {
    "latin": "acüs",
    "ottoman": "‏عجس",
    "meaning": "acüs  (ar)"
  },
  {
    "latin": "acüz",
    "ottoman": "‏عجز",
    "meaning": "acüz  (ar)"
  },
  {
    "latin": "acı",
    "ottoman": "‏آجی",
    "meaning": "acı"
  },
  {
    "latin": "acı badem",
    "ottoman": "‏آجی بادم",
    "meaning": "acı badem"
  },
  {
    "latin": "acıkmak",
    "ottoman": "‏آجيقمق",
    "meaning": "acıkmak"
  },
  {
    "latin": "acıpayam",
    "ottoman": "‏آجيپايام",
    "meaning": "Acıpayam  (yer ismi)"
  },
  {
    "latin": "acırak",
    "ottoman": "‏آجيراق،-غی",
    "meaning": "acırak,-ğı"
  },
  {
    "latin": "acırga",
    "ottoman": "‏آجيرغە",
    "meaning": "acırga"
  },
  {
    "latin": "ad",
    "ottoman": "‏آد",
    "meaning": "ad  (isim)"
  },
  {
    "latin": "ad",
    "ottoman": "‏عاد",
    "meaning": "âd  (âdetler; bir kavim)  (ar)"
  },
  {
    "latin": "ada",
    "ottoman": "‏آطە",
    "meaning": "ada  (kara parçası)"
  },
  {
    "latin": "ada",
    "ottoman": "‏اعدا",
    "meaning": "a‘dâ  (düşmanlar; gaddâr)  (ar)"
  },
  {
    "latin": "ada",
    "ottoman": "‏عدا",
    "meaning": "adâ  (harf-i cerr)  (ar)"
  },
  {
    "latin": "adab",
    "ottoman": "‏اعضب",
    "meaning": "a‘dab  (ar)"
  },
  {
    "latin": "adab",
    "ottoman": "‏آداب",
    "meaning": "âdâb  (usûl, terbiye)  (ar)"
  },
  {
    "latin": "adab-ı muaşeret",
    "ottoman": "‏آداب معاشرت",
    "meaning": "âdâb-ı muâşeret  (A/fi)"
  },
  {
    "latin": "adad",
    "ottoman": "‏اعضاد",
    "meaning": "a‘dâd  (kollar)  (ar)"
  },
  {
    "latin": "adad",
    "ottoman": "‏اعداد",
    "meaning": "a‘dâd  (adedler)  (ar)"
  },
  {
    "latin": "adahik",
    "ottoman": "‏اضاحك",
    "meaning": "adâhik  (ar)"
  },
  {
    "latin": "adak",
    "ottoman": "‏آداق",
    "meaning": "adak,-ğı"
  },
  {
    "latin": "adakk",
    "ottoman": "‏ادق",
    "meaning": "adakk  (ar)"
  },
  {
    "latin": "adal",
    "ottoman": "‏عدال",
    "meaning": "adâl  (para)  (ar)"
  },
  {
    "latin": "adal",
    "ottoman": "‏اعدال",
    "meaning": "a‘dâl  (denkler)  (ar)"
  },
  {
    "latin": "adala",
    "ottoman": "‏آطالە",
    "meaning": "Adala  (Aydın)"
  },
  {
    "latin": "adalat",
    "ottoman": "‏عضلات",
    "meaning": "adalât  (ar)"
  },
  {
    "latin": "adale",
    "ottoman": "‏عضلە",
    "meaning": "adale  (ar)"
  },
  {
    "latin": "adalet",
    "ottoman": "‏عدالت",
    "meaning": "adâlet  (ar)"
  },
  {
    "latin": "adalet-penah",
    "ottoman": "‏عدالتپناە",
    "meaning": "adâlet-penâh  (a/f)"
  },
  {
    "latin": "adall",
    "ottoman": "‏اضل",
    "meaning": "adall  (ar)"
  },
  {
    "latin": "adam",
    "ottoman": "‏آدم",
    "meaning": "adam  (ar)"
  },
  {
    "latin": "adamak",
    "ottoman": "‏آدامق",
    "meaning": "adamak"
  },
  {
    "latin": "adamet",
    "ottoman": "‏عدامت",
    "meaning": "adâmet  (ar)"
  },
  {
    "latin": "adan",
    "ottoman": "‏عدان",
    "meaning": "adân  (ar)"
  },
  {
    "latin": "adana",
    "ottoman": "‏آطنە",
    "meaning": "Adana"
  },
  {
    "latin": "adanmak",
    "ottoman": "‏آدانمق",
    "meaning": "adanmak"
  },
  {
    "latin": "adaptasyon",
    "ottoman": "‏آداپتاسيون",
    "meaning": "adaptasyon  (fr)"
  },
  {
    "latin": "adapte",
    "ottoman": "‏آداپتە",
    "meaning": "adapte  (fr)"
  },
  {
    "latin": "adaptör",
    "ottoman": "‏آداپتور",
    "meaning": "adaptör  (fr)"
  },
  {
    "latin": "adarr",
    "ottoman": "‏اضر",
    "meaning": "adarr  (ar)"
  },
  {
    "latin": "adas",
    "ottoman": "‏اعداس",
    "meaning": "a‘dâs  (ar)"
  },
  {
    "latin": "adat",
    "ottoman": "‏عادات",
    "meaning": "âdât  (ar)"
  },
  {
    "latin": "adatmak",
    "ottoman": "‏آداتمق",
    "meaning": "adatmak"
  },
  {
    "latin": "adavet",
    "ottoman": "‏عداوت",
    "meaning": "adâvet  (ar)"
  },
  {
    "latin": "aday",
    "ottoman": "‏آدای",
    "meaning": "aday"
  },
  {
    "latin": "adaş",
    "ottoman": "‏آداش",
    "meaning": "adaş"
  },
  {
    "latin": "adb",
    "ottoman": "‏عضب",
    "meaning": "adb  (ar)"
  },
  {
    "latin": "adcem",
    "ottoman": "‏اضجم",
    "meaning": "adcem  (ar)"
  },
  {
    "latin": "add",
    "ottoman": "‏آد",
    "meaning": "âdd  (kuvvet)  (ar)"
  },
  {
    "latin": "add",
    "ottoman": "‏عد",
    "meaning": "add  (saymak)  (ar)"
  },
  {
    "latin": "addar",
    "ottoman": "‏عدار",
    "meaning": "addâr  (ar)"
  },
  {
    "latin": "addetmek",
    "ottoman": "‏عد ايتمك",
    "meaning": "addetmek"
  },
  {
    "latin": "ade",
    "ottoman": "‏عادە",
    "meaning": "âde  (ar)"
  },
  {
    "latin": "aded",
    "ottoman": "‏عدد",
    "meaning": "aded  (ar)"
  },
  {
    "latin": "adeden",
    "ottoman": "‏عددًا",
    "meaning": "adeden  (ar)"
  },
  {
    "latin": "adem",
    "ottoman": "‏آدم",
    "meaning": "âdem  (insan)  (ar)"
  },
  {
    "latin": "adem",
    "ottoman": "‏عدم",
    "meaning": "adem  (yokluk)  (ar)"
  },
  {
    "latin": "adem-abad",
    "ottoman": "‏عدم آباد",
    "meaning": "adem-âbâd  (a/f)"
  },
  {
    "latin": "ademan",
    "ottoman": "‏آدمان",
    "meaning": "âdemân  (ar)"
  },
  {
    "latin": "ademiyan",
    "ottoman": "‏آدميان",
    "meaning": "âdemiyân  (a/f)"
  },
  {
    "latin": "ademiyat",
    "ottoman": "‏عدميات",
    "meaning": "ademiyât  (ar)"
  },
  {
    "latin": "aden",
    "ottoman": "عدن",
    "meaning": "aden (ar)"
  },
  {
    "latin": "adenit",
    "ottoman": "‏آدنيت",
    "meaning": "adenit  (fr)"
  },
  {
    "latin": "ader",
    "ottoman": "‏آدر",
    "meaning": "âder  (fâr)"
  },
  {
    "latin": "ades",
    "ottoman": "‏عدس",
    "meaning": "ades  (ar)"
  },
  {
    "latin": "adese",
    "ottoman": "‏عدسە",
    "meaning": "adese  (ar)"
  },
  {
    "latin": "adeta",
    "ottoman": "‏عادتا",
    "meaning": "âdetâ  (ar)"
  },
  {
    "latin": "adeten",
    "ottoman": "‏عادتًا",
    "meaning": "âdeten  (ar)"
  },
  {
    "latin": "adetullah",
    "ottoman": "‏عادت اللّٰە",
    "meaning": "âdetullâh  (Ai)"
  },
  {
    "latin": "adevan",
    "ottoman": "‏عدوان",
    "meaning": "adevân  (ar)"
  },
  {
    "latin": "adeviye",
    "ottoman": "‏عدويە",
    "meaning": "Adeviye  (ar)"
  },
  {
    "latin": "adgas",
    "ottoman": "‏اضغاث",
    "meaning": "adgās  (ar)"
  },
  {
    "latin": "adha",
    "ottoman": "‏اضحا",
    "meaning": "adhâ  (ar)"
  },
  {
    "latin": "adham",
    "ottoman": "‏اضخم",
    "meaning": "adham  (ar)"
  },
  {
    "latin": "adi",
    "ottoman": "‏عادی",
    "meaning": "âdî  (ar)"
  },
  {
    "latin": "adid",
    "ottoman": "‏عديد",
    "meaning": "adîd  (çok)  (ar)"
  },
  {
    "latin": "adid",
    "ottoman": "‏عضيض",
    "meaning": "adîd  (hasım)  (ar)"
  },
  {
    "latin": "adih",
    "ottoman": "‏عاضە",
    "meaning": "âdih  (ar)"
  },
  {
    "latin": "adihe",
    "ottoman": "‏عضيهە",
    "meaning": "adîhe  (ar)"
  },
  {
    "latin": "adil",
    "ottoman": "‏عادل",
    "meaning": "âdil  (adâletli)  (ar)"
  },
  {
    "latin": "adil",
    "ottoman": "‏عديل",
    "meaning": "adîl  (denk)  (ar)"
  },
  {
    "latin": "adile",
    "ottoman": "‏عادلە",
    "meaning": "Âdile  (ar)"
  },
  {
    "latin": "adim",
    "ottoman": "‏عديم",
    "meaning": "adîm  (ar)"
  },
  {
    "latin": "adin",
    "ottoman": "‏عادن",
    "meaning": "âdin  (ar)"
  },
  {
    "latin": "adisyon",
    "ottoman": "‏آديسيون",
    "meaning": "adisyon  (fr)"
  },
  {
    "latin": "adiy",
    "ottoman": "‏عدی",
    "meaning": "Adiy  (ar)"
  },
  {
    "latin": "adiyat",
    "ottoman": "‏عاديات",
    "meaning": "âdiyât  (ar)"
  },
  {
    "latin": "adiye",
    "ottoman": "‏عاديە",
    "meaning": "âdiye  (ar)"
  },
  {
    "latin": "adiyen",
    "ottoman": "‏عاديًا",
    "meaning": "âdiyen  (ar)"
  },
  {
    "latin": "adiyet",
    "ottoman": "‏عاديت",
    "meaning": "âdiyet  (ar)"
  },
  {
    "latin": "adiş",
    "ottoman": "‏آديش",
    "meaning": "âdîş  (fâr)"
  },
  {
    "latin": "adk",
    "ottoman": "‏عدك",
    "meaning": "adk  (ar)"
  },
  {
    "latin": "adl",
    "ottoman": "‏عضل",
    "meaning": "adl  (men‘ etme)  (ar)"
  },
  {
    "latin": "adl",
    "ottoman": "‏عدل",
    "meaning": "adl  (adâlet)  (ar)"
  },
  {
    "latin": "adl-penah",
    "ottoman": "‏عدلپناە",
    "meaning": "adl-penâh  (a/f)"
  },
  {
    "latin": "adla",
    "ottoman": "‏اضلاع",
    "meaning": "adlâ‘  (ar)"
  },
  {
    "latin": "adliye",
    "ottoman": "‏عدليە",
    "meaning": "adliye  (ar)"
  },
  {
    "latin": "adm",
    "ottoman": "‏اضم",
    "meaning": "adm  (ar)"
  },
  {
    "latin": "admer",
    "ottoman": "‏عضمر",
    "meaning": "admer  (ar)"
  },
  {
    "latin": "adn",
    "ottoman": "‏عدن",
    "meaning": "adn  (ar)"
  },
  {
    "latin": "adnan",
    "ottoman": "‏عدنان",
    "meaning": "Adnân  (ar)"
  },
  {
    "latin": "adniye",
    "ottoman": "‏عدنيە",
    "meaning": "Adniye  (ar)"
  },
  {
    "latin": "adrahş",
    "ottoman": "‏آدرخش",
    "meaning": "âdrahş  (fâr)"
  },
  {
    "latin": "adras",
    "ottoman": "‏اضراس",
    "meaning": "adrâs  (ar)"
  },
  {
    "latin": "adrat",
    "ottoman": "‏اضرط",
    "meaning": "adrat  (ar)"
  },
  {
    "latin": "adrefut",
    "ottoman": "‏عضرفوط",
    "meaning": "adrefût  (ar)"
  },
  {
    "latin": "adrenalin",
    "ottoman": "‏آدره نالين",
    "meaning": "adrenalin  (fr)"
  },
  {
    "latin": "adreng",
    "ottoman": "‏آدرنگ",
    "meaning": "âdreng  (fâr)"
  },
  {
    "latin": "adres",
    "ottoman": "‏آدرس",
    "meaning": "adres  (fr)"
  },
  {
    "latin": "adub",
    "ottoman": "‏عضوب",
    "meaning": "adûb  (ar)"
  },
  {
    "latin": "adud",
    "ottoman": "‏عضوض",
    "meaning": "adûd  (zâlim)  (ar)"
  },
  {
    "latin": "adud",
    "ottoman": "‏عضد",
    "meaning": "adud  (pazu)  (ar)"
  },
  {
    "latin": "adude",
    "ottoman": "‏عضوضە",
    "meaning": "adûde  (ar)"
  },
  {
    "latin": "adudiye",
    "ottoman": "‏عضديە",
    "meaning": "adudiye  (ar)"
  },
  {
    "latin": "adul",
    "ottoman": "‏عدول",
    "meaning": "adûl  (ar)"
  },
  {
    "latin": "adv",
    "ottoman": "‏عدو",
    "meaning": "adv  (ar)"
  },
  {
    "latin": "advan",
    "ottoman": "‏عدوان",
    "meaning": "advân  (ar)"
  },
  {
    "latin": "adya",
    "ottoman": "‏عضيا",
    "meaning": "adyâ  (ar)"
  },
  {
    "latin": "adye",
    "ottoman": "‏عضيە",
    "meaning": "adye  (ar)"
  },
  {
    "latin": "adyende",
    "ottoman": "‏آديندە",
    "meaning": "âdyende  (fâr)"
  },
  {
    "latin": "adüvv",
    "ottoman": "‏عدو",
    "meaning": "adüvv  (ar)"
  },
  {
    "latin": "adüvvüd-din",
    "ottoman": "‏عدو الدين",
    "meaning": "adüvvü’d-dîn  (Ai)"
  },
  {
    "latin": "adım",
    "ottoman": "‏آديم",
    "meaning": "adım"
  },
  {
    "latin": "adıyaman",
    "ottoman": "‏آدی يامان",
    "meaning": "Adıyaman"
  },
  {
    "latin": "af",
    "ottoman": "‏عفو",
    "meaning": "af  (ar)"
  },
  {
    "latin": "afa",
    "ottoman": "‏عفا",
    "meaning": "afâ  (ar)"
  },
  {
    "latin": "afacan",
    "ottoman": "‏آفاجان",
    "meaning": "afacan"
  },
  {
    "latin": "afaf",
    "ottoman": "‏عفاف",
    "meaning": "afâf  (temiz)  (ar)"
  },
  {
    "latin": "afaf",
    "ottoman": "‏عفعف",
    "meaning": "af‘af  (yemiş)  (ar)"
  },
  {
    "latin": "afafet",
    "ottoman": "‏عفافت",
    "meaning": "Afâfet  (ar)"
  },
  {
    "latin": "afaif",
    "ottoman": "‏عفائف",
    "meaning": "afâif  (ar)"
  },
  {
    "latin": "afak",
    "ottoman": "‏آفاق",
    "meaning": "âfâk  (ar)"
  },
  {
    "latin": "afak-gir",
    "ottoman": "‏آفاقگير",
    "meaning": "âfâk-gîr  (a/f)"
  },
  {
    "latin": "afal afal",
    "ottoman": "‏آفال آفال",
    "meaning": "afal afal"
  },
  {
    "latin": "afar",
    "ottoman": "‏عفار",
    "meaning": "afâr  (ar)"
  },
  {
    "latin": "afaret",
    "ottoman": "‏عفارت",
    "meaning": "afâret  (ar)"
  },
  {
    "latin": "afarit",
    "ottoman": "‏عفاريت",
    "meaning": "afârît  (ar)"
  },
  {
    "latin": "afat",
    "ottoman": "‏آفات",
    "meaning": "âfât  (ar)"
  },
  {
    "latin": "afazi",
    "ottoman": "‏آفازی",
    "meaning": "afazi  (fr)"
  },
  {
    "latin": "afen",
    "ottoman": "‏عفن",
    "meaning": "afen  (ar)"
  },
  {
    "latin": "afend",
    "ottoman": "‏آفند",
    "meaning": "âfend  (fâr)"
  },
  {
    "latin": "afendak",
    "ottoman": "‏آفنداك",
    "meaning": "âfendâk  (fâr)"
  },
  {
    "latin": "afer",
    "ottoman": "‏اعفر",
    "meaning": "a‘fer  (beyaz)  (ar)"
  },
  {
    "latin": "afer",
    "ottoman": "‏عفر",
    "meaning": "afer  (toprak)  (ar)"
  },
  {
    "latin": "aferca",
    "ottoman": "‏عفرجع",
    "meaning": "aferca‘  (ar)"
  },
  {
    "latin": "aferide",
    "ottoman": "‏آفريدە",
    "meaning": "âferîde  (fâr)"
  },
  {
    "latin": "aferin",
    "ottoman": "‏آفرين",
    "meaning": "âferîn  (fâr)"
  },
  {
    "latin": "aferinende",
    "ottoman": "‏آفرينندە",
    "meaning": "âferînende  (fâr)"
  },
  {
    "latin": "aferiniş",
    "ottoman": "‏آفرينش",
    "meaning": "âferîniş  (fâr)"
  },
  {
    "latin": "aferist",
    "ottoman": "‏آفريست",
    "meaning": "aferist  (fr)"
  },
  {
    "latin": "aferna",
    "ottoman": "‏عفرنا",
    "meaning": "afernâ  (ar)"
  },
  {
    "latin": "afes",
    "ottoman": "‏عفص",
    "meaning": "afes  (ar)"
  },
  {
    "latin": "afet",
    "ottoman": "‏آفت",
    "meaning": "âfet  (belâ)  (ar)"
  },
  {
    "latin": "afet",
    "ottoman": "‏اعفت",
    "meaning": "a‘fet  (en güç)  (ar)"
  },
  {
    "latin": "afet-zede",
    "ottoman": "‏آفتزدە",
    "meaning": "âfet-zede  (a/f)"
  },
  {
    "latin": "aff",
    "ottoman": "‏عف",
    "meaning": "aff  (iffet)  (ar)"
  },
  {
    "latin": "affan",
    "ottoman": "‏عفان",
    "meaning": "Affân  (ar)"
  },
  {
    "latin": "afgan",
    "ottoman": "‏افغان",
    "meaning": "Afgān  (ar)"
  },
  {
    "latin": "afganistan",
    "ottoman": "‏افغانستان (كابل)",
    "meaning": "Afgānistân  (Kâbil)"
  },
  {
    "latin": "afi",
    "ottoman": "‏آفی",
    "meaning": "afi  (gösteriş)"
  },
  {
    "latin": "afi",
    "ottoman": "‏عافی",
    "meaning": "âfî  (affeden, silen)  (ar)"
  },
  {
    "latin": "afif",
    "ottoman": "‏عفيف",
    "meaning": "afîf  (ar)"
  },
  {
    "latin": "afife",
    "ottoman": "‏عفيفە",
    "meaning": "Afîfe  (ar)"
  },
  {
    "latin": "afik",
    "ottoman": "‏عفيك",
    "meaning": "afîk  (çok aptal)  (ar)"
  },
  {
    "latin": "afik",
    "ottoman": "‏آفك",
    "meaning": "âfik  (yalancı)  (ar)"
  },
  {
    "latin": "afil",
    "ottoman": "‏آفل",
    "meaning": "âfil  (ar)"
  },
  {
    "latin": "afilin",
    "ottoman": "‏آفلين",
    "meaning": "âfilîn  (ar)"
  },
  {
    "latin": "afilun",
    "ottoman": "‏آفلون",
    "meaning": "âfilûn  (ar)"
  },
  {
    "latin": "afin",
    "ottoman": "‏عافين",
    "meaning": "âfîn  (ar)"
  },
  {
    "latin": "afinite",
    "ottoman": "‏آفينيتە",
    "meaning": "afinite  (fr)"
  },
  {
    "latin": "afir",
    "ottoman": "‏عفير",
    "meaning": "afîr  (et)  (ar)"
  },
  {
    "latin": "afir",
    "ottoman": "‏عفر",
    "meaning": "afir  (kötü niyetli)  (ar)"
  },
  {
    "latin": "afire",
    "ottoman": "‏عفيرە",
    "meaning": "afîre  (ar)"
  },
  {
    "latin": "afis",
    "ottoman": "‏آفيس",
    "meaning": "afis"
  },
  {
    "latin": "afitab",
    "ottoman": "‏آفتاب",
    "meaning": "âfitâb  (fâr)"
  },
  {
    "latin": "afiyet",
    "ottoman": "‏عافيت",
    "meaning": "âfiyet  (ar)"
  },
  {
    "latin": "afiş",
    "ottoman": "‏آفيش",
    "meaning": "afiş  (fr)"
  },
  {
    "latin": "afişe",
    "ottoman": "‏آفيشە",
    "meaning": "afişe  (fr)"
  },
  {
    "latin": "afk",
    "ottoman": "‏عفك",
    "meaning": "afk  (akılsızlık)  (ar)"
  },
  {
    "latin": "afk",
    "ottoman": "‏عفق",
    "meaning": "afk  (dönme)  (ar)"
  },
  {
    "latin": "aflak",
    "ottoman": "‏عفلق",
    "meaning": "aflak  (ar)"
  },
  {
    "latin": "aforizm",
    "ottoman": "‏آفوريزم",
    "meaning": "aforizm  (fr)"
  },
  {
    "latin": "aforoz",
    "ottoman": "‏آفوروز",
    "meaning": "aforoz  (rûm)"
  },
  {
    "latin": "afra",
    "ottoman": "‏عفرا",
    "meaning": "afrâ  (ar)"
  },
  {
    "latin": "afra tafra",
    "ottoman": "‏آفره طافرە",
    "meaning": "afra tafra"
  },
  {
    "latin": "afraze",
    "ottoman": "‏آفرازە",
    "meaning": "âfrâze  (fâr)"
  },
  {
    "latin": "afreye",
    "ottoman": "‏عفريە",
    "meaning": "afreye  (ar)"
  },
  {
    "latin": "afrika",
    "ottoman": "‏آفريقە",
    "meaning": "Afrika"
  },
  {
    "latin": "afrikiye",
    "ottoman": "‏آفريقيە",
    "meaning": "Afrikiye  (Tûnus)"
  },
  {
    "latin": "afruşe",
    "ottoman": "‏آفروشە",
    "meaning": "âfrûşe  (fâr)"
  },
  {
    "latin": "afs",
    "ottoman": "‏عفس",
    "meaning": "afs  (ar)"
  },
  {
    "latin": "afsa",
    "ottoman": "‏عفصا",
    "meaning": "afsâ  (ar)"
  },
  {
    "latin": "afsun",
    "ottoman": "‏افسون",
    "meaning": "afsun  (fâr)"
  },
  {
    "latin": "aft",
    "ottoman": "‏عفت",
    "meaning": "aft  (ar)"
  },
  {
    "latin": "aftab",
    "ottoman": "‏آفتاب",
    "meaning": "âftâb  (fâr)"
  },
  {
    "latin": "aftab-gerdan",
    "ottoman": "‏آفتابگردان",
    "meaning": "âftâb-gerdân  (fâr)"
  },
  {
    "latin": "aftab-gerdek",
    "ottoman": "‏آفتابگردك",
    "meaning": "âftâb-gerdek  (fâr)"
  },
  {
    "latin": "aftab-gerdiş",
    "ottoman": "‏آفتابگردش",
    "meaning": "âftâb-gerdiş  (fâr)"
  },
  {
    "latin": "aftab-gir",
    "ottoman": "‏آفتابگير",
    "meaning": "âftâb-gîr  (fâr)"
  },
  {
    "latin": "aftab-perest",
    "ottoman": "‏آفتابپرست",
    "meaning": "âftâb-perest  (fâr)"
  },
  {
    "latin": "aftab-ru",
    "ottoman": "‏آفتابرو",
    "meaning": "âftâb-rû  (fâr)"
  },
  {
    "latin": "aftab-ı kureyş",
    "ottoman": "‏آفتاب قريش",
    "meaning": "Âftâb-ı Kureyş  (fi/a)"
  },
  {
    "latin": "afur",
    "ottoman": "‏عافور",
    "meaning": "âfûr  (belâ kasırgası)  (ar)"
  },
  {
    "latin": "afur",
    "ottoman": "‏عفر",
    "meaning": "afur  (geyik)  (ar)"
  },
  {
    "latin": "afur tafur",
    "ottoman": "‏آفور طافور",
    "meaning": "afur tafur"
  },
  {
    "latin": "afv",
    "ottoman": "‏عفو",
    "meaning": "afv  (ar)"
  },
  {
    "latin": "afyon",
    "ottoman": "‏آفيون",
    "meaning": "afyon  (ar)"
  },
  {
    "latin": "afyon",
    "ottoman": "‏آفيون",
    "meaning": "Afyon"
  },
  {
    "latin": "afyon-keş",
    "ottoman": "‏آفيونكش",
    "meaning": "afyon-keş  (a/f)"
  },
  {
    "latin": "afyonkarahisar",
    "ottoman": "آفيون قره حصار",
    "meaning": "Afyonkarahisar"
  },
  {
    "latin": "afüv",
    "ottoman": "‏عفو",
    "meaning": "Afüv  (ar)"
  },
  {
    "latin": "afşar",
    "ottoman": "‏آفشار",
    "meaning": "afşar"
  },
  {
    "latin": "afşelil",
    "ottoman": "‏عفشليل",
    "meaning": "afşelîl  (ar)"
  },
  {
    "latin": "afşin",
    "ottoman": "‏آفشين",
    "meaning": "Afşin  (yer ismi)"
  },
  {
    "latin": "agah",
    "ottoman": "‏آگاە",
    "meaning": "âgâh  (fâr)"
  },
  {
    "latin": "agal",
    "ottoman": "‏آغال",
    "meaning": "âgāl  (fâr)"
  },
  {
    "latin": "agaliş",
    "ottoman": "‏آغالش",
    "meaning": "âgāliş  (fâr)"
  },
  {
    "latin": "agan",
    "ottoman": "‏آغان",
    "meaning": "Agan"
  },
  {
    "latin": "agande",
    "ottoman": "‏آغندە",
    "meaning": "âgande  (fâr)"
  },
  {
    "latin": "agaragar",
    "ottoman": "‏آغاراغار",
    "meaning": "agaragar  (mala)"
  },
  {
    "latin": "agarr",
    "ottoman": "‏اغر",
    "meaning": "agarr  (ar)"
  },
  {
    "latin": "agarrül-eyyam",
    "ottoman": "‏اغر الايام",
    "meaning": "agarrü’l-eyyâm  (Ai)"
  },
  {
    "latin": "agavat",
    "ottoman": "‏آغوات",
    "meaning": "Ağalar (Arapça kurala göre yapılmış çoğul şekli)"
  },
  {
    "latin": "agayan",
    "ottoman": "‏آغايان",
    "meaning": "Ağanın Farsça kuralına göre yapılmış cemi şekli"
  },
  {
    "latin": "agaz",
    "ottoman": "‏آغاز",
    "meaning": "Başlama  (fâr)"
  },
  {
    "latin": "agaze",
    "ottoman": "‏آغازە",
    "meaning": "âgāze  (fâr)"
  },
  {
    "latin": "agaşte",
    "ottoman": "‏آغشتە",
    "meaning": "Bulaşmış, bulaşık (fâr)"
  },
  {
    "latin": "agel",
    "ottoman": "آگل",
    "meaning": "kumaştan burma çember  (far)"
  },
  {
    "latin": "agende",
    "ottoman": "‏آگندە",
    "meaning": "âgende  (fâr)"
  },
  {
    "latin": "ageste",
    "ottoman": "‏آگستە",
    "meaning": "Islak (fâr)"
  },
  {
    "latin": "agin",
    "ottoman": "‏آگين",
    "meaning": "Dolu (fâr)"
  },
  {
    "latin": "agiye",
    "ottoman": "‏آغيە",
    "meaning": "İçinde su biriken çukur  (ar)"
  },
  {
    "latin": "agnostisizm",
    "ottoman": "‏آغنوستيسيزم",
    "meaning": "agnostisizm  (fr)"
  },
  {
    "latin": "agora",
    "ottoman": "‏آغورە",
    "meaning": "agora  (rûm)"
  },
  {
    "latin": "agorafobi",
    "ottoman": "‏آغورافوبی",
    "meaning": "agorafobi  (fr)"
  },
  {
    "latin": "agraf",
    "ottoman": "‏آغراف",
    "meaning": "Kopça, kanca  (fr)"
  },
  {
    "latin": "agrafa",
    "ottoman": "‏آغرافە",
    "meaning": "Agrafa  (Selânik)"
  },
  {
    "latin": "agrandisman",
    "ottoman": "‏آغرانديسمان",
    "meaning": "Büyütme  (fr)"
  },
  {
    "latin": "agrandisör",
    "ottoman": "‏آغرانديسور",
    "meaning": "Fotoğrafçılıkta resimleri negatifinden büyütmeye yarayan âlet, büyülteç  (fr)"
  },
  {
    "latin": "agros",
    "ottoman": "‏اغروس",
    "meaning": "Agros  (Karaman)"
  },
  {
    "latin": "agu",
    "ottoman": "‏آغو",
    "meaning": "Henüz konuşma çağına gelmemiş bebeklerin neşelendikleri zaman çıkardıkları ses."
  },
  {
    "latin": "aguş",
    "ottoman": "‏آغوش",
    "meaning": "Kucak (fâr)"
  },
  {
    "latin": "agü",
    "ottoman": "‏آگو",
    "meaning": "Agü  (Bağdâd)"
  },
  {
    "latin": "agüs",
    "ottoman": "‏آگس",
    "meaning": "Demir kalem  (fâr)"
  },
  {
    "latin": "ah",
    "ottoman": "‏آە",
    "meaning": "ah  (ünlem)"
  },
  {
    "latin": "ah",
    "ottoman": "‏آخ",
    "meaning": "âh  (âferin)  (fâr)"
  },
  {
    "latin": "ah",
    "ottoman": "‏اخ",
    "meaning": "ah  (kardeş)  (ar)"
  },
  {
    "latin": "ah u zar",
    "ottoman": "‏آه و زار",
    "meaning": "ah u zâr  (t/fb)"
  },
  {
    "latin": "aha",
    "ottoman": "‏آها",
    "meaning": "aha  (ünlem)"
  },
  {
    "latin": "ahabir",
    "ottoman": "‏اخابير",
    "meaning": "Haberler  (ar)"
  },
  {
    "latin": "ahad",
    "ottoman": "‏احد",
    "meaning": "ahad  (bir)  (ar)"
  },
  {
    "latin": "ahad",
    "ottoman": "‏آحاد",
    "meaning": "âhâd  (birler)  (ar)"
  },
  {
    "latin": "ahadis",
    "ottoman": "‏احاديث",
    "meaning": "Hadisin cemi  (ar)"
  },
  {
    "latin": "ahadiyet",
    "ottoman": "‏احاديت",
    "meaning": "ahâdiyet  (ar)"
  },
  {
    "latin": "ahali",
    "ottoman": "‏اهالی",
    "meaning": "ahâlî  (ar)"
  },
  {
    "latin": "ahar",
    "ottoman": "‏آخر",
    "meaning": "âhar  (diğeri)  (ar)"
  },
  {
    "latin": "ahass",
    "ottoman": "‏اخص",
    "meaning": "ahass  (husûsi)  (ar)"
  },
  {
    "latin": "ahavat",
    "ottoman": "‏اخوات",
    "meaning": "Kız kardeş cemii  (ar)"
  },
  {
    "latin": "ahavi",
    "ottoman": "‏اخوی",
    "meaning": "Kardeş gibi  (ar)"
  },
  {
    "latin": "ahazz",
    "ottoman": "‏احظ",
    "meaning": "Pek bahtiyar, mes'ud, şanslı, mutlu. (ar)"
  },
  {
    "latin": "ahba",
    "ottoman": "‏احبا",
    "meaning": "saray adamları (ar)"
  },
  {
    "latin": "ahbap",
    "ottoman": "‏احباب",
    "meaning": "ahbap  (ar)"
  },
  {
    "latin": "ahbar",
    "ottoman": "‏اخبار",
    "meaning": "Haberler, sözler(ar)"
  },
  {
    "latin": "ahbas",
    "ottoman": "‏احباس",
    "meaning": "Su bendleri (ar)"
  },
  {
    "latin": "ahben",
    "ottoman": "‏احبن",
    "meaning": "midede su toplanma hastalığı (ar)"
  },
  {
    "latin": "ahbes",
    "ottoman": "‏اخبث",
    "meaning": "Kötü, pis  (ar)"
  },
  {
    "latin": "ahbeş",
    "ottoman": "‏احبش",
    "meaning": "Habeş  (ar)"
  },
  {
    "latin": "ahbiye",
    "ottoman": "‏اخبيە",
    "meaning": "ahbiye  (ar)"
  },
  {
    "latin": "ahcar",
    "ottoman": "‏احجار",
    "meaning": "Taşlar  (ar)"
  },
  {
    "latin": "ahcen",
    "ottoman": "‏احجن",
    "meaning": "Burnu eğri kimse  (ar)"
  },
  {
    "latin": "ahd",
    "ottoman": "‏عهد",
    "meaning": "Yemin  (ar)"
  },
  {
    "latin": "ahd-name",
    "ottoman": "‏عهدنامە",
    "meaning": "ahd-nâme  (a/f)"
  },
  {
    "latin": "ahda",
    "ottoman": "‏اخدع",
    "meaning": "Bir damar ismi  (ar)"
  },
  {
    "latin": "ahdâk",
    "ottoman": "‏احداق",
    "meaning": "Göz bebekleri (ar)"
  },
  {
    "latin": "ahdan",
    "ottoman": "‏اخدان",
    "meaning": "Dostlar, arkadaşlar, ahbaplar (ar)"
  },
  {
    "latin": "ahdar",
    "ottoman": "‏اخضر",
    "meaning": "Yeşil, yemyeşil  (ar)"
  },
  {
    "latin": "ahdas",
    "ottoman": "‏احداث",
    "meaning": "Gençler nisbetler  (ar)"
  },
  {
    "latin": "ahdeb",
    "ottoman": "‏احدب",
    "meaning": "Kambur  (ar)"
  },
  {
    "latin": "ahdel",
    "ottoman": "‏احدل",
    "meaning": "Çok eğik olan şey  (ar)"
  },
  {
    "latin": "ahden",
    "ottoman": "‏احدن",
    "meaning": "Ahden  (Cebel-i Lübnân)"
  },
  {
    "latin": "ahder",
    "ottoman": "‏اخدر",
    "meaning": "ahder  (birâderzâde)  (fâr)"
  },
  {
    "latin": "ahder",
    "ottoman": "‏احدر",
    "meaning": "ahder  (şaşı)  (ar)"
  },
  {
    "latin": "ahdet",
    "ottoman": "‏عهدت",
    "meaning": "sorumluluk  (ar)"
  },
  {
    "latin": "ahdi",
    "ottoman": "‏عهدی",
    "meaning": "Antlaşmaya bağlı, antlaşma gereği olan (ar)"
  },
  {
    "latin": "ahen",
    "ottoman": "‏آهن",
    "meaning": "Demir, zincir  (fâr)"
  },
  {
    "latin": "ahen-be",
    "ottoman": "‏آهنبە",
    "meaning": "Dokunacak bezin veya çulhanın iki yanına konan demirli ağaç  (fâr)"
  },
  {
    "latin": "ahen-can",
    "ottoman": "‏آهنجان",
    "meaning": "Demir canlı. Katı yürekli. Sabırlı, bütünlü  (fâr)"
  },
  {
    "latin": "ahen-dest",
    "ottoman": "‏آهندست",
    "meaning": "Demir elli, eli demir gibi olan.  (fâr)"
  },
  {
    "latin": "ahen-dil",
    "ottoman": "‏آهندل",
    "meaning": "Demir yürekli, kahraman. Merhametsiz, acımasız kimse.  (fâr)"
  },
  {
    "latin": "ahen-ger",
    "ottoman": "‏آهنگر",
    "meaning": "Demirci. Demir yapan veya satan.  (fâr)"
  },
  {
    "latin": "ahen-geri",
    "ottoman": "‏آهنگری",
    "meaning": "Demircilik  (fâr)"
  },
  {
    "latin": "ahen-keş",
    "ottoman": "‏آهنكش",
    "meaning": "Demiri çeken. Mıknatıs.  (fâr)"
  },
  {
    "latin": "ahen-puş",
    "ottoman": "‏آهنپوش",
    "meaning": "Demirler giymiş. Zırh kuşanmış.  (fâr)"
  },
  {
    "latin": "ahen-rüba",
    "ottoman": "‏آهنربا",
    "meaning": "Demiri kapan, karıştır.  (fâr)"
  },
  {
    "latin": "ahene",
    "ottoman": "‏آهنە",
    "meaning": "Demir halka.  (fâr)"
  },
  {
    "latin": "ahenin",
    "ottoman": "‏آهنين",
    "meaning": "Demirden yapılmıştır.  (fâr)"
  },
  {
    "latin": "ahenk-dar",
    "ottoman": "‏آهنكدار",
    "meaning": "Uygun, düzgün, âhenkli, makamlı  (fâr)"
  },
  {
    "latin": "aher",
    "ottoman": "‏آخر",
    "meaning": "Başka, diğer, gayrı.  (ar)"
  },
  {
    "latin": "aheste",
    "ottoman": "‏آهستە",
    "meaning": "Yavaş, ağır, sâkin  (fâr)"
  },
  {
    "latin": "aheste-rev",
    "ottoman": "‏آهسته رو",
    "meaning": "Aheste âheste yürüyen, acelesiz, yavaş yavaş yürüyen.  (fâr)"
  },
  {
    "latin": "ahestegi",
    "ottoman": "‏آهستگی",
    "meaning": "Yavaşlık, acele etmemeklik.  (fâr)"
  },
  {
    "latin": "ahfa",
    "ottoman": "‏اخفا (اخفي)",
    "meaning": "Çok gizli  (ar)"
  },
  {
    "latin": "ahfas",
    "ottoman": "‏احفاث",
    "meaning": "(Müfredi: Hıfs) İşkembeler, kırkbayırlar.  (ar)"
  },
  {
    "latin": "ahfaz",
    "ottoman": "‏اخفض",
    "meaning": "Alçak ve çukur yer.  (ar)"
  },
  {
    "latin": "ahfec",
    "ottoman": "‏اخفج",
    "meaning": "Ayakları eğri  (ar)"
  },
  {
    "latin": "ahfeş",
    "ottoman": "‏اخفش",
    "meaning": "ahfeş  (ar)"
  },
  {
    "latin": "ahfiye",
    "ottoman": "‏اخفيە",
    "meaning": "Çiçeğin tomurcuğunu örten kabuk.  (ar)"
  },
  {
    "latin": "ahger",
    "ottoman": "‏اخگر",
    "meaning": "ahger  (fâr)"
  },
  {
    "latin": "ahh",
    "ottoman": "‏اح",
    "meaning": "ahh  (ar)"
  },
  {
    "latin": "ahi",
    "ottoman": "‏اخی",
    "meaning": "ahî  (ar)"
  },
  {
    "latin": "ahibba",
    "ottoman": "‏احبا",
    "meaning": "ahibbâ  (ar)"
  },
  {
    "latin": "ahid",
    "ottoman": "‏عهد",
    "meaning": "ahid  (and, yemîn)  (ar)"
  },
  {
    "latin": "ahid",
    "ottoman": "‏عهيد",
    "meaning": "ahîd  (ahdolunmuş)  (ar)"
  },
  {
    "latin": "ahid-şiken",
    "ottoman": "‏عهد شكن",
    "meaning": "Ahdi bozan, anlaşmayı bozan.  (a/f)"
  },
  {
    "latin": "ahil",
    "ottoman": "‏عاهل",
    "meaning": "Erkeği olmayan kadın.  (ar)"
  },
  {
    "latin": "ahilla",
    "ottoman": "‏اخلا",
    "meaning": "ahillâ  (ar)"
  },
  {
    "latin": "ahim",
    "ottoman": "‏عاهم",
    "meaning": "Âhim  (Yemen)"
  },
  {
    "latin": "ahin",
    "ottoman": "‏عاهن",
    "meaning": "Boyalı yün  (ar)"
  },
  {
    "latin": "ahir",
    "ottoman": "‏اخير",
    "meaning": "ahîr  (en son)  (ar)"
  },
  {
    "latin": "ahir",
    "ottoman": "‏عاهر",
    "meaning": "âhir  (zinâ işleyen)  (ar)"
  },
  {
    "latin": "ahir",
    "ottoman": "‏آخر",
    "meaning": "âhir  (son)  (ar)"
  },
  {
    "latin": "ahir-bin",
    "ottoman": "‏آخر بين",
    "meaning": "Sonunu getiren, getiren.  (a/f)"
  },
  {
    "latin": "ahire",
    "ottoman": "‏عاهرە",
    "meaning": "Âhire  (Sûriye)"
  },
  {
    "latin": "ahire",
    "ottoman": "‏عاهرە",
    "meaning": "Zâni, zinakâr.  (ar)"
  },
  {
    "latin": "ahiren",
    "ottoman": "‏آخرًا",
    "meaning": "Geçenlerde, son zamanlarda, son olarak.  (ar)"
  },
  {
    "latin": "ahiret",
    "ottoman": "‏آخرت",
    "meaning": "âhiret  (ar)"
  },
  {
    "latin": "ahirin",
    "ottoman": "‏آخرين",
    "meaning": "sonrakiler  (ar)"
  },
  {
    "latin": "ahissa",
    "ottoman": "‏اخسا",
    "meaning": "Hasisler, cimriler  (ar)"
  },
  {
    "latin": "ahiyane",
    "ottoman": "‏آهيانە",
    "meaning": "Geçenlerde, son zamanlarda, son olarak.  (fâr)"
  },
  {
    "latin": "ahiz",
    "ottoman": "‏آخذ",
    "meaning": "âhiz  (ar)"
  },
  {
    "latin": "ahize",
    "ottoman": "‏آخذە",
    "meaning": "âhize  (ar)"
  },
  {
    "latin": "ahiçelebi",
    "ottoman": "‏اخيچلبی",
    "meaning": "Ahîçelebi  (Edirne)"
  },
  {
    "latin": "ahkab",
    "ottoman": "‏احقاب",
    "meaning": "ahkāb  (uzun zamanlar)  (ar)"
  },
  {
    "latin": "ahkab",
    "ottoman": "‏احقب",
    "meaning": "ahkab  (eşek)  (ar)"
  },
  {
    "latin": "ahkad",
    "ottoman": "‏احقاد",
    "meaning": "Kinler, garezler.  (ar)"
  },
  {
    "latin": "ahkaf",
    "ottoman": "‏احقاف",
    "meaning": "Eğri büğrü kum tepeleri.  (ar)"
  },
  {
    "latin": "ahkaf suresi",
    "ottoman": "‏احقاف سوره سی",
    "meaning": "Ahkāf Sûresi"
  },
  {
    "latin": "ahkam",
    "ottoman": "‏احكام",
    "meaning": "ahkâm  (ar)"
  },
  {
    "latin": "ahkar",
    "ottoman": "‏احقر",
    "meaning": "ahkar  (ar)"
  },
  {
    "latin": "ahkem",
    "ottoman": "‏احكم",
    "meaning": "ahkem  (ar)"
  },
  {
    "latin": "ahker",
    "ottoman": "‏اخكر",
    "meaning": "ahker  (fâr)"
  },
  {
    "latin": "ahla",
    "ottoman": "‏احلا (احلي)",
    "meaning": "ahlâ  (ar)"
  },
  {
    "latin": "ahlaf",
    "ottoman": "‏احلاف",
    "meaning": "ahlâf  (müttefikler)  (ar)"
  },
  {
    "latin": "ahlaf",
    "ottoman": "‏اخلاف",
    "meaning": "ahlâf  (halefler)  (ar)"
  },
  {
    "latin": "ahlak",
    "ottoman": "‏اخلاق",
    "meaning": "ahlâk  (ar)"
  },
  {
    "latin": "ahlaken",
    "ottoman": "‏اخلاقًا",
    "meaning": "ahlâken  (ar)"
  },
  {
    "latin": "ahlakiyat",
    "ottoman": "‏اخلاقيات",
    "meaning": "ahlâkiyât  (ar)"
  },
  {
    "latin": "ahlakiyet",
    "ottoman": "‏اخلاقيت",
    "meaning": "ahlâkiyet  (ar)"
  },
  {
    "latin": "ahlal",
    "ottoman": "‏اخلال",
    "meaning": "Samimi dostlar, yâranlar.  (ar)"
  },
  {
    "latin": "ahlam",
    "ottoman": "‏احلام",
    "meaning": "ahlâm  (ar)"
  },
  {
    "latin": "ahlas",
    "ottoman": "‏اخلص",
    "meaning": "En hâlis, daha temiz.  (ar)"
  },
  {
    "latin": "ahlat",
    "ottoman": "‏اخلاط",
    "meaning": "ahlât  (ögeler)  (ar)"
  },
  {
    "latin": "ahlat",
    "ottoman": "‏آخلاط",
    "meaning": "ahlat  (yaban armudu)"
  },
  {
    "latin": "ahlat",
    "ottoman": "‏آخلاط",
    "meaning": "Ahlât  (yer ismi)"
  },
  {
    "latin": "ahlef",
    "ottoman": "‏اخلف",
    "meaning": "Solak kimse  (ar)"
  },
  {
    "latin": "ahles",
    "ottoman": "‏احلس",
    "meaning": "Kara ile kırmızı arasında olan renk.  (ar)"
  },
  {
    "latin": "ahlet",
    "ottoman": "‏احلت",
    "meaning": "Saçı dökülmüş kişi.  (ar)"
  },
  {
    "latin": "ahliya",
    "ottoman": "‏اخليا",
    "meaning": "Boş şeyler.  (ar)"
  },
  {
    "latin": "ahma",
    "ottoman": "‏احما",
    "meaning": "Çok hamiyetli.  (ar)"
  },
  {
    "latin": "ahmak",
    "ottoman": "‏احمق",
    "meaning": "ahmak,-ğı  (ar)"
  },
  {
    "latin": "ahmal",
    "ottoman": "‏احمال",
    "meaning": "ahmâl  (ar)"
  },
  {
    "latin": "ahmas",
    "ottoman": "‏اخماس",
    "meaning": "Beşte birler, humslar.  (ar)"
  },
  {
    "latin": "ahmed",
    "ottoman": "‏احمد",
    "meaning": "Ahmed  (ar)"
  },
  {
    "latin": "ahmed ibn hanbel",
    "ottoman": "‏احمد ابن حنبل",
    "meaning": "Ahmed ibn Hanbel  (ra)"
  },
  {
    "latin": "ahmed-i bedevi",
    "ottoman": "‏احمد بدوی",
    "meaning": "Ahmed-i Bedevî  (ra)"
  },
  {
    "latin": "ahmedbey",
    "ottoman": "‏احمد بك",
    "meaning": "Ahmedbey  (Edirne)"
  },
  {
    "latin": "ahmedsaray",
    "ottoman": "‏احمد سرای",
    "meaning": "Ahmedsaray  (Sivas)"
  },
  {
    "latin": "ahmer",
    "ottoman": "‏احمر",
    "meaning": "ahmer  (ar)"
  },
  {
    "latin": "ahmes",
    "ottoman": "‏احمس",
    "meaning": "Kuvvetli, yiğit. Kahraman, cesur, şecaatli, bahadır.  (ar)"
  },
  {
    "latin": "ahmez",
    "ottoman": "‏احمز",
    "meaning": "Daha metin, daha sağlam, daha çetin.  (ar)"
  },
  {
    "latin": "ahmim",
    "ottoman": "‏آخميم",
    "meaning": "Âhmîm  (Mısır)"
  },
  {
    "latin": "ahna",
    "ottoman": "‏احنا",
    "meaning": "Çapraz ve birbirine zıt işler. Çarpık, eğri şeyler.  (ar)"
  },
  {
    "latin": "ahnas",
    "ottoman": "‏اخناث",
    "meaning": "Yeminden dönmeler. Yalan yeminler.  (ar)"
  },
  {
    "latin": "ahnef",
    "ottoman": "‏احنف",
    "meaning": "Ayakları çarpık ve eğribüğrü olan.  (ar)"
  },
  {
    "latin": "ahnes",
    "ottoman": "‏اخنس",
    "meaning": "Burnu basık ve sivri olan adam.  (ar)"
  },
  {
    "latin": "ahond",
    "ottoman": "‏آخوند",
    "meaning": "âhond  (fâr)"
  },
  {
    "latin": "ahra",
    "ottoman": "‏احرا (احري)",
    "meaning": "ahrâ  (ar)"
  },
  {
    "latin": "ahrab",
    "ottoman": "‏اخرب",
    "meaning": "Kulağı kesik, Kulaktaki küpe deliği.  (ar)"
  },
  {
    "latin": "ahrac",
    "ottoman": "‏احراج",
    "meaning": "Hayvanların yular, tasma ve palanlarına dizilen boncuklar.  (ar)"
  },
  {
    "latin": "ahrad",
    "ottoman": "‏احرد",
    "meaning": "Pek tamahkâr cimri.  (ar)"
  }
]
;