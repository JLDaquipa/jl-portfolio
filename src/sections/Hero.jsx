import jlPhoto from '../assets/profile-pic.jpg';
import stars from '../assets/stars.svg';

const Hero = () => {

  return (
    <section className="section">
      <div className='box-row md:flex-row'>
        <div className="bento-box flex-col flex-1 gap-7 md:min-w-[465px]">
          <div className='profile rounded-full overflow-hidden w-[5rem] h-[5rem]'>
            <img src={jlPhoto} alt="" className='w-full object-cover'/>
          </div>
          <h1 className='w-full text-3xl lg:text-[2.5rem] font-bold leading-tight max-w-[600px]'>
            Hello, I’m <span className="highlight"> Jay Lloyd</span>, a <span className="highlight ">Front-end</span> Web Developer based in the <span className="highlight"> Philippines</span>
          </h1>
          <a 
            href="#"
            className='text-slate-gray font-semibold text-lg flex items-center gap-4 w-fit leading-none'
          >
            About Me
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.75 7L18 13M18 13L11.75 19M18 13H3" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
        <div className='bento-box flex-col justify-end gap-7 pt-[5rem] md:max-w-[410px]'>
          <p className='font-semibold text-xl'>Driven by a <span className='highlight text-wrap'> deep passion</span> for creating web solutions.</p>
          <a 
            href="#"
            className='text-slate-gray font-semibold text-lg flex items-center gap-4 w-fit leading-none'
          >
            Contact Me
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.75 7L18 13M18 13L11.75 19M18 13H3" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
      <div className='box-row md:flex-row'>
        <div className='box-col flex-col md:w-1/2'>
          {/* Socials Links */}
          <div className='bento-box'>
            <div className='social flex flex-1 justify-center'>
              <svg className="fill-slate-gray cursor-pointer hover:fill-primary-orange smooth-transition" xmlns="http://www.w3.org/2000/svg" width="17" height="32" viewBox="0 0 17 32" fill="none">
                <path d="M11.3333 18.4H15.381L17 12H11.3333V8.8C11.3333 7.15299 11.3333 5.6 14.5714 5.6H17V0.22416C16.4727 0.15496 14.4791 0 12.3742 0C7.97932 0 4.85714 2.65098 4.85714 7.51954V12H0V18.4H4.85714V32H11.3333V18.4Z"/>
              </svg>
            </div>
            <div className='social flex flex-1 justify-center'>
              <svg className="fill-slate-gray cursor-pointer hover:fill-primary-orange smooth-transition" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17 0.5C7.60749 0.5 0 8.07051 0 17.4173C0 24.9033 4.86625 31.2261 11.6237 33.4677C12.4737 33.6157 12.7925 33.1082 12.7925 32.6641C12.7925 32.2623 12.7712 30.9301 12.7712 29.5133C8.49999 30.2957 7.39499 28.4771 7.05499 27.5255C6.86374 27.0391 6.03499 25.5377 5.31249 25.1359C4.7175 24.8187 3.8675 24.0363 5.29125 24.0151C6.62999 23.994 7.58624 25.2416 7.90499 25.7491C9.43499 28.3079 11.8787 27.5889 12.8562 27.1448C13.005 26.0452 13.4512 25.3051 13.94 24.8821C10.1575 24.4592 6.20499 23.0001 6.20499 16.5292C6.20499 14.6894 6.86374 13.1669 7.94749 11.9827C7.77749 11.5597 7.18249 9.82569 8.11749 7.49955C8.11749 7.49955 9.54124 7.05547 12.7925 9.23358C14.1525 8.85294 15.5975 8.66262 17.0425 8.66262C18.4875 8.66262 19.9325 8.85294 21.2925 9.23358C24.5438 7.03433 25.9675 7.49955 25.9675 7.49955C26.9025 9.82569 26.3075 11.5597 26.1375 11.9827C27.2213 13.1669 27.88 14.6683 27.88 16.5292C27.88 23.0212 23.9063 24.4592 20.1238 24.8821C20.74 25.4108 21.2713 26.4258 21.2713 28.0118C21.2713 30.2745 21.25 32.0931 21.25 32.6641C21.25 33.1082 21.5688 33.6369 22.4188 33.4677C29.3386 31.1429 33.9981 24.6855 34 17.4173C34 8.07051 26.3925 0.5 17 0.5Z" />
              </svg>
            </div>
            <div className='social flex flex-1 justify-center'>
              <svg className="fill-slate-gray cursor-pointer hover:fill-primary-orange smooth-transition" xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                <path d="M6.92556 3.94584C6.92492 5.34819 6.06957 6.61014 4.76284 7.13661C3.45611 7.66311 1.95894 7.34899 0.977305 6.3424C-0.00432852 5.33579 -0.274387 3.83772 0.294454 2.55459C0.863312 1.27146 2.15748 0.459488 3.56671 0.50156C5.43844 0.557444 6.92641 2.08324 6.92556 3.94584ZM7.02944 9.93888H0.103968V31.5H7.02944V9.93888ZM17.9717 9.93888H11.0808V31.5H17.9025V20.1855C17.9025 13.8825 26.1611 13.297 26.1611 20.1855V31.5H33V17.8434C33 7.2179 20.7765 7.61399 17.9025 12.832L17.9717 9.93888Z" />
              </svg>
            </div>
          </div>
          {/* Number of projects */}
          <div className='bento-box flex-col gap-7'>
            <div className='w-full flex items-center justify-center gap-1 text-primary-orange py-2'>
              <span className='text-[8rem] font-light leading-none'>5</span>
              <span className='text-[4rem] font-light'>+</span>
            </div>
            <p className='text-xl leading-tight font-semibold'>
              Number of <span className='highlight'> projects</span> developed and eager to build more.
            </p>
            <a 
            href="#"
            className='text-slate-gray font-semibold text-lg flex items-center gap-4 w-fit leading-none'
            >
            Check My Works
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M11.75 7L18 13M18 13L11.75 19M18 13H3" stroke="#666666" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          </div>
        </div>
        <div className='box-col md:w-1/2'>
          <div className='bento-box flex-col gap-7 justify-end'>
            <div className='w-full flex flex-1 justify-center items-center py-4'>
              <img src={stars} width={160} height={160}/>
            </div>
            <h3 className='text-center text-[2rem] leading-none'>
              My <span className='highlight'> Goal</span>
            </h3>
            <p className='text-center font-semibold'>
              Become an effective developer that able to deliver quality works and solutions in the tech industry
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero