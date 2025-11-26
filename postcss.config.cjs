// postcss.config.cjs
// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     require('autoprefixer'),
//     require('postcss-preset-env')({
//       // Stage 0 enable করে যাতে @property সহ পরীক্ষামূলক CSS ফিচারগুলি হ্যান্ডেল হয়
//       stage: 0, 
//       features: {
//         // নিশ্চিত করে যাতে custom-properties সঠিকভাবে সংরক্ষিত হয়
//         'custom-properties': true
//       }
//     })
//   ]
// };

// postcss.config.cjs
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-preset-env')({
      stage: 0, 
    })
  ]
};