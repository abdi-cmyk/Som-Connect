import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HardwareKit() {
  const navigate = useNavigate();

  // Data-da Hardware Kits-ka
  const hardwareKits = [
    {
      id: 1,
      title: "Standard Kit",
      image: "https://i.pinimg.com/1200x/8e/ac/63/8eac6359c4352f797a9909639ca3a485.jpg", 
      features: [
        "High-performance satellite dish",
        "Wi-Fi router included",
        "Built for all-weather conditions",
        "Easy setup, plug & play"
      ],
      price: "$349.00"
    },
    {
      id: 2,
      title: "Mini Kit",
      image: "https://i.pinimg.com/736x/7c/1e/e2/7c1ee29ccb693b158beb615aa802cc3d.jpg",
      features: [
        "Compact satellite dish",
        "Wi-Fi router included",
        "Built for 24/7 reliability",
        "Ideal for small offices & homes"
      ],
      price: "$250.00"
    }
  ];

  return (
    <div className="py-12 px-4 font-sans text-white">
      {/* Title & Subtitle */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide">
          Choose Your Hardware Kit
        </h2>
        <p className="text-gray-400 text-sm">
          Select the Starlink kit that best fits your needs. You can view detailed specifications for each option.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {hardwareKits.map((kit) => (
          <div
            key={kit.id}
            className="bg-[#0b1326] border-2 border-cyan-500/40 hover:border-cyan-400 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-cyan-950/20 transition-all duration-300"
          >
            {/* Left side: Content & Features */}
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-cyan-400">{kit.title}</h3>
              
              <ul className="space-y-2 text-sm text-gray-300">
                {kit.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2 flex items-center gap-4">
                <span className="text-xl font-bold text-white">{kit.price}</span>
                <button
                  onClick={() => handleSelectKit(kit)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-5 py-2.5 rounded-xl transition cursor-pointer text-sm"
                >
                  Select Kit
                </button>
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-50 h-40 flex items-center cover rounded-2xl border border-slate-800">
              <img
                src={kit.image}
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}