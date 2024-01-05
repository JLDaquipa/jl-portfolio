import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <>
      <div className='container'>
        <Header />
        <main>
          <Hero />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
