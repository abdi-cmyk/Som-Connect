import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

function Header() {
    return <>
        <header className=" px-20 sticky top-0 z-50 w-full bg-transparent backdrop-blur-md transition-all">
             <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
            <h1 className="text-cyan-500 font-bold text-2xl">SomConnect</h1>

            <ul className="flex gap-5">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>

            
            <Link to="/cart" className="relative p-2 rounded-full" aria-label="View Cart">
        <ShoppingCart className="w-6 h-6 text-cyan-500" />
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">0</span>
                </Link>
                </div>
    </header>
    </>
}


export default Header