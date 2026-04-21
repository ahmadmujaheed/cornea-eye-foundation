"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

const recentEvents = [
  {
    id: 1,
    image: "/images/event_1.jpg",
    date: "April 15, 2026",
    location: "Downtown Medical Center",
    attendees: 120,
    title: "Annual Vision Gala: A Night for Sight",
    excerpt:
      "Join us for our flagship fundraising evening. Last year, this event raised enough to fund 500 cataract surgeries for underserved rural communities.",
  },
  {
    id: 2,
    image: "/images/event_2.jpg",
    date: "May 02, 2026",
    location: "Global Health Summit",
    attendees: 45,
    title: "Community Workshop: Primary Eye Care Training",
    excerpt:
      "Our team will be leading a hands-on workshop for local healthcare providers on identifying early signs of glaucoma using mobile diagnostic tools.",
  },
  {
    id: 3,
    image: "/images/event_3.jpg",
    date: "May 20, 2026",
    location: "Northern District Schools",
    attendees: 300,
    title: "Summer Outreach: The Mobile Clinic Launch",
    excerpt:
      "We are officially deploying our third mobile surgical unit. Come see the equipment and meet the doctors who will be traveling to the Northern provinces.",
  },
];

const EventSection = () => {
  // Arrow bounce animation
  const arrowVariants = {
    initial: { x: 0 },
    hover: {
      x: 8,
      transition: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.5,
      },
    },
  };

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Content */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-800 uppercase tracking-widest mb-6">
            Recent & Upcoming Events
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-loose">
            From fundraising galas to grassroots medical missions, find out
            where we’ve been and how you can join our upcoming efforts to
            restore sight.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8 mb-20">
          {recentEvents.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center group"
            >
              {/* 1. Background Image */}
              <div className="relative h-72 w-full overflow-hidden shadow-lg">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 2. Overlapping White Box */}
              <div className="relative z-10 bg-white w-[92%] -mt-12 p-8 shadow-2xl transition-all duration-300">
                {/* Event Meta Data */}
                <div className="flex items-center gap-3 text-[11px] text-[#C99B3B] mb-6 font-bold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={13} strokeWidth={2.5} /> {event.date}
                  </span>
                  <span className="text-gray-200">|</span>
                  <span className="text-gray-400 truncate">
                    {event.location}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-800 mb-6 leading-relaxed hover:text-[#C99B3B] transition-colors cursor-pointer">
                  {event.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-400 text-sm leading-loose mb-2 line-clamp-3">
                  {event.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Premium Animated Ant Design Button */}
        <div className="flex justify-center mt-16">
         <motion.div
            whileHover="hover"
            whileTap={{ scale: 0.96 }} // Subtle "press" effect
            className="relative overflow-hidden group"
          >
            {/* The Button */}
           <Link href="/event">
            <button
              className="
            h-12 px-12 
            flex items-center gap-3 
            text-xs font-black uppercase tracking-[0.2em] 
            border border-gray-900 text-gray-900
            rounded-none bg-transparent
            transition-colors duration-300
            group-hover:text-[#C99B3B] z-10
            cursor-pointer
          "
            >
              See All Events
              <motion.span variants={arrowVariants}>
                <ArrowRight size={18} strokeWidth={3} />
              </motion.span>
            </button>
           </Link>
            

            {/* The Background Slide Effect */}
            <motion.div
              className="absolute inset-0 bg-[#C99B3B] -z-10"
              initial={{ y: "100%" }}
              variants={{
                hover: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
