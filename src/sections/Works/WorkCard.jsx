/* eslint-disable react/prop-types */
import mergeIcon from '../../assets/icons/git-merge.svg';
import globe from '../../assets/icons/globe.svg';

const WorkCard = ({workId,toggleOpen, thumbnail, title, links}) => {
  return (
    <div className='group bento-box p-2 pb-7 flex-col gap-7 justify-end'>
      <div 
        className='w-full rounded-t-2xl overflow-hidden h-full cursor-pointer'
        onClick={toggleOpen}
      >
        <img src={thumbnail} className="h-full w-full object-cover object-center group-hover:scale-105 transition-all ease-linear" />
      </div>
      <div className='flex gap-12 justify-center'>
        <a className='flex gap-2 font-semibold hover:translate-y-[-2px] transition-all ease-linear' href={links.repo} target='_blank' rel="noreferrer">
          <img src={mergeIcon} />
          Repo
        </a>
        {
          links.live !== "#" 
          && 
          <a className='flex gap-2 font-semibold hover:translate-y-[-2px] transition-all ease-linear' href={links.live} target='_blank' rel="noreferrer">
            <img src={globe} />
            Live
          </a>
        }
        
      </div>
    </div>
  )
}

export default WorkCard