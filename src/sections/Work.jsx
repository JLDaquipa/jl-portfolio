
const Work = () => {
  return (
    <section className="section relative flex h-full w-full p-[2.625rem] z-10" id='hero'>
        <div className="flex absolute left-0 right-0 mt-10 mx-auto w-fit gap-4 text-base font-light transition-all ease-in-out">
          <span className="cursor-pointer text-primary-yellow scale-105">Web Development</span>
          <div className=" bg-slate-gray w-[1px]"></div>
          <span className="cursor-pointer">Graphic Design</span>
        </div>
        <div className="w-full self-center">
          <div className="work-card w-[28.5rem] border-thin border-slate-gray bg-secondary rounded-xl p-4 transition-all ease-in-out hover:border-primary-yellow">
            <div className="thumbnail-placeholder mb-4">
            </div>
            <h3 className="uppercase text-3xl leading-none mb-4 font-semibold">
              JOBHUNTLY
            </h3>
            <p className="">
              Lorem ipsum dolor sit amet cubilia facilisi elementum ipsum. Letius eget magnis penatibus conubia nibh leo suspendisse sem volutpat vivamus faucibus.
            </p>
          </div>
        </div>
    </section>
  )
}

export default Work;