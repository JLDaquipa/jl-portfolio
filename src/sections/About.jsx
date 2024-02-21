import jlPhoto from '../assets/profile-pic.jpg'

const About = () => {
  return (
    <section id='about' className="section">
      <div className="box-row md:flex-row">
        <div className="box-col flex-col w-full md:w-[275px] lg:w-[380px]">
          <div className="flex gap-3 md:flex-col">
            <div className="bento-box overflow-hidden p-0 flex-1 relative">
              <div className='image-hover'>
                <p className='text-white text-sm flex gap-1 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"     strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                  Twin Mountain View Resort, Kapatagan
                </p>
              </div>
              <img className='w-full h-[400px] object-cover' src={jlPhoto} alt="JL Photo" />
            </div>
            <div className="bento-box flex-col md:flex-row justify-evenly items-center gap-9">
              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M34 17L25.9861 25.0139L23.9826 23.0103L29.9931 17L23.9826 10.9896L25.9861 8.98613L34 17ZM4.00694 17L10.0173 23.0103L8.01387 25.0139L0 17L8.01387 8.98613L10.0173 10.9896L4.00694 17ZM13.867 29.75H10.8518L20.1331 4.25H23.1482L13.867 29.75Z" fill="#EFAC6D"/>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                <g clipPath="url(#clip0_334_795)">
                  <path d="M26.3523 6.16669C31.4044 6.16669 35.5 10.3081 35.5 15.4167V21.5834C35.5 26.692 31.4044 30.8334 26.3523 30.8334H11.1061C6.05392 30.8334 1.95834 26.692 1.95834 21.5834V15.4167C1.95834 10.3081 6.05392 6.16669 11.1061 6.16669H26.3523ZM26.3523 9.25002H11.1061C7.84003 9.25002 5.17365 11.8461 5.01506 15.1089L5.00759 15.4167V21.5834C5.00759 24.8859 7.575 27.5821 10.8017 27.7425L11.1061 27.75H26.3523C29.6183 27.75 32.2847 25.1539 32.4433 21.8911L32.4508 21.5834V15.4167C32.4508 12.1141 29.8833 9.41794 26.6566 9.25757L26.3523 9.25002ZM15.6799 13.875V16.9584H18.7292V20.0417H15.6784L15.6799 23.125H12.6307L12.6292 20.0417H9.58145V16.9584H12.6307V13.875H15.6799ZM27.8769 20.0417V23.125H24.8277V20.0417H27.8769ZM24.8277 13.875V16.9584H21.7784V13.875H24.8277Z" fill="#EFAC6D"/>
                </g>
                <defs>
                  <clipPath id="clip0_334_795">
                    <rect width="35" height="37" fill="white" transform="translate(0.5)"/>
                  </clipPath>
                </defs>
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M23.8333 19.5V7.5H9.24999V19.5C9.24999 21.1569 10.5558 22.5 12.1667 22.5H20.9167C22.5275 22.5 23.8333 21.1569 23.8333 19.5ZM7.79166 4.5H29.6667C31.2775 4.5 32.5833 5.84314 32.5833 7.5V12C32.5833 13.6569 31.2775 15 29.6667 15H26.75V19.5C26.75 22.8137 24.1383 25.5 20.9167 25.5H12.1667C8.94499 25.5 6.33332 22.8137 6.33332 19.5V6C6.33332 5.17158 6.98625 4.5 7.79166 4.5ZM26.75 7.5V12H29.6667V7.5H26.75ZM3.41666 28.5H29.6667V31.5H3.41666V28.5Z" fill="#EFAC6D"/>
              </svg>
            </div>
          </div>
        </div>

        <div className='box-col flex-1'>
          <div className='bento-box flex-1 justify-center items-center'>
            <div>
              <h2 className='text-[2rem] leading-none mb-8'>
                About <span className='highlight'> Me</span>
              </h2>
              <p className='font-semibold lg:max-w-[550px]'>
                I started my commitment on becoming a web developer back when I decided to take an online course on <a className="text-link" href="https://scrimba.com/" target='_blank' rel="noreferrer">Scrimba</a>. That time I found myself enjoying building web applications and learning new technologies in which sparks my passion greatly in web development.
              </p>
              <br />
              <p className='font-semibold lg:max-w-[550px]'>
                I’m currently helping out in our family business but while I’m at it, I continue in spending days and nights improving my skills and knowledge. Building small to big projects to test and hone new technologies I learned. You can check my git repositories at <a className="text-link" href="https://github.com/JLDaquipa" target='_blank' rel="noreferrer">Github</a> to see what projects I’m working on.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About