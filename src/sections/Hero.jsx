import Button from '../components/Button';
import { motion } from "framer-motion";
import Lottie from 'react-lottie';
import animationData from '../assets/lotties/curveline-animation-1.json';

// eslint-disable-next-line react/prop-types
const Hero = ({observer}) => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <section className="section relative h-full w-full flex z-10" id='hero' ref={observer}>
        {/* animated background */}
        <div className={`flex items-center h-full w-full overflow-hidden absolute`}>
          <Lottie 
            options={defaultOptions}
            isClickToPauseDisabled={true}
            height={400}
            width={1400}
          />
        </div>
        <div className='self-end z-20 mb-12 ml-12'>
          <div className='flex gap-4 mb-3'>
            <Button className='hover:translate-y-[-2px] transition ease-in-out' type="fill" onClick={()=>{}}>
              VIEW MY WORK
            </Button>
            <Button className='hover:translate-y-[-2px] transition ease-in-out' type="outline" onClick={()=>{}}>
              VIEW MY RESUME
            </Button>
          </div>
          <motion.h1 
            className='text-[4rem] font-bold tracking-[0.12rem] leading-tight'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            JAY LLOYD DAQUIPA
          </motion.h1>
          <p className='font-light text-xl'>A Front-end web developer based in the Philippines</p>
        </div>
    </section>
  )
}

export default Hero