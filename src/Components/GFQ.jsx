import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const GFQ = () => {
    const [qtn1, setQtn1] = useState(true)
    const [qtn2, setQtn2] = useState(true)
    const [qtn3, setQtn3] = useState(true)

  
    return (
        <div className="border-b-2 pb-3 ">
            <div className="">
                <h2 className="font-bold text-2xl mt-2 py-2">GEOFENCING</h2>
            </div>
            <div className="py-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>How can I set geofencing?</p>
                    {qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn1 && <p className="answers"> Setting up a geofence is easy. Simply open the Shieldify app and choose “Add Boundary”. You can create a radius zone and select your notification preference.</p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>Can I have mutltiple geofencing?</p>
                    {qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn2 && <p className="answers">This depends on your subscription plan. The free tier allows one geofence while the paid plan offers the ability to create multiple zones. </p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1">
                    <p>What are the kind of alerts I can get for geofencing?</p>
                    {qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn3 && <p className="answers">You can choose to receive pop-up notifications, email notifications or SMS messages when your device enters or exits a geofence. </p>}
            </div>
        </div>
    )
}

export default GFQ