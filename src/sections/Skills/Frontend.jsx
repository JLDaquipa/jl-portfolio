import checkStar from '../../assets/icons/check.svg';

const Frontend = () => {
  return (
    <div className="bento-box flex-col items-center md:flex-1">
      <h4 className="font-semibold text-center text-2xl text-white mb-11">
        Frontend
      </h4>
      <div className="w-full  max-w-[330px] flex justify-around gap-2">
        <div className="col-1 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>HTML</span>
              <span className='text-sm'>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>CSS</span>
              <span className='text-sm'>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>Javascript</span>
              <span className='text-sm'>Advanced</span>
            </div>
          </div>
        </div>
        
        <div className="col-2 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>ReactJs</span>
              <span className='text-sm'>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>Tailwind</span>
              <span className='text-sm'>Intermediate</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>Figma</span>
              <span className='text-sm'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend