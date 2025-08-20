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

    aguata3: ["Akpo Town Hall I", "Akpo Town Hall II", ""],

    aguata4: [],

    aguata5: [],

    aguata6: [],

    aguata7: [],

    aguata8: [],

    aguata9: [],

    aguata10: [],

    aguata11: [],

    aguata12: [],

    aguata13: [],

    aguata14: [],

    aguata15: [],

    aguata16: [],

    aguata17: [],

    aguata18: [],

    aguata19: [],
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
                <section onClick={selectLga} key={dataIndex} id={"lg_" + dataIndex + "~" + data} className="pollCard rounded-md py-5 px-10 border-1">
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
                      <section onClick={selectWard} key={dataIndex} id={theWard + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
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
                      <section key={dataIndex} id={"aguata_" + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
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
