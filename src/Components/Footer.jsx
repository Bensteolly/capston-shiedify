import React from "react";
import Logo from "../Assets/1 5.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagramSquare, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";




const Footer = () => {
    return (
    <div className="bg-[#09122B] text-white px-4">
      <div className="flex flex-col md:flex-row justify-between py-8 mt-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-start md:w-1/2 md:pr-8 lg:pr-16">
          <img src={Logo} alt="Shiedlify-logo" className="max-w-20" />
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faMapMarker} className="pt-2" />
            <p className="font-thin text-sm">Victoria Island, Lagos, Nigeria</p>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="pt-2" />
            <p className="font-thin text-sm">+234(0)8167971795, +234(0)8167971975</p>
          </div>
          <div className="flex items-center gap-4 text-2xl pt-2 sm: mb-8">
            <FontAwesomeIcon icon={faInstagramSquare} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 sm:gap-6 md:leading-8 pt-1">
          <div>
            <h4 className="font-bold ">ABOUT SHIELDIFY</h4>
            <ul className="font-thin text-sm leading-6">
              <li>How it works</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Download</li>
              <li>Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">SOLUTIONS</h4>
            <ul className="font-thin text-sm leading-6">
              <li>Tracking & Location</li>
              <li>Device Security</li>
              <li>Geofencing</li>
              <li>Device Management</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">LEGAL</h4>
            <ul className="font-thin text-sm leading-6">
              <li>Terms & conditions</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Password Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold">RESOURCES</h4>
            <ul className="font-thin text-sm leading-6 ">
              <li><Link to="../Pages/FAQ.js">FAQs</Link></li>
              <li><Link to="../Pages/Resourcepg.js">Security Awareness Training</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pb-4">
        <p className="font-thin text-xs px-8 ml-[80px] sm:ml-[350px]">© 2024 - SHIELDIFY</p>
      </div>
</div>
        
    )
}

export default Footer;

