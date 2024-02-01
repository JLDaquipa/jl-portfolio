import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';

const WorkCard = ({workId, thumbnail, title, links}) => {
  return (
    <div className='bento-box flex-col gap-7 justify-end'>
      <div className='w-full rounded-lg overflow-hidden h-[250px] md:h-[350px]'>
        <img src={thumbnail} className="h-full w-full object-cover object-center" />
      </div>
      <h3 className='text-center text-3xl text-white leading-none'>
        {title}
      </h3>
      <div className='flex gap-8 justify-center'>
        <a className='flex gap-2 font-semibold' href="#">
          <img src={globe} alt="" />
          Repo
        </a>
        <a className='flex gap-2 font-semibold' href="#">
          <img src={mergeIcon} alt="" />
          Live
        </a>
      </div>
    </div>
  )
}

export default WorkCard