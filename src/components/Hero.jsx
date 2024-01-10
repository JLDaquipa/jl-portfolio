import Lottie from 'react-lottie';
import animationData from '../assets/lotties/curveline-animation-1.json';
import useWindowDimensions from '../utilities/UseWindowDimensions';
import Button from './Button';

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
    <section className="section relative">
      {/* animated background */}
      <div className='flex items-center h-full absolute z-1'>
        <Lottie 
          options={defaultOptions}
          isClickToPauseDisabled={true}
          height={400}
          width={width - 80}
        />
      </div>
      <div className='h-full w-full flex p-[2.625rem]'>
        <div className='self-end z-20'>
          <Button type="fill" onClick={()=>{}}>
            VIEW MY WORK
          </Button>
          <h1 className='text-[3.5rem] font-bold tracking-[0.12rem] leading-tight'>JAY LLOYD DAQUIPA</h1>
          <p className='font-light text-lg'>A Front-end web developer based in the Philippines</p>
        </div>
      </div>
    </section>
  )
}

export default Hero