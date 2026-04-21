"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";
import { Input, Button, Divider } from "antd";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-gray-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center">
                <span className="text-white font-black">E</span>
              </div>
              <span className="text-2xl font-black tracking-tighter text-white uppercase">
                Eye<span className="text-orange-600">Care</span> NGO
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Dedicated to restoring sight and preventing blindness in the 
              world’s most vulnerable communities through surgery, 
              education, and sustainable care.
            </p>
            <div className="flex gap-4 pt-2">
               {/* Volunteer/Donate Small CTA */}
               <Link href="/donate" className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-orange-500 transition-colors">
                  Support Our Mission <ArrowRight size={14} />
               </Link>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link href="/about" className="hover:text-white transition-colors">About Our Mission</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Recent Events</Link></li>
              <li><Link href="/volunteer" className="hover:text-white transition-colors">Become a Volunteer</Link></li>
              <li><Link href="/stories" className="hover:text-white transition-colors">Impact Stories</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Get In Touch</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-orange-600 shrink-0" />
                <span>123 Vision Way, Medical District,<br />Abuja, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-orange-600 shrink-0" />
                <span>+234 800 EYE CARE</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-orange-600 shrink-0" />
                <span className="hover:text-white cursor-pointer transition-colors">outreach@eyecarengo.org</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs">Our Newsletter</h4>
            <p className="text-xs leading-relaxed">
              Receive monthly updates on our surgical missions and success stories.
            </p>
            <div className="flex flex-col gap-2">
              <Input 
                placeholder="Email Address" 
                className="bg-transparent border-gray-800 text-white placeholder:text-gray-600 h-11 rounded-none hover:border-orange-600 focus:border-orange-600"
              />
              <Button 
                type="primary" 
                className="h-11 bg-orange-600! border-none rounded-none! font-bold uppercase tracking-widest text-xs hover:bg-white! hover:text-black!"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Divider className="border-gray-900 my-0" />

        {/* Bottom Section: Copyright & Legal */}
        <div className="py-8 flex flex-col justify-between items-center gap-1">
          <div className="text-[11px] uppercase tracking-widest font-medium">
            © {currentYear} EyeCare NGO. All Rights Reserved.
          </div>
          
          <div className="flex items-center text-[11px] uppercase tracking-widest font-bold">
            
            <span className="flex items-center gap-1 text-gray-500">
              Powered By <span className="text-orange-600 hover:text-white cursor-pointer transition-colors lowercase">www.mahvion.com</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;