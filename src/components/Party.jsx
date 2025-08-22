import React, { useState, useEffect } from 'react';
import 'animate.css';

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

  const [partyPercent, setPartyPercent] = useState([
    80, 2, 5, 67, 20, 10, 47, 7, 9, 25, 1, 2, 10, 11, 12, 6 
  ]);

  useEffect(() => {
    let numParty = partyPercent.length;
    for (let i = 0; i < numParty; i++) {
      //looping through the number of parties
      let bar = document.querySelector("#bar_"+i);
      
      bar.style.height = partyPercent[i]+"%"; 
      bar.style.transition = "height 2s ease-in-out";
    }
  }, [partyPercent]);


  return (
    <div>
      <div className="eachParty flex flex-row mt-10 align-center justify-center">
        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5'>
          <div className='text-l'>
            <section className='mb-2 text-center'><span>60%</span></section> 
            
            <section className='mt-2 shadow-sm p-1 animate__animated animate__slideInLeft'>Total Votes: <b>160,000</b></section>
          </div>
        </section>

        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5 bg-gray-100'>
          <div>
            <img src="/party/p0.jpeg" id="logo1" className='cursor-pointer rounded-sm w-10 h-10 mt-1 mr-3' alt="Party logo" />
            <p className='text-sm mt-1'>APGA</p>
          </div>

          <div className='text-l'>
            <section className='mb-2 text-center'><span>70%</span></section> 

            <section className='mt-2 shadow-md p-1 animate__animated animate__slideInDown'>Votes: <b>156,000</b></section>
          </div>
        </section>

        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5'>
          <div>
            <img src="/party/p4.jpeg" id="logo2" className='cursor-pointer rounded-sm w-10 h-10 mt-1 mr-3' alt="Party logo" />
            <p className='text-sm mt-1'>APC</p>
          </div>

          <div className='text-l'>
            <section className='mb-2 text-center'><span>15%</span></section> 
            
            <section className='mt-2 shadow-md p-1 animate__animated animate__slideInDown'>Votes: <b>6,000</b></section>
          </div>
        </section>

        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5 bg-gray-100'>
          <div>
            <img src="/party/p12.jpeg" id="logo3" className='cursor-pointer rounded-sm w-10 h-10 mt-1 mr-3' alt="Party logo" />
            <p className='text-sm mt-1'>PDP</p>
          </div>
          <div className='text-l'>
            <section className='mb-2 text-center'><span>5%</span></section> 
            
            <section className='mt-2 shadow-md p-1 animate__animated animate__slideInDown'>Votes: <b>6,000</b></section>
          </div>
        </section>

        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5'>
          <div>
            <img src="/party/p9.jpeg" id="logo4" className='cursor-pointer rounded-sm w-10 h-10 mt-1 mr-3' alt="Party logo" />
            <p className='text-sm mt-1'>LP</p>
          </div>

          <div className='text-l'>
            <section className='mb-2 text-center'><span>5%</span></section> 
            
            <section className='mt-2 shadow-md p-1 animate__animated animate__slideInDown'>Votes: <b>6,000</b></section>
          </div>
        </section>

        <section className='flex flex-row shadow-md p-2 rounded-sm mr-5 bg-gray-100'>
          <div>
            <img src="/party/p3.jpeg" id="logo5" className='cursor-pointer rounded-sm w-10 h-10 mt-1 mr-3' alt="Party logo" />
            <p className='text-sm mt-1'>ADC</p>
          </div>
          <div className='text-l'>
            <section className='mb-2 text-center'><span>5%</span></section> 
            
            <section className='mt-2 shadow-md p-1 animate__animated animate__slideInDown'>Votes: <b>6,000</b></section>
          </div>
        </section>
      </div>

      <div className='partyDiv'>
          {partyAcronym.map((data, dataIndex) => {
            return (
              <section key={dataIndex} className='barDiv mt-5 flex align-center justify-center flex-wrap flex-col relative'>
                <div id={"bar_"+dataIndex} className="barMain w-full mt-12 bg-blue-600 rounded-t-md ml-1">
                  <div className="barVal absolute top-0 w-full text-center text-sm">
                    {partyPercent[dataIndex]}
                  </div>
                </div>  

                <div className="pLogo w-8 h-auto -mt-2 absolute bottom-0 bg-white">
                  <img src={"/party/p"+dataIndex+".jpeg"} id={"p"+dataIndex} className='cursor-pointer rounded-sm h-8 w-10 border-1' alt="Party logo" />

                  <p className='text-center text-sm mt-2'>{partyAcronym[dataIndex]}</p>
                </div>
              </section>
            );
          })}
      </div>
    </div>
  )
}

export default General
