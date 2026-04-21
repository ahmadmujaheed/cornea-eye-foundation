"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, Calendar, User, ArrowRight, Filter } from "lucide-react";
import { Input, Select, Button, Pagination } from "antd";
import Link from "next/link";

const { Option } = Select;

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
];

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

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
    <main className="bg-white min-h-screen">
      {/* 1. HERO SECTION WITH SEARCH */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/blog_hero.jpg" // High-quality medical/nature image
          alt="Blog Hero"
          fill
          priority
          className="object-cover z-0"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />

        <div className="relative z-20 text-center px-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C99B3B] font-bold uppercase tracking-[0.3em] text-xs mb-4 block"
          >
            Insights & Impact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight uppercase tracking-tighter"
          >
            The Vision <br /> Journal
          </motion.h1>

          {/* Search/Filter Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-2 shadow-2xl flex flex-col md:flex-row items-center gap-2 max-w-2xl mx-auto"
          >
            <Input
              prefix={<Search size={18} className="text-gray-400" />}
              placeholder="Search stories, medical updates..."
              className="h-12 border-none! focus:ring-0! rounded-none!"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="h-10 w-px bg-gray-200 hidden md:block" />
            <Select
              defaultValue="All Categories"
              className="w-full md:w-48 h-12 rounded-none!"
              bordered={false}
            >
              <Option value="all">All Categories</Option>
              <Option value="medical">Medical Tech</Option>
              <Option value="stories">Patient Stories</Option>
              <Option value="outreach">Field Reports</Option>
            </Select>
            <button className="bg-black text-white h-10 px-8 font-bold uppercase text-xs rounded-none! border-none hover:bg-[#C99B3B] cursor-pointer transition-colors">
              Find
            </button>
          </motion.div>
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
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative h-75 w-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#C99B3B] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1.5 text-[#C99B3B]">
                    <Calendar size={14} /> {post.date}
                  </span>
                  <span className="text-gray-200">|</span>
                  <span className="flex items-center gap-1.5">
                    <User size={14} /> {post.author}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#C99B3B] transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-500 text-sm leading-loose line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                  <Link href={`/blog/${post.id}`}>
                    <span className="text-xs font-black uppercase tracking-widest text-gray-900 flex items-center gap-2">
                      Read Full Story{" "}
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Link>

                  <span className="text-[10px] text-gray-600 font-medium italic">
                    {post.readTime}
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

      {/* 4. FOOTER CTA */}
      <section className="bg-gray-50 py-20 px-6 text-center border-t border-gray-100">
        <h4 className="text-2xl font-bold text-gray-900 mb-4 uppercase tracking-tighter">
          Have a story to share?
        </h4>
        <p className="text-gray-500 mb-8 max-w-lg mx-auto text-sm">
          We are always looking for volunteer writers and patients who want to
          share their journey with the world.
        </p>
        <button className="h-12 px-12 cursor-pointer border text-[#C99B3B] border-[#C99B3B] rounded-none! font-black uppercase tracking-widest text-xs hover:bg-[#C99B3B] hover:text-white! transition-all">
          Contact Editorial Team
        </button>
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
  );
};

export default BlogPage;
