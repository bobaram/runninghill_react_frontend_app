import React, { createContext, useState } from "react";

const SentenceContext = createContext();

const SentenceProvider = ({ children }) => {
  const [sentence, setSentence] = useState([]);
  const [word, setWord] = useState(" ");
  const updateSentenceFn = (e) => {
    if (e.target.getAttribute("id") === "word") {
      setSentence((prev) => {
        return [...prev, e.target.textContent];
      });
    }
  };
  const submitSentence = async () => {
    const newSent = sentence.join(" ");
    try {
      const response = await fetch(
        "http://localhost:5000/api/words/sentences",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ sentence: newSent }),
        }
      );

      if (!response.ok) {
        throw new Error("Bad request!");
      }
      setSentence([]);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSelection = (e) => {
    setWord(e.target.value);
    setSentence((prev) => {
      return [...prev, e.target.value];
    });
  };

  const deleteSentence = () => {
    if (sentence.length) {
      setSentence((prevStateArray) => {
        const newArray = [...prevStateArray];
        newArray.pop();
        return newArray;
      });
    }
  };

  const clearSentence = () => {
    if (sentence.length) {
      setSentence([]);
    }
  };

  // Value object to be passed to consumers
  const value = {
    sentence,
    deleteSentence,
    clearSentence,
    updateSentenceFn,
    handleSelection,
    word,
    submitSentence,
  };

  return (
    <SentenceContext.Provider value={value}>
      {children}
    </SentenceContext.Provider>
  );
};

export { SentenceContext, SentenceProvider };
