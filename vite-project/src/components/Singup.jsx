import React from 'react'
import '../index.js'

const Singup = () => {
  return (
    <>
    <div data-aos="zoom-in-up" className='bg-orange-600 m-auto text-center  h-screen items-center justify-center'>
        <h1 className='text-white font-bold text-2xl shadow-white shadow-lg'>Welcome Avav Academy</h1>
    <form action="" className='mt-7'>
        {/* <label htmlFor="" className='text-white'>Insert Name</label> */}
      <input type="text"placeholder='User Name' required className='mt-8 px-[100px] rounded-md shadow-md shadow-white hover:border-2 outline-none p-2 '/><br />
      {/* <label className='text-white'>Your Address</label> */}
      <input type="text" placeholder='Email or Phone' required className='mt-8 px-[100px] rounded-md outline-none p-2 shadow-md shadow-white hover:border-2 ' /> <br /> 
      {/* <label htmlFor="" className='text-white'>Password</label><br /> */}
      <input type="password"placeholder='********' required id='password'  className='mt-8 px-[100px] ml-4 rounded-md outline-none p-2 shadow-md hover:border-2 shadow-white'/>
      <input type="checkbox" id='showHide' className='p-2 -translate-x-4' /> <br /> <br /><br />

      <input type="submit" placeholder='Send' className='bg-white
       text-orange-600 font-bold px-[100px] p-1 rounded-full outline-none hover:bg-orange-600 hover:text-white hover:border-2 mt-9' />
    </form>
  </div>
    
    </>
  )
}

export default Singup