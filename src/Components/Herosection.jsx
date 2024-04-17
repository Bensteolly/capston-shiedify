import React from "react";
import '../App.css';
import Heroimage from '../Assets/Rectangle 2791.jpg'


const Herosection = () => {
    return (
        <div className="w-full max-w-[1200px] flex flex-col  sm:flex-row justify-between mx-auto px-3 sm:px-6 lg:px-8">
            <div className="max-w-[578px] mt-8 sm:mt-[233px] sm:h-86">
                <h2 className="font-bold text-4xl sm:text-6xl sm:leading-[69.63px] text-[#17191B]">Never Lose Track Again</h2>
                <p className="font-normal text-left text-lg mt-3">We have all been there. That sinking feeling when you realise your <br />
                    precious device is gone. Wasting time retracking your steps, while<br />
                    desperately hoping for a good samaritan. What if there was <br />
                    a better way?
                </p>
                <button className="primary-button2  mt-8">SECURE YOUR DEVICE</button>
            </div>
            <div className="w-full sm:w-[646px] h-full mb-8 sm:mb-[120px] mt-8 sm:mt-[80px]">
                <img src={Heroimage} alt="workstation" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Herosection