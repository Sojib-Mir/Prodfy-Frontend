"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-11/12 flex flex-col items-center justify-center mx-auto py-35">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-purple-500/20 rounded-2xl shadow-2xl p-8 max-w-xl text-center border border-pink-500/30"
      >
        <h2 className="text-2xl font-bold mb-4">
          Our Product Management System
        </h2>
        <p className="mb-6 opacity-70">
          Our platform helps you manage your products efficiently and
          effortlessly. You can add, update, and organize all your products in
          one smart dashboard. Track stock levels, pricing, categories, and
          product performance with ease. Designed to save your time and boost
          productivity, this system ensures smooth product management for
          businesses of all sizes.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn w-1/2 text-white mt-4 rounded bg-blue-700 hover:bg-pink-700 transition-all duration-300 border-none font-semibold shadow-lg"
        >
          Learn More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default About;
