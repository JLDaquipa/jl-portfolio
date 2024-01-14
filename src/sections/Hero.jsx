import Button from '../components/Button';
import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Hero = ({observer}) => {
  return (
    <section className="section relative h-full w-full flex p-[2.625rem] z-10" id='hero' ref={observer}>
        <div className='self-end z-20'>
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