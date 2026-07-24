import React from 'react';
import { Wifi, Zap, ShieldCheck, ArrowRight, Star, Mail } from 'lucide-react';
import hero from '../assets/Hero.png'

const Home = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen">

      <section className="px-6 py-20 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Fast & Reliable <br />
            <span className="text-cyan-500">Internet Connection</span>
          </h1>
          <p className="text-gray-600 text-lg">
            Experience high-speed fiber internet for your home and business with SomConnect. Always online, always fast.
          </p>
          <div className="flex space-x-4">
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition flex items-center space-x-2 shadow-md">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-gray-300 hover:border-cyan-500 text-gray-800 px-6 py-3 rounded-md transition">
              Explore Plans
            </button>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center w-full">
           <img className='rounded-2xl' src={hero} alt="" />
         
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">
              Our <span className="text-cyan-500">Services</span>
            </h2>
            <p className="text-gray-600 mt-2">Choose the best internet solution for your needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500">
                <Wifi className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Home Internet</h3>
              <p className="text-gray-600 text-sm">
                Unlimited high-speed internet designed for streaming and gaming.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Business Fiber</h3>
              <p className="text-gray-600 text-sm">
                Dedicated connection with maximum uptime and priority support.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
              <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center text-cyan-500">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Secure Network</h3>
              <p className="text-gray-600 text-sm">
                Built-in firewall protection to keep your data safe online.
              </p>
            </div>
          </div>
        </div>
          </section>
      <section className="px-6 py-16 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            What Our <span className="text-cyan-500">Clients Say</span>
          </h2>
          <p className="text-gray-600 mt-2">Trusted by thousands of happy customers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl space-y-4">
            <div className="flex text-cyan-500 space-x-1">
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
            </div>
            <p className="text-gray-700 italic">
              "SomConnect has completely changed how we work at the office. Fast speeds and zero downtime!"
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Mohamed Ali</h4>
              <p className="text-xs text-gray-500">Business Owner</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl space-y-4">
            <div className="flex text-cyan-500 space-x-1">
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
              <Star className="w-5 h-5 fill-cyan-500 text-cyan-500" />
            </div>
            <p className="text-gray-700 italic">
              "Great customer service and very stable internet for home streaming. Highly recommended."
            </p>
            <div>
              <h4 className="font-semibold text-gray-900">Amina Hassan</h4>
              <p className="text-xs text-gray-500">Home User</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto bg-white border border-gray-200 p-8 md:p-12 rounded-2xl text-center space-y-6 shadow-sm">
          <div className="w-12 h-12 bg-cyan-50 text-cyan-500 rounded-full flex items-center justify-center mx-auto">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Stay Connected With Us</h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Subscribe to our newsletter to receive the latest updates and special offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-50 border border-gray-300 px-4 py-3 rounded-md text-gray-900 flex-1 focus:outline-none focus:border-cyan-500"
            />
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;