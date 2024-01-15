import React from 'react'

const About = () => {
  return (
    <>
    <div className="A flex  max-md:flex-col items-center p-4 gap-32 max-md:gap-10 bg-pink-200 h-screen max-md:h-full">
    <div className="imgg">
        <img src="./public/picnow.avif" className='w-[450px] rounded-md' alt="" />
    </div>
    <div className="text">
        <h1 className='text-4xl text-orange-600 font-bold '>The unseen of spending three <br /> years at pixelgrade</h1>
        <p className=' mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae exercitationem <br />harum repudiandae sequi in praesentium impedit id iste accusantium cumque ad <br /> illum incidunt minima minus, eos molestias distinctio quos! Molestiae.</p>
        <div className="b ">
 <button className='transition duration-500 bg-orange-600 border-2 px-4 rounded-lg text-white font-bold mt-5 p-1 hover:bg-orange-400'>Learn More</button>
    </div>
    </div> 
    </div>
    </>
  )
}

export default About