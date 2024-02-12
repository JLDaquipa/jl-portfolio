/* eslint-disable react/prop-types */
import userIcon from '../assets/icons/user-line.svg';
import briefcaseIcon from '../assets/icons/briefcase-line.svg';
import phoneIcon from '../assets/icons/phone-line.svg';
import Button from './Button';

const SideBar = ({className,close}) => {
  return (
    <>
      <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full bg-black bg-opacity-50 backdrop-blur-sm ${className} translate-x-0 z-30`}></div>
      <div className={`fixed top-0 left-0 bottom-0 right-0  z-50 flex justify-end items-center ${className}`}>
        {/* Outside click container */}
        <div className={`fixed top-0 left-0 bottom-0 right-0 w-full h-full ${className} translate-x-0 z-40`} onClick={close}></div>

        <div className="sidebar-items h-full w-72 bg-primary-black flex flex-col px-4 py-6">
          <a className='sidebar-item' href='#about' onClick={close}>
            <img src={userIcon} width={25} />
            About
          </a>
          <a className='sidebar-item' href='#works' onClick={close}>
            <img src={briefcaseIcon} width={25} />
            Works
          </a>
          <a className='sidebar-item' href='#contact' onClick={close}>
            <img src={phoneIcon} width={25} />
            Contact
          </a>
          <Button className="w-full z-50 mt-6 mx-auto">
            Download CV
          </Button>
        </div>
      </div>
    </>
  )
}

export default SideBar