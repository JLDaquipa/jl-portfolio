import Button from '../components/Button';
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/curveline-animation-1.json';
import useWindowDimensions from '../utilities/UseWindowDimensions';

// eslint-disable-next-line react/prop-types
const Hero = ({observer}) => {

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
    <section className="section relative h-full w-full flex z-10 justify-center items-center" id='hero' ref={observer}>
        <div className='z-20 mx-12 text-center'>
          <motion.h1 
            className='text-[4rem] font-bold tracking-[0.12rem] leading-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            JAY LLOYD DAQUIPA
          </motion.h1>
          <p className='font-light text-xl mb-5'>A Front-end web developer based in the Philippines</p>
          <div className='flex gap-6 justify-center'>
            <Button className='hover:translate-y-[-2px] transition ease-in-out' type="fill" onClick={()=>{}}>
              VIEW MY WORK
            </Button>
            <Button className='hover:translate-y-[-2px] transition ease-in-out' type="outline" onClick={()=>{}}>
              VIEW MY RESUME
            </Button>
          </div>
        </div>
        {/* animated background */}
        <div className={`flex items-end h-full w-full overflow-hidden absolute z-10`}>
          <Lottie 
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={300}
            width={width}
          />
        </div>
    </section>
  )
}

export default Hero