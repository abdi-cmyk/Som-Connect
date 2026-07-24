import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return <>
    <div className="min-h-screen text-white flex items-center justify-center p-6">
      <div className="max-w-4xl w-full   rounded-xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div className="bg-cyan-500 p-8  flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-white">
              Contact <span className="text-cyan-500">Info</span>
            </h2>
            <p className="mb-6 text-white">
              Have any questions or need more information? Send us a message and we'll get back to you shortly!
            </p>

            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white" />
                <span>Mogadishu, Somalia</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span>info@somconnect.com</span>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span>+252 61 XXXXXXX</span>
              </div>
            </div>
          </div>
        </div>

        <form className="p-8 space-y-4 bg-white text-black">
          <div>
            <label className="block text-sm font-medium  mb-1">Name</label>
            <input 
              type="text" 
              className="w-full  border border-gray-800 text-white p-2 rounded-md focus:outline-none focus:border-cyan-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium  mb-1">Email</label>
            <input 
              type="email" 
              className="w-full border border-black text-white p-2 rounded-md focus:outline-none focus:border-cyan-500" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Message</label>
            <textarea 
              rows="4" 
              className="w-full  border border-black text-white p-2 rounded-md focus:outline-none focus:border-cyan-500"
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-cyan-500 text-black font-semibold py-2 rounded-md hover:bg-cyan-400 transition"
          >
            Send Message
          </button>
        </form>

      </div>
    </div>
  </>
}

export default Contact