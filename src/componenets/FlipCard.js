import React from "react";

export default function FlipCard({isRevealed,setIsRevealed,handleRevealClick,question,answer}) {
  return (
    <div className="perspective-1000 w-[50%] h-[50%] flex justify-center items-center">
      <div
        className={`relative w-full h-full cursor-pointer transform-style-preserve-3d transition-transform duration-700 ${
          isRevealed ? "rotate-y-180" : ""
        }`}
        onClick={handleRevealClick}
      >
        <div className="absolute text-center w-full h-full bg-[#0b0c19] flex justify-center items-center backface-hidden">
          <p className="text-2xl text-white">{question}</p>
        </div>
        <div className="absolute text-center w-full h-full bg-[#0b0c19] flex justify-center items-center backface-hidden rotate-y-180">
          <p className="text-2xl text-white">{answer}</p>
        </div>
      </div>
    </div>
  );
}
