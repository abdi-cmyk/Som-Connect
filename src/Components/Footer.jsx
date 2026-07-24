import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { MapPin } from "lucide-react";

function Footer() {
  return <> 
    <footer className="bg-cyan-500 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wider">SomConnect</h2>
          <p className="text-sm text-white leading-relaxed max-w-sm">SomConnect is a leading satellite internet service provider delivering high-speed, reliable, and seamless connectivity for homes and businesses across the nation and beyond</p>
        </div>

        <div className="space-y-4 md:pl-8">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <p>
              <Link to="/" className="hover:text-slate-300 transition-colors inline-block">Home</Link>
            </p>
            <p>
              <Link to="/service" className="hover:text-slate-300 transition-colors inline-block">Service</Link>
            </p>
            <p>
              <Link to="/contact" className="hover:text-slate-300 transition-colors inline-block">Contact</Link>
            </p>
          </div>
        </div>


        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Contact Info</h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-3 text-white">
              <Phone className="w-5 h-5 text-white shrink-0" />
              <span>+252 610000000</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <Mail className="w-5 h-5 text-white shrink-0" />
              <span>info@somconnect.so</span>
            </div>
            <div className="flex items-center space-x-3 text-white">
              <MapPin className="w-5 h-5 text-white shrink-0" />
              <span>Banaadir, Muqdisho, Somalia</span>
            </div>
          </div>
        </div>

      </div>


      <div className="max-w-7xl mx-auto px-8 mt-10 pt-6 border-t border-slate-800/60 text-center text-xs text-white">
        © 2026 SomConnect. All rights reserved.</div>
    </footer>
  </>
}

export default Footer