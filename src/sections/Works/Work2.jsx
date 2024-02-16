/* eslint-disable react/prop-types */
import { docketsystem_thumbnail,docketsystem_cs1,docketsystem_cs3 } from "../../assets/works";
import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';

const Work2 = ({toggleClose}) => {
  return (
    <div className='flex flex-col self-end gap-3 bg-primary-black p-2 pb-0 md:p-8 md:pb-0 w-full lg:w-[80%] max-w-[1260px] max-lg:h-full h-[95%] rounded-t-3xl z-50 '>
      <div className='flex justify-end w-full pt-4 pb-4' >
        <svg onClick={toggleClose} className='w-9 h-9 cursor-pointer hover:fill-primary-orange transition-all ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
      </div>
      <div className='overflow-y-auto hide-scrollbar flex flex-col gap-3'>
        {/* First Row */}
        <div className='box-row'>
          <div className='bento-box p-2 overflow-hidden md:h-[400px] lg:h-[500px]'>
            <img 
              className='w-full object-cover rounded-xl'
              src={docketsystem_thumbnail} 
            />
          </div>
        </div>
        {/* Second Row */}
        <div className='box-row lg:flex-row gap-3'>
          <div className='bento-box justify-center flex-1'>
            <h3 className='text-3xl text-white'>Docket System</h3>
          </div>
          <div className='flex gap-3 justify-center'>
            <div className='bento-box flex-1 justify-center lg:w-fit'>
              <a className='flex gap-2 font-semibold items-center' href="#">
                <img src={mergeIcon} alt="" />
                Repo
              </a>
            </div>
            <div className='bento-box flex-1 justify-center lg:w-fit'>
              <a className='flex gap-3 font-semibold items-center ' href="#">
                <img src={globe} alt="" />
                Live
              </a>
            </div>
          </div>
        </div>
        {/* Third Row */}
        <div className='box-row'>
          <div className='bento-box flex-col gap-12 pb-20 lg:pb-40'>
            <div className='description-row1 flex max-lg:flex-col max-lg:gap-12 gap-20 lg:flex-1'>
              <div className='flex flex-col gap-4 flex-1'>
                <h5 className='text-primary-orange text-xl font-medium'>Description:</h5>
                <p className='font-medium'>Docket System is a web application that helps organize the department's inquest and investigation records through CRUD (Create, Read, Update, and Delete) method and saves records to a local database.</p>
              </div>
              <div className='flex flex-col gap-4 lg:w-2/6'>
                <h5 className='text-primary-orange text-xl font-medium'>Technology:</h5>
                <div className='flex flex-wrap gap-4'>
                  <span className='py-2 px-4 text-sm text-white bg-primary-gray rounded-2xl'>Javascript</span>
                  <span className='py-2 px-4 text-sm text-white bg-primary-gray rounded-2xl'>PHP</span>
                  <span className='py-2 px-4 text-sm text-white bg-primary-gray rounded-2xl'>MySQL</span>
                </div>
              </div>
            </div>
            <div className='description-row2 flex lg:flex-1'>
              <div className='flex flex-col gap-8'>
                <h5 className='text-primary-orange text-xl font-medium'>Overview:</h5>
                <p className='font-medium'>This is our intern project from the Department of Justice Davao. Our team consists of 3 members and I was assigned as one of the team's developers. We are required to build an application that can help the efficiency of the company or the department's workflow.</p>
                <p className='font-medium'>Our team did some research and interviews with the staff of the department. The department handles thousands of inquest and investigation records and mentioned needing help tracking them. For their report, they manually count how many files were handled on a specific date by a prosecutor, and they also manually create a list of inquest and investigation records a prosecutor and an encoder handle.</p>
                <p className='font-medium'>So our team decided to build a web application that handles the department's inquest and investigation records with the CRUD method and saves records to a local database.</p>
                <img src={docketsystem_cs1} alt="Docket system home page image" />
                <img src={docketsystem_cs3} alt="Docket system home page image" />
                <p className='font-medium'>A new thing we learned during the development of the system is a way of converting Excel file data into MySQL tables. We are able to transfer a bulk of data in their Excel files containing updated records of inquests and investigations into the database without inputting everything manually.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work2