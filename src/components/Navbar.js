"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Settings, 
  Calendar, 
  FileText, 
  Mail, 
  Menu, 
  X 
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'About', href: '/about', icon: <User size={18} /> },
    { name: 'Services', href: '/services', icon: <Settings size={18} /> },
    { name: 'Event', href: '/event', icon: <Calendar size={18} /> },
    { name: 'Blog', href: '/blog', icon: <FileText size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between h-16 items-center">
          
          <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
            PLATFORM<span className="text-blue-600">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative flex items-center gap-2 px-1 py-2 text-sm font-medium transition-colors duration-300 group
                    ${isActive ? 'text-blue-600' : 'text-gray-500 hover:text-gray-900'}`}
                >
                  {link.icon}
                  <span>{link.name}</span>
                  
                  {/* The Animated Line */}
                  <span 
                    className={`absolute bottom-0 left-0 h-[2px] bg-blue-600 transition-all duration-300
                      ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} 
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 rounded-lg hover:bg-gray-50"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b transition-all duration-300 ease-in-out
          ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-2 opacity-0 invisible'}`}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 py-2 text-base font-medium transition-colors
                  ${isActive ? 'text-blue-600 border-l-2 border-blue-600 pl-4' : 'text-gray-600 pl-4'}`}
              >
                {link.icon}
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;