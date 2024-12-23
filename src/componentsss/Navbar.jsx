import React from 'react'
import profile from '../assets/file.jpg';
import { Link } from 'react-router-dom';
// import profile from '../assets/profile.jpg'
const Navbar = () => {
  return (
    <header
           className="h-20 text-[15px] fixed top-0 left-0 right-0 flex bg-[#18181A] z-[1000]"
         >
           <nav className="px-3.5 flex justify-between items-center  w-full max-w-7xl mx-auto">
          
          {/* div for image and title  */}
          <div className="flex items-center gap-x-3">
                     <img 
                     className='w-20 h-20 rounded-full '
                     src={profile} alt="Error" />
                   <h1 className="text-lg font-semibold text-white">CPU Visualization</h1>
          </div>

               
               {/* for mobmneu i have one signin button and mnobmenu button  */}
               <div className="flex">
                  <Link to='/login'>
                  <button
                     className=" border border-white h-10 items-center  px-5  shadow rounded-xl text-white hover:bg-orange-300 hover:text-black"
                   >
                   Sign-In
                   </button>
                  </Link>
               </div>

       </nav>
    </header>
  )
}

export default Navbar
