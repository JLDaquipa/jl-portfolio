import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills/Skills';
import Experiences from './sections/Experiences';

function App() {
  return (
    <>
      <header className='max-container px-6 lg:px-20 pt-6 mb-6'>
        <Nav />
      </header>
      <main className='max-container px-6 lg:px-20 mb-6 flex flex-col gap-24 lg:gap-32'>
        <Hero />
        <About />
        <Skills />
        <Experiences />
      </main>
    </>
  )
}

export default App
