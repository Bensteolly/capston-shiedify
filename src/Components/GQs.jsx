import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';


const GQs = () => {
    const [qtn1, setQtn1] = useState(true)
    const [qtn2, setQtn2] = useState(true)
    const [qtn3, setQtn3] = useState(true)
    const [qtn4, setQtn4] = useState(true)
    const [qtn5, setQtn5] = useState(true)
  
    return (
        <div className="border-b-2 pb-3 ">
            <div className="">
                <h2 className="font-bold text-2xl py-2">GENERAL</h2>
            </div>
            <div className="py-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>What is Shieldify?</p>
                    {qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn1 && <p className="answers">Shieldify is a mobile app that provides you with security and location-based features to keep your digital devices safe. </p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>Is Shieldify free?</p>
                    {qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn2 && <p className="answers">Shieldify offers a free tier with basic functionalities. We also have a paid plan with additional features and benefits. </p>}
            </div>
  
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>What are the core features of shieldify?</p>
                    {qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
  
                {!qtn3 && <ul className="flex-row list-disc px-4 py-1 sm:px-2'">
                    <li>Geofencing: Set up virtual boundaries & receive alerts when your device enters or exits those zones.</li>
                    <li>Tracking: Locate your device in real-time or view its location history.</li>
                    <li>Alerts: Get notified about unauthorised access attempts.</li>
                    </ul>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>How can I get started with Shieldify?</p>
                    {qtn4 && <button onClick={() => setQtn4(!qtn4)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn4 && <button onClick={() => setQtn4(!qtn4)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn4 && <p className="answers">Download the Shieldify app from the App Store or Google Play Store. Create a free account and start exploring the features. </p>}
            </div>
            <div>
                <div className="flex justify-between font-semibold py-1'">
                    <p>How I ned any techincal expertise to use Shieldify?</p>
                    {qtn5 && <button onClick={() => setQtn5(!qtn5)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn5 && <button onClick={() => setQtn5(!qtn5)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn5 && <p className="answers">No. Shieldify is designed to be user-friendly and easy to navigate. We offer clear instructions and a simple interface for a smooth experience.</p>}
            </div> 
        </div>
    )
  
 
}

export default GQs