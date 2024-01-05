import React from 'react';
import { HiOutlineDocumentText } from "react-icons/hi";
import "./Header.css";

function Header() {
  return (
    <header className='container'>
      <nav>
        <div className='logo'>LOGO</div>
        <ul>
          <li className='active'>Home</li>
          <li>Portfolio</li>
          <li>About</li>
        </ul>
      </nav>
      <div className='resume-btn'><HiOutlineDocumentText /></div>
    </header>
  )
}

export default Header