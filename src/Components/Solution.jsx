import React from "react";
import TrackLogo from '../Assets/Track Order.png';
import Antitheif from '../Assets/Security Shield.png';
import CMS from '../Assets/CMS.png';
import DeviceMg from '../Assets/Multiple Devices.png'

const Oursolution = () => {
  return (
    <div className="w-full md:max-w-[1272px] sm:mx-auto mx-5 my-8 shadow-md  border-r-[10px] border-2 p-3 md:p-0">
      <h1 className="text-center text-3xl sm:text-4xl py-4 ">Our Solution</h1>
      <div className="mt-1 grid gap-6 sm:grid-cols-2 mb-[100px]">
        <div className="md:max-w-[462px] mx-4 text-left pb-[100px] flex relative mb-4 md:mb-0">
          <img src={TrackLogo} alt="tracking-logo" className="w-[10%] h-[100%] object-cover" />
          <div className="absolute top-[1rem] md:ml-1 md:pl-8 ">
            <h4 className="font-bold">Track and Control</h4>
            <p>Set up invisible boundaries (geofences) to get instant alerts
              if your device leaves a safe zone, like your home or office.
              Plus, with continuous tracking and a detailed location history,
              finding your lost device is a breeze.</p>
          </div>
        </div>
        <div className=" w-full md:max-w-[464px] mx-4 text-left pb-[100px] flex relative mb-4 md:mb-0" >
          <img src={Antitheif} alt="shield-logo" className="w-[10%] h-[100%] object-cover" />
          <div className="absolute top-[1rem] md:ml-1 md:pl-8">
            <h4 className="font-bold">Anti-theft Tools</h4>
            <p>See exactly where your lost device is and what it has been up
              to. Get location data, screenshots, nearby Wi-Fi networks.
              Take control remotely with tools like screen lock, loud
              alarm activation and alert messages.</p>
          </div>
        </div>
        <div className=" w-full md:max-w-[462px] mx-4 text-left pb-[100px] flex relative mb-4 md:mb-0">
          <img src={CMS} alt="cms-logo" className="w-[10%] h-[100%] object-cover" />
          <div className="absolute top-[1rem] md:ml-1 md:pl-8">
            <h4 className="font-bold">Device Management</h4>
            <p>Effortlessly handle a large device fleet from a central hub.
              Keep track of everything with clear labels, automate large
              scale actions with a few clicks and get a complete view of
              all your devices, no matter their location.</p>
          </div>
        </div>
        <div className="md:max-w-[464px] mx-4 text-left pb-6 sm:pb-0 flex relative mb-4 md:mb-0">
          <img src={DeviceMg} alt="Device-logo" className="w-[11%] h-[100%] sm:h-[40%] object-cover ml-3" />
          <div className="absolute top-[2rem] md:ml-1 md:pl-8">
            <h4 className="font-bold">Multi-OS Integration</h4>
            <p>Integrate all devices and operating systems under a single
              platform, Android, Windows, Ubuntu, Chrome OS, iOS,
              macOS, laptops, tablets and mobiles. We support them
              all.</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Oursolution