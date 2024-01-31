import checkStar from '../../assets/icons/check.svg';

const Frontend = () => {
  return (
    <div className="bento-box flex-col items-center md:flex-1">
      <h4 className="font-semibold text-center text-2xl text-white mb-11">
        Frontend
      </h4>
      <div className="w-full  max-w-[330px] flex justify-between gap-2">
        <div className="col-1 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>HTML</span>
              <span>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>CSS</span>
              <span>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>Javascript</span>
              <span>Advanced</span>
            </div>
          </div>
        </div>
        
        <div className="col-2 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>ReactJs</span>
              <span>Advanced</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-xl font-semibold'>Tailwind</span>
              <span>Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Frontend