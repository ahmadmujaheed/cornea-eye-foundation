"use client";

import React from "react";
import { FloatButton } from "antd";
import { motion } from "framer-motion";
import { ShareAltOutlined } from "@ant-design/icons";

const FloatBtn = () => {
  // Animation for the icons when the group opens
  const iconVariants = {
    initial: { scale: 0, opacity: 0, y: 10 },
    animate: { scale: 1, opacity: 1, y: 0 },
  };

  // Helper component for consistent social images
  const SocialImage = ({ src, alt }) => (
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
    />
  );

  return (
    <div className="premium-float-wrapper">
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 40, bottom: 40 }}
        icon={<ShareAltOutlined />}
        className="group-trigger"
      >
        {/* Facebook */}
        <FloatButton 
          icon={
            <motion.div 
              variants={iconVariants} 
              initial="initial" 
              animate="animate"
              className="flex items-center justify-center w-full h-full"
            >
              <SocialImage src="/icons/facebook.png" alt="Facebook" />
            </motion.div>
          } 
          href="https://facebook.com"
          target="_blank"
        />

        {/* Instagram */}
        <FloatButton 
          icon={
            <motion.div 
              variants={iconVariants} 
              initial="initial" 
              animate="animate" 
              transition={{ delay: 0.1 }}
              className="flex items-center justify-center w-full h-full"
            >
              <SocialImage src="/icons/instagram.png" alt="Instagram" />
            </motion.div>
          } 
          href="https://instagram.com"
          target="_blank"
        />

        {/* LinkedIn */}
        <FloatButton 
          icon={
            <motion.div 
              variants={iconVariants} 
              initial="initial" 
              animate="animate" 
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center w-full h-full"
            >
              <SocialImage src="/icons/linkedin.png" alt="LinkedIn" />
            </motion.div>
          } 
          href="https://linkedin.com"
          target="_blank"
        />

        {/* Back to Top */}
        <FloatButton.BackTop visibilityHeight={400} />
      </FloatButton.Group>

      <style jsx global>{`
        /* 1. INCREASE BUTTON WIDTH & HEIGHT */
        .ant-float-btn, 
        .ant-float-btn-body, 
        .ant-float-btn-content {
          width: 56px !important;  /* Standard premium size */
          height: 56px !important;
        }

        /* 2. FIX IMAGE ALIGNMENT & CENTERING */
        .ant-float-btn-icon {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          width: 100% !important;
          height: 100% !important;
        }

        /* 3. PREMIUM LOOK & COLORS */
        .ant-float-btn-primary .ant-float-btn-body {
          background-color: #000 !important; /* Classic Black */
          transition: all 0.3s ease;
        }

        .ant-float-btn-primary .ant-float-btn-body:hover {
          background-color: #f97316 !important; /* Premium Orange */
        }

        /* 4. SMOOTH HOVER LIFT */
        .ant-float-btn {
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1) !important;
        }
        
        .ant-float-btn:hover {
          transform: translateY(-6px);
        }

        /* Shadow depth */
        .ant-float-btn-body {
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.2) !important;
        }

        /* Adjust the trigger icon size (The Share Icon) */
        .ant-float-btn-primary .ant-float-btn-icon {
          font-size: 22px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default FloatBtn;