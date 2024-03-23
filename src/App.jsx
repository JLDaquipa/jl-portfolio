import Nav from './components/Nav';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills/Skills';
import Experiences from './sections/Experiences';
import Works from './sections/Works/Works';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Splitter from './components/Splitter';

function App() {
  return (
    <>
      <header className='max-container px-6 pt-6 mb-6 sticky top-0 bg-primary-black z-10'>
        <Nav />
      </header>
      <main className='max-container px-6  mb-6 flex flex-col gap-20 '>
        {/* <Splitter /> */}
        <div className='flex flex-col gap-3'>
        <Hero />
        <About />
        {/* <Experiences /> */}
        <Skills />
        <Works />
        </div>
        {/* <Splitter /> */}
        {/* <Splitter /> */}
        <Contact />
        <Splitter />
        <Footer />
      </main>
    </>
  )
}

export default App
