import React from 'react'
import Register from '../components/Register'
  import {Routes,Route,Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>
       <div className="Home flex max-md:flex-col-reverse max-md:mt-9  opacity-100 translate-y-30 justify-between bg-pink-100 h-screen items-center p-4 " data-aos="zoom-in-up" >
    <div className="">
      <h1 className='text-4xl  font-bold'>Lessons and insights</h1>
      <h2 className='text-orange-600  mt-3 font-bold text-6xl'>from recent years</h2>
      <p className='text-gray-500 text-2xl mt-3'>where to grow Business as a photographer:site or social media?</p> <br /> <br />

     <Link to='/Register' className=' px-7 bg-orange-600 transition duration-500 text-white font-bold p-1  rounded-lg hover:bg-orange-400 '>Register</Link>
     
    </div>
    <div className="img">
      <img src="./public/pic2now.avif" className='w-[500px] h-[400px] my-2 rounded-md' alt="" />
    </div>

    </div>

    <Routes>
      <Route path='/Register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default Logo