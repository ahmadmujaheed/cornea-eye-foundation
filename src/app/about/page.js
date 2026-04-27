"use client";
import React, { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";
import { HeartHandshake, FolderCheck, HandCoins, Users } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Quote } from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Target } from "lucide-react";



const About = () => {

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

  // --- SUB-COMPONENT: Animated Counter ---
  const ImpactCounter = ({
    value,
    isCurrency = false,
    currency = "USD",
    duration = 2000,
  }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let start = 0;
      const increment = value / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [value, duration]);

    const formatNumber = (num) => {
      if (isCurrency) {
        const locale = currency === "NGN" ? "en-NG" : "en-US";

        return new Intl.NumberFormat(locale, {
          style: "currency",
          currency: currency,
          maximumFractionDigits: 0,
        }).format(num);
      }

      return num.toLocaleString();
    };

    return <span>{formatNumber(count)}</span>;
  };



  const StatCard = ({ icon, value, label, isCurrency = false, currency = "USD" }) => {
    return (
      <div className="bg-white/10 backdrop-blur-md p-8 text-center rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">

        {/* ICON */}
        <div className="flex justify-center mb-4 text-white/90">
          {icon}
        </div>

        {/* NUMBER */}
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          <ImpactCounter
            value={value}
            isCurrency={isCurrency}
            currency={currency}
          />
        </h3>

        {/* LABEL */}
        <p className="text-sm text-gray-300 mt-2 uppercase tracking-wide">
          {label}
        </p>
      </div>
    );
  };

  const teamMembers = [
    { id: 1, name: "Dr. Amara Okezie", role: "Lead Surgeon", image: "/images/doctor_1.jpg", bio: "15+ years experience in high-volume cataract surgery." },
    { id: 2, name: "Marcus Thorne", role: "Tech Director", image: "/images/doctor_2.jpg", bio: "Oversees V-Series laser deployment and precision." },
    { id: 3, name: "Sarah Bello", role: "Community Lead", image: "/images/doctor_3.jpg", bio: "Managing local trust and Abuja district partnerships." },
    { id: 4, name: "Dr. Julian Voss", role: "Optometrist", image: "/images/doctor_4.jpg", bio: "Specialist in pediatric vision and early intervention." },
  ];

  const testimonials = [
    {
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "/images/person_1.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      name: "John Doe",
      role: "Volunteer",
      image: "/images/person_2.jpg",
      text: "Providing sight restoration has changed lives and brought hope to communities.",
    },
    {
      name: "Mary Jane",
      role: "Doctor",
      image: "/images/person_3.jpg",
      text: "This foundation is doing incredible work in reducing preventable blindness.",
    },
    {
      name: "Roger Scott",
      role: "Marketing Manager",
      image: "/images/person_1.jpg",
      text: "Far far away, behind the word mountains, far from the countries Vokalia.",
    },
    {
      name: "John Doe",
      role: "Volunteer",
      image: "/images/person_2.jpg",
      text: "Providing sight restoration has changed lives and brought hope to communities.",
    },
    {
      name: "Mary Jane",
      role: "Doctor",
      image: "/images/person_3.jpg",
      text: "This foundation is doing incredible work in reducing preventable blindness.",
    },
  ];

  return (
    <main className="overflow-x-hidden bg-white">
      {/* 1. HERO SECTION */}
      <motion.section initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative w-full h-[70vh] md:h-screen flex items-center justify-center bg-[url('/images/bg_5.jpg')] bg-cover bg-center bg-fixed"
      >
        {/* DARK OVERLAY (LEFT → RIGHT FADE) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center text-white px-6">

          {/* Big Title */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-bold">
            About US
          </motion.h1>

        </div>

      </motion.section>


      {/* MISSION VISSION AND OBJECTIVES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className='my-24 px-6 bg-white'
      >

        <motion.div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <motion.div
            variants={itemVariants}
            className='relative w-full min-h-[500px] lg:min-h-[650px]'
          >

            <Image
              src="/images/abt.jpg"
              alt="Eye Care Foundation"
              fill
              priority
              className=""
            />

          </motion.div>

          {/* RIGHT - CONTENT */}
          <motion.div
            variants={itemVariants}
            className='flex flex-col justify-center bg-[#f5f2ee] px-8 md:px-12 lg:px-16 py-5 lg:py-5'
          >
            <motion.div className="max-w-xl">

              {/* SMALL TITLE */}
              <p className="text-[#C99B3B] uppercase tracking-widest text-xs mb-4">
                Welcome to Our Eye Health Foundation
              </p>

              {/* MAIN HEADING */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 mb-2 leading-tight">
                Restoring Sight, Transforming Lives
              </h2>

              {/* MISSION */}
              <p className="text-[#C99B3B] uppercase tracking-widest text-xs mb-2">
                Mission
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
                Our mission is to reduce blindness caused by corneal diseases, cataracts,
                and refractive errors by providing free, high-quality training for eye care
                professionals and delivering accessible, compassionate services across Nigeria.
              </p>

              {/* VISION */}
              <p className="text-[#C99B3B] uppercase tracking-widest text-xs mb-2">
                Vision
              </p>
              <p className="text-gray-600 leading-relaxed mb-2">
                We envision a Nigeria where preventable blindness is eliminated and every
                individual has access to quality and equitable eye care.
              </p>

              {/* OBJECTIVES */}
              <p className="text-[#C99B3B] uppercase tracking-widest text-xs mb-2">
                Objectives
              </p>
              <ul className="text-gray-600 space-y-2 mb-2 list-disc list-inside">
                <li>Train cornea and cataract specialists</li>
                <li>Reduce blindness by 2040</li>
                <li>Establish cornea transplant services</li>
                <li>Build strategic partnerships</li>
                <li>Provide free and equitable eye care</li>
                <li>Train ophthalmic nurses locally</li>
                <li>Promote eye health awareness</li>
              </ul>

              {/* BUTTON */}
              {/* <button className="bg-[#1f6f6f] text-white px-7 py-3 rounded-full font-medium hover:bg-[#155e5e] transition">
                Learn More
              </button> */}
              {/* <button
                type="submit"
                className="
      relative h-12 px-12 
      flex items-center gap-3 
      text-xs font-black uppercase tracking-[0.2em] 
      border-2 border-[#C99B3B] text-[#C99B3B] bg-transparent
      rounded-none 
      transition-colors duration-300
      group-hover:text-white group-hover:border-[#C99B3B]
      z-10 cursor-pointer
    "
              >
                <span className="relative z-10 flex items-center gap-3">
                  Learn More
                  <motion.div
                    variants={{
                      initial: { x: 0 },
                      hover: { x: 5 },
                    }}
                    transition={{
                      repeat: Infinity,
                      repeatType: "reverse",
                      duration: 0.5,
                    }}
                  >
                    <Target size={18} strokeWidth={3} />
                  </motion.div>
                </span>
              </button> */}
            </motion.div>

          </motion.div>

        </motion.div>

      </motion.section>

      {/* TECHNICAL STATISTICS */}

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative w-full py-32 bg-[url('/images/bg_3.jpg')] bg-cover bg-center bg-fixed"
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">

          {/* HEADER */}
          <p className="uppercase tracking-widest text-sm text-gray-300 mb-3">
            Great Reviews For Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-14">
            Technical Statistics
          </h2>

          {/* GRID */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
          >

            <motion.div variants={itemVariants}>
              <StatCard
                icon={<HeartHandshake size={40} />}
                value={60000000}
                label="Fund Raised"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatCard
                icon={<FolderCheck size={40} />}
                value={9200}
                label="Completed Projects"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatCard
                icon={<HandCoins size={40} />}
                value={5800}
                label="Donations"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <StatCard
                icon={<Users size={40} />}
                value={2750}
                label="Volunteers"
              />
            </motion.div>

          </motion.div>
        </div>

      </motion.section>

      {/* 4. OUR VOLUNTEERS */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <span className="text-[#C99B3B] font-black uppercase tracking-widest text-[10px]">MEET OUR VOLUNTEERS</span>
          <h2 className="text-black text-5xl font-bold uppercase tracking-tighter mt-2">Our Volunteer</h2>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              whileHover={{ y: -10 }}
              className="text-center group"
            >

              {/* CARD */}
              <div className="bg-white pt-20 pb-8 px-6  relative">

                {/* IMAGE (FLOATING CIRCLE) */}
                <div className="absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>

                {/* NAME */}
                <h4 className="text-lg uppercase text-black font-semibold mt-4">
                  {member.name}
                </h4>

                {/* ROLE */}
                <p className="text-xs text-[#C99B3B] uppercase mb-4">
                  {member.role}
                </p>

                {/* SOCIAL ICONS */}
                <div className="flex justify-center gap-3 mb-4">

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C99B3B] text-white hover:bg-black transition cursor-pointer">
                    <FaFacebookF size={14} />
                  </div>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C99B3B] text-white hover:bg-black transition cursor-pointer">
                    <FaTwitter size={14} />
                  </div>

                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#C99B3B] text-white hover:bg-black transition cursor-pointer">
                    <FaInstagram size={14} />
                  </div>

                </div>

                {/* BIO */}
                <p className="text-sm text-gray-500">
                  {member.bio}
                </p>

              </div>
            </motion.div>
          ))}

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-32 bg-[url('/images/bg_3.jpg')] bg-cover bg-center bg-fixed">

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">

          {/* HEADER */}
          <p className="uppercase tracking-widest text-sm mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold mb-16">
            What People Says
          </h2>

          {/* SLIDER */}
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={90}
            loop={true}
            speed={1200}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}


            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              768: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              1024: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
            }}
            className="w-full overflow-visible!"
          >

            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card relative h-45 flex flex-col justify-between bg-white text-gray-700 text-left transition-all duration-300 hover:scale-105 hover:-translate-y-2 p-8 shadow-lg">

                  {/* QUOTE ICON */}
                  <div className="absolute -top-5 left-8 z-20 bg-[#C99B3B] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md">
                    <Quote size={18} />
                  </div>

                  {/* TEXT */}
                  <p className="mb-6 leading-relaxed text-sm">
                    {item.text}
                  </p>

                  {/* USER */}
                  <div className="flex items-center gap-4 text-left">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                      className="rounded-full object-cover flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.role}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}

          </Swiper>

        </div>
      </section>


    </main>
  )
}

export default About

