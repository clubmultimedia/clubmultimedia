import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-white">CLUB</span>
              <span className="text-blue-400"> MULTIMEDIA</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your community for creativity, innovation, and multimedia excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Events</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Project</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Achievements</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Workshops</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Gallery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Achievements</a></li>
              <li><a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="text-purple-400 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">nist.clubmultimedia@gmail.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="text-purple-400 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">+91 7992230572</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="text-purple-400 mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">Nist University Behrampur</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Club Multimedia. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm">
            Developed by Arvind Kumar Sahu
          </p>
          
          <div className="flex gap-4">
            
            
            <a href="https://www.instagram.com/nist_club_multimedia/" className="bg-slate-800 hover:bg-purple-600 p-2 rounded transition">
              <Instagram size={18} className="text-white" />
            </a>
            <a href="https://www.linkedin.com/in/club-multimedia-97b92b267/" className="bg-slate-800 hover:bg-purple-600 p-2 rounded transition">
              <Linkedin size={18} className="text-white" />
            </a>
            <a href="https://www.youtube.com/@clubmultimedia4858" className="bg-slate-800 hover:bg-purple-600 p-2 rounded transition">
              <Youtube size={18} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}