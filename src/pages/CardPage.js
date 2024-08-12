import React, { useEffect, useState } from "react";
import FlipCard from "../componenets/FlipCard";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import { useLocation, useNavigate } from "react-router-dom";

export default function CardPage() {
  const [isRevealed, setIsRevealed] = useState(false);
  const location = useLocation();
  const { cards } = location.state || { cards: [] };
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRevealClick = () => {
    setIsRevealed(!isRevealed);
  };

  const handleNextClick = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsRevealed(false); 
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsRevealed(false); 
    }
  };
  const navigate = useNavigate();

  useEffect(() => {
    const tokenExpiry = localStorage.getItem("tokenExpiry");
    if (tokenExpiry && Date.now() < tokenExpiry) {
    }
    else{
      navigate("/");
    }
  }, []);

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex flex-col grow justify-center items-center">
        <FlipCard
          isRevealed={isRevealed}
          setIsRevealed={setIsRevealed}
          handleRevealClick={handleRevealClick}
          question={cards[currentIndex]?.question}
          answer={cards[currentIndex]?.answer}
        />
        <div className="flex py-4 justify-center items-center">
          <button
            onClick={handlePreviousClick}
            className={`bg-[#0b0c19] text-white p-4 py-2 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            Previous
          </button>
          <button
            onClick={handleNextClick}
            className={`bg-[#0b0c19] text-white ml-6 p-4 py-2 ${
              currentIndex === cards.length - 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === cards.length - 1}
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
