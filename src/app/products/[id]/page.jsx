"use client";

import ProductCardSkeleton from "@/components/ProductCardSkeleton";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductPage() {
  const router = useRouter();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  console.log(product);

  useEffect(() => {
    if (!id) return;
    fetch(`https://prodfy-server.vercel.app/products/${id}`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!product) return <ProductCardSkeleton />;

  return (
    <div className="flex justify-center my-10">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-xl overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-2xl">
        <div className="relative w-full h-80">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="p-6 flex flex-col justify-between">
          <div className="space-y-2">
            <p className="text-gray-800 font-semibold">
              Name: <span className="font-normal">{product.title}</span>
            </p>
            <p className="font-semibold text-gray-800">
              Category:{" "}
              <span className="font-normal text-pink-700">
                {product.category}
              </span>
            </p>
            <p className="text-gray-800 font-semibold">
              Description:{" "}
              <span className="font-normal">{product.fullDescription}</span>
            </p>

            <p className="text-gray-800 font-semibold">
              Price: <span className="font-normal">{product.price} (BDT)</span>
            </p>

            <p className="text-gray-800 font-semibold">
              Seller Name: <span className="font-normal">{product.user}</span>
            </p>

            <p className="text-gray-800 font-semibold">
              Date: <span className="font-normal">{product.createdAt}</span>
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 btn border-none text-white rounded bg-linear-to-r from-blue-700 to-pink-700 opacity-50">
              Buy Now
            </button>

            <button
              onClick={() => router.push("/products")}
              className="flex-1 text-center py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition-colors"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
