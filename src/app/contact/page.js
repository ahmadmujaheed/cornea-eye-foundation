"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Form, Input, Button, ConfigProvider } from 'antd';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet marker icon path in Next.js
const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const ContactPage = () => {
  const [form] = Form.useForm();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#c99b3b', 
          borderRadius: 0,
        },
      }}
    >
      <main className="bg-white min-h-screen">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
          <Image
            src="/images/blog_large_1.jpg" 
            alt="Contact Hero"
            fill
            priority
            className="object-cover brightness-[0.4]"
          />
          <div className="relative z-10 text-center px-6">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-4xl font-black text-white uppercase tracking-tighter"
            >
              Contact Us
            </motion.h1>
            <p className="text-orange-400 font-bold uppercase tracking-widest mt-2 text-xs">
              Abuja • Nigeria
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          {/* 2. HEADER (From Image) */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h2>
            <p className="text-gray-500 text-lg">
              We're open for any suggestion or just to have a chat
            </p>
          </div>

          {/* 3. INFO GRID (From Image) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">Address:</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                198 Wuse Market Road, <br />
                Zone 5, Abuja, <br />
                FCT 900285, Nigeria
              </p>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">Email:</p>
              <p className="text-[#c99b3b] font-medium text-sm">info@yoursite.com</p>
            </div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-gray-900 mb-2">Phone:</p>
              <p className="text-[#c99b3b] font-medium text-sm">+ 1235 2355 98</p>
            </div>
          </div>

          {/* 4. FORM (From Image) */}
          <div className="mb-24">
            <Form form={form} layout="vertical">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Form.Item name="name">
                  <Input placeholder="Name" className="h-14 border-gray-200 border-x-0 border-t-0 border-b hover:border-[#c99b3b] focus:border-[#c99b3b] shadow-none rounded-none bg-transparent" />
                </Form.Item>
                <Form.Item name="email">
                  <Input placeholder="Email" className="h-14 border-gray-200 border-x-0 border-t-0 border-b hover:border-[#c99b3b] focus:border-[#c99b3b] shadow-none rounded-none bg-transparent" />
                </Form.Item>
                <Form.Item name="subject">
                  <Input placeholder="Subject" className="h-14 border-gray-200 border-x-0 border-t-0 border-b hover:border-[#c99b3b] focus:border-[#c99b3b] shadow-none rounded-none bg-transparent" />
                </Form.Item>
              </div>

              <Form.Item name="message" className="mb-10">
                <Input.TextArea rows={4} placeholder="Create a message here" className="border-gray-200 border-x-0 border-t-0 border-b hover:border-[#c99b3b] focus:border-[#c99b3b] shadow-none rounded-none resize-none p-0 pt-4 bg-transparent" />
              </Form.Item>

              <Button type="primary" htmlType="submit" className="bg-[#c99b3b] border-none h-14 px-10 rounded-full font-bold text-white transition-all hover:opacity-90">
                Send Message
              </Button>
            </Form>
          </div>

          {/* 5. FOLLOW US SECTION (From Image) */}
          <div className="mb-24">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Follow us here</h3>
            <div className="flex flex-wrap gap-8">
              {["FACEBOOK", "TWITTER", "INSTAGRAM", "DRIBBBLE"].map((social) => (
                <button key={social} className="text-[11px] font-black uppercase tracking-widest text-[#c99b3b] hover:text-black transition-colors">
                  {social}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* 6. MAP SECTION (Abuja Location) */}
        <section className="h-125 w-full relative z-0">
          <MapContainer 
            center={[9.0578, 7.4951]} // Coordinates for Abuja
            zoom={13} 
            scrollWheelZoom={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[9.0578, 7.4951]} icon={customIcon}>
              <Popup>Our Abuja Headquarters near Wuse Market.</Popup>
            </Marker>
          </MapContainer>
        </section>

        <style jsx global>{`
          .ant-input:focus, .ant-input-focused {
            box-shadow: none !important;
            border-color: #c99b3b !important;
          }
          .ant-input::placeholder {
            color: #bbb !important;
          }
        `}</style>
      </main>
    </ConfigProvider>
  );
};

export default ContactPage;