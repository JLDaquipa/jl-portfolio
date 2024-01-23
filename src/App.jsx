import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import { useEffect, useRef, useState } from "react";

const App = () => {

  const [currentSection, setCurrentSection] = useState("home");
  const ref = useRef();
  const homeSectionRef = useRef();
  const workSectionRef = useRef();

  useEffect(() => {
    function onScroll() {
      const homeSectionTop = homeSectionRef.current.offsetTop;
      const workSectionTop = workSectionRef.current.offsetTop;
      const parentTop = ref.current.scrollTop;
      if(homeSectionTop === parentTop){
        setCurrentSection("home")
      }
      if(workSectionTop === parentTop){
        setCurrentSection("work")
      }
    }
    ref.current.addEventListener("scroll", onScroll);
    return () => ref.current.removeEventListener("scroll", onScroll);
  }, [ref.current])
  

  return (
    <div className="w-screen min-h-[600px] h-svh bg-primary flex">
      <header className="w-fit border-r-[0.5px] border-slate-gray pb-[2.625rem] pt-5">
        <nav className="w-full h-full flex justify-center">
          <Nav currentSection={currentSection} />
        </nav>
      </header>
      <main className="h-full flex-1 overflow-y-auto" ref={ref}>
        <Hero observer={homeSectionRef}/>
        <Work observer={workSectionRef} />
      </main>
    </div>
  )
}

export default App
