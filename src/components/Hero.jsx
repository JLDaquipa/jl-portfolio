import Lottie from 'react-lottie';
import animationData from '../assets/lotties/curveline-animation-1.json';
import useWindowDimensions from '../utilities/UseWindowDimensions';

const Hero = () => {
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
    <section id="section-id" className="w-full h-full">
      <div className='flex items-center h-full' >
        <Lottie 
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={400}
          width={width - 80}
        />
      </div>
      
    </section>
  )
}

export default Hero