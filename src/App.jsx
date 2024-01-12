import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import Work from "./sections/Work";
import Lottie from 'react-lottie';
import animationData from './assets/lotties/curveline-animation-1.json';
import useWindowDimensions from './utilities/UseWindowDimensions';
import { useEffect, useRef, useState } from "react";

const App = () => {
  const { width } = useWindowDimensions();
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const [position, setPosition] = useState();
  const ref = useRef();
  const sectionRef = useRef();

  useEffect(() => {
    function onScroll() {
      const sectionTop = sectionRef.current.offsetTop;
      const parentTop = ref.current.scrollTop;
      setPosition({ sectionTop, parentTop });
    }

    ref.current.addEventListener("scroll", onScroll);
    return () => ref.current.removeEventListener("scroll", onScroll);
  }, [ref.current])

  if(position){
    if(position.sectionTop === position.parentTop){
      console.log("In portfolio section")
    }
  }
  

  return (
    <div className="w-screen min-h-[600px] h-screen  bg-primary flex flex-row-reverse">
      <header className="w-fit border-l-[0.5px] border-slate-gray pb-[2.625rem] pt-5">
        <nav className="w-full h-full flex justify-center">
          <Nav />
        </nav>
      </header>
      <main className="h-full flex-1 grid auto-rows-[100%] overflow-y-auto snap-y snap-mandatory hide-scrollbar" ref={ref}>
        {/* animated background */}
        <div className='flex items-center h-full w-full overflow-hidden absolute'>
          <Lottie 
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={400}
            width={width}
          />
        </div>
        <Hero />
        <Work observer={sectionRef} />
      </main>
    </div>
  )
}

export default App
