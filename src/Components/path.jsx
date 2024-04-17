import React from "react";
import PersonLogo from '../Assets/Account.jpg';
import BusinessLogo from '../Assets/Business Building.png';



const PathChoosen = () => {
  return (
    <div className="w-full max-w-[1272px] mx-auto my-8 py-3 shadow-md  border-r-[10px] border-2 ">
      <h2 className="text-3xl sm:text-xl md:text-5xl text-center">Choose the path for you</h2>
      <div className="flex flex-col sm:flex-row justify-between sm:mt-8 py-2">
        <div className="mx-4 my-4 sm:my-0 text-left p-4 ">
          <img src={PersonLogo} alt="persona-logo" className="w-[20%] h-[35%] object-cover" />
          <span className="w-full sm:w-[351px]">
            <h4 className="font-bold pb-2">PERSONAL</h4>
            <ul className="bullets mx-4">
              <li>Watch over your gadgets with a single app</li>
              <li>Protect your privacy from prying eyes</li>
              <li>Know when a device has changed locations</li>
              <li>Aid the police in the case of theft with evidence</li>
            </ul>
          </span>
        </div>
        <div className="mx-4 my-4 sm:my-0 text-left p-4">
          <img src={BusinessLogo} alt="shield-logo" className="w-[20%] h-[35%] object-cover" />
          <span className="w-full sm:w-[351px]">
            <h4 className="font-bold pb-2">Business</h4>
            <ul className="bullets mx-4">
              <li>Integrate dozens of multi OS devices with ease</li>
              <li>Recover lost data and prevent corporate leaks</li>
              <li>Organize, group and control all company devices online</li>
              <li>Keep track of your remote workforce fleet</li>
            </ul>
          </span>
        </div>
      </div>
    </div>

  )
}
export default PathChoosen;


