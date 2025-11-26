// "use client";
// import React from "react";
// import { motion } from "framer-motion";

// export default function CTA() {
//   return (
//     <div className="py-5 md:py-20 px-4 w-full">
//       <h2 className="text-4xl font-bold mb-8 text-center">Call To Action</h2>
//       <section className="flex justify-center">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.96, y: 20 }}
//           whileInView={{ opacity: 1, scale: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           viewport={{ once: true }}
//           className="
//           w-full 
//           bg-white 
//           rounded-3xl 
//           shadow-[0_8px_30px_rgba(0,0,0,0.08)] 
//           p-5 md:p-16 
//           text-center 
//           border border-gray-100
//         "
//         >
//           {/* Top Title */}
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
//             Start managing your products <br /> smarter & faster
//           </h2>

//           {/* Subtitle */}
//           <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
//             Powerful tools to track, organize, and manage your products
//             effortlessly — designed for modern businesses.
//           </p>

//           {/* Button Group */}
//           <div className="mt-8 flex justify-center gap-4 flex-wrap">
//             <button
//               className="
//               px-8 py-3 rounded-full 
//               bg-linear-to-r from-blue-600 to-purple-600 
//               text-white font-semibold shadow-md 
//               hover:shadow-lg hover:opacity-90 transition
//             "
//             >
//               Get Started
//             </button>

//             <button
//               className="
//               px-8 py-3 rounded-full 
//               border border-gray-300 
//               text-gray-700 font-semibold 
//               hover:bg-gray-100 transition
//             "
//             >
//               Learn More
//             </button>
//           </div>
//         </motion.div>
//       </section>
//     </div>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <div className="py-5 md:py-20 px-4 w-full">
      <h2 className="text-4xl font-bold mb-8 text-center">Call To Action</h2>
      <section className="flex justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          // --- FIX 1: Cleaned up className for motion.div ---
          className="w-full bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-5 md:p-16 text-center border border-gray-100"
        >
          {/* Top Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Start managing your products <br /> smarter & faster
          </h2>

          {/* Subtitle */}
          <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Powerful tools to track, organize, and manage your products
            effortlessly — designed for modern businesses.
          </p>

          {/* Button Group */}
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button
              // --- FIX 2: Cleaned up className for Button 1 ---
              className="px-8 py-3 rounded-full bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition"
            >
              Get Started
            </button>

            <button
              // --- FIX 3: Cleaned up className for Button 2 ---
              className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
            >
              Learn More
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}