"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaShareAlt,
  FaRegCalendarAlt,
  FaRegClock,
  FaQuoteLeft 
} from "react-icons/fa";
import { 
  HiOutlineArrowNarrowLeft, 
  HiOutlineArrowNarrowRight 
} from "react-icons/hi";
import { Button, Avatar } from "antd";

// 1. DATA OBJECT
const blogPosts = {
  "1": {
    category: "Innovation & Tech",
    title: "The Science of Sight: How New Laser Tech is Changing Lives",
    author: "Dr. Sarah Chen",
    date: "April 12, 2026",
    readTime: "6 Min Read",
    image: "/images/blog_large_1.jpg",
    lead: "For decades, performing high-precision eye surgery required a sterile hospital environment. For the 36 million blind worldwide, that hospital is often a thousand miles away.",
    quote: "We didn't just bring technology; we brought a future where distance is no longer a barrier to sight.",
    content: "The V-Series laser uses a low-energy cold-pulse system that can run for 72 hours on a single battery charge. During our testing phase, we treated over 40 patients in a single weekend."
  },
  "2": {
    category: "Patient Story",
    title: "A Father's Hope: Reconnecting with Family After 5 Years",
    author: "James Miller",
    date: "April 15, 2026",
    readTime: "4 Min Read",
    image: "/images/blog_large_2.jpg",
    lead: "In the heart of the Northern Rural Districts, David hadn't seen his daughter's face since she was a toddler. Cataracts had stolen his vision, and with it, his livelihood.",
    quote: "I forgot what the color of the sky looked like until the bandage came off.",
    content: "Our mobile outreach team performed a 15-minute procedure that restored David's sight. He is now back to work and supporting his family for the first time in half a decade."
  },
  "3": {
    category: "Field Report",
    title: "Dispatch: 48 Hours in the Remote Rural Districts",
    author: "Elena Rodriguez",
    date: "April 18, 2026",
    readTime: "8 Min Read",
    image: "/images/blog_large_3.jpg",
    lead: "The logistics of bringing a medical team into a flood-prone valley are daunting. But the reward is seeing a village regain its elders' wisdom.",
    quote: "Access to healthcare is not a luxury; it is a fundamental human right that knows no borders.",
    content: "We set up a temporary clinic using solar-powered equipment. By the second day, word had traveled to neighboring villages, and the line stretched past the treeline."
  },
  "4": {
    category: "Global Health",
    title: "Scaling Impact: The Future of Mobile Medical Clinics",
    author: "Dr. Sarah Chen",
    date: "April 20, 2026",
    readTime: "5 Min Read",
    image: "/images/blog_large_4.jpg",
    lead: "Success in one district is a proof of concept. The real challenge lies in scaling this portability to reach every corner of the globe.",
    quote: "Miniaturization is the key to global health equity.",
    content: "As we look toward 2027, our goal is to deploy 100 V-Series units across three continents, effectively tripling our surgical capacity."
  }
};

const BlogPostPage = ({ params }) => {
  const { slug } = use(params); 

  // Get current post data based on URL slug
  const post = blogPosts[slug] || blogPosts["1"];
  
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <main key={slug} className="bg-white min-h-screen pb-20">
      {/* 1. TOP READING PROGRESS BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-[#C99B3B] z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* 2. EDITORIAL HERO SECTION */}
      <section className="relative h-[75vh] md:h-[85vh] overflow-hidden flex items-end">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src={post.image} 
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-20 w-full text-white">
          <Link href="/blog" className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest mb-8 opacity-80 hover:opacity-100 transition-opacity">
            <HiOutlineArrowNarrowLeft size={20} className="group-hover:-translate-x-2 transition-transform" /> 
            Back to Journal
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-[#C99B3B] text-white text-[10px] uppercase tracking-[0.2em] px-4 py-2 mb-6 inline-block">
              {post.category} | Article ID: {slug}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-black leading-tight uppercase tracking-tighter mb-8">
              {post.title}
            </h1>

            <div className="flex flex-wrap text-[#C99B3B] items-center gap-8 text-sm font-medium opacity-80">
              <div className="flex items-center gap-3">
                <Avatar size="small" className="bg-[#C99B3B]!">{post.author[0]}</Avatar>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2"><FaRegCalendarAlt size={14} /> {post.date}</div>
              <div className="flex items-center gap-2"><FaRegClock size={14} /> {post.readTime}</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MAIN CONTENT AREA */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 pt-20">
        <div className="hidden lg:block lg:col-span-1">
          <div className="sticky top-40 flex flex-col items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest vertical-text rotate-180 mb-4 text-gray-400">Share Story</span>
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaShareAlt].map((Icon, i) => (
              <button 
                key={i} 
                className="p-3 bg-gray-100 text-gray-500 opacity-70 hover:opacity-100 hover:bg-[#C99B3B] hover:text-white rounded-full transition-all flex items-center justify-center border border-gray-200 shadow-sm"
              >
                <Icon size={18} />
              </button>
            ))}
          </div>
        </div>

        <article className="lg:col-span-8 lg:col-start-3">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed font-serif">
            {/* DYNAMIC LEAD PARAGRAPH */}
            <p className="text-2xl font-medium text-gray-900 mb-10 leading-snug">
              {post.lead}
            </p>
            
            {/* DYNAMIC CONTENT PARAGRAPH */}
            <p className="mb-8">
              {post.content}
            </p>

            {/* DYNAMIC QUOTE */}
            <blockquote className="my-16 border-l-4 border-[#C99B3B] pl-8 py-2 italic relative">
               <FaQuoteLeft className="absolute -top-10 -left-4 text-[#C99B3B]/50" size={80} />
               <p className="text-3xl font-black text-gray-900 leading-tight relative z-10">
                 "{post.quote}"
               </p>
               <footer className="mt-4 text-sm font-bold uppercase tracking-widest text-[#C99B3B]">— {post.author}</footer>
            </blockquote>

            <h3 className="text-3xl font-black text-gray-900 mt-16 mb-6 uppercase tracking-tighter">Impact Statistics</h3>
            <p className="mb-8">
              Every procedure represents a life changed. By bringing the clinic to the people, we eliminate the primary barrier to eye care: distance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-16">
                <div className="relative h-72 shadow-2xl bg-gray-100 overflow-hidden">
                    <Image src="/images/outreach_1.jpg" alt="Outreach" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="relative h-72 shadow-2xl bg-gray-100 overflow-hidden">
                    <Image src="/images/outreach_2.jpg" alt="Medical Team" fill className="object-cover hover:scale-110 transition-transform duration-700" />
                </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap gap-3">
             {["Ophthalmology", "Medical Tech", "Impact", "Innovation"].map(tag => (
               <span key={tag} className="text-[11px] font-bold uppercase tracking-widest px-4 py-2 bg-gray-100 text-gray-400 hover:bg-black hover:text-white cursor-pointer transition-all border border-transparent hover:border-black">
                 #{tag}
               </span>
             ))}
          </div>
        </article>
      </section>

      {/* 4. RELATED STORIES */}
      <section className="bg-gray-50 mt-24 py-24 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div>
              <span className="text-[#C99B3B] font-bold uppercase tracking-widest text-xs">Keep Reading</span>
              <h2 className="text-4xl font-black text-gray-900 uppercase tracking-tighter mt-2">Related Stories</h2>
            </div>
            <Link href="/blog">
              <button className="rounded-none! text-black uppercase tracking-widest text-xs h-10 px-10 border border-[#C99B3B] hover:bg-[#C99B3B]! hover:text-white! transition-all">
                View Journal
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map over other posts that aren't the current one */}
            {Object.keys(blogPosts).filter(id => id !== slug).slice(0, 2).map(id => (
              <Link 
                key={id} 
                href={`/blog/${id}`} 
                scroll={true}
                className="group grid grid-cols-1 md:grid-cols-5 gap-6 items-center"
              >
                <div className="md:col-span-2 relative h-56 overflow-hidden shadow-lg bg-gray-200">
                  <Image 
                    src={blogPosts[id].image} 
                    alt={blogPosts[id].title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="md:col-span-3 space-y-3">
                  <span className="text-[10px] font-black text-[#C99B3B] uppercase tracking-widest">
                    {blogPosts[id].category}
                  </span>
                  <h4 className="text-2xl font-bold text-gray-900 group-hover:text-[#C99B3B] transition-colors leading-tight">
                    {blogPosts[id].title}
                  </h4>
                  <div className="inline-flex text-gray-500 items-center gap-2 text-xs font-black uppercase tracking-widest pt-2 group-hover:gap-4 transition-all">
                    Read Story <HiOutlineArrowNarrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .vertical-text { writing-mode: vertical-rl; }
        .prose p {
          font-family: 'Georgia', serif;
          font-size: 1.25rem;
          line-height: 1.85;
          color: #333;
          margin-bottom: 2rem;
        }
      `}</style>
    </main>
  );
};

export default BlogPostPage;