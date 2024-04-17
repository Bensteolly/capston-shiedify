import React from "react";

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
            amount: 'N10,000 per month',
            features: ['Free to use', 'Limited to ine device', 'Priority customer support', 'Real-time location update','Track & locate device using GPS/location services', 'Basic location-based boundaries alert (e.g. when device leaves office or home).'],
            plan: 'CHOOSE PRO'
        }
    ];

    return(
        <div className="my-6">
          <div className="text-center">
            <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">Pricing</h2>
            <p className="font-medium text-lg md:text-xl lg:text-2xl">Choose a prize that fits your needs for a comprehensive tracking solution</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center">
            {prizes.map((prize) => (
              <div key={prize.index} className="card mx-4 md:mx-8 lg:mx-12 my-4 md:my-8 lg:my-12 shadow-lg p-6 rounded-2xl">
                <h2 className="font-bold text-xl md:text-2xl lg:text-3xl">{prize.title}</h2>
                <p className="font-medium text-lg md:text-xl lg:text-2xl">{prize.amount}</p> 
                <ul className="text-left">
                  {prize.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="button-secondary hover:bg-slate-900 mt-4 hover:text-white">{prize.plan}</button>
              </div>
            ))}
          </div>
        </div>
    )

}
export default Pricing;
 

 