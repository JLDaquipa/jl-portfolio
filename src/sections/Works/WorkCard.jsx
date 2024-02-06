import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';

const WorkCard = ({workId,toggleOpen, thumbnail, title, links}) => {
  return (
    <div className='bento-box p-2 pb-7 flex-col gap-7 justify-end'>
      <div 
        className='w-full rounded-2xl rounded-b-none overflow-hidden h-[250px] md:h-[500px] cursor-pointer'
        onClick={toggleOpen}
      >
        <img src={thumbnail} className="h-full w-full object-cover object-center hover:scale-105 transition-all ease-linear" />
      </div>
      <div className='flex gap-12 justify-center'>
        <a className='flex gap-2 font-semibold' href="#">
          <img src={mergeIcon} alt="" />
          Repo
        </a>
        <a className='flex gap-2 font-semibold' href="#">
          <img src={globe} alt="" />
          Live
        </a>
      </div>
    </div>
  )
}

export default WorkCard