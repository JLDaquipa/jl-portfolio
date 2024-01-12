import jobhunltyFullPage from "../assets/works/jobhuntly-full.png";
import nikeNewArrivalFullPage from "../assets/works/nike-new-arrivals-full.png";


// eslint-disable-next-line react/prop-types
const Work = ({observer}) => {
  
  return (
    <section className="section relative flex h-full w-full p-[2.625rem] z-10" id='hero' ref={observer}>
        <div className="flex absolute left-0 right-0 mt-10 mx-auto w-fit gap-4 text-base font-light transition-all ease-in-out">
          <span className="cursor-pointer text-primary-yellow scale-105">Web Development</span>
          <div className=" bg-slate-gray w-[1px]"></div>
          <span className="cursor-pointer">Graphic Design</span>
        </div>
        <div className="w-full self-center flex gap-12 justify-center select-none">  
          {/* Jobhuntly */}
          <div className="work-card flex flex-col">
            <div className="content w-full mb-4">
              <div className="thumbnail-placeholder mb-5 overflow-hidden">
                <img
                  className="transition-all ease-linear hover:duration-[25s] relative hover:translate-y-[-75rem]"
                  src={jobhunltyFullPage} 
                  alt="jobhuntly thumbnail" 
                />
              </div>
              <h3 className="uppercase text-3xl leading-none mb-4 font-semibold">
                JOBHUNTLY
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet cubilia facilisi elementum ipsum. Letius eget magnis penatibus conubia nibh leo suspendisse sem volutpat vivamus faucibus.
              </p>
            </div>
            <div className="card-footer w-full flex gap-8 mt-auto">
              <a href="#" target="_blank" className="text-xs font-semibold text-slate-gray tracking-wide hover:text-primary-yellow cursor-pointer transition-all ease-in-out">GITHUB</a>
              <a href="#" target="_blank" className="text-xs font-semibold text-slate-gray tracking-wide hover:text-primary-yellow cursor-pointer transition-all ease-in-out">LIVE DEMO</a>
            </div>
          </div>
          {/* Nike */}
          <div className="work-card flex flex-col">
            <div className="content w-full mb-4">
              <div className="thumbnail-placeholder mb-5 overflow-hidden">
                <img
                  className="transition-all ease-linear hover:duration-[25s] relative hover:translate-y-[-75rem]"
                  src={nikeNewArrivalFullPage} 
                  alt="jobhuntly thumbnail" 
                />
              </div>
              <h3 className="uppercase text-3xl leading-none mb-4 font-semibold">
                NIKE NEW ARRIVAL
              </h3>
              <p className="">
                Lorem ipsum dolor sit amet cubilia facilisi elementum ipsum.
              </p>
            </div>
            <div className="card-footer w-full flex gap-8 mt-auto">
              <a href="#" target="_blank" className="text-xs font-semibold text-slate-gray tracking-wide hover:text-primary-yellow cursor-pointer transition-all ease-in-out">GITHUB</a>
              <a href="#" target="_blank" className="text-xs font-semibold text-slate-gray tracking-wide hover:text-primary-yellow cursor-pointer transition-all ease-in-out">LIVE DEMO</a>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Work;