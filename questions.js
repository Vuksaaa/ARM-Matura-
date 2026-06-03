const questions = [

  // ==================== MREŽNA OPREMA ====================

  { id: 1, category: "mrezna_oprema", type: "multiple",
    question: "Optičko vlakno sa numeričkom aperturom (NA) 0,4 u poređenju sa numeričkom aperturom 0,2 može da prihvati:",
    answers: ["veću količinu svetlosti", "manju količinu svetlosti", "istu količinu svetlosti"],
    correct: 0,
    explanation: "Veća numerička apertura (NA) znači veći ugao prihvatanja svetlosti, pa vlakno sa NA=0,4 prihvata veću količinu svetlosti od vlakna sa NA=0,2." },

  { id: 2, category: "mrezna_oprema", type: "multiple",
    question: "Optičko vlakno tipa PCS je optičko vlakno kod koga je:",
    answers: ["jezgro od stakla, omotač od stakla", "jezgro od plastike, omotač od plastike", "jezgro od stakla, omotač od plastike"],
    correct: 2,
    explanation: "PCS (Plastic Clad Silica) vlakno ima stakleno jezgro i plastični omotač. Naziv PCS opisuje upravo tu kombinaciju materijala." },

  { id: 3, category: "mrezna_oprema", type: "multiple",
    question: "Do totalne refleksije dolazi:",
    answers: [
      "kada svetlost prelazi iz optički gušće u optički ređu sredinu i kada je upadni ugao zraka manji od kritičnog",
      "kada svetlost prelazi iz optičkiređe u optički gušću sredinu i kada je upadni ugao zraka manji od kritičnog",
      "kada svetlost prelazi iz optički gušće u optički ređu sredinu i kada je upadni ugao zraka veći od kritičnog",
      "kada svetlost prelazi iz optičkiređe u optički gušću sredinu i kada je upadni ugao zraka veći od kritičnog"
    ],
    correct: 2,
    explanation: "Totalna refleksija nastaje kada svetlost prelazi iz gušće u ređu sredinu (iz jezgra u omotač) i kada je upadni ugao veći od kritičnog ugla. To je osnova prenosa svetlosti kroz optičko vlakno." },

  { id: 4, category: "mrezna_oprema", type: "multiple",
    question: "Najmanji gubici optičke snage su u:",
    answers: ["ultraljubičastom delu spektra (UV)", "infracrvenom delu spektra (IR)", "vidljivom delu spektra"],
    correct: 1,
    explanation: "Optička vlakna imaju najmanji gubici u infracrvenom delu spektra, posebno oko 1300 nm i 1550 nm. Zbog toga se ove talasne dužine koriste u telekomunikacijama." },

  { id: 5, category: "mrezna_oprema", type: "multi",
    question: "Prijemnik (detektor) optičkog prenosnog sistema može biti:",
    answers: ["PIN fotodioda", "lavinska fotodioda - APD", "laserska dioda - LD", "fotodioda PN tipa", "LED dioda", "varikap dioda", "tunel dioda"],
    correct: [0, 1, 3],
    explanation: "Detektori (prijemnici) u optičkim sistemima su fotodiode: PIN fotodioda, lavinska (APD) i PN fotodioda. LED i laserska dioda su predajnici, ne prijemnici." },

  { id: 6, category: "mrezna_oprema", type: "multiple",
    question: "Ferula je:",
    answers: [
      "cevčica za smeštanje optičkih vlakana kod slobodne konstrukcije jezgra kabla",
      "cevčica za prihvatanje rasteretnog elementa kabla",
      "centralna cevčica optičkog konektora"
    ],
    correct: 2,
    explanation: "Ferula je precizno izrađena cevčica koja se nalazi u sredini optičkog konektora i služi za precizno centriranje i pozicioniranje optičkog vlakna." },

  { id: 7, category: "mrezna_oprema", type: "multiple",
    question: "U monomodnim (SM) optičkim vlaknima kao izvor svetlosti koristi se:",
    answers: ["fluorescentni izvor", "laserska dioda", "lavinska dioda"],
    correct: 1,
    explanation: "U monomodnim optičkim vlaknima koristi se laserska dioda jer ima veoma uski snop svetlosti koji može da uđe u malo jezgro (8-10 μm) monomodnog vlakna." },

  { id: 8, category: "mrezna_oprema", type: "multiple",
    question: "Komponenta koja omogućava promenljivo slabljenje u optičkom vlaknu je:",
    answers: ["atenuator", "optički izolator", "bragova rešetka", "cirkulator"],
    correct: 0,
    explanation: "Atenuator je uređaj koji unosi određeni, ponekad promenljiv, gubitak snage u optički put. Koristi se za podešavanje nivoa snage u sistemima." },

  { id: 9, category: "mrezna_oprema", type: "multiple",
    question: "Rejlijovo rasejanje predstavlja gubitak u optičkom vlaknu i nastaje zbog:",
    answers: [
      "velikog poluprecnika krivine savijanja optičkog vlakna",
      "pretvaranja svetlosti u toplotu",
      "nehomogenosti (nečistoća) u jezgru optičkog vlakna"
    ],
    correct: 2,
    explanation: "Rejlijovo rasejanje nastaje zbog mikroskopskih nehomogenosti u strukturi stakla jezgra vlakna koje su nastale tokom procesa proizvodnje. To je dominantan gubitak na kratkim talasnim dužinama." },

  { id: 10, category: "mrezna_oprema", type: "multiple",
    question: "Splajs je uređaj kojim se:",
    answers: ["optička vlakna spajaju mehanički", "montiraju optički konektori", "spajaju optička vlakna zataljivanjem"],
    correct: 2,
    explanation: "Splajs je spoj optičkih vlakana koji se postiže zataljivanjem (topljenjem) krajeva vlakana. Za razliku od mehaničkog spoja, splajs je trajna i nisko-gubička veza." },

  { id: 11, category: "mrezna_oprema", type: "multiple",
    question: "Merenje dužine kabla pomoću reflektometra se vrši na osnovu:",
    answers: [
      "intenziteta reflektovanog talasa",
      "vremena da se reflektovani talas vrati",
      "faze reflektovanog talasa"
    ],
    correct: 1,
    explanation: "OTDR (reflektometar) meri vreme koje je potrebno da se svetlosni impuls šalje i vrati kao odbijeni signal. Na osnovu brzine svetlosti u vlaknu i tog vremena računa se dužina." },

  { id: 12, category: "mrezna_oprema", type: "multiple",
    question: "OTDR je uređaj kojim se ispituje optičko vlakno i za to je potreban:",
    answers: ["pristup na jednom kraju", "pristup na oba kraja", "pristup bez kontakta sa optičkim vlaknom"],
    correct: 0,
    explanation: "OTDR (Optical Time Domain Reflectometer) radi samo sa jednog kraja vlakna, što je velika prednost. Šalje impulse i analizira refleksije bez potrebe za pristupom drugom kraju kabla." },

  { id: 13, category: "mrezna_oprema", type: "multiple",
    question: "Kod merenja naizmeničnih veličina, multimetar meri:",
    answers: ["maksimalnu vrednost", "trenutnu vrednost", "efektivnu vrednost"],
    correct: 2,
    explanation: "Multimetar pri merenju naizmeničnih veličina (AC) prikazuje efektivnu (RMS) vrednost, koja je relevantan podatak za praktičnu upotrebu, npr. napajanje uređaja." },

  { id: 14, category: "mrezna_oprema", type: "multiple",
    question: "Golo optičko vlakno se sastoji iz:",
    answers: ["dva koncentrična sloja", "tri koncentrična sloja", "četiri koncentrična sloja", "pet koncentričnih slojeva"],
    correct: 0,
    explanation: "Golo optičko vlakno ima samo dva koncentrična sloja: jezgro (core) kroz koje prolazi svetlost i omotač (cladding) koji obezbeđuje totalnu refleksiju." },

  { id: 15, category: "mrezna_oprema", type: "multiple",
    question: "Kod optičkih provodnika sa povećanjem talasne dužine prenosnog signala iznad 1850 nm gubici:",
    answers: ["rastu", "opadaju", "ostaju isti"],
    correct: 0,
    explanation: "Iznad talasne dužine od oko 1600-1850 nm počinju da dominiraju gubici zbog apsorpcije infracrvenog zračenja u staklu, pa ukupni gubici rastu." },

  { id: 16, category: "mrezna_oprema", type: "multiple",
    question: "Kod optičkog vlakna indeks prelamanja jezgra je u odnosu na indeks prelamanja omotača:",
    answers: ["veći", "manji", "isti"],
    correct: 0,
    explanation: "Da bi došlo do totalne refleksije i prostiranja svetlosti kroz vlakno, jezgro mora imati veći indeks prelamanja od omotača. To je osnovni princip rada optičkog vlakna." },

  { id: 17, category: "mrezna_oprema", type: "multiple",
    question: "Merni most je u ravnoteži ako je jednak:",
    answers: [
      "proizvod impedansi u susednim granama",
      "zbir impedansi u susednim granama",
      "proizvod impedansi u naspramnim granama",
      "zbir impedansi u naspramnim granama"
    ],
    correct: 2,
    explanation: "Merni (Vitston-ov) most je u ravnoteži kada je ispunjen uslov: Z1×Z3 = Z2×Z4, tj. kada je proizvod impedansi u naspramnim granama jednaki. Tada nema struje kroz galvanometar." },

  { id: 18, category: "mrezna_oprema", type: "multiple",
    question: "Laserska dioda predstavlja:",
    answers: ["optički detektor", "optički izvor", "optički detektor i optički izvor"],
    correct: 1,
    explanation: "Laserska dioda je isključivo optički izvor (predajnik). Emituje koherentnu, monohromsku svetlost stimulisanom emisijom i koristi se kao izvor u optičkim komunikacionim sistemima." },

  { id: 19, category: "mrezna_oprema", type: "multiple",
    question: "Za izradu PIGTAIL-a u optičkim prenosnim sistemima koristi se:",
    answers: ["kabl sa prijanjajućom strukturom", "kabl slobodne strukture", "optičko vlakno sa primarnom zaštitom"],
    correct: 0,
    explanation: "Pigtail se izrađuje od kabla sa prijanjajućom strukturom (tight buffer), gde je zaštitna obloga direktno nanesena na vlakno, što omogućava lako rukovanje i montažu konektora." },

  { id: 20, category: "mrezna_oprema", type: "multiple",
    question: "PATCH-PANEL je pasivna komponenta optičkog prenosnog sistema i može se montirati:",
    answers: ["u RACK orman", "na unutrašnjem zidu prostorije", "van objekta, kada je potrebno nastaviti optički kabl"],
    correct: 0,
    explanation: "Optički patch panel je pasivna komponenta koja se montira u rack orman (19-inčni) i služi kao distributivna tačka za optičke veze u mrežnoj sobi ili data centru." },

  { id: 21, category: "mrezna_oprema", type: "multiple",
    question: "Optički SC konektor, po obliku je sličan konektoru:",
    answers: ["RJ45", "BNC", "SUB D"],
    correct: 0,
    explanation: "SC (Subscriber Connector) konektor ima kvadratno kućište i push-pull mehanizam zakopčavanja, po obliku podsjeća na RJ45 konektor. Koristi se u telekomunikacijama i LAN mrežama." },

  { id: 22, category: "mrezna_oprema", type: "multiple",
    question: "Adapter je komponenta optičkih sistema koja služi da:",
    answers: [
      "prilagodi optički predajnik optičkom vlaknu",
      "prilagodi optičko vlakno optičkom prijemniku",
      "prilagodi vezu dva optička konektora"
    ],
    correct: 2,
    explanation: "Optički adapter (coupling) je pasivna komponenta koja spaja dva konektora istog tipa (npr. dva SC konektora). Obezbeđuje precizno poravnanje ferula za minimalan gubitak." },

  { id: 23, category: "mrezna_oprema", type: "multiple",
    question: "Mehaničko spajanje optičkih vlakana je:",
    answers: ["razdvojiv spoj", "nerazdvojiv spoj", "spoj koji se ne koristi u optičkim prenosnim sistemima"],
    correct: 0,
    explanation: "Mehanički spoj (mechanical splice) je razdvojiv spoj optičkih vlakana koji koristi mehaničke elemente za poravnanje. Za razliku od zavarenog splajsa, može se rastavljati." },

  { id: 24, category: "mrezna_oprema", type: "multiple",
    question: "Optički ST konektor, po obliku je sličan konektoru:",
    answers: ["RJ45", "BNC", "SUB D"],
    correct: 1,
    explanation: "ST (Straight Tip) konektor ima cilindrično kućište i bajonet mehanizam zaključavanja, po obliku podsjeća na BNC konektor. Bio je popularan u Ethernet mrežama." },

  { id: 25, category: "mrezna_oprema", type: "multiple",
    question: "Logička topologija mreže pokazuje:",
    answers: ["Raspored računara u mreži", "Način prenosa podataka u mreži", "Raspored prostorija u kojima se smeštaju računari"],
    correct: 1,
    explanation: "Logička topologija opisuje kako podaci zapravo teku kroz mrežu, tj. metode pristupa medijumu i putanje podataka, bez obzira na fizički raspored opreme." },

  { id: 26, category: "mrezna_oprema", type: "multiple",
    question: "Mrežna kartica ima nepromenjljivu:",
    answers: ["IP adresu", "MAC adresu", "IP i MAC adresu"],
    correct: 1,
    explanation: "MAC (Media Access Control) adresa je fabrički upisana u mrežnu karticu i teorijski je nepromenjljiva (fizička adresa). IP adresa se dodeljuje dinamički ili statički." },

  { id: 27, category: "mrezna_oprema", type: "multiple",
    question: "Pročitana MAC adresa pomoću naredbe ipconfig/all predstavljena je:",
    answers: [
      "u binarnom brojnom sistemu pomoću 16 cifara",
      "u dekadnom brojnom sistemu pomoću 32 cifre",
      "u heksadekadnom brojnom sistemu pomoću 12 cifara",
      "u heksadekadnom brojnom sistemu pomoću 48 cifara"
    ],
    correct: 2,
    explanation: "MAC adresa se prikazuje kao 12 heksadekadnih cifara (48 bita). Grupisana je u parove odvojene crtom ili dvotačkom, npr. 00-1A-2B-3C-4D-5E." },

  { id: 28, category: "mrezna_oprema", type: "multi",
    question: "Fizička topologija mreže može biti:",
    answers: ["magistrala", "LAN", "piramida", "prsten"],
    correct: [0, 3],
    explanation: "Fizičke topologije mreže su: magistrala (bus), prsten (ring), zvezda (star), stablo (tree) i potpuno povezana (mesh). LAN je tip mreže, a piramida nije standardna topologija." },

  { id: 29, category: "mrezna_oprema", type: "multi",
    question: "Merni mostovi se koriste za merenje:",
    answers: ["Električne otpornosti", "Električne snage", "Električnog napona", "Električne kapacitivnosti", "Induktivnosti", "Jačine električne struje"],
    correct: [0, 3, 4],
    explanation: "Merni mostovi (Vitston-ov i slični) koriste se za precizno merenje električne otpornosti, kapacitivnosti i induktivnosti. Nisu pogodni za merenje napona i struje." },

  { id: 30, category: "mrezna_oprema", type: "multi",
    question: "Jačina električne struje može da se meri pomoću:",
    answers: ["Galvanometra", "Vatmetra", "Ampermetra", "Ommetra", "Voltmetra", "Multimetra"],
    correct: [0, 2, 5],
    explanation: "Struja se meri galvanometrom (osetljiv instrument), ampermetrom (namenski) i multimetrom (višenamjenski). Vatmetar meri snagu, ommetar otpor, voltmetar napon." },

  { id: 31, category: "mrezna_oprema", type: "multi",
    question: "Karakteristike 10BASE-T Ethernet mreže su:",
    answers: [
      "Koristi se upredena parica kao medijum",
      "Metod pristupa zajedničkom medijumu je Slot Aloha",
      "Brzina prenosa je 10 Mbps i 100 Mbps",
      "Maksimalna dužina kabla je 100m",
      "Prenos se vrši u licenciranom opsegu od 5 GHz"
    ],
    correct: [0, 3],
    explanation: "10BASE-T koristi upredenu paricu (UTP kategorije 3 ili više), brzina je 10 Mbps (ne i 100), maksimalna dužina segmenta je 100m, metod pristupa je CSMA/CD." },

  { id: 32, category: "mrezna_oprema", type: "multi",
    question: "Među navedenim pojmovima izabrati one koji označavaju defekte preseka optičkog vlakna:",
    answers: ["jezičak", "uvijutak", "zalomljenje", "Zatamnjenje", "Udubljenje"],
    correct: [0, 2],
    explanation: "Defekti preseka optičkog vlakna pri splajsovanju su: jezičak (lip) i zalomljenje (hackle). Ovi defekti na krajevima vlakna unose gubitke u spoju." },

  { id: 33, category: "mrezna_oprema", type: "multi",
    question: "Gubici u optičkom vlaknu nastaju usled:",
    answers: ["apsorpcije", "šuma", "rasejanja", "savijanja", "preslušavanja", "kratkog spoja", "parazitne kapacitivnosti"],
    correct: [0, 2, 3],
    explanation: "Gubici u optičkom vlaknu nastaju zbog: apsorpcije (materijal upija svetlost), rasejanja (Rejlijovo rasejanje) i savijanja vlakna (makro i mikro savijanja). Ostali mehanizmi su karakteristični za električne vodnike." },

  { id: 34, category: "mrezna_oprema", type: "multi",
    question: "Optički prenosni sistemi imaju najmanje gubitke ako rade na talasnim dužinama od:",
    answers: ["oko 500 nm", "oko 850 nm", "oko 1000 nm", "oko 1300 nm", "oko 1550 nm", "oko 1850 nm"],
    correct: [1, 3, 4],
    explanation: "Optički prenosni sistemi imaju prozore minimalnih gubitaka na talasnim dužinama od 850 nm (kratko talasni prozor), 1300 nm i 1550 nm (dugo talasni prozori). Na 1550 nm gubici su minimalni." },

  { id: 35, category: "mrezna_oprema", type: "input",
    question: "Indeks prelamanja jezgra optičkog vlakna je _____ od indeksa prelamanja omotača.",
    correct: ["VECI", "veći", "Veći"],
    explanation: "Jezgro mora imati veći indeks prelamanja od omotača kako bi totalna unutrašnja refleksija zadržala svetlost unutar jezgra i omogućila njeno prostiranje kroz vlakno." },

  { id: 36, category: "mrezna_oprema", type: "input",
    question: "Modalna disperzija je karakteristična za _____ optičko vlakno.",
    correct: ["MULTIMODNO", "multimodno", "VISEMODNO", "visemodno", "MM"],
    explanation: "Modalna disperzija javlja se samo u multimodnim (višemodnim) vlaknima jer različiti modovi (putanje) svetlosti putuju različitim brzinama, što uzrokuje proširenje impulsa." },

  { id: 37, category: "mrezna_oprema", type: "input",
    question: "Greška je odstupanje _____ od _____ vrednosti.",
    correct: ["IZMERENE od TACNE", "izmerene od tačne"],
    explanation: "Greška merenja se definiše kao razlika između izmerene i stvarne (tačne) vrednosti merene veličine. Može biti apsolutna ili relativna." },

  { id: 38, category: "mrezna_oprema", type: "input",
    question: "Antena je elektronska komponenta koja je dizajnirana da šalje ili prima _____.",
    correct: ["RADIO TALASE", "radio talase", "radio-talase"],
    explanation: "Antena pretvara električne signale u elektromagnetne (radio) talase pri slanju, i obrnuto pri prijemu. Koristi se u svim bežičnim komunikacionim sistemima." },

  { id: 39, category: "mrezna_oprema", type: "matching",
    question: "Sa leve strane su dati nazivi optičkih kablova, a sa desne izgled kablova. Povežite ih.",
    pairs: [
      { left: "Duplex patch-cord (presspojni kabl)", right: "Slika 2" },
      { left: "Simplex patch-cord (presspojni kabl)", right: "Slika 3" },
      { left: "Pigtail (završni kabl)", right: "Slika 1" }
    ],
    explanation: "Pigtail ima konektor samo na jednom kraju, simplex patch-cord ima konektore na oba kraja (jedan konektor sa svake strane), a duplex patch-cord prenosi signal u oba smera (dva vlakna)." },

  { id: 40, category: "mrezna_oprema", type: "input",
    question: "Svaka optička komunikaciona mreža se sastoji od PREDAJNIKA, optičkog vlakna i _____.",
    correct: ["PRIJEMNIKA", "prijemnika"],
    explanation: "Osnovna struktura optičkog komunikacionog sistema se sastoji od predajnika (koji pretvara električni signal u optički), optičkog vlakna (prenosni medijum) i prijemnika (koji pretvara optički signal nazad u električni)." },

  { id: 41, category: "mrezna_oprema", type: "input",
    question: "Optičko vlakno se sastoji iz dva koncentrična sloja, unutrašnjeg koji se naziva _____ i spoljašnjeg sloja koji se naziva _____.",
    correct: ["JEZGRO i OMOTAC", "jezgro i omotač"],
    explanation: "Optičko vlakno ima jezgro (core) kroz koje se prostire svetlost i omotač (cladding) koji ima manji indeks prelamanja i zadržava svetlost u jezgru totalnom refleksijom." },

  { id: 42, category: "mrezna_oprema", type: "input",
    question: "Optički gušća sredina je ona u kojoj je brzina prostiranja svetlosti manja, odnosno indeks prelamanja _____, a optički ređa sredina ima veću brzinu prostiranja svetlosti tj. _____ indeks prelamanja.",
    correct: ["VECI i MANJI", "veći i manji"],
    explanation: "Indeks prelamanja je obrnuto proporcionalan brzini svetlosti u sredini. Gušća optička sredina ima veći indeks prelamanja i manju brzinu svetlosti." },

  { id: 43, category: "mrezna_oprema", type: "input",
    question: "U optičkom vlaknu razlikuju se modalna, _____ i _____ disperzija.",
    correct: ["HROMATSKA i POLARIZACIONA", "hromatska i polarizaciona"],
    explanation: "Disperzija u optičkim vlaknima se javlja kao modalna (samo u multimodnim), hromatska (zbog različitih brzina različitih talasnih dužina) i polarizaciona modalna disperzija (PMD)." },

  { id: 44, category: "mrezna_oprema", type: "input",
    question: "Prema prirodi sile čije je dejstvo iskorišćeno za prikazivanje merene veličine, električni instrumenti se mogu podeliti na _____, termičke i _____.",
    correct: ["MAGNETNE i ELEKTROSTATICKE", "magnetne i elektrostatičke"],
    explanation: "Električni merni instrumenti se prema principu rada dele na: magnetne (koriste magnetno polje), termičke (koriste toplotno dejstvo struje) i elektrostatičke (koriste elektrostatičke sile)." },

  { id: 45, category: "mrezna_oprema", type: "input",
    question: "Električni izvori se, prema promenama u vremenu, mogu podeliti na _____ i _____ izvore.",
    correct: ["JEDNOSMERNE i NAIZMENICNE", "jednosmerne i naizmenične"],
    explanation: "Električni izvori prema vremenskoj promeni napona/struje dele se na jednosmerne (DC - konstantan smer) i naizmenične (AC - periodično menjaju smer)." },

  { id: 46, category: "mrezna_oprema", type: "matching",
    question: "Na levoj strani je navedena vrsta prenosnog medijuma u računarskim mrežama, a na desnoj konektori. Povežite medijum sa konektorom koji se koristi.",
    pairs: [
      { left: "1. Koaksijalni kabl", right: "BNC" },
      { left: "2. UTP kabl", right: "RJ 45" },
      { left: "3. Optičko vlakno", right: "SC" }
    ],
    explanation: "Koaksijalni kabl koristi BNC konektor, UTP kabl koristi RJ45 konektor, a optičko vlakno koristi SC (ili ST, LC) konektore." },

  { id: 47, category: "mrezna_oprema", type: "matching",
    question: "Na levoj strani su dati različiti tipovi mreža a na desnoj veličine mreža prema geografskoj rasprostranjenosti gradacijski počev od najveće. Povežite.",
    pairs: [
      { left: "1. MAN", right: "druga po veličini" },
      { left: "2. PAN", right: "najmanja" },
      { left: "3. LAN", right: "treća po veličini" },
      { left: "4. WAN", right: "najveća" }
    ],
    explanation: "Prema geografskoj rasprostranjenosti: WAN (globalna/najveća) > MAN (gradska/druga) > LAN (lokalna/treća) > PAN (lična/najmanja). Pitanje traži da se poveže tip mreže sa njenom veličinom." },

  { id: 48, category: "mrezna_oprema", type: "matching",
    question: "Na levoj strani su date oznake konektora koji se koriste u računarskim mrežama. Sa desne strane su prikazani konektori. Na linijama ispred slika upisišite redni broj odgovarajućeg naziva konektora.",
    pairs: [
      { left: "1. BNC", right: "Slika 4 (plavi SC)"},
      { left: "2. RJ45", right: "Slika 5 (BNC)"},
      { left: "3. RJ11", right: "Slika 2 (RJ45)"},
      { left: "4. SC", right: "Slika 1 (BNC - koaksijalni)"},
      { left: "5. ST", right: "Slika 3 (RJ11)"}
    ],
    explanation: "BNC se koristi za koaksijalne kablove, RJ45 za UTP Ethernet kablove, RJ11 za telefonske linije, SC i ST su optički konektori." },

  { id: 49, category: "mrezna_oprema", type: "matching",
    question: "Sa leve strane su dati preseci optičkih vlakana, a sa desne vrste optičkih vlakana sa profilom indeksa prelamanja. Povežite presek sa odgovarajućom vrstom vlakna.",
    pairs: [
      { left: "Presek 1 (stepenasti profil, više modova)", right: "multimodno sa skokovitim profilom indeksa prelamanja" },
      { left: "Presek 4 (gradijentni profil)", right: "multimodno sa gradijentnim profilom indeksa prelamanja" },
      { left: "Presek 2 (sinusoidalni, usko jezgro)", right: "monomodno sa gradijentnim profilom indeksa prelamanja" }
    ],
    explanation: "Monomodna vlakna imaju usko jezgro (~8μm) i skokoviti profil. Multimodni sa skokovitim profilom ima šire jezgro i nagli prelaz indeksa, a gradijentni ima postepenu promenu indeksa." },

  // ==================== RAČUNARSKE MREŽE ====================

  { id: 50, category: "racunarske_mreze", type: "multiple",
    question: "Računarska mreža je:",
    answers: [
      "Skup najmanje dva računara povezanih odgovarajućim medijumom, koji međusobno mogu da komuniciraju i dele resurse.",
      "Skup dva ili više međusobno povezanih računara.",
      "Skup više od dva računara međusobno povezanih odgovarajućim medijumom, koji međusobno mogu da komuniciraju i dele resurse."
    ],
    correct: 0,
    explanation: "Računarska mreža je skup najmanje dva računara (ili uređaja) povezanih komunikacionim medijumom koji mogu međusobno da komuniciraju i dele resurse (fajlove, štampače, internet vezu)." },

  { id: 51, category: "racunarske_mreze", type: "multiple",
    question: "U mreži jednakih računara, svi računari u mreži su:",
    answers: ["klijenti", "serveri", "i klijenti i serveri"],
    correct: 2,
    explanation: "U peer-to-peer (P2P) mreži jednakih računara, svaki računar može biti i klijent (traži resurse) i server (pruža resurse). Nema centralizovanog servera." },

  { id: 52, category: "racunarske_mreze", type: "multiple",
    question: "Proxy server u SIP konfiguraciji ima ulogu da:",
    answers: [
      "Rutira signalizaciju poziva kroz gatekeeper",
      "Prima request ali ga ne prosleđuje već šalje adresu next hop-a",
      "Prima request i šalje ga ka drugom / drugim serverima"
    ],
    correct: 2,
    explanation: "SIP proxy server prima zahteve (request) od klijenta i prosleđuje ih ka narednom serveru u lancu prema odredištu. Deluje kao posrednik u SIP signalizaciji." },

  { id: 53, category: "racunarske_mreze", type: "multiple",
    question: "Klasa protokola za rutiranje 'na zahtev' je karakteristična za mrežu tipa:",
    answers: ["WLAN", "LAN", "MANET", "GSM", "VLAN"],
    correct: 2,
    explanation: "MANET (Mobile Ad hoc NETwork) je bežična mreža bez fiksne infrastrukture. Rutiranje 'na zahtev' (on-demand) kao AODV i DSR koriste se jer se topologija stalno menja." },

  { id: 54, category: "racunarske_mreze", type: "multiple",
    question: "Ethernet je LAN standard pod nazivom:",
    answers: ["IEEE 800.2", "IEEE 801.3", "IEEE 802.3", "IEEE 803.3"],
    correct: 2,
    explanation: "Ethernet standard je definisan od strane IEEE organizacije pod nazivom IEEE 802.3. Ovaj standard definiše fizički sloj i sloj veze podataka za žičane LAN mreže." },

  { id: 55, category: "racunarske_mreze", type: "multiple",
    question: "Računar koji šalje podatak u Ethernet mreži zaključuje da je odredišni računar primio podatak tako što:",
    answers: [
      "dobija potvrdu od odredišnog računara",
      "dobija potvrdu od servera",
      "dobija e-mail",
      "ne detektuje koliziju u toku slanja",
      "dobije poslati podatak nazad"
    ],
    correct: 3,
    explanation: "U Ethernet mreži (CSMA/CD), računar zna da je prenos uspešan ako nije detektovao koliziju tokom slanja. Ethernet na sloju veze ne potvrđuje prijem od odredišnog računara." },

  { id: 56, category: "racunarske_mreze", type: "multiple",
    question: "Tabela Ethernet svica sadrži:",
    answers: [
      "IP adrese i odgovarajuće portove",
      "MAC adrese i odgovarajuće portove",
      "IP adrese i MAC adrese",
      "IP adrese, MAC adrese i odgovarajuće portove"
    ],
    correct: 1,
    explanation: "Ethernet svič gradi i koristi CAM tabelu (MAC tabelu) koja sadrži MAC adrese i portove na koje su uređaji sa tim adresama priključeni. IP adrese ne koristi za prosleđivanje." },

  { id: 57, category: "racunarske_mreze", type: "multiple",
    question: "Osnovni zadatak rutera je:",
    answers: [
      "povezivanje lokalne mreže na Internet",
      "usmeravanje paketa do odredišta",
      "zaštita lokalne mreže"
    ],
    correct: 1,
    explanation: "Osnovna funkcija rutera je usmeravanje (rutiranje) paketa između različitih mreža na osnovu odredišne IP adrese. Ruter bira najpovoljniju putanju do odredišta." },

  { id: 58, category: "racunarske_mreze", type: "multiple",
    question: "U postupku rutiranja ruter:",
    answers: [
      "mora da poznaje celu putanju do odredišta",
      "ne mora da poznaje celu putanju već samo jedan korak duž putanje",
      "ne mora da poznaje ni celu putanju, ni sledeći korak do odredišta"
    ],
    correct: 1,
    explanation: "Ruter primenjuje hop-by-hop rutiranje - zna samo sledećeg susednog rutera (next hop) ka odredištu. Ne mora da zna celu putanju, samo lokalno optimalan sledeći korak." },

  { id: 59, category: "racunarske_mreze", type: "multiple",
    question: "Primer standarda IEEE 802.15 za personalne mreže je:",
    answers: ["LAN", "Bluetooth", "WLAN", "Wi-Fi"],
    correct: 1,
    explanation: "IEEE 802.15 standard definiše bežične personalne mreže (WPAN). Bluetooth je implementiran prema IEEE 802.15.1 standardu i koristi se za kratkodomene PAN mreže." },

  { id: 60, category: "racunarske_mreze", type: "multiple",
    question: "Polje Type Ethernet II frejma nosi podatak o:",
    answers: [
      "protokolu drugog nivoa OSI modela",
      "odredišnoj (destination) IP adresi",
      "protokolima viših nivoa OSI modela",
      "tipu kabla koji predstavlja medijum za prenos"
    ],
    correct: 2,
    explanation: "Polje EtherType (Type) u Ethernet II frejmu identifikuje protokol višeg sloja koji je enkapsuliran u podatke frejma (npr. 0x0800 za IPv4, 0x0806 za ARP)." },

  { id: 61, category: "racunarske_mreze", type: "multiple",
    question: "Mrežna kartica koja ima Boot PROM opciju omogućava računaru:",
    answers: [
      "Umrežavanje u više LAN mreža",
      "Veći protok",
      "Podizanje operativnog sistema sa čvrstog diska drugog računara u mreži",
      "Računar sa ovakvom mrežnom karticom je uvek server u mreži"
    ],
    correct: 2,
    explanation: "Boot PROM (PXE - Preboot Execution Environment) omogućava računaru da se podiže sa mreže, učitavajući operativni sistem sa udaljenog servera umesto sa lokalnog diska." },

  { id: 62, category: "racunarske_mreze", type: "multiple",
    question: "RIP (Routing Information Protocol) je protokol koji spada u klasu protokola:",
    answers: [
      "Za otklanjanje greške pri slanju",
      "Za sprečavanje zagušenja",
      "Distance Vector Protocol (protokol vektora udaljenosti)",
      "Link State Protocol (protokol stanja veze)"
    ],
    correct: 2,
    explanation: "RIP je Distance Vector protokol rutiranja koji koristi broj hopova (skokova) kao metriku. Svaki ruter šalje svoju kompletnu tabelu rutiranja susednim ruterima periodično." },

  { id: 63, category: "racunarske_mreze", type: "multiple",
    question: "Način pristupa zajedničkom medijumu koji se koristi u mrežama IEEE 802.3 je:",
    answers: ["Aloha", "CSMA/CD", "Slot Aloha", "TDMA", "CSMA/CA"],
    correct: 1,
    explanation: "IEEE 802.3 (Ethernet) koristi CSMA/CD (Carrier Sense Multiple Access with Collision Detection) metod pristupa. Uređaji osluškuju kanal, šalju kada je slobodan i detektuju kolizije." },

  { id: 64, category: "racunarske_mreze", type: "multiple",
    question: "U slučaju da do odredišta ima više mogućih putanja različitih efikasnosti ruter:",
    answers: [
      "bira najefikasniju putanju",
      "šalje po svim portovima",
      "bira fizički najkraću putanju",
      "slučajno bira jednu putanju"
    ],
    correct: 0,
    explanation: "Ruter uvek bira najefikasniju putanju do odredišta na osnovu metrike (broj hopova, propusni opseg, kašnjenje itd.) definisane u ruting protokolu." },

  { id: 65, category: "racunarske_mreze", type: "multiple",
    question: "Slojevi OSI referentnog modela čije karakteristike definiše standard IEEE 802.3 su:",
    answers: [
      "fizički sloj",
      "fizički i sloj veze",
      "fizički, sloj veze i sloj mreže",
      "svih sedam slojeva"
    ],
    correct: 1,
    explanation: "IEEE 802.3 (Ethernet) standard definiše fizički sloj (električne karakteristike, konektori) i podsloj MAC unutar sloja veze podataka OSI modela." },

  { id: 66, category: "racunarske_mreze", type: "multiple",
    question: "Ako ruter uči rutu ka udaljenoj mreži pomoću više različitih ruting protokola, tada će ruter odlučiti koja ruta je najbolja koristeći:",
    answers: [
      "metriku putanje",
      "administrativnu distancu ruting protokola",
      "broj hopova",
      "propusni opseg izlaznog interfejsa."
    ],
    correct: 1,
    explanation: "Kada više ruting protokola nudi rutu do iste mreže, ruter bira protokol sa najnižom administrativnom distancom (AD). Npr. OSPF (AD=110) je preferiraniji od RIP (AD=120)." },

  { id: 67, category: "racunarske_mreze", type: "multiple",
    question: "Pojam (broj) koji ruteri koriste da uporede rute po istom ruting protokolu naziva se:",
    answers: ["administrativna distanca", "metrika", "pouzdanost", "kašnjenje", "broj hopova"],
    correct: 1,
    explanation: "Metrika je vrednost koju ruting protokol koristi za poređenje ruta do iste mreže unutar istog protokola. RIP koristi broj hopova, OSPF cost (cenu), EIGRP kompozitnu metriku." },

  { id: 68, category: "racunarske_mreze", type: "multiple",
    question: "Ruting protokoli, unutar autonomnog sistema, prema vrsti algoritma koji koriste za formiranje ruting tabela dele se na:",
    answers: [
      "protokole unutar autonomnog sistema i protokole koji rutiraju između autonomnih sistema",
      "protokole vektora udaljenosti (distance vector), protokole stanja veze (link state), hibridne (hybrid) protokole",
      "protokole koji funkcionišu među ruterima i protokole koji funkcionišu među svičevima"
    ],
    correct: 1,
    explanation: "IGP protokoli se dele prema algoritmu na: Distance Vector (RIP, IGRP), Link State (OSPF, IS-IS) i Hibridne (EIGRP). Svaka klasa ima različit pristup razmeni i obradi ruting informacija." },

  { id: 69, category: "racunarske_mreze", type: "multiple",
    question: "Ako prenoste saobraćaj više VLAN-ova portovi svica rade u:",
    answers: ["aksec (access) modu", "trunk (trunk) modu", "aksec (access) ili trunk (trunk) modu", "nije ponuđen tačan odgovor"],
    correct: 1,
    explanation: "Trunk port prenosi saobraćaj više VLAN-ova istovremeno koristeći IEEE 802.1Q tagovanje. Access port prenosi saobraćaj samo jednog VLAN-a i koristi se za priključak krajnjih uređaja." },

  { id: 70, category: "racunarske_mreze", type: "multiple",
    question: "Ako su za portove svica vezani krajnji uređaji i ako prosleđuju saobraćaj unutar samo jednog VLAN-a, tada portovi rade u:",
    answers: ["aksec (access) modu", "trunk (trunk) modu", "aksec (access) ili trunk (trunk) modu", "nije ponuđen tačan odgovor"],
    correct: 0,
    explanation: "Access port je konfigurisan za jedan VLAN i priključuju se krajnji uređaji (računari, IP telefoni). Ovaj port ne taguje frejmove VLAN oznakom pri slanju krajnjem uređaju." },

  { id: 71, category: "racunarske_mreze", type: "multiple",
    question: "Unutar LAN mreže sastavljene pomoću svičeva konfigurisano je nekoliko VLAN-ova. Za datu mrežu važi: veza između hostova unutar različitih VLAN-ova je moguće ostvariti:",
    answers: [
      "vezom između hostova unutar različitih VLAN-ova je moguće ostvariti dodavanjem novog Ethernet svica",
      "vezom između hostova unutar različitih VLAN-ova je nemoguće ostvariti dodavanjem novog uređaja",
      "vezom između hostova unutar različitih VLAN-ova je moguće ostvariti dodavanjem novog haba",
      "vezom između hostova unutar različitih VLAN-ova je moguće ostvariti dodavanjem novog rutera"
    ],
    correct: 3,
    explanation: "Komunikacija između različitih VLAN-ova zahteva uređaj koji radi na sloju 3 (mreže) - ruter ili L3 svič. Svič i hab ne mogu rutirati između VLAN-ova." },

  { id: 72, category: "racunarske_mreze", type: "multiple",
    question: "Svič uči adrese i popunjava MAC tabelu na osnovu:",
    answers: [
      "odredišne (destination) MAC adrese unutar frejma",
      "izvorišne (source) MAC adrese unutar frejma",
      "izvorišne (source) i odredišne (destination) MAC adrese unutar frejma",
      "odredišne (destination) IP adrese unutar frejma",
      "izvorišne (source) IP adrese unutar frejma"
    ],
    correct: 1,
    explanation: "Svič uči MAC adrese posmatranjem izvorišnih MAC adresa frejmova koji dolaze na svaki port. Tako gradi MAC tabelu koja mapira MAC adrese na portove." },

  { id: 73, category: "racunarske_mreze", type: "multiple",
    question: "Odredi funkciju koju obavlja ruter kako bi se privatne IP adrese jedne mreže transponovale i predstavile pomoću jedne ili nekoliko javnih adresa:",
    answers: ["funkcija rutiranja", "tu funkciju ne obavlja ruter već L3 svič", "funkcija NAT", "funkcija filtriranja"],
    correct: 2,
    explanation: "NAT (Network Address Translation) je funkcija rutera koja prevodi privatne IP adrese lokalne mreže u jednu ili više javnih IP adresa za komunikaciju sa Internetom." },

  { id: 74, category: "racunarske_mreze", type: "multiple",
    question: "Nakon pojave kolizije u Ethernet mreži host zaključuje da može vršiti prenos nakon što:",
    answers: [
      "od odredišnog hosta dobije zahtev za ponovni prenos",
      "jam signal signalizira da kolizije više nema",
      "istekne određeno (slučajno) vreme od detekcije kolizije",
      "ruter u mrežnom segmentu signalizira da kolizije više nema"
    ],
    correct: 2,
    explanation: "Nakon detekcije kolizije u CSMA/CD, svaki host čeka slučajno odabrano vreme (backoff algoritam - eksponencijalno nasumično čekanje) pre ponovnog pokušaja slanja." },

  { id: 75, category: "racunarske_mreze", type: "multiple",
    question: "Tip UTP RJ45 kabla koji se koristi da bi se COM port PC-a spojio sa konzolnim portom rutera ili svica koji koristi IOS je:",
    answers: ["straight-through", "crossover", "rolled"],
    correct: 2,
    explanation: "Rolled (rollover) kabl koristi se za konzolnu vezu između COM porta računara i konzolnog porta Cisco IOS uređaja (rutera, svica). Pinovi su potpuno obrnuti s jednog kraja na drugi." },

  { id: 76, category: "racunarske_mreze", type: "multiple",
    question: "Džiter baferi služe da:",
    answers: [
      "Spreče kašnjenje usled propagacije",
      "Otklone zagušenje u mreži",
      "Kompenzuju nejednako kašnjenje govornih paketa kroz mrežu",
      "Spreče gubitak paketa",
      "Obezbede da svi paketi stignu istovremeno"
    ],
    correct: 2,
    explanation: "Džiter (jitter) baferi se koriste u VoIP sistemima da kompenzuju varijacije kašnjenja (džiter) govornih paketa, čuvajući ih i reprodukujući ravnomerno." },

  { id: 77, category: "racunarske_mreze", type: "multiple",
    question: "Tehnika proširenog spektra koja se koristi u Bluetooth-u je:",
    answers: ["DSSS", "FHSS", "TDMA", "OFDM"],
    correct: 1,
    explanation: "Bluetooth koristi FHSS (Frequency Hopping Spread Spectrum) tehniku - frekvencija emitovanja se brzo menja po unapred određenom redosledu, što obezbeđuje otpornost na smetnje." },

  { id: 78, category: "racunarske_mreze", type: "multiple",
    question: "U FHSS (Frequency Spread Spectrum Hopping) sistemima ometajući signal:",
    answers: [
      "ostaje nepromenjen na prijemu",
      "se izbegava čestom promenom frekvencije emitovanja",
      "je manjeg intenziteta na prijemu i to zavisi od procesnog pojačanja",
      "se množi sa procesnim pojačanjem na prijemu (snaga ometača)"
    ],
    correct: 1,
    explanation: "U FHSS sistemima, signal brzo menja frekvenciju prema pseudoslučajnom redosledu. Ometač koji emituje na fiksnoj frekvenciji pogađa samo mali deo skokova, efektivno se 'izbegava'." },

  { id: 79, category: "racunarske_mreze", type: "multiple",
    question: "Karakteristika Ad-hoc topologije bežičnih računarskih mreža je:",
    answers: [
      "sadrži baznu stanicu i obično se koristi za privremene mreže",
      "sadrži baznu stanicu i obično se koristi za stalni pristup Internetu",
      "ne sadrži baznu stanicu i obično se koristi za privremene mreže",
      "ne sadrži baznu stanicu i obično se koristi za stalni pristup Internetu"
    ],
    correct: 2,
    explanation: "Ad-hoc mreža (IBSS - Independent Basic Service Set) je direktna veza između uređaja bez access pointa. Koristi se za privremene peer-to-peer bežične veze." },

  { id: 80, category: "racunarske_mreze", type: "multiple",
    question: "Da bi AP (access point) bio funkcionalan moramo podesiti:",
    answers: ["SSID", "PIN kod", "vrstu zaštite", "user name"],
    correct: 0,
    explanation: "SSID (Service Set Identifier) je ime bežične mreže i minimalni neophodan parametar za funkcionisanje access pointa. Ostale postavke (zaštita, kanal) su preporučene ali opcionalne." },

  { id: 81, category: "racunarske_mreze", type: "multiple",
    question: "Standard IEEE 802 koji se odnosi na bežičnu računarsku mrežu je:",
    answers: ["802.3", "802.5", "802.7", "802.11"],
    correct: 3,
    explanation: "IEEE 802.11 je standard koji definiše bežične lokalne mreže (WLAN/Wi-Fi). Postoji više varijanti: 802.11a, b, g, n, ac, ax, koje se razlikuju po brzini i frekvenciji." },

  { id: 82, category: "racunarske_mreze", type: "multiple",
    question: "Način komutacije u javnoj telefonskoj mreži je:",
    answers: ["Komutacija kola", "Komutacija sms poruka", "Komutacija baze podataka", "Komutacija paketa"],
    correct: 0,
    explanation: "Javna komutirana telefonska mreža (PSTN) koristi komutaciju kola (circuit switching) - uspostavlja se fizička/logička veza između pozivalaca na vreme trajanja poziva." },

  { id: 83, category: "racunarske_mreze", type: "multiple",
    question: "Kod glasovne komunikacije preko Interneta VoIP-a (Voice over IP) koristi se protokol:",
    answers: ["TCP", "UDP", "HTTP", "SMTP"],
    correct: 1,
    explanation: "VoIP koristi UDP protokol za prenos glasovnih paketa jer je brži od TCP (nema uspostavljanja veze i retransmisije). Malo kašnjenje je važnije od garantovane isporuke." },

  { id: 84, category: "racunarske_mreze", type: "multiple",
    question: "Odredi antenu koju treba izabrati za pristupnu tačku (AP)",
    answers: ["antenu kružnog dijagrama zračenja", "usmerenu antenu", "bilo koju antenu"],
    correct: 0,
    explanation: "Access point koji treba da pokrije korisnike u svim smerovima koristi omnidirektionalnu antenu (kružni dijagram zračenja). Usmerene antene se koriste za point-to-point veze." },

  { id: 85, category: "racunarske_mreze", type: "multiple",
    question: "Odredi frekvencijski opseg koji pripada ISM-u:",
    answers: ["902-928 GHz", "2,4-2,4835 GHz", "5,725-5,875 KHz"],
    correct: 1,
    explanation: "ISM (Industrial, Scientific and Medical) opseg koji koristi Wi-Fi (802.11b/g/n) je 2,4-2,4835 GHz. Ovaj opseg je slobodan za korišćenje bez licenciranja." },

  { id: 86, category: "racunarske_mreze", type: "multiple",
    question: "UMTS je sinonim za:",
    answers: ["2G", "2G+", "2G++", "3G", "4G"],
    correct: 3,
    explanation: "UMTS (Universal Mobile Telecommunications System) je standard treće generacije (3G) mobilne telefonije koji je naslednik GSM (2G) sistema." },

  { id: 87, category: "racunarske_mreze", type: "multiple",
    question: "Način pristupa zajedničkom medijumu koji se primenjuje u IEEE 802.11 mrežama je:",
    answers: ["Aloha", "CSMA/CD", "Slot Aloha", "TDMA", "CSMA/CA"],
    correct: 4,
    explanation: "IEEE 802.11 (Wi-Fi) koristi CSMA/CA (Carrier Sense Multiple Access with Collision Avoidance). Za razliku od Etherneta (CSMA/CD), bežične mreže izbegavaju kolizije pre nego što nastanu." },

  { id: 88, category: "racunarske_mreze", type: "multiple",
    question: "Drugi naziv za Bluetooth je:",
    answers: ["bežični USB", "bežična mreža", "bežični LAN", "bežični WAN"],
    correct: 0,
    explanation: "Bluetooth je poznat i kao 'bežični USB' jer se koristi za kratkodomene bežične veze između uređaja, slično kao USB za žičane veze." },

  { id: 89, category: "racunarske_mreze", type: "multiple",
    question: "Da bi se uspešno izvršio bežični prenos mora biti ispunjen uslov:",
    answers: [
      "slobodna I Frenelov zona",
      "slobodne I i II Frenelov zona",
      "slobodne sve Frenelov zone",
      "slobodne I, II i III Frenelov zona"
    ],
    correct: 0,
    explanation: "Za uspešan bežični prenos minimalni uslov je da bude slobodna (neometana) prva Frenelov zona. Prepreke u prvoj Fresnelovoj zoni uzrokuju značajne gubitke signala." },

  { id: 90, category: "racunarske_mreze", type: "multiple",
    question: "Servis koji čini prelazak iz 2G u 2,5G generaciju mobilne telefonije je:",
    answers: ["Bluetooth", "SMS", "GPS", "GPRS", "Infrared"],
    correct: 3,
    explanation: "GPRS (General Packet Radio Service) je servis koji je uveden kao prelazna tehnologija između 2G (GSM) i 3G, poznat kao 2,5G. Omogućava paketski prenos podataka." },

  { id: 91, category: "racunarske_mreze", type: "multiple",
    question: "U okviru jednog piconeta može se nalaziti:",
    answers: ["najmanje 7 aktivnih slave stanica", "najviše 7 aktivnih slave stanica", "neograničen broj slave stanica"],
    correct: 1,
    explanation: "Bluetooth piconet se sastoji od jednog master uređaja i do 7 aktivnih slave uređaja istovremeno (plus do 255 u stanju mirovanja - parked state)." },

  { id: 92, category: "racunarske_mreze", type: "multiple",
    question: "Korisnik analognog telefonskog priključka prima poziv tako što:",
    answers: [
      "FXO priključak prima napon zvona od FXS priključka",
      "FXS priključak prima napon zvona od FXO priključka",
      "Generiše DTMF cifre",
      "Prima DTMF cifre"
    ],
    correct: 0,
    explanation: "FXS (Foreign Exchange Station) je priključak telefonske centrale koji šalje napon zvona. FXO (Foreign Exchange Office) je priključak telefonskog aparata koji prima napon zvona." },

  { id: 93, category: "racunarske_mreze", type: "multiple",
    question: "U integrisanom sistemu video nadzora IP kamera zamenjuje:",
    answers: ["Analognu kameru i DVR", "Analognu kameru i video server", "Analognu kameru, DVR i video server"],
    correct: 1,
    explanation: "IP kamera integriše u sebi analognu kameru i video server (digitalizacija i mrežni prenos), ali ne zamenjuje DVR koji se koristi za snimanje. IP sistem koristi NVR za snimanje." },

  { id: 94, category: "racunarske_mreze", type: "multiple",
    question: "Konfigurisali ste server za štampanje (Print server) i pokušavate da konfigurišete klijenta na jednoj od radnih stanica u mreži. Ne možete da se povežete na server za štampanje. Proveravate status servisa na serveru i primećujete da se on nije startovao. Najbolje informacije za nastavak rešavanja problema će vam obezbediti:",
    answers: ["Registry", "Network settings", "Log file", "DNS"],
    correct: 2,
    explanation: "Log fajl servisa za štampanje sadrži detaljne informacije o grešci koja je sprečila pokretanje servisa. To je prvo mesto za dijagnostiku problema sa pokretanjem servisa." },

  { id: 95, category: "racunarske_mreze", type: "multiple",
    question: "Problem skrivenog čvora kod bežičnih mreža se javlja kada:",
    answers: [
      "Stanica nije u dometu tačke pristupa, niti u dometu druge stanice",
      "Stanica nije u dometu tačke pristupa ali je u dometu druge stanice",
      "Stanica je u dometu tačke pristupa ali nije u dometu druge stanice"
    ],
    correct: 2,
    explanation: "Skriveni čvor nastaje kada su dve stanice u dometu access pointa, ali ne i jedna druge. Ne mogu detektovati međusobni prenos, što uzrokuje kolizije na AP-u." },

  { id: 96, category: "racunarske_mreze", type: "multiple",
    question: "Tri access point-a postavljeni su da pokrivaju jednu oblast, koriste isti SSID, rade na frekvenčijskom opsegu 2,4GHz koji je podeljen na 11 kanala. Da bi mobilni uređaji uspešno koristili sva tri access point-a:",
    answers: [
      "access point-i moraju da rade na 1, 2, i 3-em kanalu",
      "access point-i moraju da rade na 1, 6, i 11-om kanalu",
      "access point-i mogu da rade na bilo koja tri različita kanala",
      "access point-i moraju da rade na istom kanalu"
    ],
    correct: 1,
    explanation: "U 2,4 GHz opsegu, jedini kanali koji se ne preklapaju su 1, 6 i 11. Korišćenjem ova tri kanala postiže se pokrivenost bez međusobnih smetnji između access pointova." },

  { id: 97, category: "racunarske_mreze", type: "multiple",
    question: "Dva access point-a postavljeni su da pokrivaju jednu oblast, koriste isti SSID, rade na frekvenčijskom opsegu 2,4GHz koji je podeljen na 11 kanala. Da bi mobilni uređaji uspešno koristili oba access point-a:",
    answers: [
      "access point-i mogu da rade na 1 i 2-om kanalu",
      "access point-i mogu da rade na bilo koja dva različita kanala",
      "access point-i moraju da rade na istom kanalu",
      "access point-i mogu da rade na 1 i 10-om kanalu"
    ],
    correct: 3,
    explanation: "U 2,4 GHz opsegu dva AP-a ne smeju da koriste kanale koji se preklapaju. Kanali 1 i 10 imaju dovoljno rastojanje (5 kanala) da se ne preklapaju i mogu koegzistirati." },

  { id: 98, category: "racunarske_mreze", type: "multiple",
    question: "Za Bridge mod access point važi:",
    answers: [
      "koristi se za povezivanje bežičnog klijenta na access point",
      "koristi se za povezivanje dve mreže ili više mreža u jednu celinu",
      "koristi se isključivo za povezivanje sa žičnom LAN mrežom"
    ],
    correct: 1,
    explanation: "Bridge mod access pointa koristi se za bežično spajanje dve fizički odvojene mreže (npr. dve zgrade) u jednu logičku mrežu, bez potrebe za fizičkim kablom između lokacija." },

  { id: 99, category: "racunarske_mreze", type: "multiple",
    question: "Bežična mreža koja po modu topologije predstavlja infrastrukturu, po topologiji je Basic Service Set (BSS) i oblast pokrivenosti je Basic Service Area (BSA):",
    answers: [
      "realizovana je pomoću dva ili više access point-a",
      "realizovana je pomoću jednog access point-a",
      "ne sadrži access point, veza se uspostavlja direktno između mobilnih uređaja"
    ],
    correct: 1,
    explanation: "BSS (Basic Service Set) je osnovna infrastrukturna bežična mreža koja se sastoji od jednog access pointa i skupa klijenata koji su s njim povezani." },

  { id: 100, category: "racunarske_mreze", type: "multiple",
    question: "Bežična mreža koja po modu topologije predstavlja infrastrukturu, po topologiji je Extended Service Set (ESS) i oblast pokrivenosti je Extended Service Area (ESA):",
    answers: [
      "realizovana je pomoću dva ili više access point-a",
      "realizovana je pomoću jednog access point-a",
      "ne sadrži access point, veza se uspostavlja direktno između mobilnih uređaja"
    ],
    correct: 0,
    explanation: "ESS (Extended Service Set) je proširena bežična mreža koja se sastoji od dva ili više BSS-a (access pointova) međusobno povezanih distribucionim sistemom (obično žičnom mrežom)." }

,


  // ==================== MREŽNI OPERATIVNI SISTEMI ====================

  { id: 101, category: "mrezni_os", type: "multiple",
    question: "Ako su dva računara u mreži dobila iste IP adrese:",
    answers: [
      "ni jedan računar neće biti u stanju da se poveže na mrežu",
      "računar koji se prvi prijavi će moći da se poveže na mrežu, a drugi neće",
      "oba računara će moći da se povežu na lokalnu mrežu, ali ne i na Internet"
    ],
    correct: 1,
    explanation: "Kada dva računara imaju istu IP adresu, onaj koji se prvi prijavio zadržava vezu, dok drugi dobija grešku konflikta adresa i ne može da pristupi mreži." },

  { id: 102, category: "mrezni_os", type: "multiple",
    question: "DHCP server pruža servis:",
    answers: [
      "automatskog podešavanja IP adresa računara na lokalnoj mreži",
      "dinamičkog povezivanja računara na lokalnu mrežu",
      "ARP alokaciju MAC adresa na ruteru"
    ],
    correct: 0,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatski dodeljuje IP adrese i mrežne parametre (maska, gateway, DNS) klijentima na lokalnoj mreži." },

  { id: 103, category: "mrezni_os", type: "multiple",
    question: "IPv6 koristi:",
    answers: ["128-bitnu adresu", "64-bitnu adresu", "32-bitnu adresu", "16-bitnu adresu"],
    correct: 0,
    explanation: "IPv6 koristi 128-bitne adrese, što obezbeđuje znatno više adresnog prostora od IPv4 koji koristi 32-bitne adrese." },

  { id: 104, category: "mrezni_os", type: "multiple",
    question: "Pod terminom 'balansiranje opterecenja' (load balancing) podrazumeva se:",
    answers: [
      "upotreba više od jednog servera za izvršenje istog zadatka",
      "upotreba više od jednog servera na mreži",
      "deljenje (zajednička upotreba) jednog servera za pristup većem broju različitih resursa",
      "instaliranje na server više od jedne komponente iste vrste, radi prevencije otkaza te hardverske komponente"
    ],
    correct: 0,
    explanation: "Load balancing (balansiranje opterećenja) podrazumeva raspodelu mrežnog saobraćaja ili zadataka na više servera koji izvršavaju isti posao, čime se poboljšavaju performanse i pouzdanost." },

  { id: 105, category: "mrezni_os", type: "multiple",
    question: "PDU (Protocol Data Unit) informacije na sloju mreže OSI modela se nazivaju:",
    answers: ["transport", "okviri", "paketi", "segmenti"],
    correct: 2,
    explanation: "Na mrežnom sloju (sloj 3) OSI modela, PDU se naziva paket. Okviri su na sloju 2 (veza podataka), segmenti na sloju 4 (transportni), a bitovi na sloju 1 (fizički)." },

  { id: 106, category: "mrezni_os", type: "multiple",
    question: "Segmentiranje niza podataka vrši se na sloju OSI modela:",
    answers: ["fizičkom sloju", "aplikacionom sloju", "sloju mreže", "transportnom sloju"],
    correct: 3,
    explanation: "Segmentiranje podataka obavlja transportni sloj (sloj 4) OSI modela. On deli podatke u segmente i dodaje zaglavlja za kontrolu toka i pouzdanog prenosa." },

  { id: 107, category: "mrezni_os", type: "multiple",
    question: "Protokol koji omogućava ruteru da odgovori na ARP zahtev koji sadrži adresu računara iz druge mreže je:",
    answers: ["Gateway DP", "Reverse ARP (RARP)", "Proxy ARP", "Address Resolution Protocol (ARP)"],
    correct: 2,
    explanation: "Proxy ARP omogućava ruteru da odgovori na ARP zahteve u ime udaljenih računara, tj. za adrese iz druge mreže, čime klijentima izgleda kao da su svi uređaji na lokalnoj mreži." },

  { id: 108, category: "mrezni_os", type: "multiple",
    question: "Pravilni redosled pri enkapsulaciji podataka je:",
    answers: [
      "Podatak, okvir, paket, segment, bit",
      "Segment, podatak, paket, okvir, bit",
      "Podatak, segment, paket, okvir, bit",
      "Podatak, segment, okvir, paket, bit"
    ],
    correct: 2,
    explanation: "Enkapsulacija ide odozgo na dole kroz OSI slojeve: podaci sa aplikacionog → segmenti (transport) → paketi (mrežni) → okviri (veza podataka) → bitovi (fizički sloj)." },

  { id: 109, category: "mrezni_os", type: "multiple",
    question: "Mrežna maska:",
    answers: [
      "ukazuje na to da li je IP adresa registrovana ili neregistrovana",
      "specificira koji deo IP adrese se odnosi na mrežni ID, a koji na ID broj hosta",
      "je vrednost koju dodeljuje IANA da bi određena mreža bila identifikovana kao jedinstvena na Internetu",
      "omogućava da IP adresa bude vidljiva sa Interneta"
    ],
    correct: 1,
    explanation: "Mrežna maska (subnet mask) određuje koji bitovi IP adrese identifikuju mrežu, a koji identifikuju host unutar te mreže. Ona je osnova za podelu IP adrese na mrežni i host deo." },

  { id: 110, category: "mrezni_os", type: "multiple",
    question: "Od sledećih protokola i TCP i UDP koristi:",
    answers: ["FTP", "SMTP", "Telnet", "DNS"],
    correct: 3,
    explanation: "DNS koristi i UDP (za standardne upite koji stanu u jedan paket) i TCP (za zone transfer i odgovore veće od 512 bajta). Ostali navedeni protokoli koriste isključivo TCP." },

  { id: 111, category: "mrezni_os", type: "multiple",
    question: "U komandnom modu nakon rezervisane reči telnet treba upisati:",
    answers: [
      "IP adresu interfejsa rutera na koji želimo da pristupimo",
      "MAC adresu interfejsa rutera na koji želimo da pristupimo",
      "MAC adresu naše mrežne kartice",
      "IP adresu računara sa koga pristupamo"
    ],
    correct: 0,
    explanation: "Komanda telnet zahteva IP adresu (ili hostname) udaljenog uređaja na koji se želi pristupiti. MAC adrese se ne koriste za Telnet vezu jer su lokalne prirode." },

  { id: 112, category: "mrezni_os", type: "multiple",
    question: "Izdvojiti tvrdnju koja se odnosi na VPN protokol:",
    answers: [
      "Omogućava da korisnici na fizički razdvojenim lokacijama preko javne mreže održavaju zaštićenu komunikaciju",
      "Daje automatski IP adrese, svim računarima koji se dodaju u javnu mrežu",
      "Služi za automatsko podmrežavanje"
    ],
    correct: 0,
    explanation: "VPN (Virtual Private Network) kreira sigurni šifrovani tunel kroz javnu mrežu (Internet), omogućavajući udaljenim korisnicima i lokacijama sigurnu međusobnu komunikaciju." },

  { id: 113, category: "mrezni_os", type: "multiple",
    question: "Odredi backup softver koji predstavlja sastavni deo operativnog sistema UNIX:",
    answers: ["Tar", "Backup", "Unix backup", "SBackup"],
    correct: 0,
    explanation: "Tar (Tape ARchive) je standardna UNIX/Linux komanda za arhiviranje i backup fajlova. Deo je osnovnog UNIX sistema i koristi se za kreiranje arhiva i pravljenje rezervnih kopija." },

  { id: 114, category: "mrezni_os", type: "multiple",
    question: "Pod terminom 'grupisanje' (clustering) podrazumeva se:",
    answers: [
      "zajedničko grupisanje klijent-računara na mreži",
      "upotreba više od jednog servera na mreži",
      "zajedničko grupisanje servera, radi deljenja resursa za potrebe korisnika",
      "međusobno povezivanje servera radi podele radnog opterećenja"
    ],
    correct: 3,
    explanation: "Clustering (klasterovanje) je tehnika gde se više servera (čvorova) međusobno povezuje i koordiniraju radi raspodele radnog opterećenja i obezbeđivanja visoke dostupnosti." },

  { id: 115, category: "mrezni_os", type: "multiple",
    question: "Odredi broj IP adresa koji će imati četiri mrežne kartice, koje su grupisane radi balansiranja opterećenja (load balancing):",
    answers: ["četiri", "tri", "dve", "jednu"],
    correct: 3,
    explanation: "Kada se više mrežnih kartica grupišu za load balancing (NIC teaming), sve kartice u grupi dele jednu zajedničku IP adresu. Saobraćaj se raspoređuje između fizičkih kartica transparentno." },

  { id: 116, category: "mrezni_os", type: "multiple",
    question: "Želite da implementirate mehanizam koji automatizuje IP konfigurisanje uključujući IP adresu, mrežnu masku, podrazumevani mrežni prolaz i DNS informacije. Protokol koji ćete upotrebiti da to postignete je:",
    answers: ["SMTP", "SNMP", "DHCP", "FTP", "HTTP", "TFTP"],
    correct: 2,
    explanation: "DHCP (Dynamic Host Configuration Protocol) automatski dodeljuje IP adresu, mrežnu masku, podrazumevani gateway i DNS servere klijentima na mreži, bez ručnog konfigurisanja." },

  { id: 117, category: "mrezni_os", type: "multiple",
    question: "Za instalaciju aktivnog direktorijuma (Active Directory) pomoću čarobnjaka Active Directory Installation upotrebićete komandu:",
    answers: ["DCPROM", "DCINSTALL", "DCPROMO", "ADDINSTALL"],
    correct: 2,
    explanation: "DCPROMO (Domain Controller Promote) je komanda u Windows Serveru koja pokreće čarobnjaka za promovisanje servera u kontroler domene i instalaciju Active Directory." },

  { id: 118, category: "mrezni_os", type: "multiple",
    question: "Odredi servis u Windows-u koji mora biti instaliran da bi korisnici mogli da koriste štampače preko interneta:",
    answers: [
      "Internet Information Service",
      "Terminal Services",
      "IPSec Services",
      "Windows Deployment Services"
    ],
    correct: 0,
    explanation: "IIS (Internet Information Services) je Microsoftov web server neophodan za IPP (Internet Printing Protocol) koji omogućava štampanje putem Interneta." },

  { id: 119, category: "mrezni_os", type: "multiple",
    question: "Stateless autokonfiguracija koristi sledeći protokol da razmenom poruka omogući hostu (radnoj stanici) da nauči prefiks mreže kojoj pripada:",
    answers: [
      "ARP (Address Resolution Protocol)",
      "ARPv6 (Address Resolution Protocol v6)",
      "NDP (Neighbor Discovery Protocol)",
      "DHCPv6 (Dynamic Host Resolution Protocol)"
    ],
    correct: 2,
    explanation: "NDP (Neighbor Discovery Protocol) je IPv6 protokol koji koristi ICMPv6 poruke za otkrivanje susednih čvorova i rutera. Router Advertisement poruke NDP-a nose prefiks mreže za SLAAC autokonfiguraciju." },

  { id: 120, category: "mrezni_os", type: "multiple",
    question: "Komanda za kopiranje operativnog sistema rutera na rezervni matični računar je:",
    answers: ["copy run start", "copy tftp flash", "copy start tftp", "copy flash tftp"],
    correct: 3,
    explanation: "Komanda 'copy flash tftp' kopira IOS operativni sistem iz flash memorije rutera na TFTP server (rezervni matični računar). Flash je lokalna memorija gde je smešten IOS." },

  { id: 121, category: "mrezni_os", type: "multiple",
    question: "Za MAC adresu 1024:5678:9ABC formiran Interface ID adrese IPv6 prema eui-64 formatu je:",
    answers: ["3024:56FF:FE78:9ABC", "1024:56FF:FE78:9ABC", "1224:56FF:FE78:9ABC"],
    correct: 0,
    explanation: "EUI-64 format: ubacuje se FF:FE u sredinu MAC adrese, pa se invertuje U/L bit (bit 1 od MSB strane, tj. XOR sa 0x20) prvog bajta. Za MAC 10:24:56:78:9A:BC: 10 hex (00010000) XOR 0x20 = 0x30, pa je Interface ID: 3024:56FF:FE78:9ABC." },

  { id: 122, category: "mrezni_os", type: "multiple",
    question: "Odredite tvrdnju koja se odnosi na računar sa IP adresom 169.254.150.15:",
    answers: [
      "Adresa je konfigurisana ručno",
      "Maska podmreže za adresu je 255.255.255.0",
      "Na mreži se ne nalazi DHCP server",
      "Adresa pripada klasi D"
    ],
    correct: 2,
    explanation: "Opseg 169.254.0.0/16 (APIPA) Windows automatski dodeljuje kada ne može da dobije adresu od DHCP servera. Prisustvo ove adrese znači da DHCP server nije dostupan na mreži." },

  { id: 123, category: "mrezni_os", type: "multiple",
    question: "Tehničkoj službi prijavljen je problem na vezi. Nakon razgovora sa klijentom tehničar saznaje da sve mrežne aplikacije funkcionišu osim FTP-a. Najverovat nije uzrok ovog problema je:",
    answers: [
      "Pogrešno konfigurisani Firewall",
      "Neispravan port na habu ili sviču",
      "Nepravilno konfigurisana IP adresa na klijentskoj mašini",
      "Nepravilno konfigurisani DNS server na klijentskoj mašini",
      "Nepravilno konfigurisani podrazumevani mrežni prolaz na klijentskoj mašini"
    ],
    correct: 0,
    explanation: "Kad sve aplikacije rade osim jedne (FTP), problem je specifičan za taj protokol/port. Firewall blokira FTP portove (21 za komandu, 20 za podatke) a propušta ostale, što je najčešći uzrok." },

  { id: 124, category: "mrezni_os", type: "multiple",
    question: "Data je adresa 2000:1234:5678:9A00::2/52, prefiks adrese je:",
    answers: [
      "2000:1234:5678:9A00::/52",
      "2000:1234:5678:9::/52",
      "2000:1234:5678:9000::/52"
    ],
    correct: 2,
    explanation: "Za /52 prefiks, prvih 52 bita identifikuju mrežu. Četvrti group (9A00) ima 16 bita; /52 pokriva 52 bita = 48 + 4 bita od četvrtog grupaa. 9A00 hex, prvih 4 bita = 1001 → 9000. Prefiks je 2000:1234:5678:9000::/52." },

  { id: 125, category: "mrezni_os", type: "multiple",
    question: "DHCP server na mreži je prestao da radi. Pod uslovom da na mreži nema drugih DHCP servera klijenti koji su prethodno dobili IP adrese će:",
    answers: [
      "Ostati bez IP adrese odmah nakon pada servera",
      "Ostati bez IP adrese nakon isteka pola vremena trajanja izdate adrese",
      "Ostati bez IP adrese nakon isteka sedam osmina vremena trajanja izdate adrese",
      "Ostati bez IP adrese nakon isteka tri četvrtine vremena trajanja izdate adrese"
    ],
    correct: 3,
    explanation: "DHCP klijent pokušava da obnovi adresu na 50% (T1) i na 87.5% (T2) vremena zakupa (lease). Ako DHCP server nije dostupan ni u jednom od ta dva pokušaja, klijent ostaje bez adrese nakon 100% trajanja zakupa. Klijent ostaje bez adrese po isteku pune 7/8 + 1/8 = nakon isteka trajanja, tj. praktično na kraju lease perioda." },

  { id: 126, category: "mrezni_os", type: "multiple",
    question: "Radna stanica čija je adresa 200.10.5.68/28 pripada sabnetu (podmreži):",
    answers: ["200.10.5.0/28", "200.10.5.64/28", "200.10.5.32/28"],
    correct: 1,
    explanation: "/28 maska = 255.255.255.240. Mreže: .0, .16, .32, .48, .64, .80... Adresa .68 pada u opseg .64-.79, dakle podmreža je 200.10.5.64/28." },

  { id: 127, category: "mrezni_os", type: "multiple",
    question: "U preduzeću u kome postoji DHCP server za podmrežu 192.168.1.0/24, nijedan od DHCP klijenata ne može da komunicira izvan lokalne podmreže kada se navede IP adresa računara. Računari sa statički dodeljenim adresama mogu uspešno da komuniciraju i izvan lokalne mreže. Da bi se omogućila komunikacija DHCP klijentima i izvan opsega lokalne podmreže potrebno je da se na DHCP serveru konfiguriše:",
    answers: [
      "opcija 003 Router",
      "opcija 006 DNS Server",
      "opcija 015 Domain Name",
      "opcija 044 WINS/NBNS Server"
    ],
    correct: 0,
    explanation: "DHCP opcija 003 Router dodeljuje adresu podrazumevanog mrežnog prolaza (default gateway) klijentima. Bez gateway-a, klijenti ne mogu komunicirati izvan lokalne podmreže." },

  { id: 128, category: "mrezni_os", type: "multiple",
    question: "PC1 na slici ne može da pristupi web serveru na adresi 209.165.200.226/27. Uzimajući u obzir izlaze komandi netstat, ipconfig i ping, odrediti šta je najverovat nije uzrok problema.",
    answers: [
      "PC1 nije dobro povezan na RTR1",
      "port 80 je već u upotrebi na PC1",
      "nije konfigurisani DNS server na PC1",
      "PC1 je konfigurisani sa pogrešnom adresom podrazumevanog mrežnog prolaza"
    ],
    correct: 3,
    explanation: "Ako PC1 može da pinguje lokalne adrese ali ne i udaljeni web server, a DNS radi (koristi se IP adresa direktno), najčešći uzrok je pogrešno konfigurisani default gateway koji onemogućava rutiranje prema Internetu." },

  { id: 129, category: "mrezni_os", type: "multiple",
    question: "Ukoliko u START meniju kliknemo na RUN i unesemo IP adresu na način prikazan na slici (\\\\192.168.10.30), krajnji rezultat biće:",
    answers: [
      "otvaranje WEB sajta firme 192.168.10.30",
      "otvaranje svih deljenih resursa na računaru broj 192.168.10.30",
      "poruka koja prikazuje grešku",
      "slanje poruke korisniku sa adresom 192.168.10.30"
    ],
    correct: 1,
    explanation: "Unos \\\\IP_adresa u RUN dijalogu otvara Windows Explorer i prikazuje sve deljene resurse (shared folders, printers) na datom računaru putem SMB/CIFS protokola." },

  { id: 130, category: "mrezni_os", type: "multiple",
    question: "Računar Dhcp1.skola.local sa statičkom adresom 10.10.0.5/24 konfiguriše se kao DHCP server. Na računaru Dhcp1 konfiguriše se opseg u granicama 10.10.1.0/24. Nakon aktiviranja opsega i autorizacije servera, server neuspešno dodeljuje adrese računarima u lokalnoj podmreži. Da bi DHCP server dodeljivao adrese klijentima u lokalnoj podmreži, potrebno je:",
    answers: [
      "konfigurisati klijente kao DHCP klijente",
      "uključiti DHCP klijentski servis na računaru Dhcp1",
      "promeniti adresu računara Dhcp1 i ponovo uvesti DHCP server",
      "izvršiti komandu ipconfig/registerdns na računaru Dhcp1"
    ],
    correct: 2,
    explanation: "DHCP server mora biti na istoj podmreži kao i opseg koji dodeljuje. Server ima adresu 10.10.0.5/24 (mreža 10.10.0.0), ali opseg je 10.10.1.0/24 (druga mreža). Treba promeniti adresu servera da bude u mreži 10.10.1.0/24." },

  { id: 131, category: "mrezni_os", type: "multiple",
    question: "U mreži postoji kontroler domene za domene prodaja.local koji je istovremeno i DNS server. U planu je uvođenje novog poddomene u postojećem stablu – maloprodaja.prodaja.local. Da bi se obezbedilo da korisnici iz domene prodaja.local mogu da se povežu sa korisnicima iz domene maloprodaja.prodaja.local koristeći potpuno kvalifikovana domenaska imena, potrebno je:",
    answers: [
      "definisati alternativni DNS server na svakom od klijentskih računara u domenu prodaja.local",
      "prerekonfigurisati root hints servere",
      "kreirati DNS prosleđivanje",
      "kreirati DNS delegiranje"
    ],
    correct: 3,
    explanation: "DNS delegiranje kreira vezu između nadređene zone (prodaja.local) i podređene zone (maloprodaja.prodaja.local) na drugom DNS serveru. To omogućava razrešavanje FQDN u celom stablu." },

  { id: 132, category: "mrezni_os", type: "multiple",
    question: "Potrebno je konfigurisati DHCP server tako da dodeljuje adrese iz opsega 192.168.1.0/24. U podmreži je i DNS server sa statički dodeljenom adresom 192.168.1.100. Da bi se napravio opseg na DHCP serveru koji neće biti u sukobu sa adresom postojećeg DNS servera, potrebno je:",
    answers: [
      "koristiti opciju 006 DNS Servers za dodeljivanje adrese DNS servera",
      "napraviti rezervaciju koja adresu 192.168.1.100 dodeljuje DNS serveru",
      "konfigurisati dva adresna niza u DHCP opsegu u kojima nema adrese 192.168.1.100",
      "napraviti izuzetak za adresu 192.168.1.100"
    ],
    correct: 3,
    explanation: "Izuzetak (exclusion) u DHCP opsegu isključuje određenu adresu iz dinamičke dodele. Dodavanjem izuzetka za 192.168.1.100, DHCP server neće nikad dodeliti tu adresu klijentima." },

  { id: 133, category: "mrezni_os", type: "multiple",
    question: "Konfiguriše se DNS server u preduzeću. Da bi DNS server umesto korenskih internet servera koristio korenske servere preduzeća, potrebno je:",
    answers: [
      "zameniti datoteku Cache.dns novom verzijom u kojoj su navedeni korenski serveri preduzeća",
      "konfigurisati datoteku HOSTS sa imenima i adresama korenskih servera u preduzeću",
      "konfigurisati datoteku Lmhosts sa imenima i adresama korenskih servera u preduzeću",
      "konfigurisati novi DNS server tako da prosleđuje upite korenskim serverima u preduzeću"
    ],
    correct: 0,
    explanation: "Datoteka Cache.dns (ili hints datoteka) sadrži adrese korenskih DNS servera. Zamenom ove datoteke sa prilagođenim korenskim serverima preduzeća, DNS server će koristiti interne korenski servere umesto Internet korenskih servera." },

  { id: 134, category: "mrezni_os", type: "multiple",
    question: "Vi ste administrator domenasi strukture gde imate šumu did.com. Korisnicima u domenu beograd.srbija.did.com neophodan je pristup do resursa jednom domenu šume aktivnog direktorijuma partnerske organizacije. Ovi korisnici ne bi trebalo da imaju pristup ni do jednog drugog domena u šumi partnerske organizacije. Korisnici iz drugih domena u Vašoj organizaciji takođe ne bi trebalo da imaju pristup resursima u šumi partnerske organizacije. Da biste ovo postigli treba da konfigurišete sledeće poverenje:",
    answers: [
      "Poverenje između šuma",
      "Poverenje između oblasti",
      "Eksterno poverenje",
      "Prece poverenje"
    ],
    correct: 2,
    explanation: "Eksterno poverenje (External Trust) se koristi za uspostavljanje jednosmernog ili dvosmernog poverenja između pojedinačnih domena koji se nalaze u različitim šumama. Za razliku od poverenja između šuma, eksterno poverenje ne prenosi se na ostale domene u šumi." },

  { id: 135, category: "mrezni_os", type: "multiple",
    question: "Vi ste administrator domenski strukture gde imate šumu aktivnog direktorijuma od 20 domena. Korisnici u domenu beograd.srbija.did.com prijavljuju da postoji značajan zastoj kada pokušavaju da pristupe resursima u domenu bar.crnagora.adm.com. Oba domene se nalaze u istoj šumi. Da biste rešili ovaj problem treba da konfigurišete sledeće poverenje:",
    answers: [
      "Poverenje između šuma",
      "Poverenje između oblasti",
      "Eksterno poverenje",
      "Preče poverenje"
    ],
    correct: 3,
    explanation: "Preče poverenje (Shortcut Trust) se koristi za ubrzavanje autentifikacije između domena unutar iste šume koji su udaljeni jedni od drugikh u hijerarhiji stabla. Skraćuje lanac transitivnog poverenja i eliminuše zastoje." },

  { id: 136, category: "mrezni_os", type: "multiple",
    question: "MAC adresa je C9-3F-32-V4-DC19. Njen OUI deo u binarnom sistemu je:",
    answers: [
      "11000110-11000000-00011111",
      "11001100-00111111-00011000",
      "11001001-00111111-00110010",
      "11001001-00111111-00011000"
    ],
    correct: 3,
    explanation: "OUI (Organizationally Unique Identifier) su prva tri okteta MAC adrese: C9-3F-32. C9 hex = 11001001 binarno, 3F hex = 00111111 binarno, 32 hex = 00110010 binarno. Tačan odgovor je 11001001-00111111-00110010." },

  { id: 137, category: "mrezni_os", type: "multiple",
    question: "Da bi se instalirao operativni sistem u 4 regionalne kancelarije koristi se WDS server. Za svaku kancelariju pripremljeno je po tri slike operativnog sistema, ukupno njih 12. Da bi se obezbedilo da administrator u svakoj kancelariji može da preuzme samo sliku operativnog sistema koja je njemu namenjena potrebno je:",
    answers: [
      "kreirati globalnu grupu za svaku regionalnu kancelariju i učlaniti računare u odgovarajuću grupu",
      "kreirati organizacionu jedinicu za svaku regionalnu kancelariju i smestiti računare u odgovarajuću organizacionu jedinicu",
      "postaviti sve slike u jedinstvenu grupu na WDS serveru, a zatim svakom administratoru dodeliti prava pristupa grupi",
      "za svaku regionalnu kancelariju kreirati posebnu grupu na WDS serveru, a zatim dodeliti prava pristupa svakom administratoru za odgovarajuću grupu"
    ],
    correct: 3,
    explanation: "WDS podržava grupisanje slika OS-a. Kreiranje zasebnih WDS grupa za svaku kancelariju i dodeljivanje odgovarajućih pristupnih prava administratorima obezbeđuje da svaki administrator vidi samo slike namenjene svojoj kancelariji." },

  { id: 138, category: "mrezni_os", type: "multiple",
    question: "Šuma aktivnog direktorijuma sadrži dva domena: feniks.com i kolibri.com. Server1 je autoritativan DNS server za domenu feniks.com. Server2 je autoritativan DNS server za domenu kolibri.com. Ova dva servera povezana su WAN vezom. Da bi se omogućilo da klijentski računari čiji je primarni DNS server Server1 mogu da pristupaju po imenima računarima na domenu kolibri.com, kada je WAN veza u prekidu, potrebno je na računaru Server1:",
    answers: [
      "kreirati vezivnu zonu za",
      "dodati prosleđivanje",
      "kreirati sekundarnu zonu",
      "kreirati uslovno prosleđivanje"
    ],
    correct: 2,
    explanation: "Sekundarna zona (secondary zone) je kopija primarne zone sa drugog DNS servera. Kreiranje sekundarne zone za kolibri.com na Server1 omogućava razrešavanje imena tog domena čak i kada je WAN veza sa Server2 prekinuta." },

  { id: 139, category: "mrezni_os", type: "multiple",
    question: "Želite da napravite delegiranje za zonu magacin.mojafirma.com. Ta zona će se nalaziti na DNS serveru sa IP adresom 10.100.10.10. DNS server nadležan za zonu mojafirma.com nalazi se na računaru sa IP adresom 10.10.10.10. Da biste ovo postigli najprešnje je potrebno da:",
    answers: [
      "Napravite zonu magacin.mojafirma.com na računaru na kojeme se nalazi DNS server sa IP adresom 10.10.10.10.",
      "Napravite zonu magacin.mojafirma.com na računaru na kojeme se nalazi DNS server sa IP adresom 10.100.10.10.",
      "Napravite delegiranje koristeći zonu mojafirma.com na računaru na kojeme se nalazi DNS server sa IP adresom 10.100.10.10.",
      "Napravite delegiranje koristeći zonu mojafirma.com na računaru na kojeme se nalazi DNS server sa IP adresom 10.10.10.10."
    ],
    correct: 1,
    explanation: "Pre kreiranja delegiranja, zona koja se delegira (magacin.mojafirma.com) mora postojati na odredišnom DNS serveru (10.100.10.10). Tek nakon toga, na nadređenom serveru (10.10.10.10) se kreira delegiranje." },

  { id: 140, category: "mrezni_os", type: "multiple",
    question: "U domensikoj mreži Prodaja.Organizacija99.com postavljeni je DNS sistem razrešavanja imena. Potrebno je preporučiti izmene u DNS konfiguraciji, tako da se omogući korisnicima iz svih domena da razrešavaju i Internet DNS imena i imena računara u svim internim domenima. Tvoj predlog je:",
    answers: [
      "Na svim DNS serverima u domenu Organizacija99.com, konfigurisati reverznu lookup zonu. Na svim DNS serverima u domenu Prodaja.Organizacija99.com konfigurisati uslovno prosleđivanje ka Organizacija99.com.",
      "Na svim DNS serverima u domenu Organizacija99.com, dodati uslovno prosleđivanje ka Prodaja.Organizacija99.com. Na DNS serverima u domenu Prodaja.Organizacija99.com, dodati prosleđivanje ka Prodaja.Organizacija99.com.",
      "Na svim DNS serverima u domenu Organizacija99.com, kreirati delegiranje ka Organizacija99.com. Na DNS serverima u domenu Prodaja.Organizacija99.com dodati prosleđivanje ka Organizacija99.com.",
      "Na svim DNS serverima u domenu Organizacija99.com, konfigurisati uslovno prosleđivanje ka Prodaja.Organizacija99.com. Na DNS serverima u domenu Prodaja.Organizacija99.com kreirati reverznu lookup zonu."
    ],
    correct: 1,
    explanation: "Da bi svi klijenti mogli razrešavati i Internet i interna DNS imena: DNS serveri u nadređenom domenu trebaju uslovno prosleđivanje ka poddomenu, a DNS serveri u poddomenu treba prosleđivanje ka nadređenom. Tako se upiti mogu rešiti u oba smera i prosleđuju se na Internet DNS servere za spoljna imena." },

  { id: 141, category: "mrezni_os", type: "multiple",
    question: "Upravo ste uveli serversku ulogu WDS (Windows Deployment Services) na računaru koji funkcioniše kao kontroler domene, DHCP server i DNS server. Kada pokušavate da pokrenete jedan server sa PXE mrežnom karticom, ne možete da uspostavite vezu sa PXE serverom kroz WDS. Da biste rešili ovaj problem treba preduzeti sledeće:",
    answers: [
      "Konfigurisanje DHCP parametara u serverskim svojstvima WDS-a.",
      "Konfigurisanje DHCP parametara na konzoli DHCP servera.",
      "Konfigurisanje DNS parametara na konzoli DNS servera.",
      "Konfigurisanje klijentskih parametara u serverskim svojstvima WDS-a."
    ],
    correct: 0,
    explanation: "Kada su WDS i DHCP na istom serveru, DHCP opcije 60 i 66/67 moraju biti konfigurisane u WDS serverskim svojstvima kako bi PXE klijenti mogli ispravno da lociraju WDS server. Ovo se radi kroz WDS konzolu." },

  { id: 142, category: "mrezni_os", type: "multiple",
    question: "Vaša kompanija ima tri predstavništva sa zasebnim podmrežama. Napravili ste DNS zapise koji koriste isto ime did.mojakompanija.com za svaki WSUS server u predstavništvima. Želite da osigurate da kada neki klijent zahteva ime zapisa did.mojakompanija.com, DNS server vraća zapis koji odgovara IP adresi lokalne podmreže tog klijenta. Da biste ovo postigli treba da konfigurišete sledeću DNS opciju:",
    answers: [
      "Zaključivanje memorije DNS servera (DNS Cache Locking)",
      "Rekurzija DNS servera",
      "Logički priključak DNS servera (DNS Socket Pool)",
      "Ređanje mrežne maske (Netmask Ordering)"
    ],
    correct: 3,
    explanation: "Netmask Ordering (sortiranje po mrežnoj masci) je DNS mehanizam koji vraća IP adresu iz iste podmreže kao i klijent koji šalje upit. Tako WSUS klijenti dobijaju adresu lokalnog WSUS servera." },

  { id: 143, category: "mrezni_os", type: "multiple",
    question: "Adresa mreže 192.168.20.0 je podmrežena i sledeće adrese mreža su dodeljene postojećim mrežama: 192.168.20.0/28, 192.168.20.32/27, 192.168.20.128/26, 192.168.20.224/29. Među sledećim adresama kao adresa nove mreže može da se odabere:",
    answers: ["192.168.20.232/30", "192.168.20.8/29", "192.168.20.206/30"],
    correct: 0,
    explanation: "Provera preklapanja: .0/28 pokriva .0-.15; .32/27 pokriva .32-.63; .128/26 pokriva .128-.191; .224/29 pokriva .224-.231. Opcija .8/29 (.8-.15) preklapa se sa .0/28. Opcija .206/30 nije ispravno poravnata (/30 mora biti višekratnik od 4). Opcija .232/30 pokriva .232-.235 — ne preklapa se ni sa jednom dodeljenom mrežom i ispravno je poravnata." },

  { id: 144, category: "mrezni_os", type: "multi",
    question: "U mreži, u organizacionoj jedinici Beograd nalazi se NAT Server na adresi 192.168.10.254. Korisnik iz organizacione jedinice Niš ne može da pristupi Internetu. Da bi locirao problem i počeo sa njegovim otklanjanjem, pokrenuće komande:",
    answers: [
      "pathping 192.168.10.254",
      "net view \\\\192.168.10.254",
      "tracert 192.168.10.254",
      "nslookup 192.168.10.254"
    ],
    correct: [0, 2],
    explanation: "pathping i tracert su alati za dijagnostiku mrežnih putanja. pathping kombinuje ping i tracert (prikazuje gubitke paketa po skoku), dok tracert prikazuje rutu do odredišta. Oba pomažu u lociranju problema sa ruter/gateway 192.168.10.254." },

  { id: 145, category: "mrezni_os", type: "multi",
    question: "Odredi privatne IP adrese:",
    answers: [
      "11.10.9.8",
      "172.17.172.17",
      "182.14.24.34",
      "192.168.0.20",
      "220.220.220.230"
    ],
    correct: [1, 3],
    explanation: "Privatni opsezi su: 10.0.0.0/8, 172.16.0.0/12 (172.16-31.x.x) i 192.168.0.0/16. Adresa 172.17.172.17 je u opsegu 172.16-31.x.x (privatni), a 192.168.0.20 je u opsegu 192.168.x.x (privatni). Ostale su javne adrese." },

  { id: 146, category: "mrezni_os", type: "multi",
    question: "Za MAC adresu važi:",
    answers: [
      "To je globalna IP adresa",
      "Obezbeđuje je proizvođač mrežne kartice",
      "Ima veličinu od 6 bajtova",
      "To je logička adresa"
    ],
    correct: [1, 2],
    explanation: "MAC adresa (Media Access Control) je fizička adresa od 48 bita (6 bajtova) ugrađena u mrežnu karticu od strane proizvođača. Nije IP adresa (koja je logička adresa) niti globalna adresa u smislu rutabilnosti." },

  { id: 147, category: "mrezni_os", type: "multi",
    question: "Za DHCP Discover poruku važi:",
    answers: [
      "Koristi FF-FF-FF-FF-FF-FF kao opštu poruku sloja 2",
      "Koristi UDP kao protokol transportnog sloja.",
      "Koristi TCP kao protokol transportnog sloja.",
      "Ne koristi odredišnu adresu na sloju 2."
    ],
    correct: [0, 1],
    explanation: "DHCP Discover se šalje kao broadcast. Na sloju 2 koristi odredišnu MAC FF:FF:FF:FF:FF:FF (broadcast), a na transportnom sloju koristi UDP (portovi 67 za server i 68 za klijent)." },

  { id: 148, category: "mrezni_os", type: "multi",
    question: "Odrediti lokacije koje omogućavaju menjanje domenskog članstva računara pod Windows Serverom 2003 i 2008:",
    answers: [
      "Svojstva My Computer",
      "Ikonica System alat ke Control Panel",
      "Konzola Active Directory Users And Computers",
      "Ikonica Users alatke Control Panel",
      "Konzola Active Directory Domains And Trust",
      "Ikonica Computer Management alatke Control Panel"
    ],
    correct: [0, 1],
    explanation: "Domensko članstvo računara se može promeniti putem Svojstava My Computer (kartica Computer Name) ili putem System ikonice u Control Panel-u. AD konzole koriste administratori domena ali ne za promenu domena sa klijentske mašine." },

  { id: 149, category: "mrezni_os", type: "multi",
    question: "Adresa IPv6 FE00:0001:1000:0000:0002:0000:0000:0000 može se kraće zapisati:",
    answers: [
      "FE00:1:1:2::",
      "FE00:1:1000::2::",
      "FE00:1:1000:0000:2::",
      "FE00:1:1000::2:0000:0000:0000",
      "FE:1:1000::2:0000:0000:0000"
    ],
    correct: [2, 3],
    explanation: "Pravila skraćivanja IPv6: vodeće nule u bloku se skraćuju, a jedan niz uzastopnih nultih blokova se zamenjuje '::'. FE00:1:1000:0000:2:: je tačno (vodeće nule uklonjene, :: zamenjuje nule na kraju). FE00:1:1000::2:0000:0000:0000 je tačno jer :: zamenjuje 0000 u bloku 4." },

  { id: 150, category: "mrezni_os", type: "multi",
    question: "Za OSPF regione važe sledeće izjave:",
    answers: [
      "Morate da imate zasebno konfigurisane loopback interfejse u svakom regionu.",
      "Brojevi koje možete da dodelite regionu se kreću do 65535.",
      "Region-okosnica se takođe naziva region 0.",
      "Svi regioni moraju biti povezani sa regionom 0."
    ],
    correct: [2, 3],
    explanation: "U OSPF: okosnica (backbone area) se uvek označava kao Area 0 (region 0), i svi ostali regioni moraju biti direktno ili virtuelno povezani sa njom. Loopback nije obavezan, a OSPF area brojevi idu do 4294967295 (32-bitni broj)." },

  { id: 151, category: "mrezni_os", type: "multi",
    question: "Protokol OSPF ćemo koristiti u hijerarhijskom dizajnu:",
    answers: [
      "Da bi smanjili administrativni rad rutiranja.",
      "Da bi ubrzali konvergenciju.",
      "Da bi pojednostavili konfigurisanje OSPF rutiranja.",
      "Da bi nestabilnost mreže proširili na više oblasti."
    ],
    correct: [0, 1],
    explanation: "Hijerarhijski dizajn OSPF sa više oblasti smanjuje veličinu tabela rutiranja i administrativni posao, a ubrzava konvergenciju jer LSA promene ostaju unutar oblasti. NE širi nestabilnost, već je ograničava u okviru oblasti." },

  { id: 152, category: "mrezni_os", type: "multi",
    question: "Baza podataka AD DS (Active Directory Domain Services) jednog domene kontrolera je oštećena. Imate rezervnu kopiju svih kritičnih volumena koja sadrži podatke stanja sistema, koja je napravljena četiri dana ranije. Nije brisan nijedan važan objekat. Da biste obnovili Aktivni direktorijum treba da preduzmete sledeće postupke:",
    answers: [
      "Obnavljanje podataka stanja sistema",
      "Nadležno obnavljanje",
      "Ponovo pokretanje u režimu DSRM (Directory Services Restore Mode)",
      "Nenadležno obnavljanje"
    ],
    correct: [0, 2, 3],
    explanation: "Za obnavljanje AD DS bez brisanog objekta koristi se neautoritativno (nenadležno) obnavljanje: pokrenuti u DSRM režimu, obnoviti System State backup, i zatim normalno pokrenuti kontroler domena koji će se ažurirati od drugog DC-a." },

  { id: 153, category: "mrezni_os", type: "multi",
    question: "Slojevi TCP/IP modela su:",
    answers: [
      "Sloj aplikacije",
      "Sloj sesije",
      "Sloj transporta",
      "Sloj interneta",
      "Sloj povezivanja podataka",
      "Fizički sloj"
    ],
    correct: [0, 2, 3, 4],
    explanation: "TCP/IP model ima 4 sloja: Sloj aplikacije (kombinuje aplikacioni, prezentacioni i sesijski sloj OSI-a), Transportni sloj, Internet sloj (mrežni), i Sloj mrežnog pristupa/povezivanja podataka koji obuhvata i fizički sloj." },

  { id: 154, category: "mrezni_os", type: "multi",
    question: "TCP koristi sledeće servise:",
    answers: ["DHCP", "SMTP", "SNMP", "FTP", "HTTP", "TFTP"],
    correct: [1, 3, 4],
    explanation: "TCP koriste aplikacije koje zahtevaju pouzdanu isporuku: SMTP (port 25) za e-mail, FTP (port 21/20) za prenos fajlova, HTTP (port 80) za web. DHCP i TFTP koriste UDP zbog brzine, SNMP pretežno UDP." },

  { id: 155, category: "mrezni_os", type: "multi",
    question: "UDP koristi sledeće servise:",
    answers: ["DHCP", "SMTP", "SNMP", "FTP", "HTTP", "TFTP"],
    correct: [0, 2, 5],
    explanation: "UDP koriste servisi koji zahtevaju brzinu i gde gubitak paketa nije kritičan: DHCP (portovi 67/68) za dodeljivanje IP adresa, SNMP (port 161) za upravljanje mrežom, TFTP (port 69) za jednostavan prenos fajlova." },

  { id: 156, category: "mrezni_os", type: "multi",
    question: "Odredi protokole koji istovremeno podržavaju i VLSM i sumiranje i diskontinualno umrežavanje:",
    answers: ["RIPv1", "IGRP", "EIGRP", "OSPF", "VGP", "RIPv2"],
    correct: [2, 3],
    explanation: "EIGRP i OSPF su classless rutirni protokoli koji podržavaju VLSM (promenljive dužine podmrežnih maski), sumiranje ruta i diskontinualne mreže. RIPv1 i IGRP su classful i ne podržavaju VLSM. RIPv2 podržava VLSM ali ne podržava diskontinualne mreže po defaultu." },

  { id: 157, category: "mrezni_os", type: "multi",
    question: "Trenutno WDS (Windows Deployment Services) ne odgovara klijentskim računarima. Želite da konfigurišete WDS tako da reaguje na sve računare, ali administrator mora ručno da odobri instalaciju na računare sa nepoznatim MAC adresama. Da biste ovo postigli treba da konfigurišete sledeće parametre:",
    answers: [
      "Ne odgovarati nijednom klijentskom računaru (Do Not Respond To Any Client Computers)",
      "Zahtevati odobrenje administratora za nepoznate računare (Require Administrator Approval For Unknown Computers)",
      "Odgovarati samo poznatim računarima (Respond Only To Known Client Computers)",
      "Odgovarati svim klijentskim računarima, poznatim i nepoznatim (Respond To All Client Computers, Known And Unknown)"
    ],
    correct: [1, 3],
    explanation: "Da bi WDS odgovarao svim računarima ali uz ručno odobrenje za nepoznate MAC adrese, potrebno je uključiti 'Respond To All Client Computers' I 'Require Administrator Approval For Unknown Computers'." },

  { id: 158, category: "mrezni_os", type: "input",
    question: "TELNET se obično povezuje na server preko porta broj _____, a HTTP preko porta broj _____.",
    correct: ["23", "80"],
    explanation: "Telnet standardno koristi TCP port 23 za udaljeni pristup komandnoj liniji, dok HTTP koristi TCP port 80 za prenos web sadržaja." },

  { id: 159, category: "mrezni_os", type: "input",
    question: "Sistem razrešavanja imena koji je standardizovano ugrađen u TCP/IP je ___________.",
    correct: ["DNS"],
    explanation: "DNS (Domain Name System) je standardni sistem koji prevodi domenaska imena (npr. www.primer.com) u IP adrese i obrnuto, a sastavni je deo TCP/IP protokol skupa." },

  { id: 160, category: "mrezni_os", type: "input",
    question: "Opseg prvog okteta klase B je ___________.",
    correct: ["128-191"],
    explanation: "IP adrese klase B imaju prvi oktet u opsegu 128-191. Format je 10xxxxxx, što daje vrednosti od 10000000 (128) do 10111111 (191). Podrazumevana maska klase B je 255.255.0.0." },

  { id: 161, category: "mrezni_os", type: "input",
    question: "Podrazumevana mrežna maska za adrese klase C je ___________.",
    correct: ["255.255.255.0"],
    explanation: "Klasa C koristi prva tri okteta za mrežni deo i poslednji oktet za hostove. Podrazumevana maska je 255.255.255.0 (/24), što daje 254 upotrebljiva hosta po mreži." },

  { id: 162, category: "mrezni_os", type: "input",
    question: "Da bi ste proverili da li je TCP/IP protokol pravilno instaliran i inicijalizovan na lokalnom računaru, upotrebićete sledeću komandu: ___________.",
    correct: ["PING 127.0.0.1"],
    explanation: "Komandom 'ping 127.0.0.1' testira se loopback adresa (localhost). Ako ping odgovara, TCP/IP protokol je ispravno instaliran i inicijalizovan na lokalnom računaru." },

  { id: 163, category: "mrezni_os", type: "input",
    question: "Mreže koje predstavljaju simulirane veze tačka-tačka korišćenjem tunelskog prenosa i koje se mogu prostirati preko bilo kakve mreže, uključujući Internet, nazivaju se _________ mreže.",
    correct: ["VPN"],
    explanation: "VPN (Virtual Private Network) mreže koriste tehnologiju tuneliranja da uspostave sigurne, virtuelne veze tačka-tačka kroz javne mreže poput Interneta." },

  { id: 164, category: "mrezni_os", type: "input",
    question: "Da bi Windows klijenti mogli da vide UNIX operativni sistem, potrebno je instalirati SAMBU na ___________.",
    correct: ["UNIX SERVER"],
    explanation: "Samba je softver koji se instalira na UNIX/Linux serveru i implementira SMB/CIFS protokol, omogućavajući Windows klijentima da pristupaju deljenim resursima (folderi, štampači) na Unix serverima." },

  { id: 165, category: "mrezni_os", type: "input",
    question: "Sistem za upravljanje poslovima štampanja pod Linux-om zove se ___________.",
    correct: ["CUPS"],
    explanation: "CUPS (Common Unix Printing System) je standardni sistem za upravljanje štampanjem na Linux/Unix sistemima. Podržava IPP protokol i kompatibilan je sa Windows mrežnim štampačima." },

  { id: 166, category: "mrezni_os", type: "input",
    question: "Komanda kojom se mogu locirati objekti u aktivnom direktorijumu je ___________.",
    correct: ["dsquery"],
    explanation: "Komanda 'dsquery' u Windows Server-u pretražuje Active Directory i pronalazi objekte (korisnike, računare, grupe, OU) na osnovu zadatih kriterijuma." },

  { id: 167, category: "mrezni_os", type: "input",
    question: "DNS ime koje jedinstveno označava matični računar na mreži je ___________.",
    correct: ["FQDN"],
    explanation: "FQDN (Fully Qualified Domain Name) je potpuno kvalifikovano domensko ime koje jednoznačno identifikuje računar na Internetu, npr. server1.preduzeće.com. Sadrži i ime računara i sve nadređene domene." },

  { id: 168, category: "mrezni_os", type: "matching",
    question: "Povežite segmente aktivnog direktorijuma sa njihovim opisima:",
    pairs: [
      { left: "Skup svih objekata, njihovih atributa i sintakse atributa u aktivnom direktorijumu", right: "Šuma" },
      { left: "Fizičko grupisanje nezavisno od domena ili strukture organizacionih jedinica", right: "Sajt" },
      { left: "Skup računara koji dele zajednički skup polisa, zajedničko ime i bazu članova", right: "Domen" }
    ],
    correct: ["Šuma", "Sajt", "Domen"],
    explanation: "Šuma sadrži šemu (skup svih objekata i atributa). Sajt predstavlja fizičko grupisanje mreže. Domen je logički kontejner sa zajedničkim pravilima, imenskim prostorom i bazom direktorijuma." },

  { id: 169, category: "mrezni_os", type: "matching",
    question: "Povežite TCP/IP alate sa njihovim opisima:",
    pairs: [
      { left: "daje pregled TCP/IP parametara koji su dodeljeni nekom hostu", right: "ipconfig" },
      { left: "proverava dostupnost računara na mreži", right: "ping" },
      { left: "statički povezuje IP adresu sa MAC adresom", right: "arp -s" }
    ],
    correct: ["ipconfig", "ping", "arp -s"],
    explanation: "ipconfig prikazuje IP konfiguraciju mrežnih adaptera. ping šalje ICMP Echo zahteve i proverava dostupnost hosta. arp -s dodaje statički unos u ARP tabelu koji vezuje IP adresu sa MAC adresom." },

  { id: 170, category: "mrezni_os", type: "matching",
    question: "Povežite komande ipconfig sa efektima njihovog izvršenja:",
    pairs: [
      { left: "ispisuje informacije o svim IP adresama, mrežnim maskama i podrazumevanim mrežnim prolazima za sve prisutne mrežne adaptere", right: "ipconfig /all" },
      { left: "raskida sve aktivne TCP/IP veze na svim mrežnim adapterima i oslobađa sve vezane adrese", right: "ipconfig /release" },
      { left: "ponovo uspostavlja sve TCP/IP veze na svim mrežnim adapterima i potražuje nove adrese", right: "ipconfig /renew" }
    ],
    correct: ["ipconfig /all", "ipconfig /release", "ipconfig /renew"],
    explanation: "ipconfig /all prikazuje sve detalje o mrežnoj konfiguraciji. ipconfig /release oslobađa DHCP adresu. ipconfig /renew traži novu DHCP adresu od servera." },

  { id: 171, category: "mrezni_os", type: "matching",
    question: "Povežite Linux komande sa njihovim objašnjenjima:",
    pairs: [
      { left: "promena prava pristupa direktorijumu ili fajlu", right: "chmod" },
      { left: "daje listu trenutno prijavljenih korisnika", right: "who" },
      { left: "prikaz tekućeg direktorijuma", right: "pwd" }
    ],
    correct: ["chmod", "who", "pwd"],
    explanation: "chmod (change mode) menja dozvole (prava pristupa) fajlova i direktorijuma. who prikazuje listu korisnika koji su trenutno prijavljeni. pwd (print working directory) prikazuje putanju tekućeg direktorijuma." },

  { id: 172, category: "mrezni_os", type: "matching",
    question: "Povežite TCP/IP alate sa opisima njihovih funkcija (tracert, netstat, nslookup):",
    pairs: [
      { left: "koristi se za proveru rada DNS servera", right: "nslookup" },
      { left: "prikazuje sve trenutno aktivne konekcije serverskog računara", right: "netstat" },
      { left: "prikazuje listu rutera kroz koje paket podataka mora da prođe na putu do odredišnog hosta", right: "tracert" }
    ],
    correct: ["nslookup", "netstat", "tracert"],
    explanation: "nslookup ispituje DNS razrešavanje. netstat prikazuje aktivne mrežne konekcije i portove. tracert (trace route) prikazuje put paketa kroz mrežu i kašnjenja na svakom skoku." },

  { id: 173, category: "mrezni_os", type: "matching",
    question: "Pored svakog pojma upisati broj nivoa OSI modela na koji se pojam odnosi (Ethernet, MPEG, TCP, Telnet):",
    pairs: [
      { left: "Ethernet", right: "Sloj 2 (veza podataka)" },
      { left: "MPEG", right: "Sloj 6 (prezentacioni)" },
      { left: "TCP", right: "Sloj 4 (transportni)" },
      { left: "Telnet", right: "Sloj 7 (aplikacioni)" }
    ],
    correct: ["Sloj 2 (veza podataka)", "Sloj 6 (prezentacioni)", "Sloj 4 (transportni)", "Sloj 7 (aplikacioni)"],
    explanation: "Ethernet je protokol sloja 2 (veza podataka). MPEG je format kompresije koji je deo prezentacionog sloja (6). TCP je transportni protokol (sloj 4). Telnet je aplikativni protokol (sloj 7)." },

  { id: 174, category: "mrezni_os", type: "matching",
    question: "Pored svakog pojma upisati broj nivoa OSI modela (DNS, ICMP, ssh, Frame relay):",
    pairs: [
      { left: "DNS", right: "Sloj 7 (aplikacioni)" },
      { left: "ICMP", right: "Sloj 3 (mrežni)" },
      { left: "ssh", right: "Sloj 5 (sesijski)" },
      { left: "Frame relay", right: "Sloj 2 (veza podataka)" }
    ],
    correct: ["Sloj 7 (aplikacioni)", "Sloj 3 (mrežni)", "Sloj 5 (sesijski)", "Sloj 2 (veza podataka)"],
    explanation: "DNS je aplikacioni protokol (sloj 7). ICMP radi na mrežnom sloju (sloj 3) zajedno sa IP. SSH uspostavlja i upravlja sesijama (sloj 5). Frame Relay je protokol sloja 2 (veza podataka) za WAN mreže." },

  { id: 175, category: "mrezni_os", type: "matching",
    question: "Povežite Linux komande sa njihovim objašnjenjima (mkdir, ls, cat, pwd):",
    pairs: [
      { left: "prikaz tekstualne datoteke na ekranu", right: "cat" },
      { left: "prikaz tekućeg direktorijuma", right: "pwd" },
      { left: "prikaz sadržaja direktorijuma", right: "ls" },
      { left: "kreiranje direktorijuma", right: "mkdir" }
    ],
    correct: ["cat", "pwd", "ls", "mkdir"],
    explanation: "cat (concatenate) prikazuje sadržaj tekstualnih fajlova. pwd prikazuje putanju tekućeg direktorijuma. ls (list) prikazuje sadržaj direktorijuma. mkdir (make directory) kreira novi direktorijum." },

  { id: 176, category: "mrezni_os", type: "matching",
    question: "Povežite funkcije slojeva OSI modela sa odgovarajućim slojevima (fizički, veza podataka, mrežni):",
    pairs: [
      { left: "utvrđuje najbolju putanju od izvora do odredišta", right: "mrežni sloj" },
      { left: "izvršava binarni prenos", right: "fizički sloj" },
      { left: "podeljen u dva sloja", right: "sloj veze podataka" }
    ],
    correct: ["mrežni sloj", "fizički sloj", "sloj veze podataka"],
    explanation: "Mrežni sloj (3) određuje optimalne putanje rutiranjem. Fizički sloj (1) prenosi bitove kao električne/optičke signale. Sloj veze podataka (2) je podeljen na LLC i MAC podsloj." },

  { id: 177, category: "mrezni_os", type: "matching",
    question: "Povežite IP adrese sa klasama kojima pripadaju:",
    pairs: [
      { left: "125.126.127.128 i 1.10.100.101", right: "Klasa A" },
      { left: "128.127.126.125", right: "Klasa B" },
      { left: "192.168.123.51", right: "Klasa C" }
    ],
    correct: ["Klasa A", "Klasa B", "Klasa C"],
    explanation: "Klasa A: prvi oktet 1-126 (125.x i 1.x). Klasa B: prvi oktet 128-191 (128.x). Klasa C: prvi oktet 192-223 (192.168.x). Adresa 127.x je loopback (ne klasa A u upotrebi). Klasa D je multicast (224-239)." },

  { id: 178, category: "mrezni_os", type: "matching",
    question: "Pored svakog opisa DNS zapisa upisati odgovarajuću skraćenicu:",
    pairs: [
      { left: "Hosta povezuje sa IP adresom", right: "A" },
      { left: "Definiše alijase", right: "CNAME" },
      { left: "Definiše naziv DNS servera", right: "NS" },
      { left: "Koristi se za pronalaženje imena na osnovu adrese", right: "PTR" }
    ],
    correct: ["A", "CNAME", "NS", "PTR"],
    explanation: "A zapis mapira hostname na IPv4 adresu. CNAME (Canonical NAME) kreira alias za drugi DNS naziv. NS zapis identifikuje autoritativne DNS servere. PTR (Pointer) zapis omogućava reverzno DNS pretraživanje (IP → ime)." },

  { id: 179, category: "mrezni_os", type: "matching",
    question: "Pored svake karakteristike navedite da li se odnosi na UDP ili TCP protokol:",
    pairs: [
      { left: "Uspostavlja vezu u 3 koraka (three-way-handshake)", right: "TCP" },
      { left: "Bezkonekcijskog je tipa", right: "UDP" },
      { left: "Za svaki poslati segment, prijemni računar mora u određenom vremenu da odgovori vraćanjem potvrde (ACK)", right: "TCP" },
      { left: "Nepouzdan je", right: "UDP" }
    ],
    correct: ["TCP", "UDP", "TCP", "UDP"],
    explanation: "TCP je konekcioni, pouzdan protokol sa trosmernim rukovanjem (SYN-SYN/ACK-ACK) i potvrđivanjem prijema. UDP je bezkonekcioni, nepouzdan ali brži protokol bez uspostavljanja veze i potvrđivanja." },

  { id: 180, category: "mrezni_os", type: "matching",
    question: "Povežite funkcije slojeva OSI modela (transportni, sesijski, prezentacioni, aplikacioni):",
    pairs: [
      { left: "omogućava programima da koriste mrežne resurse", right: "aplikacioni sloj" },
      { left: "obezbeđuje vezu između dva računara koji komuniciraju", right: "transportni sloj" },
      { left: "odgovoran za prevođenje podataka", right: "prezentacioni sloj" },
      { left: "obezbeđuje sigurnosne funkcije za prenos podataka", right: "sesijski sloj" }
    ],
    correct: ["aplikacioni sloj", "transportni sloj", "prezentacioni sloj", "sesijski sloj"],
    explanation: "Aplikacioni sloj (7) pruža interfejs aplikacijama. Transportni sloj (4) uspostavlja end-to-end vezu. Prezentacioni sloj (6) vrši kodovanje/dekodovanje podataka. Sesijski sloj (5) upravlja uspostavljanjem i sigurnošću sesija." },

  { id: 181, category: "mrezni_os", type: "matching",
    question: "Povežite protokole (TCP, UDP) sa karakteristikama:",
    pairs: [
      { left: "Za svaki poslati segment, prijemni računar mora u određenom vremenu da odgovori potvrdom (ACK)", right: "TCP" },
      { left: "Nepouzdan je", right: "UDP" },
      { left: "Ovaj protokol koristi TFTP aplikacija", right: "UDP" },
      { left: "Ovaj protokol koristi Telnet aplikacija", right: "TCP" }
    ],
    correct: ["TCP", "UDP", "UDP", "TCP"],
    explanation: "TCP garantuje isporuku uz ACK mehanizam; koriste ga Telnet, HTTP, FTP. UDP ne garantuje isporuku i koristi ga TFTP (jednostavan prenos fajlova bez svih TCP kontrola) zbog jednostavnosti i brzine." },

  // ==================== ADMINISTRIRANJE ====================

  { id: 182, category: "administriranje", type: "multiple",
    question: "Došlo je do hardverskog problema na serveru GLAVNI i dok se on popravlja treba da bude omogućen pristup volumenu koji obuhvata više diskova na tom serveru. Vi treba da:",
    answers: [
      "importujete (uvezete) neke od dinamičkih diskova iz volumena u drugu grupu diskova na serveru GLAVNI",
      "premestite sve dinamičke diskove koji sadrže delove volumena na drugi server i importujete (uvezete) diskove u grupu diskova na novom računaru",
      "iskoristite uslužni program Disk Management da oporavite volumen na serveru GLAVNI"
    ],
    correct: 1,
    explanation: "Dinamički diskovi koji sadrže delove raspodeljenog/preslikanog volumena mogu se fizički premestiti na drugi server. Importovanjem tih diskova u grupu diskova novog servera, volumen postaje dostupan." },

  { id: 183, category: "administriranje", type: "multiple",
    question: "Zaokružiti broj ispred lozinke koja je najsigurnija:",
    answers: ["53816247", "eoV34_Ts", "PericP", "zyv_gf78"],
    correct: 1,
    explanation: "Najsigurnija lozinka kombinuje velika i mala slova, brojeve i specijalne znakove. 'eoV34_Ts' ima mala i velika slova, brojeve i donju crtu (_), što je kombinacija različitih tipova znakova i dugačka je 8 karaktera." },

  { id: 184, category: "administriranje", type: "multiple",
    question: "Kao firewall ne može da se koristi:",
    answers: ["Proxy server", "DHCP server", "Gateway", "ruter"],
    correct: 1,
    explanation: "DHCP server dodeljuje IP adrese klijentima i nema funkcije filtriranja saobraćaja ili zaštite mreže. Proxy, gateway i ruter mogu imati firewall funkcionalnosti ili se koristiti kao firewall." },

  { id: 185, category: "administriranje", type: "multiple",
    question: "Da bi ste pratili broj TCP/IP poruka o grešci, poslatih i primljenih od računara, u System Monitoru, kao objekat performanse izabraćete:",
    answers: ["Network Interface", "TCPv4", "ICMP", "UDPv4"],
    correct: 2,
    explanation: "ICMP (Internet Control Message Protocol) je protokol koji prenosi poruke o greškama i kontrolne informacije u TCP/IP mreži. Brojači ICMP objekta u System Monitoru prate ICMP poruke o grešci." },

  { id: 186, category: "administriranje", type: "multiple",
    question: "Da bi ste dnevnik bezbednosti koristili (otvorili) u konzoli Event Viewer morate da ga arhivirate u formatu:",
    answers: [".txt", ".doc", ".evt", ".csv", ".evv", ".evn"],
    correct: 2,
    explanation: "Windows Event Log datoteke koriste .evt format (u Windows XP/2003) ili .evtx format (Windows Vista i noviji). Za pregled u Event Viewer, arhivirani dnevnik mora biti u .evt formatu." },

  { id: 187, category: "administriranje", type: "multiple",
    question: "Među navedenim programskim umecima (Snap-in), izdvojiti onaj koji se NE nudi automatski iz menija Administrative Tools nakon instaliranja servisa Active Directory:",
    answers: [
      "Active Directory Sites and Services",
      "Active Directory Users and Computers",
      "Active Directory Domains and Trusts",
      "Active Directory Schema"
    ],
    correct: 3,
    explanation: "Active Directory Schema snap-in nije automatski dostupan u Administrative Tools. Mora se ručno registrovati DLL-om (regsvr32 schmmgmt.dll) i dodati u prilagođenu MMC konzolu jer je namenjen samo administratorima šeme." },

  { id: 188, category: "administriranje", type: "multiple",
    question: "Želite da obezbedite da svi korisnici radne stanice klijent-03 mogu da pokrenu Adobe Acrobat Reader. Da bi ste ovo obezbedili treba da izvršite:",
    answers: [
      "dodeljivanje (assign) aplikacije računaru /klijent-03/",
      "objavljivanje (publish) aplikacije računaru /klijent-03/",
      "dodeljivanje aplikacije korisnicima",
      "objavljivanje aplikacije korisnicima"
    ],
    correct: 0,
    explanation: "Dodeljivanje aplikacije računaru (Assign to Computer) u Group Policy instalira aplikaciju na taj računar bez obzira koji korisnik se prijavljuje. To garantuje da svi korisnici na klijent-03 imaju Acrobat Reader." },

  { id: 189, category: "administriranje", type: "multiple",
    question: "Izdvojiti alat koji se koristi za kreiranje organizacione jedinice:",
    answers: [
      "Active Directory Users and Computers",
      "Active Directory Sites and Services",
      "Active Directory Domains and Trusts",
      "Active Directory Schema"
    ],
    correct: 0,
    explanation: "Active Directory Users and Computers je osnovna konzola za upravljanje AD objektima uključujući kreiranje, brisanje i premeštanje organizacionih jedinica (OU), korisnika, računara i grupa." },

  { id: 190, category: "administriranje", type: "multiple",
    question: "UPS uređaj NE omogućava:",
    answers: [
      "kratkotrajan napajanje komponenti računara",
      "zaštitu od pada napona",
      "dugotrajno napajanje komponenti računara",
      "zaštitu od pikova napona napajanja"
    ],
    correct: 2,
    explanation: "UPS (Uninterruptible Power Supply) obezbeđuje kratkotrajan napajanje strujom u slučaju nestanka, štiti od pikova i padova napona. Nije namenjen dugotrajnom napajanju jer ima ograničen kapacitet baterija." },

  { id: 191, category: "administriranje", type: "multiple",
    question: "Među navedenim karticama okvira za dijalog Properties za korisnika, izdvoji karticu na kojoj je moguće postaviti vremenski interval (sate) za prijavljivanje na domen:",
    answers: ["Kartica General", "Kartica Address", "Kartica Account", "Kartica Profile", "Kartica Security"],
    correct: 2,
    explanation: "Kartica Account u svojstvima korisničkog naloga u AD Users and Computers sadrži opciju 'Logon Hours' koja ograničava kada korisnik sme da se prijavljuje na domen (dani i sati)." },

  { id: 192, category: "administriranje", type: "multiple",
    question: "Odrediti minimalna zahtevana NTFS ovlašćenja kojima se korisniku dozvoljava otvaranje dokumenata i pokretanje programa smeštenih u deljenom direktorijumu:",
    answers: ["Full Control", "Modify", "Read", "Write", "Read & Execute", "List folder Contents"],
    correct: 4,
    explanation: "Read & Execute dozvola omogućava čitanje sadržaja fajlova i pokretanje izvršnih programa. To je minimalno ovlašćenje potrebno za otvaranje dokumenata i pokretanje aplikacija iz deljenog direktorijuma." },

  { id: 193, category: "administriranje", type: "multiple",
    question: "Vrsta servera koja je namenjena da usmeri sve lokalne Internet zahteve preko jedne lokacije je:",
    answers: ["Firewall server", "Proxy server", "VPN server", "Directory Services server"],
    correct: 1,
    explanation: "Proxy server posreduje između klijenata i Interneta, usmeravajući sve Internet zahteve kroz jednu lokaciju. To omogućava keširanje, filtriranje sadržaja i bezbednost za sve lokalne korisnike." },

  { id: 194, category: "administriranje", type: "multiple",
    question: "Uloga firewall-a (zaštitne barijere) je da:",
    answers: [
      "skenira mrežu u potrazi za greškom",
      "blokira sve dolazeće mrežne signale",
      "štiti privatnu mrežu od javnog Interneta",
      "štiti računar od virusa"
    ],
    correct: 2,
    explanation: "Firewall štiti privatnu internu mrežu od neovlašćenog pristupa sa javnog Interneta, na osnovu definisanih pravila. Ne blokira sav saobraćaj, ne skenira mrežu i nije antivirus." },

  { id: 195, category: "administriranje", type: "multiple",
    question: "U RAID-5 volumenu koji se sastoji od 7 diskova sadržaj je u potpunosti moguće rekonstruisati u slučaju:",
    answers: ["otkaza jednog diska", "otkaza dva diska", "otkaza tri diska", "otkaza četiri diska"],
    correct: 0,
    explanation: "RAID-5 koristi jedan disk ekvivalent za paritetne informacije distribuirane po svim diskovima. Može podneti otkaz samo jednog diska. Otkaz dva ili više diskova dovodi do gubitka svih podataka." },

  { id: 196, category: "administriranje", type: "multiple",
    question: "Nakon kreiranja pune rezervne kopije, izvrši se diferencijalni backup. Odrediti podatke koji će biti kopirani:",
    answers: [
      "Svi koji su pretrpeli izmene nakon poslednjeg punog backup-a",
      "Samo podaci koji su izmenjeni od poslednjeg diferencijalnog backup-a",
      "Samo oni podaci koji nisu izmenjeni od poslednjeg backup-a",
      "Svi podaci, bez obzira na poslednji puni backup"
    ],
    correct: 0,
    explanation: "Diferencijalni backup kopira SVE podatke koji su se promenili od poslednjeg PUNOG backup-a, bez obzira koliko puta je diferencijalni backup rađen. Za razliku od inkrementalnog, koji kopira promene samo od poslednjeg backup-a (punog ili inkrementalnog)." },

  { id: 197, category: "administriranje", type: "multiple",
    question: "Nov projekat zahteva da korisnici u vašem domenu i u domenu partnerske organizacije imaju pristup deljenoj fascikli na vašem serveru datoteka. Odaberite tip grupe koji bi trebalo da kreirate kako biste upravljali pristupom deljenoj fascikli:",
    answers: [
      "Univerzalnu bezbednosnu grupu",
      "Lokalnu bezbednosnu grupu domene",
      "Globalnu bezbednosnu grupu",
      "Lokalnu distributivnu grupu domene"
    ],
    correct: 1,
    explanation: "Lokalna bezbednosna grupa domene (Domain Local Security Group) može da sadrži korisnike iz više domena i koristi se za dodeljivanje pristupa resursima unutar lokalnog domena. Idealna je za upravljanje pristupom deljenim resursima." },

  { id: 198, category: "administriranje", type: "multiple",
    question: "Sumnjate da neko pokušava da pristupi računarima upotrebljavajući valjana korisnička imena i više pokušaja da pogodi lozinku. Odaberite politiku nadzora koju bi trebalo da konfigurišete i pratite za takve aktivnosti:",
    answers: [
      "Logon Event failures",
      "Directory Service Access failures",
      "Privilege Use successes",
      "Account Logon Event failures",
      "Account Management failures"
    ],
    correct: 3,
    explanation: "Account Logon Events prate autentifikaciju korisnika na kontroleru domena. Praćenjem neuspešnih Account Logon Events (failures) može se detektovati brute force napad kojim se pogađa lozinka." },

  { id: 199, category: "administriranje", type: "multiple",
    question: "Najzastupljeniji kod koji se koristi za čuvanje podataka na hard disku je:",
    answers: ["Reed-Solomon kod", "Hamingov kod", "Cezarov kod", "Kod 'Više tri'"],
    correct: 0,
    explanation: "Reed-Solomon kod je najčešće korišćen kod za korekciju grešaka na hard diskovima, CD/DVD medijima i u RAID sistemima. Može da koriguje greške i brisanja, pa je idealan za pouzdano čuvanje podataka." },

  { id: 200, category: "administriranje", type: "multiple",
    question: "Način šifrovanja koji se može razbiti upotrebom 'Kineske teoreme o ostacima' je:",
    answers: [
      "šifrovanje javnim ključem",
      "Cezarovo šifrovanje",
      "RSA šifrovanje"
    ],
    correct: 2,
    explanation: "RSA algoritam zasnovan je na faktorisanju velikih celih brojeva. Kineska teorema o ostacima (CRT) se koristi kao optimizacija RSA dešifrovanja, a poznate su i napredne RSA napade koji eksploatišu CRT implementaciju." },

  { id: 201, category: "administriranje", type: "multiple",
    question: "Odredi komponentu koja se NE može navesti kao tip objekta prilikom traženja objekata u Aktivnom direktorijumu (u opciji Find):",
    answers: [
      "Users, Contacts, and Groups",
      "Sites",
      "OUs",
      "Computers"
    ],
    correct: 1,
    explanation: "U opciji 'Find' Active Directory Users and Computers konzole, nije moguće tražiti Sites (lokacije). Sites su fizičke komponente AD infrastrukture i upravljaju se kroz AD Sites and Services konzolu." },

  { id: 202, category: "administriranje", type: "multiple",
    question: "Odredi komponentu aktivnog direktorijuma unutar koje mora biti jedinstveno ime koje odaberete za grupu:",
    answers: ["šuma", "stablo", "Domen", "organizaciona jedinica"],
    correct: 2,
    explanation: "Imena AD grupa moraju biti jedinstvena unutar domena. Isti naziv grupe može postojati u različitim domenima iste šume, ali ne u istom domenu. Stoga je domen nivo na kome se zahteva jedinstvenost imena grupe." },

  { id: 203, category: "administriranje", type: "multiple",
    question: "U domenu koji administrirate se javila potreba za primenom novih objekata grupnih polisa. Okleva te jer niste sigurni kakve efekte na korisnike će nove polise imati u kombinaciji sa već postojećim. MMC konzola koja ti može pomoći da utvrdiš efekte novih polisa u kombinaciji sa postojećim je:",
    answers: [
      "services.msc",
      "gpedit.msc",
      "lusrmgr.msc",
      "rsop.msc"
    ],
    correct: 3,
    explanation: "RSOP.msc (Resultant Set of Policy) je MMC konzola koja prikazuje skup svih grupnih polisa koje se primenjuju na korisnika ili računar, uzimajući u obzir sve nivoe (sajt, domen, OU) i sva nasleđivanja. Idealna za simulaciju i dijagnostiku GPO efekata." },

  { id: 204, category: "administriranje", type: "multiple",
    question: "Administrator ste računara koji radi pod Windows Server-om 2008. Čvrsti disk računara sadrži dva volumena: D i E. Omogućavate kvote diska na volumenima D i E koje ograničavaju sve korisnike na 50 MB ukupnog skladištenog prostora. Međutim, želite da ograničite skladište na korisnikovim glavnim direktorijumima, smeštenim na D:\\Korisnici na 10 MB. Da bi se ovo postiglo treba da implementirate kvote diska:",
    answers: [
      "Na bilo kom direktorijumu.",
      "Na fizičkom disku za sve volumene.",
      "Na volumenima za sve direktorijume",
      "Na željenom direktorijumu.",
      "Na bilo kom serveru za sve diskove."
    ],
    correct: 3,
    explanation: "Windows File Server Resource Manager (FSRM) podržava kvote direktorijuma koje se primenjuju samo na određeni folder. Kvota na D:\\Korisnici biće nezavisna od kvote na celom volumenu." },

  { id: 205, category: "administriranje", type: "multiple",
    question: "Grupna polisa Četvrti_GPO primenjuje se na nivou organizacione jedinice RadeStanice. Isti parametar različito je konfigurisani u objektima politike grupa Prvim_GPO (sajt), Drugi_GPO (domen, redni br.2), Treci_GPO (domen, redni br.1) i Četvrti_GPO (OU). Na računar (računarski nalog) primenjiće se parametri grupne politike:",
    answers: ["Prvog_GPO", "Četvrtog_GPO", "Trećeg_GPO", "Drugog_GPO"],
    correct: 1,
    explanation: "GPO se primenjuju sledećim redom: Lokalni → Sajt → Domen → OU. Kasniji prepisuje raniji za isti parametar. GPO na OU nivou (Četvrti_GPO) je poslednji i prepisuje sve prethodne." },

  { id: 206, category: "administriranje", type: "multiple",
    question: "Administrator ste u šumi prikazanoj na slici. Kontroleri domena za domen abc.com locirani su u Beogradu, nis.abc.com u Nišu, cacak.abc.com u Čačku. Korisnici iz Niša i Čačka prijavljuju duga čekanja kada pokušavaju da otvore deljene direktorijume na serverima u domenima onog drugog. Da bi ste poboljšali učinak za korisnike unutar domena nis.abc.com i cacak.abc.com treba da:",
    answers: [
      "reinstalirate operativne sisteme na klijentskim računarima",
      "dodelite statičke IP adrese klijentskim računarima",
      "kreirate odnos poverenja između domena",
      "isključite dinamičko ažuriranje u DNS-u"
    ],
    correct: 2,
    explanation: "Kreiranje Shortcut Trust (preče poverenje) između nis.abc.com i cacak.abc.com direktno skraćuje autentifikacijski put između ta dva domena, eliminiujući prolazak kroz koreni domen abc.com i smanjujući kašnjenje." },

  { id: 207, category: "administriranje", type: "multiple",
    question: "Korisnik vam se žali da posle više uzastopnih pokušaja ne može da se prijavi na svoj domenski nalog, neprestano dobijajući poruku da korisničko ime ili lozinka nisu ispravni. Vi ste sigurni da su korisnikovi podaci za prijavljivanje na sistem u redu. Najverovat nije uzrok ovakvog ponašanja je:",
    answers: [
      "Mrežna konekcija korisnika ne radi ispravno",
      "Domenski server ne prepoznaje računar kao registrovani čvor",
      "Korisnik se prijavljuje na svoj računar umesto na domen",
      "Login server domenskog kontrolera ne radi ispravno"
    ],
    correct: 2,
    explanation: "Najčešći uzrok je da korisnik prijavljuje sa lokalnim nalogom umesto sa domenskim. U polje 'Prijavljivanje na' treba odabrati naziv domena, a ne naziv lokalnog računara." },

  { id: 208, category: "administriranje", type: "multiple",
    question: "Osnovni domen šume mojafirma.com kreiraće se promovisanjem računara u Windows Server 2008 kontroler domena. Biće potrebno da se koriste postojeći Windows Server 2003 sistemi kao kontroleri domene u domenu magacin.mojafirma.com. Neophodni funkcionalni nivoi koji treba da se konfigurišu su:",
    answers: [
      "Funkcionalni nivo šume Windows Server 2008 i funkcionalni nivo domena Windows Server 2008 za domen mojafirma.com.",
      "Funkcionalni nivo šume Windows Server 2008 i funkcionalni nivo domena Windows Server 2008 za domen magacin.mojafirma.com.",
      "Funkcionalni nivo šume Windows Server 2003 i funkcionalni nivo domena Windows Server 2008 za domen mojafirma.com.",
      "Funkcionalni nivo šume Windows Server 2003 i funkcionalni nivo domena Windows Server 2008 za domen magacin.mojafirma.com.",
      "Funkcionalni nivo šume Windows Server 2003 i funkcionalni nivo domena Windows Server 2003 za domen magacin.mojafirma.com.",
      "Funkcionalni nivo šume Windows Server 2003 i funkcionalni nivo domena Windows Server 2003 za domen mojafirma.com."
    ],
    correct: 4,
    explanation: "Pošto magacin.mojafirma.com ima Windows Server 2003 DC-ove, funkcionalni nivo šume mora biti Windows Server 2003 (ne 2008), a funkcionalni nivo domena magacin.mojafirma.com mora biti Windows Server 2003 kako bi te DC-ovi mogli da funkcionišu." },

  { id: 209, category: "administriranje", type: "multiple",
    question: "Otvorili ste komandni odzivnik sa akreditivima Domain Admins. Koristite format komande Dsrm. Dobijate odgovor: Dsrm Failed:Access Is Denied. Uzrok greške je:",
    answers: [
      "Samo Administratori mogu kreirati organizacionu jedinicu.",
      "Samo vlasnik organizacine jedinice može obrisati organizacionu jedinicu.",
      "Organizaciona jedinica je zaštićena od brisanja.",
      "Morate pokrenuti komandni odzivnik kao član grupe Administrators kako bi ste izvršavali zadatke aktivnog direktorijuma.",
      "Samo Administratori mogu obrisati organizacionu jedinicu."
    ],
    correct: 2,
    explanation: "Windows Server 2008 uveo je zaštitu OU od slučajnog brisanja (Protect object from accidental deletion). Kad je ova opcija uključena, čak ni Domain Admins ne može direktno obrisati OU dok se zaštita ne isključi." },

  { id: 210, category: "administriranje", type: "multiple",
    question: "Želite da odbijete sve parametre politike grupe koji do organizacione jedinice UCENICI stižu od svih roditeljskih objekata te organizacione jedinice. Da bi ste ovo postigli primenićete sledeći izuzetak:",
    answers: [
      "Block Policy Inheritance primenjen na organizacionu jedinicu UCENICI.",
      "Enforced primenjen na organizacionu jedinicu UCENICI.",
      "Block Policy Inheritance primenjen na grupnu polisu /GPO/.",
      "Enforced primenjen na grupnu polisu /GPO/.",
      "Block Policy Inheritance primenjen na vezu grupne polise /GPO/.",
      "Enforced primenjen na vezu grupne polise /GPO/."
    ],
    correct: 0,
    explanation: "Block Policy Inheritance se primenjuje na kontejner (OU, domen) i blokira nasleđivanje svih GPO-a sa nadređenih nivoa. Time OU UCENICI prima samo GPO-e koji su direktno vezani za nju." },

  { id: 211, category: "administriranje", type: "multiple",
    question: "Potrebno je isplanirati skladišni prostor za novi aplikativni server. Aplikacije mnogo koriste privremeni skladišni prostor, a za taj prostor planirana su tri diska od po 100 GB. Prioritet su performanse čitanja i pisanja. Da bi se skladišni prostor što je moguće više iskoristio, potrebno je napraviti:",
    answers: [
      "jednostavan volumen",
      "razmešteni volumen",
      "preslikani volumen",
      "raspodeljenji volumen",
      "RAID-5 volumen"
    ],
    correct: 3,
    explanation: "Raspodeljenji volumen (striped volume / RAID-0) raspoređuje podatke ravnomerno po svim diskovima paralelno, čime se maksimiziraju performanse čitanja i pisanja. Koristi 100% kapaciteta svih diskova (3×100 GB = 300 GB). Nema redundancije." },

  { id: 212, category: "administriranje", type: "multiple",
    question: "Vaš poslodavac od vas traži da obezbedite da svi domenski korisnici imaju isti izgled radne površine i isti skup ikonoca na radnoj površini. Koristeći grupne polise vi ste uradili šta je od vas traženo ali primećujete da se radne površine korisnika nisu promenile. Najverovat nije razlog za to je:",
    answers: [
      "Grupne polise nisu ispravno konfigurisane",
      "Računari i korisnici nisu učlanjeni u ispravnu grupu.",
      "Korisnici se moraju odjaviti sa sistema i ponovo prijaviti na domen",
      "Instalacija Windows Server operativnog sistema na serveru nije ispravno konfigurisana"
    ],
    correct: 2,
    explanation: "Group Policy promene se primenjuju pri prijavljivanju korisnika (User Configuration) ili restartovanju računara (Computer Configuration). Ako se korisnici nisu ponovo prijavili, promene koje utiču na radnu površinu još nisu aktivirane." },

  { id: 213, category: "administriranje", type: "multiple",
    question: "Korisnik Pera Perić iz OU Nis, član grupe prodavci i Domain Users, pristupa direktorijumu Kupci. Domain Users ima Share:Read i NTFS:Read. Prodavci ima Share:Change i NTFS:Modify. Da bi korisnik mogao da menja sadržaj dokumenta Moji_kupci.doc, ali ne i dokumenta Lista_kupaca.doc, potrebno je da se za dokument Lista_kupaca.doc:",
    answers: [
      "eksplicitno dozvoli čitanje korisniku Peri Periću",
      "predefinišu skriveni atributi",
      "uskrati dozvola za upis korisniku Pera Perić",
      "onemogući nasleđivanje od roditeljskog objekta"
    ],
    correct: 3,
    explanation: "Da bi Lista_kupaca.doc imala drugačija prava od roditeljskog foldera, mora se prekinuti nasleđivanje NTFS dozvola od roditelja. Zatim se postavljaju eksplicitne dozvole samo za čitanje, sprečavajući Periću da menja taj fajl." },

  { id: 214, category: "administriranje", type: "multiple",
    question: "Korisnici sa domene skola.edu.rs iz OU Generacija-2011 i distributivne grupe Mat-sekcija, polovina na Windows Server 2003 a polovina na Windows Server 2008. Da bi se svim korisnicima omogućilo da pristupaju deljenom folderu Takmicenje, potrebno je da:",
    answers: [
      "prekonfigurišete grupu Mat-sekcija kao bezbednosnu",
      "prekonfigurišete grupu Mat-sekcija kao univerzalnu",
      "prekonfigurišete grupu Mat-sekcija kao domensku lokalnu",
      "podignete funkcionalni nivo domena Windows Server 2003"
    ],
    correct: 0,
    explanation: "Samo bezbednosne grupe (security groups) mogu se koristiti za dodeljivanje pristupa resursima kao što su deljeni folderi. Distributivna grupa (distribution group) koristi se samo za distribuciju e-pošte, ne za dozvole." },

  { id: 215, category: "administriranje", type: "multiple",
    question: "Želite da se automatski šalje upozorenje korisnicima koji u jednom konkretnom deljenom direktorijumu utroše više od 500 MB. Korisnicima ne sme biti omogućeno da koriste više od 1 GB prostora. Da biste ovo postigli potrebno je da konfigurišete sledeća svojstva kod kreiranja kvota:",
    answers: [
      "500 MB hard quota (čvrsta kvota)",
      "1 GB soft quota (meka kvota)",
      "500 MB soft quota (meka kvota)",
      "1 GB hard quota (čvrsta kvota)"
    ],
    correct: 2,
    explanation: "Soft quota od 500 MB šalje upozorenje korisniku kada prekorači tu granicu ali ne zabranjuje dalji unos. Hard quota od 1 GB se ne može prekoračiti. Ove dve kvote zajedno ostvaruju traženo ponašanje." },

  { id: 216, category: "administriranje", type: "multiple",
    question: "Administrator si preduzeća koje drži sastanak u konferencijskoj sali. Podaci su poverljivi i smešteni su na direktorijumu računara u sali. Da bi se uverio da korisnici tima pristupaju podacima samo dok su prijavljeni na računaru u sali za konferencije, a ne da im pristupaju sa drugih računara u preduzeću, moraš da:",
    answers: [
      "dodeliš ovlašćenje Allow Read grupi Interactive",
      "dodeliš ovlašćenje Allow Read grupi tima",
      "dodeliš ovlašćenje Deny Traverse Folders grupi tima",
      "dodeliš ovlašćenje Deny Full Control grupi Network"
    ],
    correct: 0,
    explanation: "Grupa Interactive sadrži sve korisnike koji su fizički prijavljeni lokalno na računar. Dodeljivanjem Allow Read grupi Interactive, pristup je moguć samo kada je korisnik direktno prijavljen na računar u sali, ne sa mreže." },

  { id: 217, category: "administriranje", type: "multi",
    question: "Moguće opcije Windows Server Backup-a na Windows Server 2008 R2 su:",
    answers: [
      "Backup Windows Server",
      "Backup Schedule",
      "Backup Once",
      "Backup Different options",
      "Backup Configuration",
      "Recover"
    ],
    correct: [1, 2, 5],
    explanation: "Windows Server Backup u 2008 R2 nudi: Backup Schedule (zakazani backup), Backup Once (jednokratni backup) i Recover (oporavak podataka). Ovo su tri glavne opcije u Windows Server Backup konzoli." },

  { id: 218, category: "administriranje", type: "multi",
    question: "Radi održavanja hard diskova na računarima koji se već duže vreme normalno koriste, pod Windows operativnim sistemom mogu da se iskoriste sledeće alatke:",
    answers: [
      "Disk Cleanup",
      "Disk Maintenance",
      "Disk Format",
      "Disk Partition",
      "Disk Defragmenter",
      "Disk Resizer"
    ],
    correct: [0, 4],
    explanation: "Disk Cleanup briše privremene i nepotrebne fajlove oslobađajući prostor. Disk Defragmenter optimizuje raspored fajlova na disku za brži pristup. Ova dva alata su standardni deo Windows-a za redovno održavanje diskova." },

  { id: 219, category: "administriranje", type: "multi",
    question: "Organizaciona jedinica se može formirati u okviru:",
    answers: ["domene", "grupe", "lokacije", "organizacione jedinice"],
    correct: [0, 3],
    explanation: "Organizaciona jedinica (OU) može se kreirati direktno unutar domena ili unutar druge OU (ugnežđavanje OU). Ne može se kreirati unutar grupe niti unutar fizičke lokacije (site)." },

  { id: 220, category: "administriranje", type: "multi",
    question: "Da bi se kreirao kontroler domene neophodno je:",
    answers: [
      "Validno ime DNS domene.",
      "Validno NetBIOS ime.",
      "DHCP server za dodelu IP adrese kontroleru domene.",
      "DNS server."
    ],
    correct: [0, 3],
    explanation: "Za kreiranje kontrolera domene pomoću DCPROMO neophodna su: validno DNS ime domene i DNS server (koji može biti instaliran zajedno sa AD). DHCP nije obavezan jer kontroler domena treba statičku IP adresu." },

  { id: 221, category: "administriranje", type: "multi",
    question: "Napravljena je i distribuirana RDP datoteka za određeni daljinski program. Aplikacija se veoma loše izvršava i potrebno je da se premesti na moćniji server. Da bi se osiguralo da korisnici mogu da se povežu tim daljinskim programom potrebno je:",
    answers: [
      "napraviti novu TS Web Access stranicu za novi server terminala i objaviti aplikaciju na toj novoj stranici",
      "ponovo napraviti RDP datoteku za daljinski program posle preseljenja i tu datoteku distribuirati korisnicima",
      "promeniti svojstva postojeće RDP datoteke i ponovo je distribuirati korisnicima",
      "u konzoli TS RemoteApp Manager na starom serveru terminala, promeniti parametre Terminal servera tako da za naziv servera bude naveden nov terminal server"
    ],
    correct: [1, 3],
    explanation: "Postoje dva validna pristupa: kreirati novu RDP datoteku na novom serveru i distribuirati je, ILI ažurirati TS RemoteApp Manager na starom serveru da ukaže na novi server. Oba pristupa osiguravaju da korisnici mogu da se povežu bez promene RDP konfiguracije na klijentima." },

  { id: 222, category: "administriranje", type: "multi",
    question: "Želite da podignete funkcionalni nivo domene jednog domene u šumi skola.com. Da bi ste ovo postigli možete upotrebiti alatke:",
    answers: [
      "Active Directory Users And Groups",
      "Active Directory Sites And Services",
      "Active Directory Users And Computers",
      "Active Directory Schema",
      "Active Directory Domains And Services",
      "Active Directory Domains And Trusts"
    ],
    correct: [2, 5],
    explanation: "Funkcionalni nivo domene može se podignuti putem AD Users and Computers (desni klik na domen → Raise domain functional level) ili AD Domains and Trusts konzole (desni klik na domen → Raise domain functional level)." },

  { id: 223, category: "administriranje", type: "multi",
    question: "Izabrati grupe čiji članovi mogu instalirati i podešavati štampače na Windows Serveru 2003:",
    answers: ["Administrators", "Guests", "Print Operators", "Everyone"],
    correct: [0, 2],
    explanation: "Na Windows Server 2003, upravljanje štampačima dozvolieno je grupi Administrators (puna kontrola) i Print Operators (upravljanje štampačima). Guests i Everyone grupe nemaju ovu privilegiju." },

  { id: 224, category: "administriranje", type: "multiple",
    question: "U vašem domenu OU Zaposleni obuhvata sve korisničke naloge. Svaka lokacija ima OU unutar koje OU Prodaja obuhvata naloge računara u odseuku Prodaja. Želite da uvedete neku aplikaciju u upotrebu tako da bude dostupna svim korisnicima u odseuku prodaje za celu organizaciju. Da bi ste odgovarajuću aplikaciju uveli u upotrebu morate da:",
    answers: [
      "Napravite GPO vezan za domen. Napravite grupu koja sadrži sve korisnike iz odseka Prodaje. Filtrirajte GPO tako da se primenjuje samo na tu grupu. U čvorištu User Configuration unutar GPO objekta napravite softverski paket kojim dodeljujete odgovarajuću aplikaciju.",
      "Napravite GPO vezan za organizacione jedinice Prodaja na svim lokacijama. U čvorištu User Configuration unutar GPO objekta napravite softverski paket kojim dodeljujete odgovarajuću aplikaciju.",
      "Napravite GPO vezan za domen. Napravite grupu koja sadrži sve korisnike iz odseka Prodaje. Filtrirajte GPO tako da se primenjuje samo na tu grupu. U čvorištu Computer Configuration unutar GPO objekta napravite softverski paket kojim dodeljujete odgovarajuću aplikaciju.",
      "Napravite GPO vezan za organizacione jedinice Prodaja na svim lokacijama. U čvorištu User Configuration i Computer Configuration unutar GPO objekta napravite softverski pakete. Uključite politiku obrade povratnom petljom u režimu preklapanja."
    ],
    correct: 0,
    explanation: "Korišćenjem GPO vezanog za domen sa Security Filtering na grupu korisnika Prodaje, u User Configuration (softverska dodela), aplikacija se instalira svim korisnicima u grupi bez obzira na kojoj lokaciji rade." },

  { id: 225, category: "administriranje", type: "multi",
    question: "Za arhiviranje dnevnika bezbednosti koriste se sledeći formati:",
    answers: [".txt", ".doc", ".rtf", ".bmp", ".evt", ".csv", ".crv", ".evn"],
    correct: [0, 4, 5],
    explanation: "Dnevnik bezbednosti u Event Viewer-u može se arhivirati u formatima: .txt (plain text), .evt (nativni Windows Event Log format) i .csv (comma-separated values za import u spreadsheet). .doc i ostali formati nisu podržani za event log arhiviranje." },

  { id: 226, category: "administriranje", type: "multi",
    question: "Među navedenim svojstvima i administrativnim zadacima aktivnog direktorijuma, izdvojiti ona koja se mogu konfigurisati istovremeno za veći broj korisnika:",
    answers: [
      "FIRST NAME",
      "LOGON HOURS",
      "LAST NAME",
      "COMPUTER RESTRICTIONS (LOG ON TO)",
      "USER LOGON NAME",
      "ENABLE ACCOUNT",
      "RESET PASSWORD"
    ],
    correct: [1, 3, 5, 6],
    explanation: "U AD Users and Computers, desnim klikom na više selektovanih korisnika mogu se menjati: Logon Hours, Computer Restrictions (Log On To), Enable/Disable account i Reset Password. First Name, Last Name i User Logon Name su jedinstveni per korisnik i ne mogu se batch-menjati." },

  { id: 227, category: "administriranje", type: "multi",
    question: "Objekti Aktivnog Direktorijuma su:",
    answers: [
      "Korisnici",
      "Servisi",
      "MAC adrese",
      "Resursi",
      "Mrežni kablovi",
      "IP adrese"
    ],
    correct: [0, 3],
    explanation: "Active Directory objekti su entiteti koji se čuvaju u direktorijumu: korisnici, računari, grupe, štampači i deljeni resursi. MAC adrese, IP adrese i mrežni kablovi nisu AD objekti - to su mrežni entiteti koji se ne čuvaju u AD." },

  { id: 228, category: "administriranje", type: "input",
    question: "Alat komandne linije za upravljanje kvotama diska je ___________.",
    correct: ["FSUTIL"],
    explanation: "FSUTIL je komanda u Windows komandnoj liniji koja se koristi za upravljanje diskovima, uključujući upravljanje kvotama, hard links, reparse points, i obavljanje raznih operacija na NTFS volumenima." },

  { id: 229, category: "administriranje", type: "input",
    question: "Alat komandne linije koji se koristi za upravljanje diskovima, volumenima i particijama zove se ___________.",
    correct: ["DISKPART"],
    explanation: "DISKPART je Windows alat komandne linije za upravljanje diskovima, volumenima i particijama. Omogućava kreiranje, brisanje i formatiranje particija, kao i konverziju MBR/GPT i osnvnih/dinamičkih diskova." },

  { id: 230, category: "administriranje", type: "input",
    question: "Microsoft-ova unapređena verzija LDAP-a naziva se ___________.",
    correct: ["ACTIVE DIRECTORY"],
    explanation: "Active Directory je Microsoftova implementacija i proširenje LDAP (Lightweight Directory Access Protocol) standarda. Dodaje Kerberos autentifikaciju, Group Policy i druge enterprise funkcionalnosti." },

  { id: 231, category: "administriranje", type: "input",
    question: "Komande pomoću kojih se uvoze objekti aktivnog direktorijuma (Active Directory) iz tekstualnih datoteka su ___________ i ___________.",
    correct: ["LDIFDE", "CSVDE"],
    explanation: "LDIFDE uvozi/izvozi AD objekte korišćenjem LDIF (LDAP Data Interchange Format) formata. CSVDE radi sa CSV fajlovima (comma-separated values). Oba alata su standardni deo Windows Server-a za batch upravljanje AD objektima." },

  { id: 232, category: "administriranje", type: "input",
    question: "Kod asimetričnih algoritama za šifriranje podataka, za šifrovanje ili potpisivanje podataka se koristi __________ ključ, a za dešifrovanje podataka se koristi __________ ključ.",
    correct: ["javni", "privatni"],
    explanation: "U asimetričnoj kriptografiji: javni ključ se koristi za šifrovanje poruka (ili verifikaciju potpisa), dok se privatni ključ koristi za dešifrovanje (ili kreiranje digitalnog potpisa). Javni ključ se slobodno deli, a privatni se čuva u tajnosti." },

  { id: 233, category: "administriranje", type: "input",
    question: "Korišćenjem Cezarove šifre sa podrazumevanim pomerajem (3) dobijen je sledeći šifrat: SURSURCLFMLDPD. Otvoreni tekst ovog šifrata glasi: ___________.",
    correct: ["ADMINISTRATORI"],
    explanation: "Cezarova šifra pomera svako slovo unazad za 3 pozicije u abecedi. S→P, U→R, R→O, S→P... Šifrat SURSURCLFMLDPD (sa pomerajem +3 unapred) dešifruje se kao ADMINISTRATORI." },

  { id: 234, category: "administriranje", type: "matching",
    question: "Povežite opise članova grupa sa nazviima domena grupa:",
    pairs: [
      { left: "Članovi mogu da budu samo iz lokalnog domene i mogu da pristupaju resursima u bilo kom domenu", right: "Globalna grupa" },
      { left: "Članovi mogu da budu iz bilo kog domene i mogu da pristupaju resursima samo u lokalnom domenu", right: "Lokalna grupa domene" },
      { left: "Članovi mogu da budu iz bilo kog domene i mogu da pristupaju resursima u bilo kom domenu", right: "Univerzalna grupa" }
    ],
    correct: ["Globalna grupa", "Lokalna grupa domene", "Univerzalna grupa"],
    explanation: "Globalna grupa: članovi samo iz lokalnog domena, pristup resursima u bilo kom domenu. Lokalna grupa domene: članovi iz bilo kog domena, pristup samo u lokalnom domenu. Univerzalna grupa: članovi i pristup resursima u bilo kom domenu šume." },

  { id: 235, category: "administriranje", type: "matching",
    question: "Povežite MMC konzole sa njihovim svrhama:",
    pairs: [
      { left: "konzola sadrži informacije o fizičkoj strukturi mreže", right: "Active Directory Sites And Services" },
      { left: "konzola omogućuje dodavanje, brisanje, izmenu i organizovanje korisničkih i računarskih naloga", right: "Active Directory Users And Computers" },
      { left: "konzola obezbeđuje interfejs za upravljanje domenima i odnosima poverenja između šuma i domena", right: "Active Directory Domains And Trusts" }
    ],
    correct: ["Active Directory Sites And Services", "Active Directory Users And Computers", "Active Directory Domains And Trusts"],
    explanation: "AD Sites and Services upravlja fizičkom topologijom mreže (lokacije, veze). AD Users and Computers upravlja korisnicima, računarima, grupama i OU. AD Domains and Trusts upravlja domenima i među-domenskim poverenjima." },

  { id: 236, category: "administriranje", type: "matching",
    question: "Povežite tipove RAID konfiguracije diskova sa opisima:",
    pairs: [
      { left: "diskovi su vezani kao ogledalo ali su podaci dodatno razdeljeni", right: "RAID 10" },
      { left: "parnost za blokove istog ranga čuva se na disku parnosti", right: "RAID 4" },
      { left: "informacija o parnosti je distribuirana na različitim diskovima", right: "RAID 5" },
      { left: "postoje dva određivanja parnosti za delove jednog podatka", right: "RAID 6" },
      { left: "podaci se dele u blokove, svaki blok se upisuje na poseban disk", right: "RAID 0" },
      { left: "svaki deo podatka se kopira na dva različita diska", right: "RAID 1" }
    ],
    correct: ["RAID 10", "RAID 4", "RAID 5", "RAID 6", "RAID 0", "RAID 1"],
    explanation: "RAID 0: striping (bez redundancije). RAID 1: mirroring (ogledalo). RAID 4: dedikovan disk parnosti. RAID 5: distribuirana parnost. RAID 6: dva seta parnosti (može podneti 2 otkaza). RAID 10: kombinacija mirroringa i stripinga." },

  { id: 237, category: "administriranje", type: "matching",
    question: "Navedi tačan redosled akcija za dodavanje preslikavanog volumena (RAID-1) na serveru PROBNI1 posle zamene otkazalog diska. Akciju koja se izvodi prva oznaci brojem 1, drugu brojem 2 itd.",
    pairs: [
      { left: "Izbrisati preslikavanje sa diska koji je zamenjen (uklonjen)", right: "2" },
      { left: "Inicijalizovati novi hard disk i konvertovati ga u dinamički", right: "1" },
      { left: "Na disku Disk 1 dodati preslikavanje na disk Disk 2", right: "3" }
    ],
    explanation: "Redosled: 1) Inicijalizovati i konvertovati novi disk u dinamički, 2) Izbrisati staro preslikavanje sa otkazalog diska, 3) Ponovo uspostaviti RAID-1 preslikavanje na novom disku." },

  { id: 238, category: "administriranje", type: "matching",
    question: "Definisati redosled kojim se grupna polisa primenjuje na komponente aktivnog direktorijuma (1 = prva, 4 = poslednja).",
    pairs: [
      { left: "lokacija (sajt)", right: "2" },
      { left: "domen", right: "3" },
      { left: "organizaciona jedinica", right: "4" },
      { left: "lokalna polisa računara", right: "1" }
    ],
    explanation: "Grupne polise se primenjuju redom: 1) lokalna polisa računara, 2) polisa sajta, 3) polisa domena, 4) polisa organizacione jedinice (OU). Svaki naredni nivo može da prepiše prethodni." }
,
  // ==================== RAČUNARSKE MREŽE (nastavak, PDF 101-202) ====================

  { id: 239, category: "racunarske_mreze", type: "multiple",
    question: "Karakteristican QoS model za Ethernet mrezu je:",
    answers: ["Best-effort", "Int Serv", "Diff Serv"],
    correct: 0,
    explanation: "Ethernet nema mehanizme za garantovanje kvaliteta usluge - koristi Best-effort model koji ne pravi razliku izmedju tipova saobracaja niti garantuje isporuku." },

  { id: 240, category: "racunarske_mreze", type: "multiple",
    question: "Prema protokolu STP ukoliko svi svicevi imaju isti prioritet, tada je glavni svic (root bridge) onaj koji ima:",
    answers: ["Najmanju IP adresu", "Najvecu IP adresu", "Najmanju MAC adresu", "Najvecu MAC adresu"],
    correct: 2,
    explanation: "Kada je prioritet sviceva isti, STP bira root bridge prema Bridge ID-u koji ukljucuje MAC adresu. Svic sa NAJMANJOM MAC adresom postaje root bridge." },

  { id: 241, category: "racunarske_mreze", type: "multiple",
    question: "PSTN/IP Gateway omogucava povezivanje:",
    answers: ["Dve LAN mreze", "Korisnika Javne telefonske mreze (PSTN) i korisnika IP telefonije", "Dva korisnika IP telefonije", "Analognog telefona na Javnu telefonsku mrezu (PSTN)"],
    correct: 1,
    explanation: "PSTN/IP Gateway sluzi kao most izmedju klasicne telefonske mreze (PSTN) i IP mreze, omogucavajuci komunikaciju korisnicima ova dva razlicita sistema." },

  { id: 242, category: "racunarske_mreze", type: "multiple",
    question: "Problem gubitaka paketa pri prenosu govora:",
    answers: ["moze se nadoknaditi retransmisijom", "moze se nadoknaditi ponavljanjem poslednjeg uspesno primljenog paketa", "ne moze se nadoknaditi"],
    correct: 2,
    explanation: "U realnom vremenu (VoIP), izgubljeni glasovni paket ne moze se nadoknaditi retransmisijom jer bi to uvelo previsoko kasnjenje. Paket se preskace ili interpolira." },

  { id: 243, category: "racunarske_mreze", type: "multiple",
    question: "Granica iznad koje kasnjenje postaje neprihvatljivo za prenos govora je:",
    answers: [">150ms", ">300ms", ">350ms", ">450ms"],
    correct: 1,
    explanation: "ITU-T G.114 preporucuje da jednosmerno kasnjenje u VoIP sistemima ne prelazi 150ms. Iznad 300ms kasnjenje postaje jasno neprijatno i neprihvatljivo za interaktivni razgovor." },

  { id: 244, category: "racunarske_mreze", type: "multiple",
    question: "IP kamera u racunarskoj mrezi ima:",
    answers: ["Jedinstvenu MAC i IP adresu", "Jedinstven PIN kod", "Jedinstven SSID"],
    correct: 0,
    explanation: "IP kamera je punopravni mrezni uredjaj - ima sopstvenu MAC adresu (fizicku) i IP adresu (logicku), sto joj omogucava direktno prikljucivanje na LAN mrezu." },

  { id: 245, category: "racunarske_mreze", type: "multiple",
    question: "Otvaranje novog naloga za logicki stampac vrsi se:",
    answers: ["upotrebom add printer wizard-a", "upotrebom device settings-a", "instaliranjem drajvera", "instaliranjem novog uredjaja za stampanje"],
    correct: 0,
    explanation: "Logicki stampac se kreira kroz Add Printer Wizard koji vodi kroz postupak konfiguracije - odabir porta, drajvera i deljivosti stampaca u mrezi." },

  { id: 246, category: "racunarske_mreze", type: "multiple",
    question: "S* 0.0.0.0 is directly connected, Serial 0/0/0 u ruting tabeli znaci:",
    answers: ["mreza 0.0.0.0 je povezana na Serial 0/0/0 interfejs rutera", "konfigurisana je ruta naredbom ip route 0.0.0.0 Serial 0/0/0", "ruter nece nijedan paket unistavati, vec ce kandidate za unistenje izbaciti na Serial 0/0/0 interfejs"],
    correct: 2,
    explanation: "S* 0.0.0.0/0 oznacava default rutu (gateway of last resort). Svi paketi cije odrediste nije u ruting tabeli bice prosledjeni na Serial 0/0/0." },

  { id: 247, category: "racunarske_mreze", type: "multiple",
    question: "Portovi svica ubiceni su u VLAN-ove. ARP zahtev koji salje host C ce stici do:",
    answers: ["A", "B", "A i B", "A i D", "B i D", "A, B i D"],
    correct: 3,
    explanation: "Broadcast (ARP zahtev) se salje svim portovima unutar istog VLAN-a. Host C je u istom VLAN-u sa A i D, pa ce ARP zahtev stici do A i D." },

  { id: 248, category: "racunarske_mreze", type: "multiple",
    question: "Na ruteru R2, interfejs Serial1/2 je 'up/down'. Administrator zakljucuje:",
    answers: ["interfejs Serial1/2 nije softverski podignuti", "na drugom kraju point-to-point linka je interfejs koji ima drugaciji tip enkapsulacije od Serial1/2", "interfejsu Serial1/2 je pogresno dodeljena adresa", "na interfejs Serial1/2 nije povezan kabl"],
    correct: 1,
    explanation: "Status 'up/down' (line protocol down) znaci da fizicki sloj radi, ali sloj veze ne funkcionise. Najcesci uzrok je nepodudaranje enkapsulacije (npr. jedan kraj HDLC, drugi PPP)." },

  { id: 249, category: "racunarske_mreze", type: "multiple",
    question: "Mreza je konfigurisana sa RIP na ruterima A, B i D, a OSPF na ruterima A, C i D. Ruter A ce do mreze E da salje podatke:",
    answers: ["ne moze se odgovoriti - nisu poznate brzine interfejsa", "naizmenicno ce slati pakete putanjom A-B-D i A-C-D", "koristice putanju A-C-D", "koristice putanju A-B-D"],
    correct: 2,
    explanation: "Kada ruter uci istu rutu i RIP-om (AD=120) i OSPF-om (AD=110), bira protokol sa manjom administrativnom distancom - OSPF. Putanja ucena OSPF-om (A-C-D) ima prednost." },

  { id: 250, category: "racunarske_mreze", type: "multiple",
    question: "Na ruterima uspesno radi RIP protokol. Vrednost metrike od rutera A do mreze 192.168.5.0/24 je:",
    answers: ["3", "4", "56", "624", "724"],
    correct: 1,
    explanation: "RIP koristi broj hopova kao metriku. Broji se broj rutera koje paket mora proci do odredisne mreze. Metrika 4 odgovara putanji kroz 4 rutera u prikazanoj topologiji." },

  { id: 251, category: "racunarske_mreze", type: "multiple",
    question: "Racunari A i B pokusavaju da posalju okvir u istom trenutku i dolazi do sudara. Usled ovoga racunar D ce moci da polje okvir:",
    answers: ["istog trenutka", "nakon sto racunari A i B zavrse svoje slanje", "nakon isteka jam signala i isteka backoff vremena", "nakon jednog sata"],
    correct: 2,
    explanation: "U CSMA/CD, nakon detekcije kolizije salje se jam signal, pa svi cekaju slucajno odabrano backoff vreme pre ponovnog pokusaja. Racunar D mora sacekati ovaj postupak." },

  { id: 252, category: "racunarske_mreze", type: "multiple",
    question: "Dat je svic sa 20 interfejsa, svaki sa 100Mbps. Ukupan proток u mrezi od 20 hostova je:",
    answers: ["2Gbps", "100Mbps", "20Mbps ili 200Mbps", "4Gbps"],
    correct: 0,
    explanation: "Svic omogucava istovremenu komunikaciju na svim portovima (full duplex). Sa 20 portova po 100Mbps, ukupan propusni opseg je 20 x 100Mbps = 2Gbps." },

  { id: 253, category: "racunarske_mreze", type: "multiple",
    question: "Dat je hab sa 10 interfejsa, svaki sa 100Mbps. Ukupan proток u mrezi od 10 hostova je:",
    answers: ["1Gbps", "100Mbps", "10Mbps ili 100Mbps", "2Gbps"],
    correct: 1,
    explanation: "Hab je half-duplex uredjaj koji deli isti medijum - svi hostovi dele 100Mbps. Bez obzira na broj portova, ukupan propusni opseg ostaje 100Mbps." },

  { id: 254, category: "racunarske_mreze", type: "multiple",
    question: "LAN mreza je konfigurisana, MAC tabela svica je prazna. Host na Fa0/1 salje podatak hostu na Fa0/4, nema ARP-a. Svic ce:",
    answers: ["proslediti frejm na portove Fa0/1, Fa0/2, Fa0/3 i Fa0/4", "odbaciti frejm", "proslediti frejm na port Fa0/4", "proslediti frejm na portove Fa0/2, Fa0/3 i Fa0/4"],
    correct: 3,
    explanation: "Kada MAC tabela svica ne sadrzi odredisnu adresu, svic flooding-uje frejm na sve portove osim onog na kom je primljen (Fa0/1). Dakle na Fa0/2, Fa0/3 i Fa0/4." },

  { id: 255, category: "racunarske_mreze", type: "multiple",
    question: "U mrezi sa vise sviceva sa istim prioritetom i petljom, Spanning Tree Protocol (STP) biraju putanje na sledeci nacin:",
    answers: ["koriste se sve moguce putanje", "biraju se samo fizicki najkrace putanje, ostale se blokiraju", "biraju se putanje koje ne moraju biti najkrace, a ostale se blokiraju radi izbegavanja petlje"],
    correct: 2,
    explanation: "STP bira putanje na osnovu cost vrednosti (ne fizicke duzine), a blokira redundantne linkove da bi eliminisao petlje. Izabrana putanja ne mora biti fizicki najkraca." },

  { id: 256, category: "racunarske_mreze", type: "multiple",
    question: "Stanica A salje ram stanici B. U MAC tabeli svica nalaze se samo MAC adrese C i D, nema ARP-a. Ram ce stici do stanica:",
    answers: ["A,B,E", "B,C,D", "B,A", "B,E", "A,B,C,D,E", "B,C,D,E"],
    correct: 5,
    explanation: "Posto odredisna MAC adresa (stanice B) nije u MAC tabeli, svic flooding-uje na sve portove osim ulaznog. Ram stize do B, C, D i E." },

  { id: 257, category: "racunarske_mreze", type: "multiple",
    question: "U CSMA/CD mrezi, posle 3 kolizije za redom, stanica bira slucajnu vrednost iz skupa:",
    answers: ["{0,1}", "{0,1,2,3}", "{1,2,3,4}", "{0,1,2,3,4,5,6,7}", "{1,2,3,4,5,6,7,8}"],
    correct: 3,
    explanation: "Exponential backoff algoritam: posle k-te kolizije bira se iz skupa {0, 1, ..., 2^k - 1}. Posle 3 kolizije: 2^3 = 8, pa je skup {0,1,2,3,4,5,6,7}." },

  { id: 258, category: "racunarske_mreze", type: "multiple",
    question: "PPP autentifikacija: RouterA treba da podrzi CHAP primarno, PAP ako CHAP nije moguc, lozinka pass-123, korespondentni ruter je RouterB. Ispravna konfiguracija je:",
    answers: [
      "username RouterA password pass-123 / encapsulation ppp / ppp authentication pap chap",
      "username RouterB password pass-123 / encapsulation ppp / ppp authentication chap pap",
      "username RouterA pass-123 / encapsulation ppp / ppp authentication chap",
      "username RouterB password pass-123 / encapsulation ppp / authentication pap"
    ],
    correct: 1,
    explanation: "U PPP CHAP/PAP konfiguraciji: username mora biti ime DRUGOG rutera (RouterB), lozinka ista s obe strane, a redosled 'chap pap' daje prioritet CHAP-u." },

  { id: 259, category: "racunarske_mreze", type: "multiple",
    question: "Iz 'show spanning-tree' izlaza vidimo da svi portovi svica imaju 'Designated/FWD' ulogu. Svic je:",
    answers: ["Svic je povezan na root bridge", "Svic ne ucestvuje u STP-u", "Svic je root bridge", "Svic je rezervni root bridge"],
    correct: 2,
    explanation: "Kada su SVI portovi svica u stanju 'Designated', to znaci da je taj svic root bridge. Root bridge uvek ima sve portove u Designated stanju." },

  { id: 260, category: "racunarske_mreze", type: "multiple",
    question: "Mreza je konfigurisana kao na slici. PC1 i PC2 ne mogu da komuniciraju. Vlan tabela pokazuje VLAN10 na fa0/2 i VLAN20 na fa0/10. Najverovatniji razlog je:",
    answers: ["Default gejtvej na PC0 treba promeniti", "IP adresu PC1 treba promeniti", "Fa0/1 interfejs na svicu treba da bude konfigurisan kao trunk port", "Fa0/1 port treba premestiti u drugi VLAN"],
    correct: 2,
    explanation: "PC1 i PC2 su u razlicitim VLAN-ovima. Da bi komunikacija izmedju VLAN-ova bila moguca, link izmedju svica i rutera (Fa0/1) mora biti trunk port koji prenosi oba VLAN-a." },

  { id: 261, category: "racunarske_mreze", type: "multiple",
    question: "Ispitujete kvar: klijenti ne mogu pristupiti serveru u VLAN9, ali imaju internet i mogu pinguju jedni druge. Zakljucujete:",
    answers: ["Interfejs rutera Se0/0/0 nije podignuti", "Interfejs rutera fa0/0 nije podignuti", "Interfejs fa0/3 na SW2 nije podignuti", "Interfejs fa0/1 na SW2 nije podignuti", "SW1 je iskljucen", "Link izmedju SW2 i SW3 ne radi u trunk modu"],
    correct: 5,
    explanation: "Posto svi imaju internet (ruter radi) i mogu pinguju jedni druge (VLAN-ovi rade), ali ne mogu pristupiti VLAN9 serveru, uzrok je da trunk link izmedju SW2 i SW3 ne prenosi VLAN9." },

  { id: 262, category: "racunarske_mreze", type: "multiple",
    question: "Za mrezu na slici tacno je tvrdenje (RIPv2, swic, ruter, serveri):",
    answers: ["SW2 je root bridge", "Spanning Tree je iskljucen", "Racunar D i Server1 su u istoj mrezi", "Racunar B i C ne mogu jedan drugom napraviti koliziju", "Ako ne funkcionise Fa0/0 na R1, racunar A ne moze pristupiti Server1", "Ako ne funkcionise Fa0/1 na SW3, racunar C ne moze pristupiti Server2"],
    correct: 3,
    explanation: "Racunari B i C su povezani na razlicite portove svica (ne haba). Svic kreira zasebne kolizione domene po portu, pa B i C ne mogu jedan drugom napraviti koliziju." },

  { id: 263, category: "racunarske_mreze", type: "multiple",
    question: "U mrezi sa RIPv2, razlog nepojavljavanja mreze 192.168.1.32/27 u 'show ip route' izlazu rutera C je:",
    answers: ["RIPv2 ne salje sabnet maske u update-ima", "Na ruteru A nije konfigurisan RIPv2", "RIPv2 vrsi automatsku sumarizaciju ruta", "Ruter B ne oglasava mrezu 192.168.1.64/30"],
    correct: 2,
    explanation: "RIPv2 po defaultu vrsi auto-summarization - sumira podmreze na klasne granice. Podmreza 192.168.1.32/27 se sumira u klasnu mrezu 192.168.1.0/24 i prikazuje se kao takva." },

  { id: 264, category: "racunarske_mreze", type: "multiple",
    question: "Postojecoj mrezi treba dodati LAN za 12 IP adresa. Postujuci maksimalnu ustedu adresa, novoj mrezi treba dodeliti adresu:",
    answers: ["192.168.10.232/28", "192.168.10.232/27", "192.168.10.96/28", "192.168.10.96/27"],
    correct: 0,
    explanation: "Za 12 hosta treba /28 maska (14 upotrebljivih adresa, 16 ukupno). /27 bi davala 30 adresa - previse. Adresa 192.168.10.232/28 ne preklapa sa postojecim mreza na slici." },

  { id: 265, category: "racunarske_mreze", type: "multiple",
    question: "Korisnicima LAN mreza sa slike treba obezbediti izlaz na Internet preko rutera R1 i ISP. Izabrati odgovarajuce rutiranje:",
    answers: ["BGP na oba rutera", "RIP na oba rutera", "Difoltne rute na oba rutera", "BGP na ISP, staticke rute na R1", "Difoltnu rutu na R1, staticke rute na ISP"],
    correct: 4,
    explanation: "R1 treba difoltnu rutu ka ISP-u (za sav internet saobracaj), a ISP treba staticke rute ka privatnim mreza iza R1. Ovo je standardna konfiguracija za pristup Internetu." },

  { id: 266, category: "racunarske_mreze", type: "multiple",
    question: "Izlaz 'show ip nat translations' prikazuje PAT/NAT tabelu sa inside global adresom 198.18.24.211 i vise inside local adresa iz 192.168.254.x. Ovo pokazuje:",
    answers: ["na ruteru je konfigurisan staticki NAT", "na ruteru je konfigurisan dinamicki NAT", "na ruteru je konfigurisan PAT", "NAT na ruteru nije ispravno konfigurisan"],
    correct: 2,
    explanation: "PAT (Port Address Translation) / NAT Overload - vise unutrasnjih adresa se mapira na jednu spoljasnju adresu, razlikovane po portovima. To se vidi u tabeli gde razliciti inside local dele isti inside global." },

  { id: 267, category: "racunarske_mreze", type: "multiple",
    question: "PC1 treba da polje podatak PC2-u, ali ne zna njegovu MAC adresu. PC2 je u drugom VLAN-u, u mrezi postoji ruter. Dinamicki ARP donosi adresu:",
    answers: ["Posto su PC1 i PC2 povezani na isti svic, ARP donosi adresu svica", "MAC adresu fa0/1 interfejsa svica", "MAC adresu subinterfejsa fa0/0.10 rutera", "MAC adresu fa0/0 fizickog interfejsa rutera"],
    correct: 2,
    explanation: "Posto su PC1 i PC2 u razlicitim VLAN-ovima (razlicite podmreze), PC1 mora slati podatke ka default gejtvej-u rutera - specificno ka subinterfejsu za taj VLAN (fa0/0.10)." },

  { id: 268, category: "racunarske_mreze", type: "multiple",
    question: "Korisnik iz prodaje ne moze pristupiti Serveru B u marketingu. Administrator razmatranjem logicke realizacije zakljucuje:",
    answers: ["adresa interfejsa rutera R1 prema LAN mrezi je dodeljena pogresno", "adrese unutar razlicitih sabneta se preklapaju", "DG Serveru B nije dobro dodeljen", "DG PC1 nije dobro dodeljen"],
    correct: 3,
    explanation: "Posto korisnik iz prodaje ne moze pristupiti serveru u drugom VLAN-u/podmrezi, default gateway na PC1 nije ispravno podesen - ne ukazuje na interfejs rutera koji moze prosleđivati izmedju mreza." },

  { id: 269, category: "racunarske_mreze", type: "multiple",
    question: "Administratoru u Beogradu pokusava telnet na ruter u Kragujevcu (192.1.2.65), ping uspesan ali telnet ne. Najverovatniji razlog:",
    answers: ["Postoji problem u autentifikaciji PPP protokola", "Postoji greska u podesavanjima IP adrese/subnet maske", "Akses kontrolna lista filtrira saobracaj", "Serijski kabl nije ispravan", "Nije podesen klok na liniji", "Nije podeena lozinka za telnet pristup"],
    correct: 5,
    explanation: "Posto ping radi (L3 funkcionise) ali telnet ne radi, problem je na aplikacionom nivou. Najcesci uzrok je da lozinka za VTY (telnet) pristup nije konfigurisana na remote ruteru." },

  { id: 270, category: "racunarske_mreze", type: "multiple",
    question: "Odeljenje prodaje prima nepotrebne broadcast informacije iz marketinga. Zadatak je ograniciti broadcast iz marketinga a zadrzati povezanost sa poslovnim servisima. Uradicete:",
    answers: ["Obezbedicete veci protok odeljenju prodaje", "Promnicete IP adresu svica", "Kreiraticete zasebne VLAN-ove i podmreze za prodaju i marketing i obezbediti rutiranje izmedju njih", "Upotrebicete half-duplex i full-duplex Ethernet vezu", "Smestiti poslovne servise na posebnu podmrezu i obezbediti rutiranje izmedju mreza"],
    correct: 2,
    explanation: "Kreiranje zasebnih VLAN-ova za prodaju i marketing ogranicava broadcast domene - broadcast iz marketinga ne prolazi u prodajni VLAN. Rutiranje izmedju VLAN-ova ostaje moguce za pristup servisima." },

  { id: 271, category: "racunarske_mreze", type: "multiple",
    question: "Mreza data na slici (ruter + 2 svica + habovi) ima:",
    answers: ["dva emisiona domena", "jedan emisioni domen", "sest emisionih domena", "tri koliziona domena", "jedan kolizioni domen"],
    correct: 0,
    explanation: "Ruter deli broadcast domene - svaka strana rutera je zasebni broadcast domen. Sa ruterom koji povezuje dve mreze, dobijamo 2 emisiona (broadcast) domena." },

  { id: 272, category: "racunarske_mreze", type: "multiple",
    question: "Nadoknadjivanje izgubljenih paketa u IP telefoniji vrsi se:",
    answers: ["Umetanjem signala alarma", "Umetanjem tisine", "Privremenim prekidom veze", "Umetanjem belog suma", "Ponovnom reprodukcijom poslednjeg primljenog paketa", "Generisanjem tona zauzeca", "Zahtevom prijemnika za ponovnim slanjem", "Interpolacijom paketa"],
    correct: 7,
    explanation: "Interpolacija je najkvalitetnija metoda - na osnovu susednih primljenih paketa rekonstruise se izgubljeni paket. Retransmisija nije moguca u realnom vremenu." },

  { id: 273, category: "racunarske_mreze", type: "multiple",
    question: "Uloga video servera u umrezenom sistemu video nadzora je:",
    answers: ["Snimanje video sadrzaja", "Digitalizacija i kompresija video signala", "Snimanje zvuka sa video kamere", "Prijem analognog signala sa video kamere", "Povezivanje na LAN mrezu", "Dodela IP adrese analognoj kameri"],
    correct: 1,
    explanation: "Video server prima analogni signal sa analognih kamera, digitalizuje ga, kompresuje i salje po mrezi. IP kamera ovo radi interno, ali video server je zasebni uredjaj za analogni sistem." },

  { id: 274, category: "racunarske_mreze", type: "multiple",
    question: "Na ruteru je OSPF konfigurisan naredbom: network 192.168.12.64 0.0.0.63 area 0. Koji interfejsi ce biti oglasavani? (R_10 ima interfejse 192.168.12.48, 192.168.12.65, 192.168.12.121, 192.168.12.125, 192.168.12.129, 192.168.12.34)",
    answers: ["Serial0/1.102 (192.168.12.125)", "Serial0/1.104 (192.168.12.34) - NE, van opsega", "Serial0/1.103 (192.168.12.129)", "FastEthernet0/1 (192.168.12.65)", "Serial0/0 (192.168.12.121)", "FastEthernet0/0 (192.168.12.48)"],
    correct: 3,
    explanation: "Wildcard maska 0.0.0.63 uz adresu 192.168.12.64 pokriva opseg 192.168.12.64-192.168.12.127. Interfejsi u tom opsegu: 192.168.12.65 (Fa0/1), 192.168.12.125 (Se0/1.102), 192.168.12.121 (Se0/0)." },

  { id: 275, category: "racunarske_mreze", type: "multiple",
    question: "PC1 (192.168.1.22/28) na fa0/4 VLAN10, PC2 (192.168.1.33/28) na fa0/5 VLAN20, PC3 (192.168.1.30/28) na fa0/6 VLAN10. Tacno je da:",
    answers: ["PC1 moze da pinguje PC2", "PC1 ne moze da pinguje PC2", "PC1 moze da pinguje PC3", "PC1 ne moze da pinguje PC3", "PC2 moze da pinguje PC3", "PC2 ne moze da pinguje PC3"],
    correct: 1,
    explanation: "PC1 i PC2 su u razlicitim VLAN-ovima (10 i 20), bez rutera ne mogu komunicirati. PC1 i PC3 su u istom VLAN10, ali 192.168.1.22/28 i 192.168.1.30/28 su u istoj podmrezi (.16 do .31), pa mogu. PC2 (.33/28) je u podmrezi .32-.47, razlicit VLAN - ne moze sa PC3." },

  { id: 276, category: "racunarske_mreze", type: "multiple",
    question: "Mreza DVR obavlja sledece funkcije:",
    answers: ["Snimanje video sadrzaja", "Kontrolu i upravljanje analognom kamerom", "Napajanje video kamere", "Povezivanje na LAN mrezu preko Eternet porta", "Dodelu IP adrese analognoj kameri"],
    correct: 0,
    explanation: "Mrezni DVR (Digital Video Recorder) snima video sadrzaj sa kamera. Ima Ethernet port za mrezno povezivanje i pristup snimljenom materijalu, ali ne napaja kamere niti im dodeljuje IP adrese." },

  // ==================== RACUNARSKE MREZE multi (PDF 142-173) ====================

  { id: 277, category: "racunarske_mreze", type: "multi",
    question: "Formati koji sluze za kompresiju video signala su:",
    answers: ["divx", "divir", "mpeg", "jpeg"],
    correct: [2],
    explanation: "MPEG (Moving Picture Experts Group) je standardni format za kompresiju videa. JPEG je format za staticke slike, a divx/divir nisu standardni formati kompresije." },

  { id: 278, category: "racunarske_mreze", type: "multi",
    question: "Osnovne komponente bezicne mreze su:",
    answers: ["HUB", "WAP (Wireless access point)", "kablovski modem", "bezicna mrezna kartica", "UTP kabl"],
    correct: [1, 3],
    explanation: "Bezicna mreza se sastoji od access pointa (WAP) koji sluzi kao bazna stanica i bezicnih mreznih kartica u klijentskim uredjajima. Hub, modem i UTP kabl nisu bezicne komponente." },

  { id: 279, category: "racunarske_mreze", type: "multi",
    question: "Karakteristike mreze ravnopravnih racunara su:",
    answers: ["Deljenje resursa i usluga se postize direktnom razmenom", "Uglavnom je potreban softver koji se ne dobija uz operativni sistem", "Veliki problem je bezbednost u mrezi", "Pogodna za rad sa puno korisnika (preko 50)", "Laksa za administriranje"],
    correct: [0, 2, 4],
    explanation: "P2P mreza: direktna razmena resursa (bez servera), bezbednost je problem jer nema centralizovane kontrole, i laka je za administriranje. Nije pogodna za vise od 10-15 korisnika, a ne zahteva poseban softver." },

  { id: 280, category: "racunarske_mreze", type: "multi",
    question: "Prednosti segmentovanja pomocu bridge-a u LAN mrezi:",
    answers: ["dobija se vise broadcast domena", "dobija se vise kolizionih domena", "veci propusni opseg po korisniku", "veci broadcast saobracaj do korisnika"],
    correct: [1, 2],
    explanation: "Bridge segmentuje kolizione domene (svaki port je zaseban kolizioni domen) cime se povecava efektivni propusni opseg po korisniku. Bridge NE segmentuje broadcast domene." },

  { id: 281, category: "racunarske_mreze", type: "multi",
    question: "Karakteristike tehnika prosirenog spektra su:",
    answers: ["vrlo su otporne na uticaj suma", "omogucavaju tajnost prenosa", "vrlo su otporne na uticaj smetnje (ometaca)", "velika je verovatnoca presretanja signala", "koriste se samo u vojsci"],
    correct: [0, 1, 2],
    explanation: "Tehnike prosirenog spektra (FHSS, DSSS) su otporne na sum i smetnje zbog rasporedjenosti signala po sirini pojasa, i pruзaju izvesnu tajnost jer je signal teze prepoznati bez poznavanja sekvence." },

  { id: 282, category: "racunarske_mreze", type: "multi",
    question: "Protokoli koji se koriste u IP telefoniji su:",
    answers: ["ISDN", "SIP", "H.593", "H.323"],
    correct: [1, 3],
    explanation: "SIP (Session Initiation Protocol) i H.323 su standardni signalizacioni protokoli za VoIP/IP telefoniju. ISDN je stara digitalna telefonska tehnologija, H.593 ne postoji." },

  { id: 283, category: "racunarske_mreze", type: "multi",
    question: "Topologije koje se koriste u bezicnim mrezama su:",
    answers: ["zvezda", "ad-hoc", "magistrala", "prsten", "celularna", "potpuno povezane"],
    correct: [1, 4],
    explanation: "Bezicne mreze koriste ad-hoc (direktne P2P veze bez AP-a) i celularnu (infrastrukturnu - BSS sa access pointom/baznom stanicom) topologiju." },

  { id: 284, category: "racunarske_mreze", type: "multi",
    question: "Tehnike prenosa koje spadaju u tehnike prosirenog spektra su:",
    answers: ["FHSS", "OFDM", "CDMA", "DSSS", "FDM", "TDM"],
    correct: [0, 2, 3],
    explanation: "Tehnike prosirenog spektra su FHSS (frekvencijsko skakanje), DSSS (direktna sekvenca) i CDMA (visestruki pristup kodnom podelom). OFDM, FDM i TDM su razlicite tehnike multipleksiranja." },

  { id: 285, category: "racunarske_mreze", type: "multi",
    question: "Standardi za kompresiju staticke slike su:",
    answers: ["M-JPEG", "JPEG", "MPEG", "JPEG 2000", "H.264"],
    correct: [1, 3],
    explanation: "JPEG i JPEG 2000 su standardi za kompresiju statickih slika. M-JPEG i H.264 su za video, MPEG je za pokretne slike - nije za staticke slike." },

  { id: 286, category: "racunarske_mreze", type: "multi",
    question: "Standardi za kompresiju video signala su:",
    answers: ["M-JPEG", "JPEG", "MPEG", "JPEG 2000", "H.264 (MPEG-4)", "MEG"],
    correct: [0, 2, 4],
    explanation: "Standardi za video kompresiju: M-JPEG (sekvence JPEG slika), MPEG i H.264/MPEG-4. JPEG i JPEG 2000 su za staticke slike, MEG ne postoji." },

  { id: 287, category: "racunarske_mreze", type: "multi",
    question: "U WAN linkovima, na drugom nivou OSI modela, koriste se sledeci protokoli:",
    answers: ["Frame Relay", "Spanning Tree Protocol (STP)", "Cisco Discovery Protocol (CDP)", "Point-to-Point Protocol (PPP)", "High-Level Data-Link Control (HDLC)", "User Datagram Protocol (UDP)", "Simple Mail Transfer Protocol (SMTP)", "Internet Protocol (IP)"],
    correct: [0, 3, 4],
    explanation: "WAN protokoli 2. sloja su: Frame Relay, PPP i HDLC. STP i CDP rade na sloju veze ali su LAN protokoli. UDP, SMTP i IP su protokoli visih slojeva." },

  { id: 288, category: "racunarske_mreze", type: "multi",
    question: "Odredi moguce uzroke zagusenja u LAN mrezi:",
    answers: ["mali propusni opseg portova", "dodavanje rutera koji obezbedjuje vezu mreze sa drugim mrezama", "previse korisnika u broadcast domenu", "dodavanje sviceva na kojima radi STP", "dodavanje rutera koji obezbedjuje filtriranje saobracaja", "smanjenje broja hostova", "broadcast oluje"],
    correct: [0, 2, 6],
    explanation: "Zagusenje uzrokuju: mali propusni opseg portova, previse korisnika koji dele isti broadcast domen i broadcast oluje (nekontrolisano sirenjebroadcast paketa). Dodavanje rutera i smanjenje hostova smanjuju zagusenje." },

  { id: 289, category: "racunarske_mreze", type: "multi",
    question: "Prednosti VLAN-ova u odnosu na druge mrezne arhitekture su:",
    answers: ["imaju malu kompleksnost upravljanja", "omogucavaju definisanje prioriteta saobracaja korisicenjem razlicith klasa servisa", "imaju nisku cenu", "omogucavaju upravljanje tokom saobracaja u lokalnoj mrezi i okosnici", "poboljsavaju fleksibilnost i efikasnost mreze", "povecavaju velicinu emisionog (broadcast) domena"],
    correct: [1, 3, 4],
    explanation: "VLAN-ovi: podrzavaju QoS klase servisa, upravljanje tokom saobracaja i poboljsavaju fleksibilnost. Njihova mana je povecana kompleksnost upravljanja, a broadcast domen se smanjuje (ne povecava)." },

  { id: 290, category: "racunarske_mreze", type: "multi",
    question: "Karakteristike rutera su:",
    answers: ["interfejsi rutera moraju pripadati razlicitim podmrezama", "ruteri rade na drugom nivou OSI modela", "uredjaji koji koriste IP adrese iz razlicitih podmreza ne mogu komunicirati ako izmedju njih nije ruter", "enkapsuliran podatak koji prima ruter naziva se segment", "na osnovu odredisne MAC adrese odlucuje na koji interfejs da prosledi podatak", "na osnovu odredisne IP adrese odlucuje na koji interfejs da prosledi podatak", "ruter bira izlazni interfejs na osnovu ruting tabele", "enkapsuliran podatak koji salje ruter naziva se segment"],
    correct: [0, 2, 5, 6],
    explanation: "Ruter: interfejsi moraju biti u razlicitim podmrezama, potreban je za komunikaciju izmedju podmreza, koristi odredisnu IP adresu i ruting tabelu za prosledjivanje. Radi na 3. sloju, a podatak koji obradjuje je paket (ne segment)." },

  { id: 291, category: "racunarske_mreze", type: "multi",
    question: "Naredbe koje ce omoguciti komunikaciju izmedju mreza 192.168.1.0/24 i 10.0.0.0/8 na slici su:",
    answers: ["A(config)#ip route 10.0.0.0 255.0.0.0 172.16.40.2", "A(config)#ip route 10.0.0.0 255.0.0.0 s0/0/0", "A(config)#ip route 10.0.0.0 255.0.0.0 10.0.0.1", "B(config)#ip route 192.168.1.0 255.255.255.0 172.16.40.1", "B(config)#ip route 192.168.1.0 255.255.255.0 172.16.40.2", "B(config)#ip route 192.168.1.0 255.255.255.0 192.168.1.1"],
    correct: [0, 3],
    explanation: "Ruter A treba staticki rutu ka 10.0.0.0 via 172.16.40.2 (next-hop na B). Ruter B treba staticki rutu ka 192.168.1.0 via 172.16.40.1 (next-hop na A). Ostale opcije imaju pogresne next-hop adrese." },

  { id: 292, category: "racunarske_mreze", type: "multi",
    question: "Za mrezu sa RIPv2, ako se koristi adresa 192.1.1.0/24, mreza A (100 hosta), mreza B (50 hosta) i WAN link mogu dobiti adrese:",
    answers: ["Za mrezu A: 192.1.1.128/25", "Za mrezu A: 192.1.1.0/25", "Za mrezu B: 192.1.1.64/26", "Za mrezu B: 192.1.1.224/27", "Za WAN link: 192.1.1.252/30", "Za WAN link: 192.1.1.4/30"],
    correct: [0, 2, 4],
    explanation: "Mreza A (100 hosta): /25 = 126 adresa, .128/25 ne preklapa. Mreza B (50 hosta): /26 = 62 adrese, .64/26 ne preklapa sa .128/25. WAN: /30 = 2 adrese, .252/30 ne preklapa. Sve tri adrese su u ispravnim opsezima." },

  { id: 293, category: "racunarske_mreze", type: "multi",
    question: "Ako se koriste razliciti ruting protokoli, ruter A ce izabrati sledecu putanju ka ruteru E:",
    answers: ["Ako se koristi RIP, sve putanje imaju istu udaljenost do E", "Ako se koristi RIP, ruter A ce uneti putanju A-D-E", "Ako se koristi OSPF, ruter A ce putanju A-C-E izabrati kao putanju najnize cene", "Ako se koristi OSPF, ruter A ce putanju A-D-E izabrati kao putanju najnize cene", "Ako se koriste oba, ruter ce koristiti putanju ucenu OSPF-om", "Ako se koriste oba, ruter ce koristiti putanju ucenu RIP-om"],
    correct: [1, 2, 4],
    explanation: "RIP koristi broj hopova: A-D-E (2 hopa) je bolje od A-C-E (2 hopa) ako su isti, ali A-B-D-E bi bila 3. OSPF koristi cost (propusni opseg). AD za OSPF (110) < AD za RIP (120), pa ce OSPF-ova putanja pobediti." },

  { id: 294, category: "racunarske_mreze", type: "multi",
    question: "Za Slot ALOHA protokol pristupa zajednickom medijumu vazi:",
    answers: ["Potrebna je sinhronizacija globalnog vremena", "Ako dodje do kolizije stanica je ne mora detektovati u tom slotu", "Emitovanje moze poceti samo na pocetku slota", "Ako se osteti samo jedan bit rama, stanica ponovo salje samo taj bit"],
    correct: [0, 2],
    explanation: "Slot ALOHA: zahteva globalnu vremensku sinhronizaciju i emitovanje moze poceti SAMO na pocetku vremenskog slota. Kolizije se detektuju (stanica mora retransmitovati ceo ram, ne samo osteceni bit)." },

  { id: 295, category: "racunarske_mreze", type: "multi",
    question: "Tacni iskazi o IP telefoniji su:",
    answers: ["Kvalitet komprimovanog signala ne sme da zavisi od primenjenog nacina kompresije", "Ocena kvaliteta komprimovanog govora je subjektivna", "Jedini nacin prenosa govora je primenom PCM modulacije", "Vocoder-ski algoritmi uzimaju u obzir specificne karakteristike govornog signala", "Varijacija kasnjenja ne utice na kvalitet prenetog govornog signala"],
    correct: [1, 3],
    explanation: "U VoIP: ocena kvaliteta govora (MOS - Mean Opinion Score) je subjektivna, i vocoder algoritmi (G.711, G.729) su optimizovani za specificne karakteristike ljudskog govora. PCM nije jedini nacin, a jitter uticE negativno na kvalitet." },

  { id: 296, category: "racunarske_mreze", type: "multi",
    question: "Za IP telefoniju:",
    answers: ["Lokacija korisnika je uvek ista", "Identifikacija korisnika je vezana za prikljucak na mrezu", "Broj ucesnika u komunikaciji moze da se menja", "U komunikaciji mogu da se prenose razlicite vrste informacija"],
    correct: [2, 3],
    explanation: "IP telefonija: korisnik nije vezan za fizicku lokaciju (moze koristiti broj s bilo kog mesta), identifikacija nije vezana za prikljucak (SIP adresa), broj ucesnika je fleksibilan (konferencijski pozivi), prenose se glas, video i podaci." },

  // ==================== RACUNARSKE MREZE input (PDF 174-190) ====================

  { id: 297, category: "racunarske_mreze", type: "input",
    question: "Nacin pristupa zajednickom medijumu koji se primenjuje u Ethernet mrezama je _____.",
    correct: ["CSMA/CD", "csma/cd"],
    explanation: "Ethernet (IEEE 802.3) koristi CSMA/CD (Carrier Sense Multiple Access with Collision Detection) - uredjaji oslusкuju kanal pre slanja i detektuju kolizije." },

  { id: 298, category: "racunarske_mreze", type: "input",
    question: "Minimalna duzina polja podatka i polja dopune zajedno u Ethernet mrezi je _____ bajta, a maksimalna _____ bajta.",
    correct: ["46 i 1500", "46/1500"],
    explanation: "IEEE 802.3 Ethernet frejm: minimalna velicina polja podataka je 46 bajtova (da bi ukupan frejm bio min. 64 bajta za detekciju kolizije), a maksimalna je 1500 bajtova (MTU)." },

  { id: 299, category: "racunarske_mreze", type: "input",
    question: "Svaki port uredjaja koji radi na _____ sloju OSI referentnog modela ogranicava jedan emisioni (broadcast) domen.",
    correct: ["3", "trecem", "TRECEM", "mreznom", "MREZNOM"],
    explanation: "Ruter, koji radi na 3. (mreznom) sloju OSI modela, ogranicava broadcast domene. Svaki interfejs rutera je zaseban broadcast domen." },

  { id: 300, category: "racunarske_mreze", type: "input",
    question: "Standard koji definise kako se informacije o virtualnim lokalnim racunarskim mrezama (VLAN-ovima) razmenjuju izmedju mreznih uredjaja je IEEE _____.",
    correct: ["802.1Q", "802.1q"],
    explanation: "IEEE 802.1Q je standard za VLAN tagovanje - definise kako se VLAN ID dodaje u Ethernet frejm da bi svicevi i ruteri znali kom VLAN-u frejm pripada." },

  { id: 301, category: "racunarske_mreze", type: "input",
    question: "Ruter moze da nauci rute na dva nacina: 1. administrator unese rutu - ovo se naziva _____ konfigurisanje ruta; 2. administrator pokrece ruting protokol - ovo se naziva _____ konfigurisanje ruta.",
    correct: ["STATICKO i DINAMICKO", "staticko i dinamicko", "Staticko i Dinamicko"],
    explanation: "Staticke rute se rucno unose i ne menjaju automatski. Dinamicke rute uci ruting protokol (RIP, OSPF, EIGRP) koji automatski azurira tabelu na osnovu promena u topologiji." },

  { id: 302, category: "racunarske_mreze", type: "input",
    question: "Telefonski govorni kanal zauzima opseg od _____ kHz.",
    correct: ["4", "3.4", "3,4"],
    explanation: "Telefonski kanal zauzima opseg 300-3400 Hz (oko 4 kHz). Ovaj opseg je dovoljan za razumljiv govor i osnova je za digitalizaciju sa uzorkivanjem od 8 kHz (Nyquist-ov teorem)." },

  { id: 303, category: "racunarske_mreze", type: "input",
    question: "U mobilnoj telefoniji, prebacivanje ili preusmeravanje poziva koji je u toku na drugi kanal ili u drugu celiju naziva se _____.",
    correct: ["HANDOFF", "handoff", "Handoff", "HANDOVER", "handover"],
    explanation: "Handoff (ili handover) je postupak automatskog prebacivanja aktivnog poziva sa jedne bazne stanice na drugu kada se korisnik pomeri, bez prekidanja veze." },

  { id: 304, category: "racunarske_mreze", type: "input",
    question: "Cena putanje R1-R7-R8 je 200. Cena koju ce R1 uneti u ruting tabelu za optimalnu putanju do mreze 172.16.3.0 je _____.",
    correct: ["100"],
    explanation: "OSPF (SPF algoritam) bira putanju sa najnizim cost-om. Ako R1-R7-R8 ima cost 200, a postoji kratka putanja sa cost-om 100, ruter ce uneti cost 100 (manju vrednost) u ruting tabelu." },

  { id: 305, category: "racunarske_mreze", type: "input",
    question: "Bluetooth tehnologija koristi frekvencijski opseg od _____ GHz, tehniku prenosa _____, sa trajanjem okvira _____ mikroSekundi i duzinom _____ bita.",
    correct: ["2.4 GHz FHSS 625 us 366 bita", "2,4 FHSS 625 366"],
    explanation: "Bluetooth: opseg 2.4 GHz ISM, tehnika FHSS (1600 skokova/s), trajanje slota 625 mikroSekundi, duzina okvira 366 bita." },

  { id: 306, category: "racunarske_mreze", type: "input",
    question: "Kada svic primi Ethernet ram na port pridruzeni VLAN-u koji nije native VLAN, on menja Ethernet ram umetanjem _____ i _____ u VLAN tag polje.",
    correct: ["VLAN ID broja i koda prioriteta", "vlan id i prioriteta", "VLAN ID i prioriteta"],
    explanation: "IEEE 802.1Q VLAN tag sadrzi: TPID (tip), TCI (koji ukljucuje PCP - 3 bita prioriteta i VID - 12 bita VLAN ID). Svic dodaje ove informacije u frejm pre slanja trunk portom." },

  { id: 307, category: "racunarske_mreze", type: "input",
    question: "Da bi se od Ethernet frejma dobio IEEE 802.1Q frejm potrebno je ubaciti polje TAG izmedju polja _____ i polja _____.",
    correct: ["SRC i LEN/Etype", "SA i Len/Etype", "Source i Length/Type"],
    explanation: "IEEE 802.1Q tag (4 bajta) se ubacuje izmedju polja SA (Source Address) i Length/Etype polja u standardnom Ethernet frejmu." },

  { id: 308, category: "racunarske_mreze", type: "input",
    question: "U mrezi, paket putuje od Fa0/1 R1 ka Fa0/0 R2. Izvoriсna MAC adresa je MAC adresa interfejsa _____, Odredisna MAC adresa je MAC adresa interfejsa _____. IP adrese se ne menjaju: Source IP = PC1, Destination IP = PC3.",
    correct: ["Fa0/1 R1 i Fa0/0 R2", "Fa0/1 R1, Fa0/0 R2"],
    explanation: "MAC adrese se menjaju na svakom hop-u. Na linku R1-R2: source MAC = Fa0/1 interfejsa R1, destination MAC = Fa0/0 interfejsa R2. IP adrese ostaju nepromenjene (PC1 i PC3)." },

  { id: 309, category: "racunarske_mreze", type: "input",
    question: "Osnovni postupci digitalizacije signala su: 1. _____, 2. _____, 3. _____.",
    correct: ["ODMERAVANJE KVANTOVANJE KODOVANJE", "odmeravanje kvantovanje kodovanje", "Odmeravanje Kvantovanje Kodovanje"],
    explanation: "Digitalizacija analognog signala: 1) Odmeravanje (sampling) - uzorkovanje u vremenskim trenucima, 2) Kvantovanje - pridruzivanje diskretnih vrednosti, 3) Kodovanje - binarno zapisivanje." },

  // ==================== RACUNARSKE MREZE matching (PDF 194-202) ====================

  { id: 310, category: "racunarske_mreze", type: "matching",
    question: "Povežite aktivne mrezne uredjaje sa slojevima OSI referentnog modela na kojima rade.",
    pairs: [
      { left: "svic", right: "sloj veze" },
      { left: "ruter", right: "sloj mreze" },
      { left: "hab", right: "fizicki sloj" }
    ],
    explanation: "Hab radi na fizickom sloju (1) - samo pojacava signal. Svic radi na sloju veze (2) - koristi MAC adrese. Ruter radi na mreznom sloju (3) - koristi IP adrese." },

  { id: 311, category: "racunarske_mreze", type: "matching",
    question: "Povežite principe rutiranja sa podrazumevanim vrednostima administrativne distance.",
    pairs: [
      { left: "Staticka ruta", right: "1" },
      { left: "RIP", right: "120" },
      { left: "OSPF", right: "110" }
    ],
    explanation: "Administrativna distanca (AD): Staticka ruta AD=1 (najvredovanija), OSPF AD=110, RIP AD=120. Sto manja AD, to pouzdaniji izvor rute." },

  { id: 312, category: "racunarske_mreze", type: "matching",
    question: "Povežite nazive mreza sa odgovarajucim IEEE 802 standardima.",
    pairs: [
      { left: "Ethernet", right: "IEEE 802.3" },
      { left: "Bezicni LAN", right: "IEEE 802.11" },
      { left: "PAN mreza", right: "IEEE 802.15.x" },
      { left: "Bluetooth", right: "IEEE 802.15.1" }
    ],
    explanation: "IEEE 802.3 = Ethernet (zicani LAN). IEEE 802.11 = Wi-Fi (WLAN). IEEE 802.15 = WPAN. IEEE 802.15.1 = Bluetooth specificno." },

  { id: 313, category: "racunarske_mreze", type: "matching",
    question: "Povežite frekvencijske opsege sa standardima IEEE 802.11.",
    pairs: [
      { left: "2,4 – 2,484 GHz", right: "IEEE 802.11b/g" },
      { left: "10,1 -- 10,45 GHz", right: "IEEE 802.11a" },
      { left: "5,735 – 5,850 GHz", right: "IEEE 802.11a" }
    ],
    explanation: "IEEE 802.11b/g koriste 2,4 GHz opseg. IEEE 802.11a koristi 5 GHz opseg (i alternativno 10 GHz UNII-3 opseg u nekim primeni)." },

  { id: 314, category: "racunarske_mreze", type: "matching",
    question: "Povežite brzine prenosa sa standardima IEEE 802.11.",
    pairs: [
      { left: "1 - 11 Mb/s", right: "IEEE 802.11b" },
      { left: "60 – 3 Mb/s (WiMAX)", right: "IEEE 802.11a" },
      { left: "6 – 54 Mb/s", right: "IEEE 802.11g" }
    ],
    explanation: "802.11b: do 11 Mbps (2.4 GHz). 802.11a: do 54 Mbps (5 GHz). 802.11g: do 54 Mbps (2.4 GHz)." },

  { id: 315, category: "racunarske_mreze", type: "matching",
    question: "Povežite polja IEEE 802.3 frejma sa odgovarajucim brojem bajtova.",
    pairs: [
      { left: "Preamble", right: "7 bajtova" },
      { left: "DA (Destination Address)", right: "6 bajtova" },
      { left: "SA (Source Address)", right: "6 bajtova" },
      { left: "Length", right: "2 bajta" },
      { left: "FCS", right: "4 bajta" }
    ],
    explanation: "Ethernet II / 802.3 frejm: Preamble 7 bajt + SFD 1 bajt, DA 6 bajt, SA 6 bajt, Type/Length 2 bajt, Data 46-1500 bajt, FCS 4 bajt." },

  { id: 316, category: "racunarske_mreze", type: "matching",
    question: "Povežite redne brojeve polja standardnog Ethernet frejma sa nazivima polja.",
    pairs: [
      { left: "Polje 1 (7 bajtova)", right: "preambula" },
      { left: "Polje 2 (1 bajt - SFD)", right: "polje koje oznacava pocetak rama" },
      { left: "Polje 3 (6 bajtova)", right: "adresa odredista" },
      { left: "Polje 4 (6 bajtova)", right: "adresa izvora" },
      { left: "Polje 5 (2 bajta)", right: "polje duzine ili vrste (length/type)" },
      { left: "Polje 6/7 (do 1500 bajtova)", right: "podatak" },
      { left: "Polje 8 (4 bajta)", right: "sekvenca za proveru ispravnosti" }
    ],
    explanation: "Standardni Ethernet frejm (IEEE 802.3): Preamble(7) + SFD(1) + DA(6) + SA(6) + Length/Type(2) + Data(46-1500) + FCS(4)." }

]