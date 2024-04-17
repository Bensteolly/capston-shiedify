import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import Questions from "../Components/Question";
import Footer from "./Footer";
import Logo from '../Assets/1 5.png';
import Heroimage from '../Assets/Rectangle 2791.jpg'
import { auth } from "../API/firebase.config";
import { signOut } from "firebase/auth";

const  Home = () => {
  const userSignOut = async () => {
    try{
       await signOut(auth);
       console.log('Log out was successful');
       
    } catch (err) {
       console.err('Error logging out', err)

    }

   }

  return (
    <div>
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
              <button className="text-white bg-[#09122B] w-full max-w-[145px] h-12 rounded-lg p-6 text-base text-center leading-4 font-bold opacity-0" 
              onClick={userSignOut}>LOG OUT</button>
            </Link>

          </div>
        </div>

      </div>
      <div className="w-full max-w-[1200px] flex flex-col  sm:flex-row justify-between mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-[578px] mt-8 sm:mt-[233px] sm:h-86">
                <h2 className="font-bold text-4xl  text-[#17191B]">Welcome, you can never Lose Track Again!</h2>
                <p className="font-normal text-left text-lg mt-3">Be sure we have your device secured. That sinking feeling when you realise your
                    precious device is gone will be no more. No need wasting time retracking your steps, and
                    desperately hoping for a good samaritan. We got you covered! <br />            
                </p>
                <button className="primary-button2 mt-8">SECURE YOUR  DEVICE</button>
            </div>
            <div className="w-full sm:w-[646px] mb-8 sm:mb-[120px] mt-8 sm:mt-[80px]">
                <img src={Heroimage} alt="workstation" className="w-full h-auto" />
            </div>
        </div>
      <Questions/>
      <Footer/>
    </div>
  )
}

export default Home