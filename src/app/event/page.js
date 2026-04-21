"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Calendar, MapPin, Heart, HelpCircle
} from "lucide-react";
import {
  Button, Modal, Form, Input, ConfigProvider,
  message, Collapse
} from "antd";

const { Panel } = Collapse;

const EventPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 });

  // Simple countdown logic for Oct 24, 2026
  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date("2026-10-24T08:00:00");
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const eventData = {
    title: "Abuja Community Vision Clinic",
    date: "October 24-26, 2026",
    location: "Wuse Market District, Abuja",
    entry: "Free Admission",
    impact: [
      { metric: "500+", label: "Expected Patients" },
      { metric: "12", label: "Specialist Surgeons" },
      { metric: "100%", label: "Free Medications" },
    ],
    schedule: [
      { time: "08:00 AM", task: "Patient Triage & Screening", lead: "Clinical Team" },
      { time: "11:00 AM", task: "Vision Health Workshop", lead: "Dr. Sarah Chen" },
      { time: "02:00 PM", task: "V-Series Laser Demonstrations", lead: "Tech Specialists" },
    ],
  };

  const teamMembers = [
    { id: 1, name: "Dr. Amara Okezie", role: "Lead Surgeon", image: "/images/doctor_1.jpg", bio: "15+ years experience in high-volume cataract surgery." },
    { id: 2, name: "Marcus Thorne", role: "Tech Director", image: "/images/doctor_2.jpg", bio: "Oversees V-Series laser deployment and precision." },
    { id: 3, name: "Sarah Bello", role: "Community Lead", image: "/images/doctor_3.jpg", bio: "Managing local trust and Abuja district partnerships." },
    { id: 4, name: "Dr. Julian Voss", role: "Optometrist", image: "/images/doctor_4.jpg", bio: "Specialist in pediatric vision and early intervention." },
  ];

  const faqs = [
    { q: "Is the surgery truly free?", a: "Yes. All screenings, consultations, and selected laser surgeries are 100% funded by our partners." },
    { q: "Do I need to bring my ID?", a: "While not mandatory, having a form of ID helps us maintain accurate patient records." },
    { q: "Where exactly in Wuse Market?", a: "We will be located at the North Gate Community Pavilion. Look for the orange NGO banners." }
  ];

  const handleRegistration = (values) => {
    message.success(`Thank you, ${values.name}! You are registered.`);
    setIsModalOpen(false);
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#ea580c", borderRadius: 0 } }}>
      <main className="bg-white min-h-screen text-gray-900">
        
        {/* 1. HERO SECTION */}
        <section className="relative h-[90vh] flex items-center overflow-hidden bg-black">
          <Image src="/images/blog_large_3.jpg" alt="Abuja Outreach" fill className="object-cover opacity-60 grayscale" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
              <span className="inline-block px-4 py-1 bg-[#C99B3B] text-white text-[10px]  uppercase tracking-[0.3em] mb-6">CORNEA Community Event</span>
              <h1 className="text-6xl md:text-5xl font-black text-white leading-[0.85] uppercase tracking-tighter mb-8">
                Restoring <br /> <span className="text-[#C99B3B]">Sight</span> Together.
              </h1>
              
              {/* Countdown Component */}
              <div className="flex gap-6 mb-10">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <p className="text-3xl font-black text-white leading-none">{value}</p>
                    <p className="text-[10px] text-[#C99B3B] font-black uppercase tracking-widest">{unit}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-8 text-white/80 uppercase text-[10px] font-black tracking-[0.2em]">
                <div className="flex items-center gap-2"><Calendar size={14} className="text-[#C99B3B]" /> {eventData.date}</div>
                <div className="flex items-center gap-2"><MapPin size={14} className="text-[#C99B3B]" /> {eventData.location}</div>
                <div className="flex items-center gap-2 text-[#C99B3B]"><Heart size={14} /> {eventData.entry}</div>
              </div>

              <div className="mt-12 flex gap-4">
                <button onClick={() => setIsModalOpen(true)} className="h-12 px-10 bg-white text-black border-none font-black uppercase text-xs hover:bg-[#C99B3B]! hover:text-white!">
                  Register to Attend
                </button>
                <button className="h-12 px-10 bg-transparent text-white border-2 border-white/20 font-black uppercase text-xs">
                  Volunteer
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2. IMPACT METRICS */}
        <section className="bg-gray-50 py-20 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              {eventData.impact.map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-6xl font-black text-gray-900 tracking-tighter">{item.metric}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#C99B3B]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SCHEDULE & CONTENT */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-8 space-y-16">
              <div>
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 italic">About the Outreach</h2>
                <p className="text-xl text-gray-600 leading-relaxed font-serif">
                  Our mission in Abuja is simple: to ensure that no resident suffers from preventable blindness. This clinic provides free screenings using our portable V-Series units.
                </p>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                   <HelpCircle className="text-[#C99B3B]" /> Common Questions
                </h3>
                <Collapse ghost expandIconPosition="end" className="faq-collapse">
                  {faqs.map((faq, i) => (
                    <Panel header={<span className="font-bold uppercase tracking-tight text-gray-900">{faq.q}</span>} key={i} className="border-b border-gray-100 pb-2">
                      <p className="text-gray-500 font-serif leading-relaxed">{faq.a}</p>
                    </Panel>
                  ))}
                </Collapse>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="sticky top-10 border-l-4 border-[#C99B3B] pl-8 py-4 bg-white shadow-xl shadow-gray-100">
                <h3 className="text-sm font-black uppercase tracking-widest mb-8 text-gray-400">Clinic Schedule</h3>
                <div className="space-y-10">
                  {eventData.schedule.map((item, i) => (
                    <div key={i} className="relative">
                      <span className="text-[10px] font-black text-[#C99B3B] block mb-1">{item.time}</span>
                      <h4 className="text-lg font-bold uppercase tracking-tight">{item.task}</h4>
                      <p className="text-xs text-gray-400 font-medium">{item.lead}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. THE TEAM */}
        <section className="bg-gray-50 py-32 px-6">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <span className="text-[#C99B3B] font-black uppercase tracking-widest text-[10px]">Clinical Team</span>
            <h2 className="text-5xl font-black uppercase tracking-tighter mt-2">The Medical Experts</h2>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {teamMembers.map((member) => (
              <motion.div key={member.id} whileHover={{ y: -10 }}>
                <div className="relative h-80 mb-6 grayscale hover:grayscale-0 transition-all duration-700 overflow-hidden">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tighter mb-1">{member.name}</h4>
                <p className="text-[10px] font-black text-[#C99B3B] uppercase mb-3">{member.role}</p>
                <p className="text-sm text-gray-500 font-serif italic">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 5. REGISTRATION MODAL */}
        <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} centered width={450}>
          <div className="p-6">
            <h2 className="text-3xl font-black uppercase tracking-tighter text-gray-900 mb-2">Join the Clinic</h2>
            <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest mb-8">Free Registration for Residents</p>
            <Form form={form} layout="vertical" onFinish={handleRegistration} requiredMark={false}>
              <Form.Item label={<span className="text-[10px] font-black tracking-widest">FULL NAME</span>} name="name" rules={[{ required: true }]}><Input className="h-12 rounded-none bg-gray-50 font-bold" /></Form.Item>
              <Form.Item label={<span className="text-[10px] font-black tracking-widest">CONTACT NUMBER</span>} name="phone" rules={[{ required: true }]}><Input className="h-12 rounded-none bg-gray-50 font-bold" /></Form.Item>
              <Form.Item label={<span className="text-[10px] font-black tracking-widest">PRIMARY CONCERN</span>} name="concern"><Input.TextArea rows={4} className="rounded-none bg-gray-50 font-bold" /></Form.Item>
              <Button type="primary" htmlType="submit" className="w-full h-14 bg-orange-600! text-white font-black uppercase text-[10px] tracking-widest border-none">Confirm Registration</Button>
            </Form>
          </div>
        </Modal>

        {/* Custom CSS for Ant Design overrides */}
        <style jsx global>{`
          .faq-collapse .ant-collapse-header { padding: 24px 0 !important; }
          .ant-collapse-content-box { padding: 0 0 24px 0 !important; }
        `}</style>
      </main>
    </ConfigProvider>
  );
};

export default EventPage;