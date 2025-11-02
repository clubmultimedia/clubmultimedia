import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import cm from '../assets/CM.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Team', path: '/teams' },
    { name: 'Event', path: '/events' },
   // { name: 'Achievements', path: '/Achievements' },
    { name: 'Contact', path: '/contact' },
    { name: 'Project', path: '/Projects' },
    { name: 'Achievements', path: '/achievements' },
  ];

  return (
    <nav className="bg-white/5 backdrop-blur-md border-b border-white/10 shadow-lg fixed top-0 left-0 right-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="relative">
              {/* <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 transform -skew-y-6 rounded-lg shadow-lg shadow-cyan-500/50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-2xl font-bold italic">T</span>
              </div> */}

              <img src={cm} alt="" className='h-20'/>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    className="text-white hover:text-cyan-300 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white/10"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Join Us Button - Desktop */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
              Join Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-300 focus:outline-none transition-colors duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/5 backdrop-blur-md border-t border-white/10">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.path}
              className="text-white hover:text-cyan-300 hover:bg-white/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-3 py-2 rounded-md font-medium transition-all duration-300 mt-2">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;