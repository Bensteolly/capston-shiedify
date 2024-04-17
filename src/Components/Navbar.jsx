import React from "react";
import Logo from '../Assets/1 5.png';
import { Link } from 'react-router-dom';



const Navbar = () =>{
    return(
      <div className=" w-full px-4 sm:px-3 lg:px-3 py-3   ">
      <div className="flex sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto p-2 ">
        <div 
        className="w-[12%] h-[12%]"><img src={Logo} alt="Shieldfy-logo" className="w-full h-full object-cover sm:w-[40%] sm:h-[40%]" /></div>
        
        <ul className="lg:flex hidden sm: gap-4 mt-4 sm:mt-0">
          <li>Features</li>
          <li>Pricing</li>
          <li>Help center</li>
        </ul>
        <div className="flex items-center gap-4">
          <Link to="../Pages/LoginForm.js">
            <h2 className="text-center mt-3 underline">LOGIN</h2>
          </Link>
          <button className="w-full max-w-[120px] h-full max-h-[48px] bg-[#09122B] text-white rounded-lg p-6 text-base gap-2 font-bold text-center sm:leading-4  opacity-0">GET STARTED</button>
        </div>
      </div>
      
    </div>
    )
}

export default Navbar;
