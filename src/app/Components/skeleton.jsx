// components/FullCardSkeleton.js
import React from "react";

const LandingSkeleton = () => {
  return (
    <div className="animate-pulse w-full p-4 space-y-4">
      <div className="h-svh w-full bg-gray-300 rounded-md"></div>
      <div className="space-y-2">
        <div className="h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
      </div>
    </div>
  );
};

export default LandingSkeleton;
