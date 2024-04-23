import React from "react";
import Phone from "../Assets/Rectangle.png";
import AppleStore from "../Assets/App Store.png";
import PlayStore from "../Assets/Google Play.jpg";
import { Link } from "react-router-dom";

const Appdownload = () => {
    return (
        <div className="w-full max-w-[1270px] mx-5 sm:mx-auto flex flex-col sm:flex-row h-[637px] mt-[100px] border-solid  border-[#B3BCD5] border-2 rounded-2xl my-11">
    <div className="hidden sm:block flex-grow">
        <img src={Phone} alt="phone-1" className="w-full h-full object-cover"></img>
    </div>
    <div className="flex justify-center items-center w-full sm:w-[646px] h-[203px] py-[180px] mt-12 sm:mx-6 ">
        <div className="text-center">
            <h1 className="font-bold text-[52px] leading-[58.58px] text-[background: #17191B;] mt-10">Secure Your Devices</h1>
            <p className="py-4">Take the first step towards device security</p>
            <div className="flex justify-center gap-4 px-3">
                <Link to="https://apps.apple.com/us/app/your-app-name/id1234567890" target="_blank" rel="noopener noreferrer"><button><img src={AppleStore} alt="Apple-store" /></button></Link>
                <Link to="https://play.google.com/store/apps/details?id=com.example.android" target="_blank" rel="noopener noreferrer"></Link><button><img src={PlayStore} alt="Play-store" /></button>
            </div>
        </div>
    </div>
</div>
   
    )   
}

export default Appdownload