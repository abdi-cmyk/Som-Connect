import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Cart() {
  const navigate = useNavigate();
  const location = useLocation();

  // 1. Xogta ka soo dhacday Services Page
  const initialItem = location.state;

  // 2. State-ka maamulaya Cart-ka (si loo delet-gareyn karo)
  const [cartItems, setCartItems] = useState(
    initialItem ? [initialItem] : []
  );

  // 3. Function-ka Delete-ka (alaabta ka saaraya Cart-ka)
  const handleDelete = (indexToDelete) => {
    const updatedItems = cartItems.filter((_, index) => index !== indexToDelete);
    setCartItems(updatedItems);
  };

  // Haddii Cart-ku maran yahay ama laga delete-gareeyay alaabtii
  if (cartItems.length === 0) {
    return (
      <div className="bg-[#050b18] text-white min-h-screen p-12 text-center font-sans flex flex-col justify-center items-center">
        <h2 className="text-3xl font-bold mb-4 text-cyan-400">Cart-kaagu waa maran yahay! 🛒</h2>
        <p className="text-gray-400 mb-6">Madaama aad delet-garaysay ama aadan waxba soo dooranin, fadlan dooro plan.</p>
        <button
          onClick={() => navigate('/service')}
          className="bg-cyan-500 hover:bg-cyan-400 text-black font-bold px-6 py-3 rounded-xl transition cursor-pointer"
        >
          Aad Bogga Services-ka
        </button>
      </div>
    );
  }

  // Wadarta Guud (Total Calculation)
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => {
      // Lacagta qoraalka ah ($36.90) u baddal Number (36.90)
      const numericPrice = parseFloat(item.price.replace('$', '')) || 0;
      return acc + numericPrice;
    }, 0);
  };

  return (
    <div className="bg-[#050b18] text-white min-h-screen py-12 px-4 font-sans">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-left">
          Your <span className="text-cyan-400">Shopping Cart </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: Items List with Delete Button */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div 
                key={index}
                className="bg-[#0b1326] border border-gray-800 rounded-2xl p-6 flex items-center justify-between shadow-xl"
              >
                <div>
                  <h3 className="text-xl font-bold text-cyan-300">{item.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{item.specs}</p>
                  <p className="text-xs text-gray-500 mt-2">Monthly Subscription Plan</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <span className="text-2xl font-bold text-white">{item.price}</span>
                    <span className="text-xs text-gray-400 block">/month</span>
                  </div>
                  
                  <button
                    onClick={() => handleDelete(index)}
                    className="bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white px-3 py-2 rounded-lg text-sm font-semibold transition cursor-pointer"
                    title="Delete item"
                  >
                    Delete 
                  </button>
                </div>
              </div>
            ))}

           </div>
           </div>

      </div>
    </div>
  );
}