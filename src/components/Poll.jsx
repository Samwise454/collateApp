import React, { useState, useEffect } from 'react';


const Poll = () => {
  const [whichDiv, setWhichDiv] = useState("poLga");

  // lga array
  const [lga, setLga] = useState([
    "Aguata", "Ayamelum", "Anambra East", "Anambra West", "Anaocha",
    "Awka North", "Awka South", "Dunukofia", "Ekwusigo", "Idemili North",
    "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", 
    "Ogbaru", "Onitsha North","Onitsha South", "Orumba North", "Orumba South",
    "Oyi"
  ]);

  const [whichWard, setWhichWard] = useState("");
  const [theWard, setTheWard] = useState("");

  //ward arrays
  const [allWard, setAllWard] = useState({
    aguata: ["Achina I", "Achina II", "Agulueze Chukwu", "Akpo", "Amesi", "Ekwulobia I",
            "Ekwulobia II", "Ezinifite I", "Ezinifite II", "Igboukwu I", "Igboukwu II", 
            "Ikenga", "Isuofia", "Nkpologwu", "Oraeri", "Uga I", "Uga II", "Umuchu I", 
            "Umuchu II", "Umuona"],

    ayamelum: ["Anaku", "Ifite Ogwari I", "Ifite Ogwari II", "Igbakwu", "Omasi", "Omor I",
                "Omor II", "Omor III", "Umu Elum", "Umueje", "Umumbo"],

    anambraeast: ["Aguleri I", "Aguleri II", "Enugwu Otu I", "Enugwu Otu II", "Igbariam",
                  "Nando I", "Nando II", "Nando III", "Nsugbe I", "Nsugbe II",
                  "Otuocha I", "Otuocha II", "Umuleri I", "Umuleri II", "Umuoba Anam"],

    anambrawest: ["Ezi Anam", "Ifite Anam", "Nzam", "Olumbanasa Ode", "Olumbanasa Inoma",
                  "Oroma Etiti Anam", "Umuenwelum Anam", "Umueze Anam I", "Umueze Anam II",
                  "Umuoba Anam"],

    anaocha: ["Adazi Ani I", "Adazi Ani II", "Adazi Enu I", "Adazi Enu II", "Adazi Nnukwu I",
              "Adazi Nnukwu II", "Agulu I", "Agulu II", "Agulu III", "Agulu IV", "Agulu Uzoigbo",
              "Akwaeze", "Ichida I", "Ichida II", "Neni I", "Nneni II", "Nri I", "Nri II", "Obeledu"],

    awkanorth: ["Achalla I", "Achalla II", "Achalla III", "Amansea", "Amanuke", "Awba Ofemmili",
                "Ebenebe I", "Ebenebe II", "Ebenebe III", "Isuaniocha", "Mgbakwu I", "Ugbene", "Ugbenu",
                "Urum"],

    awkasouth: ["Agu Awka", "Amawbia I", "Amawbia II", "Amawbia III", "Awka I", "Awka II", "Awka III", "Awka IV",
                "Awka V", "Awka VI", "Awka VII", "Ezinato/Isiagu", "Mbaukwu", "Nibo I", "Nibo II", "Nibo III", 
                "Nise I", "Nise II", "Okpuno", "Umuawulu"],

    dunukofia: ["Akwa", "Ifitedunu I", "Ifitedunu II", "Nawgu I", "Nawgu II", "Ukpo I", "Ukpo II", "Ukpo III", 
                "Ukwulu I", "Ukwulu II", "Umudioka I", "Umudioka II", "Umunnachi I", "Umunnachi II"],

    ekwusigo: ["Ichi", "Ihembosi/Anaubahu", "Oraifite I", "Oraifite II", "Oraifite III", "Ozubulu I", 
                "Ozubulu II", "Ozubulu III", "Ozubulu IV", "Ozubulu V", "Amakwa", "Ihiteoha"],

    idemilinorth: ["Abacha", "Abatete", "Eziowelle", "Ideani", "Nkpor I", "Nkpor II", "Obosi", "Ogidi I",
                    "Ogidi II", "Oraukwu", "Uke", "Umuoji"],

    idemilisouth: ["Akwukwu", "Alor I", "Alor II", "Awka Etiti I", "Awka Etiti II", "Nnobi I", "Nnobi II",
                    "Nnobi II", "Nnobi III", "Nnokwa", "Oba I", "Oba II", "Ojoto"],

    ihiala: ["Amamu I", "Amamu I", "Amorka", "Azia", "Ihite", "Isseke", "Ogbolo", "Okija I", "Okija II",
            "Okija III", "Okija IV", "Okija V", "Orsumoghu", "Ubuluisiuzor", "Uli I", "Uli II", "Uli III", 
            "Lilu", "Uzoakwa", "Mbosi"],

    njikoka: ["Abba I", "Abba II", "Abagana I", "Abagana II", "Abagana III", "Abagana IV", "Enugwu Agidi I",
              "Enugwu Agidi II", "Enugwu Ukwu I", "Enugwu Ukwu II", "Enugwu Ukwu III", "Enugwu Ukwu IV", 
              "Nawfia I", "Nawfia II", "Nimo I", "Nimo II", "Nimo III", "Nimo IV"],

    nnewinorth: ["Nnewi Ichi I", "Nnewi Ichi II", "Otolo I", "Otolo II", "Otolo III", "Umudim I", "Umuim II",
                "Uruagu I", "Uruagu II", "Uruagu III"],

    nnewisouth: ["Akwa Ihedi", "Amichi I", "Amichi II", "Amichi III", "Azuigbo", "Ebenator", "Ekwulumili", 
                "Ezinifite I", "Ezinifite II", "Ezinifite III", "Osumenyi I", "Osumenyi II", "Ukpor I", "Ukpor II",
                "Ukpor III", "Ukpor IV", "Ukpor V", "Ukpor VI", "Unubi", "Utuh"],

    ogbaru: ["Akili Ogidi/Obeagwe", "Akili Ozizor", "Atani I", "Atani II", "Iyiowa/Odekpe/Ohita",
            "Ochuche Umuodu/Ogbakuba/Amiyi", "Ogwuaniocha", "Ogwu Ikpele", "Okpoko I", "Okpoko II", "Okpoko III",
            "Okpoko IV", "Okpoko V", "Okpoko VI", "Ossomala", "Umunankwo", "Mputu"],

    onitshanorth: ["American Quaters", "G.R.A", "Inland Town I", "Inland Town II", "Inland Town III",
                  "Inland Town IV", "Inland Town V", "Inland Town VI", "Inland Town VII", "Inland Town VIII",
                  "Ogbe Umuonicha", "Trans Nkisi", "Water Side Central I", "Water Side Central II",
                  "Woliwo Layout"],
    
    onitshasouth: ["Bridge Head I", "Bridge Head II", "Bridge Head III", "Fegge I", "Fegge II", "Fegge III",
                  "Fegge IV", "Fegge V", "Fegge VI", "Fegge VII", "Odoakpu I", "Odoakpu II", "Odoakpu III",
                  "Odoakpu IV", "Odoakpu V", "Odoakpu VI", "Odoakpu VII"],

    orumbanorth: ["Ajalli I (Obinikpa/Umueve)", "Ajalli II (Umuabiama/Amaga)", "Amaetiti", "Amaokpala/Omogho",
                  "Awa", "Awgbu I", "Awgbu II", "Nanka I", "Nanka II", "Ndikelionwu", "Ndiokolo/Ndiokpalaeke",
                  "Ndiowu", "Ndiukwuenu/Okpeze", "Oko I", "Oko II", "Ndiokpalaeze", "Ufuma I", "Ufuma II"],

    orumbasouth: ["Agbudu", "Akpu", "Enugu/Umuonyia", "Eziagu", "Ezira", "Ihite", "Isulo", "Nawfija", "Umuchukwu",
                  "Ogboji", "Ogbunka I", "Ogbunka II", "Owerre Ezukala I", "Owerre Ezukala II", "Umunze I",
                  "Umunze II", "Umunze III", "Umuomaku"],

    oyi: ["Awkuzu I", "Awkuzu II", "Awkuzu III", "Awkuzu IV", "Nteje I", "Nteje II", "Nteje III", "Nteje IV",
          "Nteje V", "Nkwelle Ezunaka I", "Nkwelle Ezunaka II", "Ogbunike I", "Ogbunike II", "Umunya I", "Umunya II"]
  });

  const [whichPoll, setWhichPoll] = useState("");

  //poll arrays
  const [pollArray, setPollArray] = useState({
    aguata0: ["St. Charles School-[001]", "Eziama Square-[002]", "Ugwuachi Square-[003]",
              "St. Peter's College-[004]", "Amankwu Square-[005]", "Cooperative Hall-[006]",
              "Gbirigbo Hall-[007]", "Ochieobu Square-[008]", "Oye Motor Park I-[009]",
              "Oye Motor Park II-[010]", "Oye Motor Park III-[011]", "Council Hall-[012]",
              "Obinikpa Pry. School I-[013]", "Obinikpa Pry. School II-[014]"],

    aguata1: ["Progressive School I-[001]", "Umueleke Hall-[002]", "Girls Sec. School I-[003]",
              "Girls Sec. School II-[004]", "Amanwafor Square I-[005]", "Amanwafor Square II-[006]",
              "Amanwafor/Abudum Square-[007]", "Amanwafor Square III-[008]", "Obinikpa Pri. School I-[009]",
              "Obinikpa Pri. School II-[010]", "Ugwuocha Square-[011]", "Umueleke Hall II-[012]",
              "Udara Eke Square-[013]", "Progressive School II-[014]"],

    aguata2: ["Central School I", "Central School II", "Town Hall I", "Town Hall II", "Obiofia Pri. School",
              "Aguluezechukwu Pri School I", "Aguluezechukwu Pri School II", "London Science I", "London Science II",
              "London Science III", "Nkwo Market I", "Nkwo Market II", "Eziagu Village Hall", "Comm. Pri. School Umuchukwu",
              "Comm. Sec. School Ozalla"],

    aguata3: ["Akpo Town Hall I", "Akpo Town Hall II", "Udoka School",
              "Agbaelu Village Hall I", "Uhuala Hall I", "Umueze Village Square",
              "Amaife Hall I", "Udo Village Hall", "Egbuike Pri. School", "Agbaelu Village Hall II",
              "Uhuala Hall II", "Amaife Hall II", "UBE Block Udoka Pri. School"],

    aguata4: ["Central School I", "Central School II", "Central School III", "Central School IV",
              "Central School V", "Community Pri. School I", "Community Pri. School II", "Community Pri. School III",
              "Community Pri. School IV", "Social Center I", "Social Center II", "Social Center III", "Social Center IV",
              "Udura Eko Square", "Social Center V"],

    aguata5: ["Ofosie Hall I", "Ofosie Hall II", "Central School", "Umueze Nwafor Pri. School", "Amaudo Umuowele",
              "Havana Hut", "Chigozie Solid Bar", "Umuezennani Hall I", "Umuezennani Hall II", "Ezezuegu Square",
              "Paragon Pharmacy", "Ihuokpala Square I", "Ihuokpala Square II", "Obi Nkwo Square I", "Obi Nkwo Square II",
              "Amaudo Square I", "Amaudo Square II", "First Hill Sec. School", "Umuchiana Village Hall", "Ofosie Hall III",
              "Central School Block B", "Court Premises (LGA)", "Central School Block D", "Omeke Umuchi Hall",
              "Amaudo Umuowelle II", "Ekwulobia Urban Mass Transit Park", "Umuezehanoyi Hall", "Mr. Biggs Eatery",
              "Okpo Village Hall I", "Okpo Village Hall III", "Okpo Village Hall II", "Paragon Pharmacy II", "Orie Ihuokpala Square"],

    aguata6: ["Ezekannagha Square I", "Ezekannagha Square II", "Agba Village Hall", "Community Pri. School", "Eziagulu Pri. School", 
              "Nwanebo Pri. School I", "Nwanebo Pri. School II", "Kinder Ula", "G.S.S Ekwulobia", "Eziagulu Village Hall II", 
              "Eziagulu Women's Hall", "Eziagulu Hall", "Ekemezie Square", "Agba Pri. School", "Delight Int. School", "Umuoma Hall",
              "Health Center", "Aguata High School", "Ezeokoli Square", "Ezeiloegbuna Square", "Obu Agba Hall", "Agba Village Hall II",
              "Comm. Pri. School Block B", "Eziagulu Pri. School UBE Block", "G.S.S Ekwulobia II", "Umudide Hall"],

    aguata7: ["Town Hall I", "Town Hall II", "Akpunoji Comm. School I", "Akpunoji Comm. School II", "Igwebuike Pri. School I", 
              "Igwebuike Pri. School II", "Old Akpunoji I", "Old Akpunoji II", "Umuagu Kindergatin I", "Umuagu Kindergatin II",
              "Ezionye Village I", "Ezionye Village II"],

    aguata8: ["Ogbugbaogu Pri. School I", "Ogbugbaogu Pri. School II", "B.S.S", "Anuli Pri. School", "Civic Center", "Nwahia Kinder School",
              "Ezihu/Afor", "Ozalla Center", "Umobi Kinder School", "Umuezenwa Center", "Town School Uhuala"],

    aguata9: ["Obiuno Pri. School I", "Obiuno Pri. School II", "Obiuno Youths Center I", "Obiuno Youths Center II",
              "Amakpu Square", "NGO Pri. School", "G.S.S Igboukwu I", "Mgbendo Hall", "Ihuofor Hall", "Ezekweka Hall",
              "Amaudo/Akukwa Square", "Ihuanuka Hall", "NGO Square","Ezeachaoke Hall", "Umuazuchaoke Hall", 
              "Town School I", "Town School II", "Obigbo C.S", "Umunono Hall", "Ogwugwuagu Pri. School", "Town Hall", 
              "G.S.S Igbo Ukwu II", "Ihuanuka Hall II"],

    aguata10: ["Ihite Pri. School I", "Ihite Pri. School II", "Umudege Civic Center I", "Umudege Civic Center II", 
              "Etitinabo Hall I", "Etitinabo Hall II", "Union Pri. School I", "Union Pri. School II", "Etiti Hall I",
              "Etiti Hall II", "Ihuakaba Hall I", "Ihuakaba Hall II", "Udoakwari Hall I", "Udoakwari Hall II", 
              "Umuezulu Hall I", "Umuezulu Hall II", "Central School I", "Central School II", "Ezihu Pri. School I",
              "Ezihu Pri. School II", "St. Stephen", "Umueneili Hall", "Timber Market Hall", "Central School III"],

    aguata11: ["Community School I", "Community School II", "Ezi Hall I", "Ezi Hall II", "Esisiama Hall I", "Esisiama Hall II",
                "Ifite Hall I", "Ifite Hall II"],

    aguata12: ["Amorji Pri. School", "Ofiyi Square", "Ihuowele Hall", "Emeagam Hall", "Central School", "Ozala School (Vill Hall)",
                "Ozala School", "Isuofia Pri. School", "Isiaku", "Ezioka Hall", "Ikeme Pri. School", "Cathecumen Nursery School",
                "Community School", "Isiaku Hall", "Akulu Village Hall", "Akulu Nde Kinder", "Pri. Health Center Ozalla"],

    aguata13: ["Central School", "Community School", "Obinabo School", "Town Hall", "Eluama Hall", "Nkpologwu Pri. School", 
                "Local Authority Pri. School", "Umuonyia Hall", "Isioji Hall", "Ngwuagu Square", "Ogwugwunezi Hall",
                "Nkpologwu Central School", "Nkpologwu Community School", "Udara Eke Sqaure"],

    aguata14: ["Umudike Hall I", "Umudike Hall II", "Umudike Hall III", "Central School I", "Central School II", "Central School III",
                "Central School IV", "Central School V", "Central School VI", "Obiuno Hall I", "Obiuno Hall II", "Obiuno Hall III",
                "Obiuno Hall IV", "Obiuno Hall V", "Obi Nri I", "Obi Nri II", "Obi Nri III", "Obi Nri IV", "Obi Nri V", "Obi Nri VI",
                "Umudike Hall V"],

    aguata15: ["Umuonye Hall I", "Umuonye Hall II", "Umuonye Hall III", "Umuonye Hall IV", "Umuonye Hall V",
                "Nwagwazi Pri. School I", "Nwagwazi Pri. School II", "Nwagwazi Pri. School III", "Ezinkwo Pri. School I", 
                "Ezinkwo Pri. School II", "Okwu Hall I", "Okwu Hall II", "Okwu Hall III", "Otiogbata Hall I", "Otiogbata Hall II", 
                "Otiogbata Hall III", "Okwute Hall 1", "Okwute Hall II", "Ugwunwaocha Square I", "Ugwunwaocha Square II",
                "Ugwunwaocha Square III", "Community Sec.School I", "Community Sec.School II", "R.V Umueze I", "R.V Umueze II"],

    aguata16: ["Community Pri. School I", "Community Pri. School II", "Community Pri. School III", "Community Pri. School IV", 
                "Oganiru Pri. School I", "Oganiru Pri. School II", "Oganiru Pri. School III", "Ihuogwugwu Hall I", 
                "Ihuogwugwu Hall II", "Uga B.S.S I", "Uga B.S.S II", "Uga B.S.S III", "Uga Girls", "Mbalaoye Square", 
                "Oka Village Hall I", "Oka Village Hall II"],

    aguata17: ["Civi Center", "G.S.S Umuchi", "Amahie Pri. School", "Community School Achalla", "Osete Village Hall", 
                "Kinder School I", "Kinder School II", "Umumilo Hall", "Igwebuike Hall", "S. Peters Udalaohisike", "Ekebelebe Achalla",
                "Ogu Ezeani Hall", "Osete Village II", "Umumilo Village"],

    aguata18: ["Town Hall", "Umuchu Hall", "Umugama Hall", "Ibughubu Hall", "Community School", "Uchenabo Hall", "Ozalakaokwa Tech Shcool",
                "Mbarafor Pri. School", "B.H.S Umuchu", "Ugwuakwu Community Hall", "Progressive Hall", "Obiakpalaeke Hall", 
                "Ozalla/Akukwa P.O", "Salvation Army", "Ugwuakwu Kinder", "Anglican Kinder", "Umugama Village", "Ibughubu Village"],

    aguata19: ["Iruile Village Hall", "Ekwulu Village Hall", "St. Joseph High Schl Ujaliwe", "Umona Pri. School VI",
                "Umona Pri. School V", "Umona Pri. School VII", "Umona Pri. School VII"],
      
    ayamelum0: ["Obukwu Square I", "Obukwu Square II", "Atava Square I", "Atava Square II", "Akpa Hall I", "Akpa Hall II",
                "Umuriana Hall I", "Umuriana Hall II", "Umuerechi Hall I", "Umuerechi Hall II", "Akpi Hall", "Umuoka Hall",
                "Umuotobo Hall I", "Umuotobo Hall II", "Umuotobo Hall III", "Umuotobo Hall IV", "C.P.S Anaku I", "C.P.S Anaku II",
                "C.P.S Anaku III", "C.P.S Anaku IV", "Isiokwe Square I", "Isiokwe Square II", "Umuarechi Hall II", "Austin Farms",
                "Eke Central Pri. School Anaku", "Health Center Ikenga"],

    ayamelum1: ["C.P.S Ifite Ogwari I", "C.P.S Ifite Ogwari II", "C.P.S Ifite Ogwari III", "Ifite Ogwari Post Office",
                "Community Pri. School I", "Community Pri. School II", "Amaokpolo Square I", "Amaokpolo Square II", "Amaokpolo Square III",
                "Amaokpolo Square IV", "Umudie Square I", "Umudie Square II", "Umudie Square III", "Central School I", "Central School II", "Central School III"],

    ayamelum2: ["Ogwari Pri. School I (Umuawa Square I)", "Ogwari Pri. School II (Umuawa Square II)", "Ogwari Pri. School III (Umuawa Square III)", "Ogwari Pri. School IV", "Egbeapaghi Hall I (Oye Market Sq. I)",
                "Oye Market Square II", "Ogwari Pri. School I", "Ogwari Pri. School II", "Ama Isuidala I", "Ama Isuidala II", 
                "Ama Isuidala III", "Ama/Ama I", "Ama/Ama II", "Egbeapaghi Hall II (Ukojo Otube F/S)", "Ogidiga Pri. School Ama/Ama"],

    ayamelum3: ["Isiachaelle Village Hall I (Umuereakagba I)", "Isiachaelle Village Hall II (Umuereakagba II)", "Isiachaelle Village Hall III (Umuereakagba III)",
                "Isiachaelle Village Hall IV (Umuereakagba IV)", "Community Pri. School I (Umueredo Vil. Sq. I)", "Community Pri. School II (Umueredo Vil. Sq. II)",
                "Nobo Pri. School I", "Nobo Pri. School II", "Isiokwe Village Hall I", "Isiokwe Village Hall II", "Isiokwe Village Hall III",
                "Isiokwe Village Hall IV", "Isiokwe Village Hall V"],

    ayamelum4: ["C/S Omasi Uno I", "C/S Omasi Uno II", "C/S Omasi Uno III", "C/S Omasi Uno IV", "Ogba Vilage Square I", "Ogba Vilage Square II",
                "Ikwezekwedi Square I", "Ikwezekwedi Square II", "Odiyaja Village Square I", "Odiyaja Village Square II",
                "Umuelim Village Square I", "Umuelim Village Square II", "Akojo Village Square Hall I", "Akojo Village Square Hall II",
                "C.P.S Omasi Agu", "Tempo Pri. School Omasi Uno", "Unity Pri. School Omasi Uno", "Migrant Pri. School Omasi Agu"],

    ayamelum5: ["Ama Isiokwe I", "Ama Isiokwe II", "Ama Isiokwe III", "Ama Isiokwe IV", "Ama Umuogbu I", "Ama Umuogbu II", "Ama Umuogbu III",
                "Ama Umuogbu IV", "Ama Umuokpanta I", "Ama Umuokpanta II", "Ama Akara I", "Ama Akara II", "Ama Akara III", "Ama Akara IV",
                "Ama Amikwetiti I", "Ama Amikwetiti II", "Ama Amikwetiti III", "Ama Amikwetiti IV", "Ama Eronyia I", "Ama Eronyia II", "Ama Eronyia III",
                "Ama Eronyia IV", "Orenja Pri. School", "Amikwe Pri. School", "Umuzu Village Hall I", "Umuzu Village Hall II"],

    ayamelum6: ["Akanator Pri. School I", "Akanator Pri. School II", "Akanator Pri. School III", "Urban Pri. School I", "Urban Pri. School II", 
                "Ama Agbaja Square I", "Ama Agbaja Square II", "Ama Isiogwari I", "Ama Isiogwari II", "Ama Isiogwari III", "Ama Isiogwari IV",
                "Ama Isiogwari V", "Ama Isiogwari VI", "River Basin I", 'River Basin II', "Okpalagbuo Hall (Ama Umukwe I)", "Akaneke Hall (Ama Umukwe II)",
                "Upata Vil. Hall (Ama Umukwe III)", "Ama Umukwe Ogwari Vil. Sq.", "Ama Umuali Vil. Sq. I", "Ama Umuali Vil. Sq. II", 
                "Otaku Pri. School Akanator","Okpalagbuo Pri. School"],

    ayamelum7: ["Ama Aturia I", "Ama Aturia II", "Ama Aturia III", "Ama Aturia IV", "Ama Umuanala I", "Ama Umuanala II", "Ama Umuanala III",
                "Ama Umuanala IV", "C/S Omor I", "C/S Omor II", "C/S Omor III", "C/S Omor IV", "Faith Sec. School I", "Faith Sec. School II",
                "Ama Isikakwu Hall", "Faith Sec. School III Aturia", "Ama Aturia Civic Center", "Ama Isikakwu Hall II"],

    ayamelum8: ["C/S School Erum", "Umuodu Village Hall I", "Umuodu Village Hall II", "Umuodu Village Hall III", "Ayigo Hall I",
                "Ayigo Hall II", "Ukpambaka Hall I", "Ukpambaka Hall II", "Ukpambaka Hall III", "Ukpambaka Hall IV", "Ukpambaka Hall V",
                "Ama Umuerike"],

    ayamelum9: ["Umuoke Village Hall I", "Umuoke Village Hall II", "C.P.S Umueje I", "C.P.S Umueje II", "Amoli Village Square I",
                "Amoli Village Square II", "Community Pri. School Umueje III", "Community Pri. School Umueje IV"],

    ayamelum10: ["Ezi Pri. School I", "Ezi Pri. School II", "Igwebuike Pri. School I", "Igwebuike Pri. School II",
                  "Okpuno Migrant School (Ifiteora III)", "Obuneri Civic Center I", "Ntiokwa Migrant School", "Obuneri Civic Center II",
                  "Njikoka Pri. School", "Union P/S", "Uga Civic Center I", "Uga Civic Center II", "Okpuno Migrant School (Ifiteora IV)",
                  "Ama Isamoyi Hall", "Pioneer Pri. School", "Uga Achi Unity Hall"],

    anambraeast0: ["Umuokpoto Square","Obuga Public Square", "Ugwunadegbe Pri. School I", "Aguleri I Civic Center",
                    "Umuala Square I", "Umuala Square II", "Mgboko Public Square", "Okene Public Square", "Umueze Public Square",
                    "Umunkiti Public Square", "Mgbailo Public Square", "Civic Center Abegwu", "Umunta Village Hall", "Willie Obiano Sec. School I",
                    "Willie Obiano Sec. School II", "Ugwunadagbe Pri. School II", "Umuanevili Hall", "Eziama Town Hall"],

    anambraeast1: ["Central School", "Umunoke Pub. Square I", "Umunoke Pub. Square II", "Umuanwunu Square", "Abor Village Hall I", 
                    "Okpu Village Hall I", "Umungalagu Village Hall", "Isiokwe Village Hall", "Erulu Village Hall", "Owololie Town Hall",
                    "Justice Chinwuba Mem. Sec. School", "Umuanwunu Public Square II", "Abor Central Hall", "Okpu Village Hall"],
                    
    anambraeast2: ["Enugwu Ndida", "Ama Enugu I", "Ama Enugu II", "Ama Okpogba", "Ama Isikwe", "Ama Igboezunu", "Ifite Enu",
                    "Mkpunando", "Pontoon", "Ngene Ejo", "Okpaiyiri I", "Okpaiyiri II", "Iwunor Square I", "Iwunor Square II",
                    "Umuagama Square", "Mkpunando Pri. School", "Model Pri. Health Center Mkpunando", "Central School II"],

    anambraeast3: ["Akpata Square I", "Akpata Square II", "Umuanevili I", "Umuanevili II", "Umuriabor I", "Umuriabor II",
                    "Akpaiyiagba", "Ogbuoka I", "Ogbuoka II", "New Site I", "New Site II", "Ogboliogbo", "Iyiakama",
                    "Nwanneka Pri. School I", "Nwanneka Pri. School II", "Itilibe Square"],
      
    anambraeast4: ["Chukwuemeka Odumegwu Ojukwu Uni. (Faculty of Art)", "Aguoji Pri. School", "Onede Pri. School", "Ama Ubaru I",
                    "Ama Ubaru II", "Amaeziafor I", "Amaeziafor II", "Amaivite I", "Amaivite II", "Health Center",
                    "Amanasa Pri. School I", "Amanasa Pri. School II", "Community Sec. School", "Ogwugwuoda", 
                    "Chukwuemeka Odumegwu Ojukwu Uni. (School Auditorium)", "Anakwem VilLage Hall", "Chukwuemeka Odumegwu Ojukwu Uni. (Law Auditorium)"],

    anambraeast5: ["Amansokwa Square", "Ikenga Pri. School", "Ndafemmili Square I", "Ndafemmili Square II", "Ezeora Pri. School",
                    "Abube Uno Pri. School I", "Abube Uno Pri. School II", "Amaigwe Pub. Square", "Amaenuiyi Square I", "Amaenuiyi Square II"],

    anambraeast6: ["Enugu Agu Pub. Square", "Amuko Pub. Square I", "Amuko Pub. Square II", "Amaoweleoka Pub. Square I",
                    "Amaoweleoka Pub. Square II", "Amaibeto Square I", "Amaibeto Square II", "Amabegwu Square I", "Amabegwu Square II",
                    "Ifite Market Square I", "Ifite Market Square II", "Ifite Pri. School I", "Ifite Pri. School II"],

    anambraeast7: ["Ubarunaisioye Pub. Square", "Central School I", "Central School II", "Ama Ochiana I", "Ama Ochiana II",
                    "Ama Agwena I", "Ama Agwena II", "Umuasiogu I", "Umuasiogu II", "Nkwo Market Square I", "Nkwo Market Square II",
                    "Ezinando Pri. School I", "Ezinando Pri. School II", "Achala Ogu Square", "Ama Ajana Square", "Amaisioye Square",
                    "Obu Ajana Square", "Ama Ogu Square"],

    anambraeast8: ["Community Pri. School", "Ogwari Square", "Ilo Abba C.P.S", "Isinyi (Agbalagbo)", "Social Club", "Ilo Amagu Square",
                    "Ilo Aba", "Offia Nta", "Nsugbe Civic Center", "Ilo Akpalagu", "Nsugbe Civic Center", "Ilo Akpalagu", "Ilo Umuakosiam"],

    anambraeast9: ["Ilo Nnadi Square I", "Development Pri. School", "College of Education I", "College of Education II",
                    "Ilo Nnadi Pri. School", "Otakwu Square", "College of Education III", "Udoka Estate I", "Udoka Estate II",
                    "Obelemili Estate ", "Security Ayulu Estate Phase I", "Ossy Drive Njikoka", "Sunshine Estate", "Egwuatu Estate",
                    "Egbunike", "Bishop Junction Otakwu", "Promise Land Estate"],

    anambraeast10: ["Ugwundiuka I", "Ugwundiuka II", "Umundeze Village Hall", "Eri Pri. School I", "Eri Pri. School II",
                    "St. Jude Pri. School I", "St. Jude Pri. School II", "Premier Pri. School I", "Premier Pri. School II",
                    "Ngene Okpo Square I", "Ngene Okpo Square II", "Okpaekwe Square I", "Okpaekwe Square II", "Odene Enugu Square", 
                    "Achukenyi Square I", "Achukenyi Square II", "Fr. Joseph Mem. High School Ugwundiuka", "St. Michael Tansi Mem. High School Ugwundiuka",
                    "St. Joseph Nur. Pri. School", "Ugwu Augustine Ogwuiyi", "Ogbe Hausa Old John Holt", "General Post Office Etiti",
                    "Ama Igwe Pub. Square", "Manya Junction"],

    anambraeast11: ["Ovuakwu Pri. School I", "Ovuakwu Pri. School II", "Madonna Sec. School", "Umuleri Pub. Square I", "Umuleri Pub. Square II",
                    "Oche Pri. School I", "Oche Pri. School II", "Umuleri Town Hall", "Our Lady's Pri. School I", "Our Lady's Pri. School II",
                    "Udeabor Public Square", "Christ Disciples Church", "Udeabor Umuriam Umuleri", "Shell Road Square I", "Shell Road Square II",
                    "Agwu Akor Pri. School"],

    anambraeast12: ["Obinetiti Pri.School", "Ama Ugwume Square", "Umuleri Girls", "Umuinu Village Hall", "Ama Umunagu Square",
                    "Unity Primary School", "Ama Mgbago Square", "Ama Iruakpu", "Amukwa Square", "Umuriam Pub. Square", "Oye Mgbago",
                    "Iruagu Umudiani"],

    anambraeast13: ["Akwete Pub. Square I", "Akwete Pub. Square II", "Community Dev. Pri. School", "Umunnagwa Square", "Mmanoma Village Hall Nneyi",
                    "Enuobodo Central School", "Ama Iruagu", "Ama Irube Urudibia", "Ama Umuokpu", "St. Kevins Ogbu", "Udoka Pri. School",
                    "Igwebuike Pri. School", "Ama Mgbede"],

    anambraeast14: ["Unity Pri. School I", "Unity Pri. School II", "St. Augustine I", "St. Augustine II", "Unity South Wing I", "Unity South Wing II",
                    "Iruani Square I", "Iruani Square II", "Akor Square I", "Akor Square II", "Anizor Ameke Square I", "Anizor Ameke Square II",
                    "Akpagba Square I", "Akpagba Square II", "Morba Omenwa Square I", "Morba Omenwa Square II", "Anekwe Okoye Square I", "Anekwe Okoye Square II",
                    "Central School I", "Central School II", "Mmeh Hall I", "Mmeh Hall II", "Okpagba West I", "Okpagba West II"],
    
    anambrawest0: ["Umualor Umudora Square", "Umunta Square", "Community Pri. School Abitor", " Square I", "Umunwenta Square II",
                    "Onono Central School I", "Mbator Square", "Umuagwu Square I", "Umuagwu Square II", "Obinetiti Square", "Aniata Town Hall",
                    "Adum Nwata Town Hall", "Umuogwu Square", "Umuene", "Umuawo Umuabidi", "Umualajiego", "Umuegwu Sqaure", "Umuti Ejesiem", 
                    "Ani Achalla Square", "Onono Central School II", "Umualor Village Hall Ezi Aanm"],

    anambrawest1: ["Umuogbueviagu I", "Umuogbueviagu II", "Umuchira Umuabanike Square", "Umuwaoma Irukwesili", "Umuotikpo Umuezeozo Square",
                    "Umuebonwoke Square", "Umukpulia Umuezenwobodo", "Umuobuuchi Umunjonwa", "Umuekwo Umuive Square", "Umukwa Square", "Umuawa", 
                    "Umuchegbuo Umuaga", "Umualogu Square", "Umuotivi", "Umuodimegwu I", "Umuodimegwu II", "Isiocha Pub. Square I",
                    "Isiocha Pub. Square II", "Abor Health Center", "Umudeze Town Hall"],

    anambrawest2: ["Echa Village Square", "Edeama Village Square", "Edeafor Village Square", "Urubi Village Square", "Okpeliba Village Square",
                    "Edikwala", "Etakolo", "Utaba", "Community Pri. School Nzam", "Iregwu Town Hall", "Island Pri. School Ogoene", "Obodo Village Square",
                    "Agbaja Village Square", "Odoitamoka Village Square", "Agbagba Camp", "Community Sec. School"],

    anambrawest3: ["Community Pri. School Odeh", "Odomagu Town Hall", "Aniocha Town Hall", "Community Pri. School Igbokenyi I",
                    "Community Pri. School Igbedor I", "Community Pri. School Igbedor II", "Community Pri. School Odekpe I", "Uwadiale Square Igbedor",
                    "Abor Farm Settlement", "Odeh Town Hall", "Igbokenyi Public Square", "Adakagu", "Community Pri. School Odekpe II",
                    "Community Pri. School Igbokenyi II", "Community Pri. School Igbedor II", "Aniocha New Hall Odeh", "Onugwu Town Hall Odekpe",
                    "Ajagu Migrant Fisherman Pri. School"],

    anambrawest4: ["Owekke Town Hall", "Innoma Town Hall", "Ukwalla Town Hall", "Allah Public Square I", "Onugwa Public Square",
                    "Obanugbo Public Square I", "Ukwalla Public Square I", "Edepu Village Square", "Omadelu Public Square",
                    "Ichalla Allah", "New Town Hall Innoma", "Owelle Public Square II", "Ukwalla Public Square II", "Allah Public Square II"],

    anambrawest5: ["Umuoje Town Hall", "Umunzi Town Hall", "Umuorom Public Square", "Umuoranya Public Square", "Ndiobi",
                    "Umuosodi", "Umuche", "Umuomelim Pri. School", "Hope Rising Pri. School", "Asawa Farm Camp", "Abor Village Square",
                    "Iyikpo", "Ikuno", "Abor Village Square I", "Abor Village Square II", "Akpurayi Umuche Public Square"],

    anambrawest6: ["Amachara Village Square", "Amachara Pri. School", "Umutom Obodo Otu", "Umuotom Town Hall", "Nkwo Owali Square",
                    "Umuotom Village Square", "Nkwoji Square", "Obele Ukpo Square I", "Obele Ukpo Square II", "Ilo Oba Okwo Square",
                    "Amaokpalusi Square", "Nneme Square"],

    anambrawest7: ["",
                    ""],

    anambrawest8: ["",
                    ""],

    anambrawest9: ["",
                    ""],

  });

  const selectLga = (e) => {
    setWhichDiv("ward");
    let eachWard = e.target.id.split("~");
    setWhichWard(eachWard[0]);

    let wardName = eachWard[1].toLowerCase().replace(" ", "");
    setTheWard(wardName);
  }

  const selectWard = (e) => {
    setWhichDiv("poll");
    setWhichPoll(e.target.id);
  }

  const goBack = () => {
    if (whichDiv === "poll") {
      setWhichDiv("ward");
    }
    else if (whichDiv === "ward") {
      setWhichDiv("poLga");
    }
  }


  return (
    <div className='relative'>
      <h2 className='my-10 bg-red-800 text-white w-fit p-2'>Filter By  Polling Unit</h2>

      <button onClick={goBack} className='bg-black cursor-pointer py-2 px-5 rounded-sm absolute top-0 right-0 mr-3 text-white'>Back</button>

      {whichDiv === "poLga" ?
        //By LGA
        <div id='poLga'>
          <div className='pollDiv flex flex-row flex-wrap gap-8'>
            {lga.map((data, dataIndex) => {
              return (
                <section onClick={selectLga} key={dataIndex} id={"lg_" + dataIndex + "~" + data} className="cursor-pointer pollCard rounded-md py-5 px-10 border-1">
                  {data}
                </section>
              );
            })}
          </div>
        </div>
      :
        whichDiv === "ward" ?
            //By Ward
            <div id="wardLga">
                <div id={"ward_"+whichWard} className='pollDiv flex flex-row flex-wrap gap-8'>
                  {allWard[theWard].map((data, dataIndex) => {
                    return (
                      <section onClick={selectWard} key={dataIndex} id={theWard + dataIndex} className="cursor-pointer pollCard rounded-md py-5 px-10 border-1">
                        {data}
                      </section>
                    );
                  })}
                </div>
            </div>
        :
              whichDiv === "poll" ?
              //By Poll Units
                <div id="pollData" className='pollDiv flex flex-row flex-wrap gap-8'>
                  {pollArray[whichPoll].map((data, dataIndex) => {
                    return (
                      <section key={dataIndex} id={"aguata_" + dataIndex} className="cursor-pointer pollCard rounded-md py-5 px-10 border-1">
                        {data}
                      </section>
                    );
                  })}
                </div>
              :
                <></>

      }

      
    </div>
  )
}

export default Poll
