import React, { useEffect, useState } from "react";
import CardInfo from "./CardInfo";
import AddCard from "./AddCard";
import { useNavigate } from "react-router-dom";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const getCards = async () => {
      const res = await fetch(`${baseURL}flipcards/`, {
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      if (res.ok) {
        const data = await res.json();
        const revData = data.reverse();
        setShowModal(false);
        setCards(revData);
      }
    };
    getCards();
  }, []);

  const addCard = async () => {
    const res = await fetch(`${baseURL}flipcards/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        answer: answer,
      }),
      credentials: "include",
    });
    if (res.ok) {
      const newCard = await res.json();
      setCards([newCard.flipCard, ...cards]);
    }
  };
  const deleteCard = async (id) => {
    const res = await fetch(`${baseURL}flipcards/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (res.ok) {
      const deletedCard = await res.json();
      const newCards = cards.filter((card) => card.id !== id);
      setCards(newCards);
    }
  };
  const updateCard = async (id, question, answer) => {
    const res = await fetch(`${baseURL}flipcards/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
        answer: answer,
      }),
      credentials: "include",
    });
    if (res.ok) {
      const updatedCard = await res.json();
      const newCards = cards.map((card) => {
        if (card.id === id) {
          card.question = question;
          card.answer = answer;
          return card;
        }
        return card;
      });
      setCards(newCards);
    }
  };
  const navigate = useNavigate();
  const redirectToCards = () => {
    navigate("/Cards", { state: { cards: cards } });
  };
  const shuffleCards = () => {
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    navigate("/Cards", { state: { cards: shuffledCards } });
  };

  return (
    <div className="p-4 overflow-y-auto flex-grow">
      <div className="flex flex-row flex-wrap justify-between">
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-800 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          + Add New Card
        </button>
        <div>
          <button
            onClick={() => redirectToCards()}
            className=" font-bold py-2 px-2 rounded"
          >
            <img
              src="https://img.icons8.com/?size=100&id=85165&format=png&color=ffffff"
              className="h-[24px]"
            />
          </button>
          <button
            onClick={() => shuffleCards()}
            className=" font-bold py-2 px-2 rounded"
          >
            <img
              src="https://img.icons8.com/?size=100&id=91479&format=png&color=ffffff"
              className="h-[24px]"
            />
          </button>
        </div>
      </div>
      {cards.map((card) => (
        <CardInfo key={card.id} Question={card.question} Answer={card.answer} id={card.id} deleteCard={deleteCard} updateCard={updateCard}/>
      ))}
      <AddCard
        showModal={showModal}
        setShowModal={setShowModal}
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        setAnswer={setAnswer}
        addCard={addCard}
      />
    </div>
  );
}
