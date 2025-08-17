import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className='navMenu p-3 relative'>
      <section>
        <Link to="/"><img src="/an_logo.jpeg" alt="Page Logo" className='w-16 rounded-full'/></Link>
      </section>

      <section className='text-center text-2xl'>
        COLLATOR
      </section>

      <section className='text-center'>
        <button className='menuBtn cursor-pointer bg-gray-100 rounded-full py-5 px-2'>
          <span className='menuSpan text-black bg-white rounded-full py-4 px-2'>
            Menu
          </span>
        </button>
      </section>
    </div>
  )
}

export default Nav
