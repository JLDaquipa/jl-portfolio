import panels from '../../assets/icons/panels.svg';
import WorkCard from './WorkCard';
import Modal from '../../components/Modal';
import { jobHuntly_thumbnail, docketsystem_thumbnail, nikeNewArrival_thumbnail, vanlife_thumbnail } from '../../assets/works';
import { useEffect, useState } from 'react';
import Work1 from './Work1';
import Work2 from './Work2';
import Work3 from './Work3';
import Work4 from './Work4';

const Works = () => {

  const works = [
    {
      workId: 1,
      title: "JobhHuntly",
      thumbnail: jobHuntly_thumbnail,
      links:{
        repo: "https://github.com/JLDaquipa/jobhuntly-website.git",
        live: "https://jl-daquipa-jobhuntly.netlify.app",
      }
    },
    {
      workId: 3,
      title: "Nike New Arrival",
      thumbnail: nikeNewArrival_thumbnail,
      links:{
        repo: "https://github.com/JLDaquipa/nike-landing-page.git",
        live: "https://nike-new-arrivals-page-23.netlify.app/",
      }
    },
    {
      workId: 2,
      title: "Docket System",
      thumbnail: docketsystem_thumbnail,
      links:{
        repo: "https://github.com/JLDaquipa/docketsystem.git",
        live: "#",
      }
    },
    {
      workId: 4,
      title: "Vanlife",
      thumbnail: vanlife_thumbnail,
      links:{
        repo: "https://github.com/JLDaquipa/vanlife.git",
        live: "https://jl-daquipa-vanlife.netlify.app/",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

        <div className='bento-box flex-col gap-7 justify-end'>
          <div className='w-full flex flex-1 justify-center items-center py-6'>
            <img className="object-cover w-2/3" src={panels}/>
          </div>
          <h3 className='text-center text-[2rem] leading-none'>
            My <span className='highlight'> Works</span>
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
      <Modal className={openWork === 1 ? "modal-active" : "modal-inactive"} clickOutside={toggleClose}>
        <Work1 toggleClose={toggleClose}/>
      </Modal>
      <Modal className={openWork === 2 ? "modal-active" : "modal-inactive"} clickOutside={toggleClose}>
        <Work2 toggleClose={toggleClose}/>
      </Modal>
      <Modal className={openWork === 3 ? "modal-active" : "modal-inactive"} clickOutside={toggleClose}>
        <Work3 toggleClose={toggleClose}/>
      </Modal>
      <Modal className={openWork === 4 ? "modal-active" : "modal-inactive"} clickOutside={toggleClose}>
        <Work4 toggleClose={toggleClose}/>
      </Modal>
      <Modal className={openWork === 5 ? "modal-active" : "modal-inactive"} clickOutside={toggleClose}>
        <Work1 toggleClose={toggleClose}/>
      </Modal>
    </section>
  )
}

export default Works