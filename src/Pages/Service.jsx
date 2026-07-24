import React, { useState } from 'react';
import PersonalPlans from '../Components/Personal';
import BusinessPlans from '../Components/Bussiness';
import HardwareKit from '../Components/HadwareKit';

export default function Services() {
  
  const [activeTab, setActiveTab] = useState('personal');

  return (
    <div className="bg-[#050b18] text-white min-h-screen py-12 px-4 font-sans">
      
      {/* Qaybta Header-ka & Badhamada Toggling-ka */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Service Plans</h2>
        <p className="text-gray-400 text-sm">
          Choose the perfect plan for your organization's needs
        </p>
      
        <div className="flex justify-center space-x-3 mt-6">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === 'personal'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-[#131d33] text-white hover:bg-[#1c2947]'
            }`}
          >
            Personal Plans
          </button>
          
          <button
            onClick={() => setActiveTab('business')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
              activeTab === 'business'
                ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30'
                : 'bg-[#131d33] text-white hover:bg-[#1c2947]'
            }`}
          >
            Business Plans
          </button>
        </div>
      </div>
    
      <div>
        {activeTab === 'personal' ? (
          <PersonalPlans />
        ) : (
          <BusinessPlans />
        )}
      </div>

      <HardwareKit />

    </div>
  );
}