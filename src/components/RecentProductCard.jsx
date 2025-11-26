"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Loading from "./Loading";
import { motion } from "framer-motion";

const RecentProductCard = ({ product, index }) => {
  const { title, image, price, category, shortDescription, _id } = product;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  if (product.length === 0) {
    return <Loading />;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/2 rounded-lg overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 100vw"
          loading={index === 0 ? "eager" : "lazy"}
        />
      </div>

      {/* Card Body */}
      <div className="pl-1 px-8 py-1">
        <p className="text-lg font-semibold">
          Name: <span className="font-normal">{title}</span>
        </p>

        <h3 className="text-sm">
          Category: <span className="badge bg-pink-900/40">{category}</span>
        </h3>

        <p className="text-sm">
          Description: <span className="font-normal">{shortDescription}</span>
        </p>

        <p className="font-semibold">
          Amount: <span className="font-normal">{price} (BDT)</span>
        </p>
      </div>
      <div className="flex justify-center items-center mx-auto w-full pb-2">
        <Link
          href={`/products/${_id}`}
          className="btn btn-sm w-full text-white bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 rounded"
        >
          See Details
        </Link>
      </div>
    </motion.div>
  );
};

export default RecentProductCard;
