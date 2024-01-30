import jlLogo from './assets/jl-logo.svg';
import hamburger from './assets/icons/hamburger.svg'
import Hero from './sections/Hero';

function App() {
  return (
    <>
      <header className='max-container px-6 pt-6 mb-6'>
        <nav className='w-full py-4 flex justify-between'>
          <img className="cursor-pointer" src={jlLogo} alt="JL Logo" />
          <img className="cursor-pointer" src={hamburger} />
        </nav>
      </header>
      <main className='max-container px-6 flex flex-col gap-24'>
        <Hero />
      </main>
    </>
  )
}

export default App
