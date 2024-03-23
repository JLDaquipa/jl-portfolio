import jlLogo from '../assets/jl-logo.svg';
import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button';
import SideBar from './SideBar';
import { useState } from 'react';
import Resume from '../assets/jl-resume.pdf';

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
      <a href="/" className='cursor-pointer mr-auto flex items-center'>
        <img src={jlLogo} alt="JL Logo" width={50} height={50}/>
      </a>
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
      <a href={Resume}>
        <Button className="hidden sm:flex">
          Download CV
        </Button>
      </a>
    </nav>
  )
}

export default Nav