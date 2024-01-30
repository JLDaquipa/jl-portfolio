import Nav from './components/Nav';
import Hero from './sections/Hero';

function App() {
  return (
    <>
      <header className='max-container px-6 lg:px-20 pt-6 mb-6'>
        <Nav />
      </header>
      <main className='max-container px-6 lg:px-20 mb-6 flex flex-col gap-24'>
        <Hero />
      </main>
    </>
  )
}

export default App
