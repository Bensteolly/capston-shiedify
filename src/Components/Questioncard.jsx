import React from 'react';
import GQs from './GQs';
import GFQ from './GFQ';
import TQ from './TQ';
import SPQ from './SPQ';


const Questioncard = () => {
  return (
    <div className="w-full sm:w-[1272px] mx-auto  px-5 sm:ml-[120px] items-center py-8 sm:px-10">
      <GQs/>
      <GFQ/>
      <TQ/>
      <SPQ/>
    </div>
  )
}

export default Questioncard
