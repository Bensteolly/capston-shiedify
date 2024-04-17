import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const TQ = () => {
    const [qtn1, setQtn1] = useState(true)
    const [qtn2, setQtn2] = useState(true)
    const [qtn3, setQtn3] = useState(true)

  
    return (
        <div className="border-b-2 pb-3 ">
            <div className="">
                <h2 className="font-bold text-2xl mt-2 py-2">TRACKING</h2>
            </div>
            <div className="py-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>How accurate is the location tracking?</p>
                    {qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn1 && <p className="answers">Shieldify uses GPS to provide the most accurate location information possible. Accuracy may vary depending on factors like signal strength.</p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>Can I see my device location history?</p>
                    {qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn2 && <p className="answers">Yes. You can view your devices location history for a designated period.</p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1">
                    <p>Can I share my location with others?</p>
                    {qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn3 && <p className="answers">This feature is not currently available in the MVP but may be included in future updates.</p>}
            </div>
        </div>
    )
}

export default TQ;
