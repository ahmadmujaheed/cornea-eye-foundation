"use client"
import React, { useState } from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react";
import { Input, Select, Button, Pagination } from "antd";
import Link from "next/link";


// Sample Data - In production, this would come from your CMS or API
const allPosts = [
  {
    id: 1,
    category: "Medical",
    title: "The Science of Sight: How New Laser Tech is Changing Lives",
    excerpt:
      "Exploring the latest advancements in portable laser technology that allows our teams to perform surgeries in remote villages.",
    image: "/images/blog_large_1.jpg",
    author: "Dr. Sarah Chen",
    date: "April 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Stories",
    title: "A Father's Hope: Reconnecting with Family After 5 Years",
    excerpt:
      "After living in complete darkness for half a decade, Samuel shares the moment he finally saw his daughter's face again.",
    image: "/images/blog_large_2.jpg",
    author: "James Wilson",
    date: "April 08, 2026",
    readTime: "4 min read",
  },
  {
    id: 3,
    category: "Outreach",
    title: "Dispatch: 48 Hours in the Northern Rural Districts",
    excerpt:
      "Our volunteer team traveled 400 miles to set up a temporary clinic. Here is what we discovered on the front lines.",
    image: "/images/blog_large_3.jpg",
    author: "Elena Rodriguez",
    date: "March 29, 2026",
    readTime: "8 min read",
  },
  {
    id: 4,
    category: "Medical",
    title: "Childhood Vision: Why Early Screening Matters",
    excerpt:
      "Statistics show that 80% of learning is visual. We dive into our latest initiative in primary schools.",
    image: "/images/blog_large_4.jpg",
    author: "Dr. Marcus Tobe",
    date: "March 15, 2026",
    readTime: "5 min read",
  },
  {
    id: 1,
    category: "Medical",
    title: "The Science of Sight: How New Laser Tech is Changing Lives",
    excerpt:
      "Exploring the latest advancements in portable laser technology that allows our teams to perform surgeries in remote villages.",
    image: "/images/blog_large_1.jpg",
    author: "Dr. Sarah Chen",
    date: "April 12, 2026",
    readTime: "6 min read",
  },
  {
    id: 2,
    category: "Stories",
    title: "A Father's Hope: Reconnecting with Family After 5 Years",
    excerpt:
      "After living in complete darkness for half a decade, Samuel shares the moment he finally saw his daughter's face again.",
    image: "/images/blog_large_2.jpg",
    author: "James Wilson",
    date: "April 08, 2026",
    readTime: "4 min read",
  },
];

const programs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };


  return (
    <main className='overflow-x-hidden bg-white'>
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[70vh] md:h-screen flex items-center justify-center bg-[url('/images/bg_2.jpg')] bg-cover bg-center bg-fixed">

        {/* DARK OVERLAY (LEFT → RIGHT FADE) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

        {/* CONTENT */}
        <div className="relative z-10 text-center text-white px-6">

          {/* Big Title */}
          <h1 className="text-5xl md:text-6xl font-bold">
            Programs
          </h1>

        </div>

      </section>

      {/* 2. BLOG GRID */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20"
        >
          {allPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="group bg-[#f5f2ee] overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* IMAGE */}
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                />

                {/* CATEGORY BADGE */}
                <div className="absolute bottom-[-12px] left-6 bg-[#C99B3B] text-white text-xs px-4 py-1 rounded-full shadow-md">
                  {post.category}
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6 pt-8 transition-all duration-300 group-hover:bg-[#e9e3d9]">

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-6">
                  {post.excerpt}
                </p>

                {/* PROGRESS BAR */}
                <div className="mb-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-900 w-[70%] group-hover:bg-[#C99B3B] transition-all duration-500"></div>
                  </div>
                </div>

                {/* STATS */}
                <div className="flex justify-between text-sm">
                  <span>
                    Raised: <span className="font-semibold text-gray-900">$9,800</span>
                  </span>
                  <span>
                    Goal: <span className="text-[#1f6f6f] font-semibold">$15,000</span>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* 3. PAGINATION */}
        <div className="mt-24 flex justify-center border-t border-gray-100 pt-12">
          <Pagination
            defaultCurrent={1}
            total={50}
            className="premium-pagination"
            showSizeChanger={false}
          />
        </div>
      </section>

      <style jsx global>{`
        .premium-pagination .ant-pagination-item-active {
          border-color: transparent!important;
          background-color: #C99B3B !important;
          border-radius: 50% !important;
        }
        .premium-pagination .ant-pagination-item-active a {
          color: white !important;
        }
        .premium-pagination .ant-pagination-item:hover {
          background-color: #C99B3B !important;
          border-radius: 50% !important;
        }
        .ant-input:focus,
        .ant-input-focused {
          box-shadow: none !important;
          border-color: transparent !important;
        }
      `}</style>
    </main>
  )
}

export default programs