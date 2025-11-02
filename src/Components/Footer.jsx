import React from "react";
import { Linkedin, Github, Mail, Phone } from "lucide-react"; // optional icons

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 border-t border-gray-800 py-8 text-gray-400">
      <div className="container mx-auto text-center px-4">
        {/* Name and Tagline */}
        <h2 className="text-lg font-semibold text-white mb-2">
          Developed by Arvind Kumar Sahu
        </h2>
        <p className="text-sm mb-4">Building Immersive AR/VR & AI Experiences</p>

        {/* Contact Details */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-blue-400" />
            <span>arvindkumarsahu@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-green-400" />
            <span>+91 98765 43210</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-5">
          <a
            href="https://linkedin.com/in/arvindkumarsahu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="https://github.com/arvindkumarsahu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <Github size={22} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 mt-6">
          © {new Date().getFullYear()} All Rights Reserved | Designed with ❤️ by Arvind Kumar Sahu
        </p>
      </div>
    </footer>
  );
};

export default Footer;
