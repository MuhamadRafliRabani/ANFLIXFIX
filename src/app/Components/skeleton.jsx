// components/FullCardSkeleton.js
import React from "react";

const LandingSkeleton = () => {
  return (
    <div className="w-full animate-pulse space-y-4 p-4">
      <div className="h-svh w-full rounded-md bg-gray-300"></div>
      <div className="space-y-2">
        <div className="h-6 w-3/4 rounded bg-gray-300"></div>
        <div className="h-4 w-1/2 rounded bg-gray-300"></div>
      </div>
    </div>
  );
};

export default LandingSkeleton;
