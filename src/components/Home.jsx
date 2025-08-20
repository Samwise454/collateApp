import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import Poll from './Poll';
import Ward from './Ward';
import Lga from './Lga';
import Party from './Party';
import Prediction from './Prediction';

const Home = () => {
    const url = 'https://collate.esbatech.org/home.php';

    const [homeKey, setHomKey] = useState("");

    //countdown timer
    // useEffect(() => {
    //     let pageLoader = document.querySelector('#loader3');
    //     pageLoader.style.display = "flex";

    //     if (expire === true) {
    //         navigate("/Expire");
    //     }
    //     else {
    //         let targetDate = new Date("Aug 21, 2025 18:00:00").getTime();

    //         //update the countdown every second 
    //         let update = setInterval(() => {
    //             //today's date 
    //             let now = new Date().getTime();
    //             let distance = targetDate - now;

    //             //time calculations for days, hours, minutes and seconds
    //             let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //             let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //             let mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //             let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //             //push result to state
    //             setDiffTime({
    //                 day: days,
    //                 hour: hours,
    //                 min: mins,
    //                 sec: seconds
    //             });

    //             //disable form when timer runs out
    //             if (distance < 0) {
    //                 clearInterval(update);
    //                 setExpire(true);
    //             }
    //             pageLoader.style.display = "none";
    //         }, 1000);
    //     }
    // }, [expire]);

    const handleData = (e) => {
        let btnKey = e.target.id;
        setHomKey(btnKey);
    }
    
  return (
    <div className='mainForm1 relative'>
      <Nav></Nav>

        <main className='shadow-sm p-1 h-full m-2 bg-white rounded-sm'>
            <div className="sideBar border-r">
                <p className='text-sm text-center mt-4 text-white'>Filter By:</p>

                <section className='sideMenu text-center mt-5 flex flex-col px-2'>
                    <button onClick={handleData} id='punit' className='sideMenuBtn mb-15 cursor-pointer border-2 border-white text-white rounded-full py-4 px-2'>
                        Poll Unit
                    </button>

                    <button onClick={handleData} id='ward' className='sideMenuBtn mb-15 cursor-pointer border-2 border-white text-white rounded-full py-4 px-2'>
                        Wards
                    </button>

                    <button onClick={handleData} id='lgah' className='sideMenuBtn mb-15 cursor-pointer border-2 border-white text-white rounded-full py-4 px-2'>
                        LGA
                    </button>

                    <button onClick={handleData} id='party' className='sideMenuBtn mb-15 cursor-pointer border-2 border-white text-white rounded-full py-4 px-2'>
                        Party
                    </button>

                    <button onClick={handleData} id='pred' className='sideMenuBtn mb-15 cursor-pointer border-2 border-white text-white rounded-full py-4 px-2'>
                        Prediction
                    </button>
                </section>
            </div>

            <div className='mainDisplay'>
                {homeKey === "punit" ?
                    <Poll></Poll>
                :
                    homeKey === "ward" ?
                        <Ward></Ward>
                    :
                        homeKey === "lgah" ?
                            <Lga></Lga>
                        :
                            homeKey === "party" || homeKey === "" ?
                                <Party></Party>
                            :
                                homeKey === "pred" ?
                                    <Prediction></Prediction>
                                :
                                    <></>
                }
            </div>
        </main>

        <Footer></Footer>
    </div>
  )
}

export default Home
