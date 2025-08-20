import React, { useState, useEffect } from 'react';

const Lga = () => {
  const [whichDiv, setWhichDiv] = useState("poLga");

  // lga array
  const [lga, setLga] = useState([
    "Aguata", "Ayamelum", "Anambra East", "Anambra West", "Anaocha",
    "Awka North", "Awka South", "Dunukofia", "Ekwusigo", "Idemili North",
    "Idemili South", "Ihiala", "Njikoka", "Nnewi North", "Nnewi South", 
    "Ogbaru", "Onitsha North","Onitsha South", "Orumba North", "Orumba South",
    "Oyi"
  ]);

  return (
    <div className='relative'>
      <h2 className='my-10 bg-blue-800 text-white w-fit p-2'>Filter By LGA</h2>

        <div id='poLga'>
          <div className='pollDiv flex flex-row flex-wrap gap-8'>
            {lga.map((data, dataIndex) => {
              return (
                <section key={dataIndex} id={"lg_" + dataIndex} className="pollCard rounded-md py-5 px-10 border-1">
                  {data}
                </section>
              );
            })}
          </div>
        </div>
    </div>
  )
}

export default Lga
