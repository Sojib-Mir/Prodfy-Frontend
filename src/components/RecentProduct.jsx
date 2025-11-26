import React from "react";
import RecentProductCard from "./RecentProductCard";

const RecentProduct = async () => {
  const res = await fetch(`https://prodfy-server.vercel.app/products-recent`, {
    cache: "no-store",
  });
  const products = await res.json();

  return (
    <>
      <div className="w-full mt-10">
        <h2 className="text-4xl font-bold mb-5">Recent Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <RecentProductCard key={product._id} index={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default RecentProduct;
