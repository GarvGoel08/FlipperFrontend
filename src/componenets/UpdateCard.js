import React from "react";

export default function UpdateCard({
  showModal,
  setShowModal,
  setQuestion,
  setAnswer,
  question,
  answer,
  updateCard,
  id,
}) {
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        showModal ? "" : "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-[#111222] rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-[#111222] px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-xl leading-6 font-medium text-white"
                  id="modal-headline"
                >
                  Update Card
                </h3>
                <div>
                  <div className="mt-2">
                    <p className=" text-gray-500">
                      <label
                        htmlFor="question"
                        className="block font-medium text-gray-400"
                      >
                        Question
                      </label>
                      <input
                        type="text"
                        name="question"
                        id="question"
                        autoComplete="question"
                        className="mt-1 focus:ring-indigo-500 bg-[#17182c] p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        onChange={(e) => setQuestion(e.target.value)}
                        value={question}
                      />
                    </p>
                    <p className="text-gray-500 mt-2">
                      <label
                        htmlFor="answer"
                        className="block font-medium text-gray-400"
                      >
                        Answer
                      </label>
                      <input
                        type="text"
                        name="answer"
                        id="answer"
                        autoComplete="answer"
                        onChange={(e) => setAnswer(e.target.value)}
                        value={answer}
                        className="mt-1 focus:ring-indigo-500 bg-[#17182c] p-1 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#17182c] px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              onClick={()=>updateCard(id, question, answer)}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-800 text-base font-medium text-white hover:bg-blue-700 focus:outline-none  sm:ml-3 sm:w-auto sm:text-sm"
            >
              Update Card
            </button>
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="mt-3 w-full inline-flex justify-center rounded-md  shadow-sm px-4 py-2 bg-[#232542] text-base font-medium text-gray-100 hover:text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
