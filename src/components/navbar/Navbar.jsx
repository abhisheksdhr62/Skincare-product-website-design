import { useState } from 'react';

import { Menu, X } from 'lucide-react';

import bag from '../../assets/bag.png'
import heart from '../../assets/heart.png'
import user from '../../assets/user.png'

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <header className="bg-[#f5faec] w-full shadow-sm sticky top-0 z-50">
      
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-bold text-gray-900">SKINCARE</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-800">
          <a href="#" className="hover:text-black">All Products</a>
          <a href="#" className="hover:text-black">Serum</a>
          <a href="#" className="hover:text-black">Sunscreen</a>
          <a href="#" className="hover:text-black">Bundle</a>
        </nav>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            
          <img src={bag} alt="" className='w-5 h-5' />
            <span>Cart (1)</span>
          </div>
          <img src={heart} className="w-5 h-5" />
          <img src={user} alt="user" className="w-5 h-5" />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#f5faec] px-4 pb-4">
          <nav className="flex flex-col space-y-3 text-gray-800">
            <a href="#" className="hover:text-black">All Products</a>
            <a href="#" className="hover:text-black">Serum</a>
            <a href="#" className="hover:text-black">Sunscreen</a>
            <a href="#" className="hover:text-black">Bundle</a>
            <div className="pt-3 border-t border-gray-300 flex flex-col space-y-3">
              <div className="flex items-center space-x-2">
                {/* <ShoppingBag className="w-5 h-5" /> */}
                <img src={bag} alt="bag" className='w-5 h-5 '  />
                <span>Cart (1)</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={bag} alt="bag" className="w-5 h-5" />
                <span>Wishlist</span>
              </div>
              <div className="flex items-center space-x-2">
                <img src={bag} alt="bag" className="w-5 h-5" />
                <span>Account</span>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
