import React from 'react'

const For = () => {
  return (
    <>
    <div className="for bg-orange-600 h-screen text-center" data-aos="zoom-in-up">

        <h1 className='text-white font-bold text-2xl shadow-white shadow-lg'>FORGET PASSWORD</h1>
        <form className='mt-16'>
              <label className='text-white mt-9'>Inter your phone</label> <br />
              <input type="text"placeholder='+251' className=' px-20 rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2  ' required /><br /> <br /> <br />
          
          <input type="submit" placeholder='submit'className='bg-white
                 text-orange-600 font-bold px-[100px] p-1 rounded-full outline-none hover:bg-orange-600 hover:text-white hover:border-2 mt-16' />        
        </form>
    </div>
    </>
  )
}

export default For