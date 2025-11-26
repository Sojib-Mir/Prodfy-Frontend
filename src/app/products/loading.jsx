import React from "react";

export default function Loading() {
  return (
    <div className="w-full text-center py-20 px-4">
      <h1 className="font-bold text-2xl text-center p-5 text-gray-700">
        All Product
      </h1>

      {/* Loading Indicator / Spinner */}
      <div className="flex justify-center items-center h-48">
        {/* Simple Tailwind Spinner (replace with a custom skeleton if needed) */}
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"
          role="status"
          aria-label="Loading products"
        ></div>
      </div>

      <p className="text-lg text-gray-500 mt-4">
        Loading products, please wait...
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {[...Array(4)].map((_, index) => (
          <div
            key={index}
            className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 h-48 animate-pulse shadow"
          >
            <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded mb-1"></div>
            <div className="h-4 w-1/2 bg-gray-300 dark:bg-gray-600 rounded"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
