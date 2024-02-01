import panels from '../../assets/icons/panels.svg';
import WorkCard from './WorkCard';
import { jobHuntly_thumbnail, nikeNewArrival_thumbnail } from '../../assets/works';

const Works = () => {

  const works = [
    {
      workId: "1",
      title: "JobhHuntly",
      thumbnail: jobHuntly_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    },
    {
      workId: "2",
      title: "Nike New Arrival",
      thumbnail: nikeNewArrival_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    },
    {
      workId: "2",
      title: "Nike New Arrival",
      thumbnail: nikeNewArrival_thumbnail,
      links:{
        repo: "#",
        live: "#",
      }
    }
  ]

  return (
    <section className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

        <div className='bento-box flex-col gap-7 justify-end'>
          <div className='w-full flex flex-1 justify-center items-center py-6'>
            <img src={panels} />
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
            />
          ))
        }
      </div>
    </section>
  )
}

export default Works