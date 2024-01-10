import Nav from "./components/Nav";
import Hero from "./components/Hero";

const App = () => {
  
  return (
    <div className="w-screen min-h-[800px] h-screen  bg-primary flex flex-row-reverse">
      <header className="w-fit border-l-[0.5px] border-slate-gray pb-[42px] pt-[22px]">
        <nav className="w-full h-full flex justify-center">
          <Nav />
        </nav>
      </header>
      <main className="h-full flex-1">
        <Hero />
      </main>
    </div>
  )
}

export default App
