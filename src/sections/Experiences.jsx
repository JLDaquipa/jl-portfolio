import myLaptop from '../assets/mylaptop.jpg';

const Experiences = () => {
  return (
    <section className="section">
      <div className="box-row lg:flex-row-reverse">
        <div className="bento-box p-0 h-[180px] md:h-[230px] lg:w-[300px] lg:h-auto overflow-hidden">
          <img className='object-cover w-full' src={myLaptop} alt="JL's Laptop Photo" />
        </div>
        <div className='bento-box items-center justify-center flex-col lg:flex-1'>
          <div className='w-fit flex flex-col'>
            <h2 className=' text-[2rem] leading-none mb-8'>
              Work <span className='highlight'> Experience</span>
            </h2>
            <div className='w-full flex flex-col gap-12 max-w-[600px]'>
              <div className='work-1 w-full'>
                <span className='text-[0.6875rem] text-primary-orange'>June 2020 - June 2021</span>
                <div className='lg:flex mb-4 items-end gap-4'>
                  <h5 className='font-semibold text-2xl text-white leading-none'>Programmer</h5>
                  <span className='text-[0.625rem] font-medium text-slate-gray'>@ Osomnimedia Web Design Studio</span>
                </div>
                <p className='text-[0.8125rem] font-medium'>
                  Developed a web application that handles department's inquest and investigation records thru CRUD method and save records to a database.
                </p>
              </div>
              <div className='work-2 w-full'>
                <span className='text-[0.6875rem] text-primary-orange'>June 2020 - June 2021</span>
                <div className='lg:flex mb-4 items-end gap-4'>
                  <h5 className='font-semibold text-2xl text-white leading-none'>Web App Developer</h5>
                  <span className='text-[0.625rem] text-slate-gray'>@ Departmen Of Justice Davao City </span>
                </div>
                <p className='text-[0.8125rem] font-medium'>
                  Assigned to build web applications to help improve company work flow's efficiency. Build and maintain websites the company handles.
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