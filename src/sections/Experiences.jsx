import myLaptop from '../assets/mylaptop.jpg';

const Experiences = () => {
  return (
    <section id='experience' className="section">
      <div className="box-row lg:flex-row-reverse">
        <div className="bento-box p-0 h-[180px] md:h-[230px] lg:w-[300px] lg:h-auto overflow-hidden relative">
            <div className='image-hover'>
              <p className='text-white text-sm flex gap-2 items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7 stroke-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
              </svg>
              Photo of my laptop taken by me
              </p>
            </div>
          <img className='object-cover w-full' src={myLaptop} alt="JL's Laptop Photo" />
        </div>
        <div className='bento-box items-center justify-center flex-col lg:flex-1'>
          <div className='w-fit flex flex-col'>
            <h2 className=' text-[2rem] leading-none mb-8'>
              Work <span className='highlight'> Experience</span>
            </h2>
            <div className='w-full flex flex-col gap-12 max-w-[650px]'>
              <div className='work-1 w-full'>
                <span className='text-[0.6875rem] text-primary-orange inline-block mb-2'>June 2020 - June 2021</span>
                <div className='flex mb-4 items-end gap-4'>
                  <h5 className='font-semibold text-2xl text-white leading-none'>Programmer</h5>
                  <span className='text-xs font-medium text-slate-gray'>@ Osomnimedia Web Design Studio</span>
                </div>
                <p className=' font-medium'>
                  Assigned to build web applications to help improve company work flow's efficiency. Build and maintain websites the company handles.
                </p>
              </div>
              <div className='work-2 w-full'>
                <span className='text-[0.6875rem] text-primary-orange inline-block mb-2'>June 2020 - June 2021</span>
                <div className='flex mb-4 items-end gap-4'>
                  <h5 className='font-semibold text-2xl text-white leading-none'>Intern Web App Developer</h5>
                  <span className='text-xs text-slate-gray'>@ Departmen Of Justice Davao City </span>
                </div>
                <p className=' font-medium'>
                  Developed a web application that handles department's inquest and investigation records thru CRUD method and save records to a database.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experiences