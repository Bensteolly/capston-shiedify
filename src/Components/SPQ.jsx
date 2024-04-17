import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons';

const SPQ = () => {
    const [qtn1, setQtn1] = useState(true)
    const [qtn2, setQtn2] = useState(true)
    const [qtn3, setQtn3] = useState(true)

  
    return (
        <div className="border-b-2 pb-3 ">
            <div className="">
                <h2 className="font-bold text-2xl py-2 mt-2">SECURITY AND PRIVACY</h2>
            </div>
            <div className="py-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>Is my data safe with Shieldify?</p>
                    {qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn1 && <button onClick={() => setQtn1(!qtn1)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn1 && <p className="answers">Yes. Shieldify takes data security seriously. We use industry-standard security practices to ptotect your information.</p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1'">
                    <p>Can I control who can tracks my location?</p>
                    {qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn2 && <button onClick={() => setQtn2(!qtn2)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn2 && <p className="answers">Only you has access to control your Shieldify account and manage location tracking features.</p>}
            </div>
            <div className="pb-2">
                <div className="flex justify-between font-semibold py-1">
                    <p>Can I turn off location tracking?</p>
                    {qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCirclePlus}/></button>}
                    {!qtn3 && <button onClick={() => setQtn3(!qtn3)}><FontAwesomeIcon icon={faCircleMinus}/></button>}
                </div>
                {!qtn3 && <p className="answers">Yes, you can enable or disable location tracking at any time within the Shieldify app settings.</p>}
            </div>
        </div>
    )
}

export default SPQ