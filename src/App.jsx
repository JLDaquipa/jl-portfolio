import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Lottie from 'react-lottie';
import animationData from './assets/lotties/curveline-animation-1.json';
import useWindowDimensions from './utilities/UseWindowDimensions';

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
  return (
    <div className="w-screen min-h-[600px] h-screen  bg-primary flex flex-row-reverse">
      <header className="w-fit border-l-[0.5px] border-slate-gray pb-[42px] pt-[22px]">
        <nav className="w-full h-full flex justify-center">
          <Nav />
        </nav>
      </header>
      <main className="h-full flex-1 grid auto-rows-[100%] overflow-y-auto snap-y snap-mandatory hide-scrollbar">
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
      </main>
    </div>
  )
}

export default App
