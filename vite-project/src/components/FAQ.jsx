import React from 'react'

const FAQ = () => {
  return (
    <>
    <div className="F items-center bg-gray-100 h-screen" data-aos="zoom-in-up">
        <div className="text text-center">
                <h1 className='text-orange-600 text-3xl font-bold'>Caring is the new marketing</h1>
                <p className='mt-4'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus vero numquam delectus voluptas? <br /> Voluptatem fuga, asperiores, quo quam dolorum modi similique fugit cupiditate laboriosam eveniet unde, <br /> fugiat hic nostrum excepturi.
                </p>
        </div>


        <div className="boxes items-center max-md:flex-wrap max-md:h-full m-auto justify-center text-center flex gap-7 mt-7">
                <div className="box1  hover:animate-bounce ">
         <img src="./public/box1.jfif" className='border-2 rounded-lg w-[300px] h-[200px]' alt="" />
                <div className=' -translate-y-9 translate-x-4 bg-orange-600 text-white border shadow-lg shadow-orange-400 w-[250px] h-[150px] rounded-lg hover:animate-bounce'>
                  <h1 className=' font-bold  '>Creating streamlined  safeguarding  processes <br /> with Oneren
                        </h1>
                      
                        <h5 className='text-white mt-7 font-semibold inline-block'>Meet all customers 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg></h5>
                  </div>
                </div>


                {/* box2 */}

                <div className="box2  hover:animate-bounce ">
         <img src="./public/box2.jfif" className='border-2 rounded-lg w-[300px] h-[200px]' alt="" />
                        <div className=' w-[250px] rounded-lg -translate-y-11 translate-x-4 h-[150px] bg-orange-600 text-white border shadow-lg shadow-orange-400'>
                        <h1 className='  font-bold  '>What are your safeguarding <br 
                        />responesibility and how can <br /> you manage them?</h1>
                      <h5 className='text-white mt-7 font-semibold inline-block'>Meet all customers 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</h5>
                        </div>
                        
                </div>
      

      {/* box3 */}
                <div className="box3  hover:animate-bounce ">
         <img src="./public/box3.jfif" className='border-2 rounded-lg w-[300px] h-[200px]' alt="" />
                        <div className='translate-x-4 bg-orange-600 text-white shadow-lg shadow-orange-400 border w-[250px] h-[150px] -translate-y-9  rounded-lg'>
                        <h1 className=' font-bold  '>  Revamping the membership <br />
                        model with Triathion Australia
                        </h1>
                        <h5>
                        <h5 className='text-white mt-9 font-semibold inline-block'>Meet all customers 
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 inline-block text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
</svg>
</h5>
                 
                        </h5>
                        </div>
                        
                </div>
        </div>
    </div>
    </>
  )
}

export default FAQ