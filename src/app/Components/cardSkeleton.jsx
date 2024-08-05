// components/SkeletonCard.js
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 w-full rounded-md"></div>
      <div className="mt-2">
        <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded mt-1 w-1/2"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
