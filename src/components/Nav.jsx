import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

const Nav = () => {
  const [menuBtn, setMenuBtn] = useState("");
  const [menuState, setMenuState] = useState("");

  const toggleMenu = () => {
    let menuDiv = document.querySelector(".menuContainer");

    if (menuState === "") {
      menuDiv.style.display = "flex";
      setMenuState("true");
      setMenuBtn("true");
    }
    else if (menuState === "true") {
      setMenuState("false");
      setMenuBtn("false");
      setTimeout(() => {
        menuDiv.style.display = "none";
      }, [500])
    }
    else if (menuState === "false") {
      menuDiv.style.display = "flex";
      setMenuState("true");
      setMenuBtn("true");
    }
  }

  return (
    <div className='navMenu p-3 relative'>
      <section>
        <Link to="/"><img src="/an_logo.jpeg" alt="Page Logo" className='w-16 rounded-full'/></Link>
      </section>

      <section className='text-center text-2xl'>
        COLLATION DASHBOARD
      </section>

      <section className='text-center relative'>
        {menuBtn === "" ?
          <button onClick={toggleMenu} className='animate__animated animate__fadeIn menuBtn cursor-pointer bg-gray-100 rounded-full py-5 px-2'>
            <span className='menuSpan text-black bg-white rounded-full py-4 px-2'>
              Open Menu
            </span>
          </button>
        :
          menuBtn === "true" ?
            <button onClick={toggleMenu} className='animate__animated animate__fadeInLeft menuBtn cursor-pointer bg-gray-100 rounded-full py-5 px-2'>
              <span className='menuSpan text-black bg-white rounded-full py-4 px-2'>
                Close Menu
              </span>
            </button>
          :
            <button onClick={toggleMenu} className='animate__animated animate__fadeInRight menuBtn cursor-pointer bg-gray-100 rounded-full py-5 px-2'>
              <span className='menuSpan text-black bg-white rounded-full py-4 px-2'>
                Open Menu
              </span>
            </button>
        }

        {menuState === "" ?
          <ul className="menuContainer absolute top-0 right-0 hidden h-150 mt-17 rounded-sm px-10 py-8 bg-gray-100 shadow-sm">
              <li className='shadow-sm mb-1'>Contact Developer</li>
              <li className='shadow-sm mb-1 bg-gray-50'>Agent Status</li>
              <li className='shadow-sm'>Statistics</li>
          </ul>
        :
          menuState === "false" ?
            <ul className="menuContainer animate__animated animate__backOutDown absolute w-full top-0 right-0 h-150 mt-17 rounded-sm px-10 py-8 bg-gray-100 shadow-sm">
                <li className='shadow-sm mb-1'>Contact Developer</li>
                <li className='shadow-sm mb-1 bg-gray-50'>Agent Status</li>
                <li className='shadow-sm'>Statistics</li>
            </ul>
          :
            <ul className="menuContainer animate__animated animate__backInDown absolute top-0 right-0 w-full h-150 mt-17 rounded-sm px-10 py-8 bg-gray-100 shadow-sm">
                <li className='shadow-sm mb-1'>Contact Developer</li>
                <li className='shadow-sm mb-1 bg-gray-50'>Agent Status</li>
                <li className='shadow-sm'>Statistics</li>
            </ul>
        }
      </section>
    </div>
  )
}

export default Nav
