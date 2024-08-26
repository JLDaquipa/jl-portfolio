import checkStar from '../../assets/icons/check.svg';

const Backend = () => {
  return (
    <div className="bento-box flex-col items-center md:flex-1">
      <h4 className="font-semibold text-center text-2xl text-white mb-11">
        Backend
      </h4>
      <div className="w-full max-w-[330px] flex justify-around gap-4">
        <div className="col-1 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>Supabase</span>
              <span className='text-sm'>Basic</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>NodeJs</span>
              <span className='text-sm'>Basic</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>MySQL</span>
              <span className='text-sm'>Intermediate</span>
            </div>
          </div>
        </div>
        
        <div className="col-2 flex flex-col gap-8">
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>MongoDB</span>
              <span className='text-sm'>Basic</span>
            </div>
          </div>
          {/* Item */}
          <div className='flex items-start gap-2'>
            <img src={checkStar} />
            <div className='flex flex-col gap-2'>
              <span className='text-white text-lg font-semibold'>Express</span>
              <span className='text-sm'>Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Backend