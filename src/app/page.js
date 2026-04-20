"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Heart, Users, HandCoins, Eye, Activity, Globe } from "lucide-react";
import { Button } from "antd";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import Post from "../components/Post";
import Events from "../components/Events";
import VolunteerSection from "../components/VolunteerSection";

// --- SUB-COMPONENT: Animated Counter ---
const ImpactCounter = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          latest.toFixed(0)
        );
      }
    });
  }, [springValue]);

  return (
    <h2 ref={ref} className="text-3xl md:text-5xl font-black my-2">
      0
    </h2>
  );
};

// --- MAIN HOME COMPONENT ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Home = () => {
  return (
    <main className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center md:justify-end">
        <Image
          src="/images/bg_7.jpg"
          alt="Vision Restoration Project"
          fill
          priority
          className="object-cover object-center z-0"
        />
        <div className="absolute inset-0 bg-linear-to-l from-black/85 via-black/40 to-transparent z-10" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-20 text-center md:text-right px-6 md:px-24 max-w-5xl"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Restoring Sight,
            <br />
            <span className="text-blue-500">Transforming Lives</span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-md md:text-xl text-gray-200 mb-10 max-w-xl md:ml-auto leading-relaxed"
          >
            Over 36 million people worldwide are blind, yet 80% of cases are
            treatable. Join us in our mission to bring clinical eye care to the
            world's most remote regions.
          </motion.p>
          <motion.div variants={itemVariants}>
            <button className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full transition-all shadow-xl hover:scale-105">
              Give the Gift of Sight
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ACTION BANNER SECTION */}
      <section className="relative z-30 px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="relative md:absolute md:left-0 md:right-0 md:top-0 md:-translate-y-1/2 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-2xl overflow-hidden md:rounded-none"
        >
          {/* Box 1: Impact Stats with COUNTER */}
          <motion.div
            variants={itemVariants}
            className="bg-orange-600 p-8 md:p-10 text-black"
          >
            <span className="font-bold uppercase tracking-widest opacity-80 text-xs">
              Our Impact
            </span>
            <ImpactCounter value={1432805} />
            <p className="opacity-90 font-medium text-sm">
              Successful eye screenings & surgeries performed worldwide.
            </p>
          </motion.div>

          {/* Box 2: Donate */}
          <motion.div
            variants={itemVariants}
            className="bg-orange-500 p-8 md:p-10 text-black"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Fund a Surgery
            </h3>
            <p className="text-sm mb-6 opacity-90 leading-relaxed font-medium">
              A simple 20-minute cataract surgery can restore a person's
              independence forever.
            </p>
            <Button className="bg-white text-orange-600 border-none! h-11 px-8 font-bold rounded-none! hover:bg-black! hover:text-white! transition-all cursor-pointer">
              Donate Now
            </Button>
          </motion.div>

          {/* Box 3: Volunteer */}
          <motion.div
            variants={itemVariants}
            className="bg-amber-500 p-8 md:p-10 text-black"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4">
              Medical Outreach
            </h3>
            <p className="text-sm mb-6 opacity-90 leading-relaxed font-medium">
              Are you an ophthalmologist or technician? Join our next surgical
              mission trip.
            </p>
            <Button className="bg-white text-amber-600 border-none! h-11 px-8 font-bold rounded-none! hover:bg-black! hover:text-white! transition-all cursor-pointer">
              Join Mission
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. FEATURES / SERVICES SECTION */}
      <section className="bg-white pt-24 md:pt-72 pb-48 md:pb-64 px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {[
            {
              icon: <Eye size={32} />,
              title: "Cataract Surgery",
              desc: "Eliminating the leading cause of blindness through high-quality, low-cost surgical interventions.",
            },
            {
              icon: <Activity size={32} />,
              title: "Childhood Blindness",
              desc: "Early screening and treatment for refractive errors and congenital eye conditions in schools.",
            },
            {
              icon: <Globe size={32} />,
              title: "Rural Clinics",
              desc: "Building sustainable vision centers to provide long-term care in underserved rural communities.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex gap-4 items-start group"
            >
              <div className="text-orange-600 p-4 bg-orange-50 rounded-2xl group-hover:bg-orange-600 group-hover:text-white transition-all duration-500 shadow-sm">
                {item.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Post />
      <Events />
      <VolunteerSection />
    </main>
  );
};

export default Home;