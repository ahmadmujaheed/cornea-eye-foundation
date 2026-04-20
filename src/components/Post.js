"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "antd";

const blogPosts = [
  {
    id: 1,
    image: "/images/blog_1.jpg",
    date: "April 18, 2026",
    author: "Surgical Team",
    comments: 24,
    title:
      "The First Glimpse: A Grandmother's Journey After 10 Years of Darkness",
    excerpt:
      "Amina had forgotten the color of the sky and the faces of her youngest grandchildren. After a successful 15-minute bilateral cataract procedure at our mobile clinic, she opened her eyes to a world she thought was lost forever.",
  },
  {
    id: 2,
    image: "/images/blog_2.jpg",
    date: "April 05, 2026",
    author: "Education Lead",
    comments: 15,
    title:
      "Breaking the Cycle of Poverty Through Early Childhood Vision Screenings",
    excerpt:
      "Did you know that 80% of what a child learns is processed through their eyes? This month, our 'Bright Eyes' initiative successfully screened 2,500 students across rural districts, providing simple prescription glasses.",
  },
  {
    id: 3,
    image: "/images/blog_3.jpg",
    date: "March 22, 2026",
    author: "Innovation Lab",
    comments: 9,
    title:
      "Telemedicine: How AI is Helping Our Doctors Detect Glaucoma in Remote Villages",
    excerpt:
      "Innovation meets compassion. Our new partnership with tech leaders has introduced AI-powered diagnostic tools to our field teams, allowing us to transmit high-resolution retinal images to specialists.",
  },
];

const BlogSection = () => {
  // Animation variant for the Arrow icon inside the button
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
        <div className="text-center mb-20">
          <h2 className="text-4xl font-light text-gray-800 uppercase tracking-widest mb-6">
            Recent From Blog
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm">
            Behind every surgery is a human story. Explore how your support is
            restoring sight and dignity to families worldwide.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 gap-x-8 mb-20">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative flex flex-col items-center group"
            >
              {/* 1. Background Image */}
              <div className="relative h-72 w-full overflow-hidden shadow-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* 2. Overlapping White Box */}
              <div className="relative z-10 bg-white w-[92%] -mt-12 p-8 shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-3 text-[12px] text-gray-400 mb-6 font-medium">
                  <span>{post.date}</span>
                  <span>{post.author}</span>
                  <span className="flex items-center gap-1.5">
                    <MessageSquare size={14} className="text-gray-300" />
                    {post.comments}
                  </span>
                </div>

                <h3 className="text-xl font-medium text-gray-800 mb-6 leading-relaxed hover:text-orange-500 transition-colors cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm leading-loose mb-2 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Animated Ant Design Button */}
        <div className="flex justify-center mt-16">
          <motion.div
            whileHover="hover"
            whileTap={{ scale: 0.96 }} // Subtle "press" effect
            className="relative overflow-hidden group"
          >
            {/* The Button */}
            <Button
              className="
            h-14 px-12 
            flex items-center gap-3 
            text-xs font-black uppercase tracking-[0.2em] 
            border-2 border-gray-900 text-gray-900
            rounded-none bg-transparent
            transition-colors duration-300
            group-hover:text-white z-10
          "
            >
              See More Stories
              <motion.span variants={arrowVariants}>
                <ArrowRight size={18} strokeWidth={3} />
              </motion.span>
            </Button>

            {/* The Background Slide Effect */}
            <motion.div
              className="absolute inset-0 bg-gray-900 -z-10"
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

export default BlogSection;
