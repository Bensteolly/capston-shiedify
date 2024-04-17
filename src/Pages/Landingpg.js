import React from "react";
import Navbar from "../Components/Navbar";
import Herosection from "../Components/Herosection";
import Ourvision from "../Components/Vision";
import Oursolution from "../Components/Solution";
import Pricing from "../Components/Pricing";
import PathChoosen from "../Components/path";
import Questions from "../Components/Question";
import Appdownload from "../Components/Appdownload";
import Footer from "../Components/Footer";




const Landingpg = () =>{
    return(
        <div>
            <Navbar/>
            <Herosection/>
            <Ourvision/>
            <Oursolution/>
            <Pricing/>
            <PathChoosen/>
            <Questions/>
            <Appdownload/>
            <Footer/>
        </div>
    )
}

export default Landingpg;