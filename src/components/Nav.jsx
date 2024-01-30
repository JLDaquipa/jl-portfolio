import jlLogo from '../assets/jl-logo.svg';
import hamburger from '../assets/icons/hamburger.svg'
import Button from './Button';

const Nav = () => {
  return (
    <nav className='w-full py-4 flex'>
      <img className="cursor-pointer mr-auto" src={jlLogo} alt="JL Logo" />
      <img className="cursor-pointer sm:hidden" src={hamburger} />
      <table className='mr-14 hidden sm:flex'>
        <tbody>
        <tr className='h-full flex items-center gap-9'>
          <td className='nav-item'>
            Home
          </td>
          <td className='nav-item'>
            About
          </td>
          <td className='nav-item'>
            Work
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