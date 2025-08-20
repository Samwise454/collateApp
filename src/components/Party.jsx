import React, { useState, useEffect } from 'react';

const General = () => {
  const [whichDiv, setWhichDiv] = useState("poLga");

  const [whichParty, setWhichParty] = useState([
    "All Progressive Grand Alliance", "Action Alliance", "African Action Congress",
    "African Democratic Congress", "All Progressive Congress",
    "Accord", "Action People's Party", 
    "Allied Peoples Movement", "Boot Party", "Labour Party",
    "New Nigeria People's Party", "National Rescue Movement",
    "People's Democratic Party", "Social Democratic Party",
    "Young Progressive Party", "Zenith Labour Party"
  ]);

  const [partyAcronym, setPartyAcronym] = useState([
    "APGA", "AA", "AAC", "ADC", "APC", "A", "APM", "APP", 
    "BP", "LP", "NNPP", "NRM", "PDP", "SDP", "YPP", "ZLP"
  ]);


  return (
    <div className='partyDiv'>
        {partyAcronym.map((data, dataIndex) => {
          return (
            <section key={dataIndex} className='barDiv flex align-center justify-center flex-wrap flex-col'>
              <div className="bar w-4 mt-2 bg-blue-600 rounded-t-md ml-2">
                
              </div>

              <div className="pLogo w-8 h-auto -mt-2 ">
                <img src={"/party/p"+dataIndex+".jpeg"} id={"p"+dataIndex} className='cursor-pointer rounded-sm h-8 w-10' alt="Party logo" />

                <p className='text-center text-sm'>{partyAcronym[dataIndex]}</p>
              </div>
            </section>
          );
        })}
    </div>
  )
}

export default General
