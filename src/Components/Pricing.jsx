import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Pricing = () => {

    const prizes = [
        { index: 1, 
            title: 'Shieldify Basic',
            amount: 'Free',
            features: ['Free to use', 'Limited to ine device',  'Track & locate device using GPS/location services', 'Basic location-based boundaries alert (e.g. when device leaves office or home).'],
            plan: 'SELECT PLAN'
        },
        {  index: 2, 
            title: 'Shieldify Pro',
            amount: 'N10,000 per month or 110,000 per year',
            features: ['All features of the Basic plan', 'unlimited device tracking', 'Advance loacation-based boundary customisation (e.g creating multiple boundaries, geofencing', 'Real-time location update','Priority customer support'],
            plan: 'CHOOSE PRO'
        }
    ];

    return(
        <div className="my-6 sm:mx-auto mx-5">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Pricing</h2>
            <p className="font-medium text-lg md:text-xl lg:text-2xl">Choose a prize that fits your needs for a comprehensive tracking solution</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {prizes.map((prize) => (
              <div key={prize.index} className="w-full max-w-[550px] h-full max-h-[450px] bg-[#B3BCD5] justify-center shadow-[#09122B] gap-11 mx-4 md:mx-8 lg:mx-12 my-4 md:my-8 lg:my-12 shadow-lg p-6 rounded-2xl transition-transform ease-in-out duration-300 hover:scale-105">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{prize.title}</h2>
                <p className="font-medium text-lg md:text-xl lg:text-2xl">{prize.amount}</p> 
                <ul className="text-left">
                  {prize.features.map((feature, index) => (
                    <li key={index} className="flex gap-2">{<FontAwesomeIcon icon={faCheckCircle}></FontAwesomeIcon>}{feature}</li>
                  ))}
                </ul>
                <button className="bg-none border-2 rounded-sm text-[#09122B] w-full max-w-[288px] h-13 p-4 font-bold text-center transistion ease-in-out duration-300 hover:bg-slate-900 mt-4 hover:text-white">{prize.plan}</button>
              </div>
            ))}
          </div>
        </div>
    )

}
export default Pricing;
 

 