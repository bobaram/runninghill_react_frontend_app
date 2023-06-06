import React, { createContext, useState } from "react";

// Create the context
const SentenceContext = createContext();

// Create the provider component
const SentenceProvider = ({ children }) => {
  const [sentence, setSentence] = useState([]);

  //   // Function to update the paragraph value
  //   const updateSentence = (newSentence) => {
  //     setSentence(newSentence);
  //   };

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
  };

  return (
    <SentenceContext.Provider value={value}>
      {children}
    </SentenceContext.Provider>
  );
};

export { SentenceContext, SentenceProvider };
