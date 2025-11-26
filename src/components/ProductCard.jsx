// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// const ProductCard = ({ product }) => {
//   const { title, image, price, category, shortDescription, _id } = product;
//   return (
//     <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/2 rounded-lg overflow-hidden flex flex-col justify-between h-full">
//       {/* Image */}
//       <div className="relative h-48 w-full">
//         <Image
//           src={image}
//           alt={title}
//           fill
//           className="object-cover hover:scale-105 transition-transform duration-300"
//         />
//       </div>

//       {/* Card Body */}
//       <div className="pl-1 px-8 py-1 flex-1">
//         <p className="text-lg font-semibold">
//           <span className="font-normal">{title}</span>
//         </p>

//         <h3 className="text-sm">
//           <span className="bg-pink-900/40 px-1 rounded">{category}</span>
//         </h3>

//         <p className="text-sm mt-2">
//           <span className="font-normal">{shortDescription}</span>
//         </p>

//         <p className="font-semibold mt-2">
//           <span className="font-normal">{price} (BDT)</span>
//         </p>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center items-center mx-auto w-full pb-2">
//         <Link
//           href={`/products/${_id}`}
//           className="btn btn-sm w-full text-white bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 rounded"
//         >
//           See Details
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  const { title, image, price, category, shortDescription, _id } = product;

  // Assuming ProductCard is used in a grid (e.g., 2 cols on mobile, 4 on large screen)
  // This sizes prop reflects that:
  // - On screens up to 768px (mobile/tablet), it might take 50vw (2 columns)
  // - On larger screens, it might take 25vw (4 columns)
  // Adjust the sizes string based on your actual grid layout (e.g., in RecentProduct.jsx)
  const productCardSizes =
    "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw";

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100/2 rounded-lg overflow-hidden flex flex-col justify-between h-full">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          // --- FIX: Added sizes prop to solve the warning ---
          sizes={productCardSizes}
          // Note: Since this card is usually below the fold, 'loading' is kept default ('lazy')
        />
      </div>

      {/* Card Body */}
      <div className="pl-1 px-8 py-1 flex-1">
        <p className="text-lg font-semibold">
          <span className="font-normal">{title}</span>
        </p>

        <h3 className="text-sm">
          <span className="bg-pink-900/40 px-1 rounded">{category}</span>
        </h3>

        <p className="text-sm mt-2">
          <span className="font-normal">{shortDescription}</span>
        </p>

        <p className="font-semibold mt-2">
          <span className="font-normal">{price} (BDT)</span>
        </p>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mx-auto w-full pb-2">
        <Link
          href={`/products/${_id}`}
          className="btn btn-sm w-full text-white bg-linear-to-r from-blue-700 to-pink-700 hover:from-blue-800 hover:to-pink-800 transition-colors duration-300 rounded"
        >
          See Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
