import React, { useState, useEffect } from "react";
import "./Loader.css";

type LoaderProps = {
  isLoading: boolean;
};

export default function Loader({ isLoading }: LoaderProps) {
  return (
    <>
      {isLoading && (
        <div className="fixed top-[57px] left-0 right-0 z-50 h-1 bg-gray-200">
          <div className="h-1 bg-teal-500 animate-progress"></div>
        </div>
      )}
    </>
  );
}
