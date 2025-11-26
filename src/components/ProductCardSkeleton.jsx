import React from "react";

export default function ProductCardSkeleton() {
  return (
    <div className="my-25">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden animate-pulse border border-gray-100">
        <div className="relative w-full h-48 bg-gray-200 dark:bg-gray-700"></div>
        <div className="p-4 space-y-3">
          <div className="h-5 w-3/4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="h-4 w-1/2 bg-pink-200 dark:bg-pink-800 rounded"></div>
          <div className="h-6 w-1/3 bg-gray-300 dark:bg-gray-600 rounded"></div>
          <div className="mt-4 h-9 bg-blue-400 dark:bg-blue-800 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
