import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-pink-600 text-2xl font-bold animate-pulse">
        Loading... ⏳
      </div>
    </div>
  );
}
