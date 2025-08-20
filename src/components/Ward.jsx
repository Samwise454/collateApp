import React, { useState, useEffect } from 'react';

const Ward = () => {
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
  
    //ward arrays
    const [aguata, setAguata] = useState([
      "Achina I", "Achina II", "Agulueze Chukwu", "Akpo", "Amesi", "Ekwulobia I",
      "Ekwulobia II", "Ezinifite I", "Ezinifite II", "Igboukwu I", "Igboukwu II", 
      "Ikenga", "Isuofia", "Nkpologwu", "Oraeri", "Uga I", "Uga II", "Umuchu I", 
      "Umuchu II", "Umuona"
    ]);

    const selectLga = (e) => {
      setWhichDiv("ward");
      setWhichWard(e.target.id);
    }


    const goBack = () => {
      if (whichDiv === "ward") {
        setWhichDiv("poLga");
      }
    }

  return (
    <div className='relative'>
      <h2 className='my-10 bg-green-800 text-white w-fit p-2'>Filter By Wards</h2>

      <button onClick={goBack} className='bg-black cursor-pointer py-2 px-5 rounded-sm absolute top-0 right-0 mr-3 text-white'>Back</button>

      {whichDiv === "poLga" ?
        //By LGA
        <div id='poLga'>
          <div className='pollDiv flex flex-row flex-wrap gap-8'>
            {lga.map((data, dataIndex) => {
              return (
                <section onClick={selectLga} key={dataIndex} id={"lg_" + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
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
              {/* Aguata */}
              {whichWard === "lg_0" ?
                <div id="ward_aguata" className='pollDiv flex flex-row flex-wrap gap-8'>
                  {aguata.map((data, dataIndex) => {
                    return (
                      <section key={dataIndex} id={"ag" + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
                        {data}
                      </section>
                    );
                  })}
                </div>
              :
                  //Ayamelum
                  whichWard === "lg_1" ?
                    <div id="ward_aguata" className='pollDiv flex flex-row flex-wrap gap-8'>
                      {/* {aguata.map((data, dataIndex) => {
                        return (
                          <section key={dataIndex} id={"aguata_" + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
                            {data}
                          </section>
                        );
                      })} */}
                    </div>
                  :
                    <></>
              }
            </div>
        :
          <></>
      }

      
    </div>
  )
}

export default Ward
