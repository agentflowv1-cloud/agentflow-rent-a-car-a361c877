import React from 'react';

function Navbar() {
  return (
    <nav className='flex justify-between items-center py-4 bg-gray-100'>
      <h2 className='text-2xl font-bold'>Logo</h2>
      <ul className='flex items-center space-x-4'>
        <li><a href='#' className='text-lg'>Home</a></li>
        <li><a href='#' className='text-lg'>About</a></li>
        <li><a href='#' className='text-lg'>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;