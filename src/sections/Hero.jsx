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
    <section className="section relative h-full w-full flex" id='hero' ref={observer}>
        <div className='w-[60%] z-20 flex flex-col justify-center items-start px-24'>
          <span className='font-squarepeg text-[3rem] leading-none  text-primary-yellow'>Hello, I'm</span>
          <motion.h1 
            className='text-[3rem] font-bold tracking-[0.12rem] my-3 leading-none'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
           JAY LLOYD DAQUIPA
          </motion.h1>
          <p className='font-light mb-6'>A Front-end web developer based in the Philippines. Eager to collaborate with you on your web projects and bring your ideas to life.</p>
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
        <div className={`w-[40%] relative overflow-hidden flex z-10`}>
              
        </div>
    </section>
  )
}

export default Hero