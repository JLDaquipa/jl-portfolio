import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills/Skills';
import Experiences from './sections/Experiences';
import Works from './sections/Works/Works';
import Contact from './sections/Contact';

function App() {
  return (
    <>
      <header className='max-container px-6  pt-6 mb-6'>
        <Nav />
      </header>
      <main className='max-container px-6  mb-6 flex flex-col gap-3'>
        <Hero />
        <About />
        <Skills />
        <Experiences />
        <Works />
        <Contact />
      </main>
    </>
  )
}

export default App
