import ProductCard from "@/components/ProductCard";
import React from "react";

const page = async () => {
  const res = await fetch(`https://prodfy-server.vercel.app/products`, {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <div className="w-full">
      <h1 className="font-bold text-4xl text-center p-5 mb-5">All Product</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default page;
