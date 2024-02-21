/* eslint-disable react/prop-types */
import { vanlife_thumbnail, vanlife_ss1, vanlife_ss2, vanlife_ss3, vanlife_ss4, vanlife_ss5, } from "../../assets/works";
import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';

const Work4 = ({toggleClose}) => {
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
              src={vanlife_thumbnail} 
            />
          </div>
        </div>
        {/* Second Row */}
        <div className='box-row lg:flex-row gap-3'>
          <div className='bento-box justify-center flex-1'>
            <h3 className='text-3xl text-white'>Vanlife</h3>
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
                <p className='font-medium'>Vanlife is a website where explorers and adventurous people can rent out camper vans for their next road trip adventure.</p>
              </div>
              <div className='flex flex-col gap-4 lg:w-2/6'>
                <h5 className='text-primary-orange text-xl font-medium'>Technology:</h5>
                <div className='flex flex-wrap gap-4'>
                  <span className='py-2 px-4 text-sm text-white bg-primary-gray rounded-2xl'>ReactJS</span>
                  <span className='py-2 px-4 text-sm text-white bg-primary-gray rounded-2xl'>Firebase</span>
                </div>
              </div>
            </div>
            <div className='description-row2 flex lg:flex-1'>
              <div className='flex flex-col gap-8'>
                <h5 className='text-primary-orange text-xl font-medium'>Overview:</h5>
                <p className='font-medium'>This is one of the projects we built in Scrimba’s Frontend Career Path course where we are tasked to implement routing, user authentication, and an online database in Reactjs. We used React Router 6 for routing, which we also used for implementing filtering features and adding protected routes on the website. For user authentication and database, we used Cloud Firestore from Firebase.</p>
                <div className="flex mx-auto gap-4">
                  <img className="rounded-lg object-cover w-1/2" src={vanlife_ss1} alt="Vanlife page image" />
                  <img className="rounded-lg object-cover w-1/2" src={vanlife_ss2} alt="Vanlife page image" />
                </div>
                <div className="flex mx-auto gap-4">
                  <img className="rounded-lg object-cover w-1/2" src={vanlife_ss3} alt="Vanlife page image" />
                  <img className="rounded-lg object-cover w-1/2" src={vanlife_ss4} alt="Vanlife page image" />
                </div>
                <img className="rounded-lg mx-auto w-1/2" src={vanlife_ss5} alt="Vanlife page image" />
                <p className='font-medium'>Implementing protected routes and page loaders for the website is a challenging one for me but also a fun one to learn. A lot of reconstruction have been made to the structure of the code just for the implementation but including it feels more polished and adds more quality to the website I built in terms of its performance, user experience, and security.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work4