import React from "react";
import { useContext } from "react";
import { SentenceContext } from "../context/Context";
const SentenceCreator = () => {
  const sentence = useContext(SentenceContext);

  return (
    <div className="flex   flex-col items-center">
      <div className="w-full text-center md:w-1/2 p-4">
        {sentence.sentence.length > 0 && (
          <p className="text-xl font-bold		">{sentence.sentence.join(" ")}</p>
        )}
        {sentence.sentence.length <= 0 && (
          <p className="text-xl	 font-bold">No Words Selected</p>
        )}
      </div>

      <div className="w-full md:w-1/2 p-4 flex justify-around">
        <button
          onClick={sentence.deleteSentence}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            sentence.sentence.length <= 0
              ? " disabled opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          DELETE
        </button>
        <button
          onClick={sentence.clearSentence}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            sentence.sentence.length <= 0
              ? " opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          CLEAR
        </button>
        <button
          onClick={sentence.submitSentence}
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            sentence.sentence.length <= 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default SentenceCreator;
