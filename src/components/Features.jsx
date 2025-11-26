// components/Features.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Easy Manage",
      desc: "Add, edit, and remove products easily.",
    },
    {
      title: "Analytics",
      desc: "Track product performance and sales trends.",
    },
    {
      title: "Secure",
      desc: "Keep your data safe with security protocols.",
    },
    {
      title: "24/7 Support",
      desc: "Get support from our expert team.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-12">Features & Benefits</h2>
      <div className="grid md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
        {features.map((f, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-5 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-103"
          >
            <h3 className="text-2xl text-sky-400 font-semibold mb-4">
              {f.title}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
