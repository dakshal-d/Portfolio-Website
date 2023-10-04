import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  const name="<Dakshal-d/>"

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-indigo-700'><a href='/'>{name}</a></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 hover:text-indigo-700'><a href='/#about'>About</a></li>
        <li className='p-4 hover:text-indigo-700'><a href='/#Projects'>Projects</a></li>
        <li className='p-4 hover:text-indigo-700'><a href='/#Contact'>Contact</a></li>
        <li className='p-4 hover:text-indigo-700'><a href='https://drive.google.com/file/d/1QNCYMk8IvbTXnTMVX0K_Ftv_iBqs0vBm/view?usp=drive_link'>Resume</a></li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-indigo-700 m-4'>{name}</h1>
          <li className='p-4 border-b border-gray-600'><a href='/#about'>About</a></li>
          <li className='p-4 border-b border-gray-600'><a href='/#Projects'>Projects</a></li>
          <li className='p-4 border-b border-gray-600'><a href='/#Contact'>Contact</a></li>
          <li className='p-4 border-b border-gray-600'><a href='https://drive.google.com/file/d/1QNCYMk8IvbTXnTMVX0K_Ftv_iBqs0vBm/view?usp=drive_link'>Resume</a></li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;