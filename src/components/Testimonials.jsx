// components/Testimonials.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sojib",
      feedback:
        "This product saved me so much time! I can now manage all my products effortlessly and focus on growing my business.",
    },
    {
      name: "Rafi",
      feedback:
        "Amazing features and easy to use. The interface is intuitive and the analytics help me make better every day.",
    },
    {
      name: "Tania",
      feedback:
        "Highly recommend to anyone with inventory needs. The system is reliable, secure, and extremely user-friendly.",
    },
    {
      name: "Imran",
      feedback:
        "Customer support is top-notch! Every time I had an issue, they responded quickly and solved it professionally.",
    },
    {
      name: "Moushumi",
      feedback:
        "A game-changer for my business workflow. I love how seamlessly everything integrates and saves me time.",
    },
    {
      name: "Shawon",
      feedback:
        "Simple, intuitive, and extremely reliable. I couldn’t imagine managing my products without it now.",
    },
    {
      name: "Nabila",
      feedback:
        "Love the analytics feature, very insightful and easy to interpret. Helps me plan my stock and sales strategy.",
    },
    {
      name: "Jisan",
      feedback:
        "Secure and highly satisfied! Knowing my data is protected gives me peace of mind every day.",
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
    <section className="pb-20 pt-10 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Users Say</h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105"
          >
            <h3 className="text-2xl text-sky-400 font-semibold mb-4">
              {t.name}
            </h3>
            <p className="text-xl leading-relaxed text-gray-700">
              {t.feedback}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
