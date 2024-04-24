import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleMinus, faCirclePlus } from '@fortawesome/free-solid-svg-icons';


const Questions = () => {
    return (
        <div className="max-w-full sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1272px] mt-[100px] mx-5 sm:mx-auto py-11 bg-[#B3BCD5] rounded-2xl">
            <div className="flex items-center justify-center">
                <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">Do you have questions?</h1>
                <Link to="../Pages/FAQ.js" className="mt-2">See more..</Link>
            </div>
            <div className="mx-4 sm:mx-11 mt-6">
                <div className="mb-4">
                <h4 className="font-bold">What is Shieldify?</h4>
                <div className="flex justify-between lg: gap-10">
                    <h5 className="text-sm sm:text-base">Shieldify is a mobile app that provides you with security and location-based features to keep your digital devices safe.</h5>
                    <div className="">
                    <FontAwesomeIcon icon={faCircleMinus}/>
                    </div> 
                </div>
                </div>
                <div className="mb-4">
                <h4 className="font-bold">Is Shieldify free?</h4>
                <div className="flex justify-between">
                    <h5 className="text-sm sm:text-base">Shieldify offers a free tier with basic functionalities. We also have a paid plan with additional features and benefits.</h5>
                    <span className="text-gray-700">
                    <FontAwesomeIcon icon={faCircleMinus}/>
                    </span>
                </div>
                </div>
                <div className="mb-4">
                <h4 className="font-bold">What are the core features of Shieldify?</h4>
                <div className="flex justify-between">
                    <h5 className="text-sm sm:text-base">...</h5>
                    <span className="text-gray-700">
                    <FontAwesomeIcon icon={faCirclePlus}/>
                    </span>
                </div>
                </div>
                <div className="mb-4">
                <h4 className="font-bold">How do I get started with Shieldify?</h4>
                <div className="flex justify-between">
                    <h5 className="text-sm sm:text-base">...</h5>
                    <span className="text-gray-700">
                    <FontAwesomeIcon icon={faCirclePlus}/>
                    </span>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Questions;
