import React from 'react';
import { useNavigate } from 'react-router-dom';

 function PersonalPlans() {

    const navigate = useNavigate();

  // Function-ka xogta rasmiga ah u fasaxaya Cart-ka
  const handleGetStarted = (plan, selectedOption) => {
    navigate('/cart', {
      state: {
        title: `${plan.title} - ${selectedOption.name}`,
        specs: selectedOption.specs,
        price: selectedOption.price,
      },
    });
  };

  const personalPlans = [
    {
      title: "Residential",
      description: "Optimized for Somali operations with cost-effective local connectivity",
      options: [
        { name: "Local Basic", specs: "50 GB • 5-10 users", price: "$36.90" },
        { name: "Local Standard", specs: "500 GB • 20-30 users", price: "$93.60" },
        { name: "Local Premium", specs: "1 TB • 50-60 users", price: "$164.50" },
      ],
      perfectFor: ["Government", "NGOs", "Education", "Healthcare"]
    },
    {
      title: "Roam",
      description: "Worldwide connectivity for international operations and cross-border missions",
      options: [
        { name: "Local Basic", specs: "50 GB • 5-10 users", price: "$36.90" },
        { name: "Local Standard", specs: "500 GB • 20-30 users", price: "$93.60" },
        { name: "Local Premium", specs: "1 TB • 50-60 users", price: "$164.50" },
      ],
      perfectFor: ["Aviation", "Maritime", "NGOs", "Healthcare"]
    }
  ];

  return (
    <div className="px-30 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#050b18]">
      {personalPlans.map((card, index) => (
        <div key={index} className="bg-[#0b1326] border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-gray-400 text-xs md:text-sm mb-6">{card.description}</p>
            
            <div className="space-y-3 mb-6">
              <p className="text-xs font-semibold text-gray-300">📈 Pricing Plans</p>
              {card.options.map((opt, optIndex) => (
                <div key={optIndex} className="bg-[#131c31] p-3.5 rounded-xl flex justify-between items-center border border-gray-800/80">
                  <div>
                    <h4 className="text-sm font-bold text-gray-200">{opt.name}</h4>
                    <p className="text-xs text-gray-400">{opt.specs}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-bold text-cyan-400">{opt.price}</span>
                    <span className="text-[10px] text-gray-400 block">/month</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-gray-300 mb-3">👥 Perfect For</p>
              <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                {card.perfectFor.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-center gap-1.5">
                    <span className="text-cyan-400">❖</span> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        <button
      onClick={() => handleGetStarted(card, card.options[0])} // ama option-ka uu doortay
      className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 rounded-xl transition cursor-pointer"
    >
      Get Started
    </button>
        </div>
      ))}
    </div>
  );
}
export default PersonalPlans