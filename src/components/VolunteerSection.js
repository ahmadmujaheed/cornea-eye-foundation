"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Mail, MessageSquare, Target } from "lucide-react";
import { Form, Input, Button, notification } from "antd";

const { TextArea } = Input;

// Professional Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const VolunteerSection = () => {
  const [form] = Form.useForm();

  // Notification for successful submission
  const openNotification = () => {
    notification.success({
      message: "Application Submitted",
      description:
        "Thank you for your interest. Our outreach team will review your application and contact you soon!",
      placement: "bottomRight",
    });
  };

  // Handle form submission
  const onFinish = (values) => {
    console.log("Volunteer Application:", values);
    openNotification();
    form.resetFields(); // Reset the form after success
  };

  return (
    <>
      {/* SECTION 1: THE PITCH (Overlapping Background) */}
      <section className="bg-gray-100 pt-32 pb-60 px-6 relative overflow-hidden">
        {/* Subtle Background Pattern (Optional) */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -z-10 translate-x-1/4 skew-x-12" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center"
        >
          {/* Left Column: Mission Description */}
          <div className="md:pr-10">
            <motion.span
              variants={itemVariants}
              className="text-[#C99B3B] font-bold uppercase tracking-[0.2em] text-sm mb-5 block"
            >
              Global Outreach Program
            </motion.span>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8"
            >
              Join the Movement <br />
              To Eradicate Blindness
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-600 text-lg leading-relaxed mb-12"
            >
              Preventable blindness isn't just a medical issue; it’s an economic
              and educational one. From surgical specialists to community
              organizers, we need every skill set on the ground.
            </motion.p>

            <div className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center"
              >
                <Target className="text-[#C99B3B] shrink-0" size={20} />
                <span className="text-gray-800 font-semibold text-lg">
                  Focus on preventable cataract care
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex gap-4 items-center"
              >
                <Target className="text-[#C99B3B] shrink-0" size={20} />
                <span className="text-gray-800 font-semibold text-lg">
                  Building sustainable local clinics
                </span>
              </motion.div>
            </div>
          </div>

          {/* Right Column: The Visual Side */}
          <motion.div
            variants={itemVariants}
            className="relative w-full h-100 md:h-137.5"
          >
            {/* Decorative background box to add "Premium" depth */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-200 -z-10" />

            <motion.div
              className="relative w-full h-full overflow-hidden shadow-2xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/images/outreach_map.jpg" // Your high-quality outreach photo
                alt="Medical Outreach"
                fill
                className="object-cover"
              />

              {/* Subtle Overlay to match the site's dark aesthetic if needed */}
              <div className="absolute inset-0 bg-black/5" />
            </motion.div>

            {/* Floating Stat Badge (Optional Detail) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 shadow-xl hidden md:block"
            >
              <p className="text-[#C99B3B] font-black text-2xl">15+</p>
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest leading-tight">
                Countries <br /> Served
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* SECTION 2: THE FORM (Overlapping White Box) */}
      <section className="bg-white relative px-6">
        <div className="max-w-7xl mx-auto -mt-40 z-30 relative mb-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-none border border-gray-100 grid grid-cols-1 md:grid-cols-5 gap-16"
          >
            {/* Form Left Side: Form Description */}
            <div className="md:col-span-2 space-y-10">
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-gray-50 border border-gray-100 text-[#C99B3B]">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2 text-gray-900">
                    Volunteer Application
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm">
                    Please provide your details and experience below. Our
                    mission teams will review all submissions quarterly.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 items-start">
                <div className="p-3 bg-gray-50 border border-gray-100 text-[#C99B3B]">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-1 text-gray-900">
                    Direct Contact
                  </h3>
                  <p className="text-[#C99B3B] font-semibold text-base tracking-tight hover:underline cursor-pointer">
                    outreach@yourngo.org
                  </p>
                </div>
              </div>
            </div>

            {/* Form Right Side: The AntD Form */}
            <div className="md:col-span-3">
              <Form
                form={form}
                name="volunteer_application"
                layout="vertical"
                onFinish={onFinish}
                scrollToFirstError
                className="premium-form"
              >
                {/* Name and Email in one row (flex) */}
                <div className="flex flex-col md:flex-row md:gap-6">
                  <Form.Item
                    name="name"
                    label={
                      <span className="text-xs uppercase tracking-widest font-black text-gray-600">
                        Full Name
                      </span>
                    }
                    rules={[
                      { required: true, message: "Please input your name!" },
                    ]}
                    className="flex-1 mb-6!"
                  >
                    <Input
                      placeholder="Amina Khan"
                      className="h-12 rounded-none! border-gray-200!"
                    />
                  </Form.Item>

                  <Form.Item
                    name="email"
                    label={
                      <span className="text-xs uppercase tracking-widest font-black text-gray-600">
                        Email Address
                      </span>
                    }
                    rules={[
                      {
                        type: "email",
                        message: "The input is not valid E-mail!",
                      },
                      { required: true, message: "Please input your E-mail!" },
                    ]}
                    className="flex-1 mb-6!"
                  >
                    <Input
                      placeholder="amina.k@email.com"
                      className="h-12 rounded-none! border-gray-200!"
                    />
                  </Form.Item>
                </div>

                {/* Message / Experience */}
                <Form.Item
                  name="message"
                  label={
                    <span className="text-xs uppercase tracking-widest font-black text-gray-600">
                      Tell us about your skill set and interest
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: "Please tell us about your experience!",
                    },
                  ]}
                  className="mb-8!"
                >
                  <TextArea
                    placeholder="E.g., Opthalmologist (12 years experience), or Community Outreach Coordinator..."
                    rows={6}
                    className="rounded-none! border-gray-200! resize-none"
                  />
                </Form.Item>

                {/* Submit Button */}
                <Form.Item className="mb-0!">
                  <motion.div
                    whileHover="hover"
                    initial="initial"
                    className="relative overflow-hidden inline-block group"
                  >
                    {/* 1. The Sliding Background Layer (Black) */}
                    <motion.div
                      className="absolute inset-0 bg-[#C99B3B] z-0"
                      initial={{ x: "-100%" }}
                      variants={{
                        hover: { x: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />

                    <button
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
                        Submit Application
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
                    </button>
                  </motion.div>
                </Form.Item>
              </Form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default VolunteerSection;
