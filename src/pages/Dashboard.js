import React, { useEffect } from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import CardList from "../componenets/CardList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
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
    <div className="h-full flex flex-col">
      <Navbar />
      <CardList />
      <Footer />
    </div>
  );
}
