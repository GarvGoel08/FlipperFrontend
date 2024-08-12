import React, { useState } from "react";
import UpdateCard from "./UpdateCard";

export default function CardInfo({ Question, Answer, id, deleteCard, updateCard }) {
  const [showModal, setShowModal] = useState(false);
  const [question, setQuestion] = useState(Question);
  const [answer, setAnswer] = useState(Answer);
  return (
    <div className="flex overflow-y-auto flex-col py-2 gap-4">
      <UpdateCard
        showModal={showModal}
        setShowModal={setShowModal}
        question={question}
        setQuestion={setQuestion}
        answer={answer}
        setAnswer={setAnswer}
        updateCard={updateCard}
        id={id}/>
      <div className="bg-white flex flex-row justify-between bg-opacity-5 shadow-md rounded-md p-4">
        <div className="overflow-hidden">
          <h2 className="text-lg font-semibold text-white overflow-hidden">{Question}</h2>
          <p className="text-sm text-gray-400 overflow-hidden">{Answer}</p>
        </div>
        <div className="flex min-w-[88px] flex-row gap-2">
          <button className="font-bold min-w-[24px] py-2 px-2 rounded">
            <img
              src="https://img.icons8.com/?size=100&id=71201&format=png&color=ffffff"
              className="h-[24px]"
              onClick={() => setShowModal(true)}
            />
          </button>

          <button className="font-bold min-w-[24px] py-2 px-2 rounded">
            <img
              src="https://img.icons8.com/?size=100&id=67884&format=png&color=ffffff"
              className="h-[24px]"
              onClick={() => deleteCard(parseInt(id))}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
