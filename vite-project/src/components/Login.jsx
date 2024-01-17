import React from 'react'
import {Routes,Route,Link } from 'react-router-dom'
import For from '../components/For'

const Login = () => {
  return (
    <>
     <div className="LOGIN bg-orange-600 h-screen text-center" data-aos="zoom-in-up">
     <h1 className='text-white font-bold text-2xl shadow-white shadow-lg'>LOGIN USERNAME</h1>
    <input type="text"placeholder='Email or phone' required className=' px-20 rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2 mt-14 '/> <br /> <br />
    <input type="password"placeholder='🗝 *******' required className='px-20 rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2' /> <br /> <br />

        <Link className=' text-white' to='/For'>Forget password</Link> <br /><br /><br /><br />

        <input type="submit"className='bg-white
       text-orange-600 font-bold px-[100px] p-1 rounded-full outline-none hover:bg-orange-600 hover:text-white hover:border-2 mt-9' />
     </div>

        <Routes>
                <Route path='/For' element={<For/>}/>
        </Routes>
    </>

  )
}

export default Login