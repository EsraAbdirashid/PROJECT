import React from 'react'
import {Routes,Route,Link } from 'react-router-dom'
import For from '../components/For'
import Regester from '../components/Regester'

const Login = () => {
  return (
    <>
     <div className="LOGIN bg-orange-600 h-screen text-center" data-aos="zoom-in-up">
     <h1 className='text-white font-bold text-2xl shadow-white shadow-lg'>LOGIN USERNAME</h1>

     <h2 className='text-white font-extrabold mt-10'>LOGIN</h2>
    <input type="text"placeholder='Email or phone ' required className='mt-9 px-20 rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2 '/>
    <i class='bx bxs-user -translate-x-7 text-orange-600'></i> <br /> <br />
    <input type="password"placeholder='*******' required className='px-20 rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2' /> 
    <i class='bx bx-lock-alt -translate-x-7 text-orange-600'></i>
    
    <br /> <br />

          
         <div className="te flex text-center justify-center space-x-[90px]">
         <div className="r-translate-x-8">
          <input type="checkbox" />  
           <a href="#" className='text-white'>Remember Me</a>
          </div>
        <Link className=' text-white' to='/For'>Forget password ?</Link> <br /><br /><br />

         </div>
          <form action="">
                <input type="submit" className='px-[120px] text-white font-bold hover:bg-white hover:text-orange-600  border-2 rounded-full p-1 mt-11' />
          </form>

          <p className='text-white mt-4'>Don't have an account <Link to='/Regester' className='text-white font-bold underline'>Register</Link> </p>
     </div>

        <Routes>
                <Route path='/For' element={<For/>}/>
                <Route path='/Regester' element={<Regester/>}/>
                

        </Routes>
    </>

  )
}

export default Login