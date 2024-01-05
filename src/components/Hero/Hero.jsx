import React from 'react';
import { jelly,quantum } from 'ldrs'
import "./Hero.css";

function Hero() {
  jelly.register();
  quantum.register();
  return (
    <section className='section hero__section'>
      <div className='hero__object'>

      </div>
      <div className='hero__text'>
        <div>
          <h1 className='updown-motion'>
            <span className='_web'>WEB <l-quantum size="45" speed="4"  color="black" ></l-quantum></span>
            <span className='_developer'>DEVELOPER</span>
            <span className='_jay'><l-jelly size="50" speed="2"  color="black" clas></l-jelly>JAY</span>
            <span className='_lloyd'>LLOYD</span>
          </h1>
          <div className='buttons updown-motion-buttons'>
              <button className='my-works button'>My Works</button>
              <button className='button'>Download Resume</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero