import React from 'react';

import Logo from '../assets/logo.png';
const Header = () => {
  return(
    <header className= 'py-8'>
      <div className= 'container mx-auto'>
        <div className='flex justify-between items-center'>
          
          <a href='https://www.figma.com/@shivangisingh3'>
            <img src= {Logo} alt= '' />
          </a>
          <button className='btn btn-sm'>Resume</button>
              </div>
      </div>
    </header>
  );
};

export default Header;




