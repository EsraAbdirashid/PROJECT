import React from 'react'



const Product = () => {
  return (
    <>
    <div className="P flex  max-md:flex-col-reverse gap-7 bg-orange-50 h-screen p-7 items-center">
       <div className="text">
       <h1 className='text-orange-600 font-bold text-3xl '>How to design your site footer like we did</h1>
        <p className='mt-4 p-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem officia, aperiam  <br />reprehenderit a expedita excepturi similique veritatis soluta doloremque inventore <br /> at iste! Nam quod recusandae et quibusdam nulla assumenda, fugiat neque! Sit nam obcaecati, <br /> dolore molestias pariatur amet delectus. Architecto labore sapiente vitae illum. <br /> Cupiditate quidem magnam id earum deserunt?</p>

      <button className='transition duration-500 bg-orange-600 border-2 px-4 rounded-lg text-white font-bold mt-5 p-1 hover:bg-orange-400'>LearnMore</button>
       </div>
       <div className="img">
        <img src="./public/picture11.jpg" className='w-[550px] rounded-md' alt="" />
       </div>
    </div>
    
    </>
  )
}

export default Product