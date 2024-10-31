import React from 'react'

const Intro = () => {
  return (
    <div className="max-w-[1380px] mx-auto my-2 py-14 px-7 bg-services bg-cover bg-right bg-no-repeat pb-36">
      <div className="text-customham font-bold pb-6">SERVICES</div>
      <div className="text-4xl md:text-5xl lg:text-6xl max-w-[1050px] ">
        At <span className="text-blue-700">NAXA</span>, we work on <span className="text-blue-700">ideas</span>; ideas that can provide <span className="text-blue-700">simple solutions</span>  to 
        <span className="text-blue-700">  complex problems.</span>
      </div>
      <div className="py-7 text-lg md:text-xl font-semibold max-w-[730px]">
        We work as a team to generate, explore, build and validate ideas. We
        also contextualize innovations around the world to find the best fitting
        solutions to local problems.
      </div>
    </div>
  )
}

export default Intro