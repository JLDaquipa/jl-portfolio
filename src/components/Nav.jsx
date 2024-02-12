import jlLogo from '../assets/jl-logo.svg';
import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button';
import SideBar from './SideBar';
import { useState } from 'react';

const Nav = () => {
  const [openSidebar,setOpenSidebar] = useState(false);

  const handleOpen = () => {
    setOpenSidebar(true)
  }

  const handleClose = () => {
    setOpenSidebar(false)
  }

  return (
    <nav className='w-full py-4 flex'>
      <img className="cursor-pointer mr-auto" src={jlLogo} alt="JL Logo" />
      <img className="cursor-pointer sm:hidden" src={hamburger} onClick={handleOpen} />
      <SideBar className={openSidebar ? "sidebar-active":"sidebar-inactive"} close={handleClose} />
      <table className='mr-14 hidden sm:flex'>
        <tbody>
        <tr className='h-full flex items-center gap-9'>
          <td className='nav-item'>
          <a href="#about">
              About
            </a>
          </td>
          <td className='nav-item'>
            <a href="#works">
              Works
            </a>
          </td>
          <td className='nav-item'>
            <a href="#contact">
              Contact
            </a>
          </td>
        </tr>
        </tbody>
      </table>
      <Button className="hidden sm:flex">
        Download CV
      </Button>
    </nav>
  )
}

export default Nav