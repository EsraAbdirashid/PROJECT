import React, { useState } from 'react'
import {Routes,Route,Link} from 'react-router-dom'
import Home from './components/Home'
import Service from './components/Service'
import About from './components/About'
import Product from './components/Product'
import FAQ from './components/FAQ'
import Register from './components/Register'
import Logo from './components/Logo'
import Singup from './components/Singup'
import Login from './components/Login'
import For from './components/For'






const App = () => {

   return (
    <>
    
    <div className="project max-md:-mt-[100px] max-md:bg-pink-100">
      
      <div className="header flex gap-6 justify-between m-4 max-md:flex-col">
  
        <Link to='/Logo'>  <img src="./public/logo3.png" className='w-[75px] h-[65px] max-md:translate-y-32 ' alt="" /></Link>
    

        <nav id='drop' className=' -top-full max-md:flex max-md:flex-col max-md:gap-6 items-center flex gap-8'>

          <ul className='flex gap-6 translate-x-[70px] items-center  font-bold font-serif max-md:flex-col'>

            <li className='hover:text-orange-700 transition duration-500 hover:bg-white bg-orange-600 rounded-lg text-white px-4'>
              <Link to= '/Home'>Home</Link>
            </li>

            <li className='hover:text-orange-600 hover:bg-white  transition duration-500  bg-orange-600 rounded-lg text-white px-4'>
              <Link to= '/Service'>Service</Link>
            </li>

            <li className='hover:text-orange-600 hover:bg-white  transition duration-500 bg-orange-600 rounded-lg text-white px-4 '>
              <Link to= '/About'>About</Link>
            </li>

            <li className='hover:text-orange-600 hover:bg-white  transition duration-500 bg-orange-600 rounded-lg text-white px-4'>
              <Link to= '/Product'>Product</Link>
            </li>
            
            <li className='hover:text-orange-600 hover:bg-white  transition duration-500 bg-orange-600 rounded-lg text-white px-4'>
              <Link to= '/FAQ'>FAQ</Link>
            </li>

          </ul>
        </nav>
        <div className="buttons space-x-4 flex items-center max-md:flex-col max-md:gap-6 -translate-x-11">
       <Link to='/Login' className='bg-white hover:font-bold  transition duration-500 text-orange-600 border-2 hover:bg-orange-500 hover:border-white hover:text-white hover:border-2 border-orange-600 font-bold px-7 rounded-full'>Lgin</Link>
       <Link to='/Singup' className='bg-white hover:font-bold  transition duration-500 text-orange-600 border-2 hover:bg-orange-500 hover:border-white hover:text-white hover:border-2 border-orange-600 font-bold px-7 rounded-full'>signUp</Link>
        </div>

      
<div className="toggle lg:hidden">
<i class='bx bx-menu' ></i>

</div>
        

      </div>
      
    </div>

    
    <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Service' element={<Service/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Product' element={<Product/>}/>
      <Route path='/FAQ' element={<FAQ/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Logo' element={<Logo/>}/>
     <Route path='/Singup' element={<Singup />}/>
     <Route path='/Login' element={<Login/>}/>
     <Route path='/For' element={<For/>}/>
     
    </Routes>
    
    </>
  )
}

export default App