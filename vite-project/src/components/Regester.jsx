import React from 'react'

const Regester = () => {
  return (
    <>
         <div data-aos="zoom-in-left" className='bg-orange-600 m-auto text-center  h-screen items-center justify-center'>
   
   <form>
           <h1 className='text-white font-bold text-2xl shadow-white shadow-lg'>REGISTRAITION FORM</h1>
     <input type="text"placeholder='First Name' required className=' px-[120px] rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2 mt-14'/><br /> 
     <input type="text"placeholder='Middle Name' required className='mt-4  px-[120px] rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2' /> <br /> 
     <input type="text" placeholder='Last Name' required className='mt-4  px-[120px] rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2' /> <br /> 
     <input type="text"placeholder='Phone number or Email' required  className='mt-4  px-[120px] rounded-md outline-none p-2 shadow-white shadow-2xl hover:border-2 '/> <br /> <br />
      
      <select name="" id="" className='px-[175px] rounded-md outline-none p-2 shadow-white shadow-2xl '>
       <option value="Female">Female</option>        
       <option value="Male">Male</option>        
       
      </select> <br /> <br />
      <select name="" id="" className=' px-[135px] rounded-md outline-none p-2 shadow-white shadow-2xl '>
       <option value="Cctv camera"> Cctv camera</option>
       <option value="Networking">Networking</option>
       <option value="Database"> Database</option>
       <option value="Fullstack"> Fulstack</option>
       <option value="Mobile Unlock">Mobile Unlock</option>
       <option value="Computer Unlock">Computer Unlock</option>
       <option value="">custom</option>        
       <option value="Vedio Editing">edio Editing</option>
       <option value="Quick Booj">Quick Book</option>
       <option value="Adobe Photoshop">Adobe Photoshop</option>
      </select> <br /> <br />


     <input type="submit" placeholder='submit' className=' border-2
      text-white font-bold px-[150px] p-1 rounded-full outline-none hover:bg-orange-600 hover:text-white hover:border-2' />
   </form>
  
 </div>
    </>
  )
}

export default Regester