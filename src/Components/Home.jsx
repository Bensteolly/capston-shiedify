import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import Questions from "../Components/Question";
import Footer from "./Footer";
import Heroimage from '../Assets/Rectangle 2791.jpg';
import Logo from '../Assets/1 5.png';
import { auth } from "../API/firebase.config";
import { signOut } from "firebase/auth";

const Home = () => {
  const userSignOut = async () => {
    try {
      await signOut(auth);
      console.log('Log out was successful');

    } catch (err) {
      console.err('Error logging out', err)

    };

  }

  return (
    <div>
      <div className=" w-full px-4 sm:px-3 lg:px-3 py-3   ">
        <div className="flex sm:flex-row justify-between items-center w-full max-w-[1200px] mx-auto p-2">
          <div className="w-[40%] h-[40%]">
            <img src={Logo} alt="Shiedify logo" className="h-12 w-12 object-cover" />
          </div>
          <ul className="lg:flex hidden sm: gap-4 mt-4 sm:mt-0">
            <li>Features</li>
            <li>Pricing</li>
            <li>Help center</li>
          </ul>
          <div className="flex items-center gap-4">
            <Link to="../Pages/LoginForm.js">
              <button className='bg-[#09122B] text-white w-full max-w-[145px] h-full max-h-12 rounded-lg p-4 font-bold text-center text-sm my-6 sm:mx-[150px] sm:text-lg'
                onClick={userSignOut}>LOG OUT</button>
            </Link>

          </div>
        </div>
        <div>
          <div className="text-[#09122B] font-extrabold  text-[32px] sm:text-[48px] ml-[100px]">SHIELDIFY</div>
        </div>

      </div>
      <div className="w-full max-w-[1200px] flex flex-col  sm:flex-row justify-between mx-auto px-3 sm:px-6 lg:px-8">
        <div className="max-w-[578px] mt-8 sm:mt-[233px] sm:h-86">
          <h2 className="font-bold text-4xl  text-[#17191B]">Welcome, you can never Lose Track Again!</h2>
          <p className="font-normal text-left text-lg mt-3">Be sure we have your device secured. That sinking feeling when you realise your
            precious device is gone will be no more. No need wasting time retracking your steps, and
            desperately hoping for a good samaritan. We got you covered! <br />
          </p>
          <button className="bg-[#09122B] text-center text-white w-full max-w-[240px] h-full max-h-12 rounded-lg font-bold text-lg mt-7 p-4">SECURE YOUR  DEVICE</button>
        </div>
        <div className="w-full sm:w-[646px] mb-8 sm:mb-[120px] mt-8 sm:mt-[80px]">
          <img src={Heroimage} alt="workstation" className="w-full h-auto" />
        </div>
      </div>
      <Questions />
      <Footer />
    </div>
  )
}

export default Home