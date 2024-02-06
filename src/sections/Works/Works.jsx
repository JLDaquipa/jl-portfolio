import panels from '../../assets/icons/panels.svg';
import WorkCard from './WorkCard';
import Modal from '../../components/Modal';
import { jobHuntly_thumbnail, nikeNewArrival_thumbnail } from '../../assets/works';
import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';
import { useEffect, useState } from 'react';

const Works = () => {

  const works = [
    {
      workId: 1,
      title: "JobhHuntly",
      thumbnail: jobHuntly_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    },
    {
      workId: 2,
      title: "Nike New Arrival",
      thumbnail: nikeNewArrival_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    },
    {
      workId: 3,
      title: "Nike New Arrival",
      thumbnail: nikeNewArrival_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    }
  ]

  const [openWork, setOpenWork] = useState(0)

  const toggleOpen = (id) => {
    setOpenWork(id)
  }

  const toggleClose = () => {
    setOpenWork(0)
  }

  useEffect(()=> {
      document.body.style.overflowY = openWork > 0 ? "hidden":"scroll";
  },[openWork])

  return (
    <section id='works' className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

        <div className='bento-box flex-col gap-7 justify-end'>
          <div className='w-full flex flex-1 justify-center items-center py-6'>
            <img src={panels} width={300}/>
          </div>
          <h3 className='text-center text-[2rem] leading-none'>
            My <span className='highlight'> Portfolio</span>
          </h3>
        </div>
        {
          works.map((work) => (
            <WorkCard
              key={work.workId}
              title={work.title}
              thumbnail={work.thumbnail}
              links={work.links}
              toggleOpen={() => toggleOpen(work.workId)}
            />
          ))
        }
      </div>
      <Modal className={openWork === 1 ? "modal-active" : "opacity-0 invisible translate-y-16"} clickOutside={toggleClose}>
        <div className='flex flex-col self-end gap-3 bg-primary-black p-2 md:p-8 w-full lg:w-[80%] max-w-[1260px] h-full z-50 '>
          <div className='flex justify-end w-full mb-5' >
            <svg onClick={toggleClose} className='w-9 h-9 cursor-pointer hover:fill-primary-orange transition-all ease-in-out' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
          </div>
          <div className='overflow-y-auto hide-scrollbar flex flex-col gap-3'>
            {/* First Row */}
            <div className='box-row'>
              <div className='bento-box p-2 overflow-hidden md:h-[400px] lg:h-[500px]'>
                <img 
                  className='w-full object-cover rounded-xl'
                  src={nikeNewArrival_thumbnail} 
                />
              </div>
            </div>
            {/* Second Row */}
            <div className='box-row lg:flex-row gap-3'>
              <div className='bento-box justify-center flex-1'>
                <h3 className='text-3xl text-white'>Nike New Arrival</h3>
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
              <div className='bento-box max-lg:flex-col gap-12 pb-20 lg:pb-40'>
                <div className='description-col1 flex flex-col gap-12 lg:flex-1'>
                  <div className='flex flex-col gap-4'>
                    <h5 className='text-primary-orange text-xl font-medium'>Description:</h5>
                    <p className='font-medium'>Lorem ipsum dolor sit amet pede rhoncus id quis adipiscing bibendum efficitur. Lectus maximus suspendisse curae ut morbi scelerisque aptent urna praesent.</p>
                  </div>
                  <div className='flex flex-col gap-4'>
                    <h5 className='text-primary-orange text-xl font-medium'>Technology:</h5>
                    <div className='flex flex-wrap gap-4'>
                      <span className='py-2 px-4 text-white bg-primary-gray rounded-2xl'>ReactJs</span>
                      <span className='py-2 px-4 text-white bg-primary-gray rounded-2xl'>Tailwind</span>
                    </div>
                  </div>
                </div>
                <div className='description-col2 flex lg:flex-1'>
                  <div className='flex flex-col gap-4'>
                    <h5 className='text-primary-orange text-xl font-medium'>Overview:</h5>
                    <p className='font-medium'>Lorem ipsum dolor sit amet pede rhoncus id quis adipiscing bibendum efficitur. Lectus maximus suspendisse curae ut morbi scelerisque aptent urna praesent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  )
}

export default Works