import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Board from "../Assets/Rectangle 2793.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight} from '@fortawesome/free-solid-svg-icons'



const Resource = () => {

    return (
        <div>
            <Navbar/>
            <div className="flex gap-2 pt-10 justify-items-start text-[12px]">
                <p className="pl-[150px] ">Resource</p>
                <FontAwesomeIcon icon={faAngleRight} className="mt-1 ml-8"/>
                <p >Awareness Security Training</p>
            </div>
            <div className="text-center"> 
                <h1 className=" text-2xl sm:text-[52px] font-bold pt-10">Welcome to our Shieldfy Awareness Training</h1>
                <p className="text-[14px] justify-center sm:text-[31px] font-normal py-6 sm:mx-4">This brief session will help you learn about important security practices to keep your information safe. 
                    Watch this video to discover key tips and best practices<br/>
                    for protecting your data.</p>
            </div>
            <div>
                <img src={Board} alt="school-board" className="flex items-center mx-auto py-4 sm:py-8"/>
            </div>
            <Footer/>
        </div>
    )
}

export default Resource