import React from "react";
import Navbar from "../Components/Navbar";
import Footer  from "../Components/Footer";
import SearchBar from "../Components/Searchbar";
import Questiondcard from "../Components/Questioncard";



const FAQ = () => {
    
    return(
        <div>
            <Navbar/>
            <div className="text-center ">
                <h1 className="font-bold text-3xl sm:text-5xl pt-8 ">Frequently Asked Questions</h1>
                <p className="text-xl sm:text-3xl font-normal"> Do you have a question? We are here to help</p>
            </div>
            <SearchBar/>
            <Questiondcard className="px-2 sm:px-4"/>
            <div className="w-full max-w-[1521px] bg-[#B3BCD5] px-[20px] py-[12px] text-center">
                <p className="w-full h-full max-h-[500px] font-bold  text-xl sm:text-2xl sm:p-4  sm:py-8">These are just the frequently asked questions. If you have any further enquiries, please feel free<br/> 
                    to reach out to our support team.
                </p>
            </div>
            <Footer/>
        </div>
    )
}


export default FAQ