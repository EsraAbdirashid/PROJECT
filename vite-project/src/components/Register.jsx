import React from 'react'

const Register = () => {
  return (
    <>
  <div className='bg-orange-600 box-border w-[450px] h-[450px] rounded-lg m-auto p-3'>
    <form action="">

      <input type="text"placeholder='First Name' required className='mt-4 px-20 rounded-md'/><br /> <br />
      <input type="text"placeholder='Middle Name' required className='mt-4 px-20 rounded-md  ' /> <br /> <br />
      <input type="text" placeholder='Last Name' required className='mt-4 px-20 rounded-md' /> <br /> <br />
      <input type="text"placeholder='Phone number or Email' required  className='mt-4 px-20 rounded-md'/> <br /> <br />
       
       <select name="" id="">
        <option value="Female">Female</option>        
        <option value="Male">Male</option>        
        
       </select> 
       <select name="" id="" className='mx-[100px]'>
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


      <input type="submit" placeholder='submit' className='bg-white text-orange-600 font-bold px-4 p-1 rounded-lg translate-x-32 mt-12' />
    </form>
  </div>
    
    </>
  )
}

export default Register