import React, { useState, useEffect } from "react";
import Sentence from "./Sentence";
const Sentences = () => {
  const [sentences, setSentences] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(" ");

  useEffect(() => {
    fetchSentences();
  }, []);

  const fetchSentences = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_SENTENCES_URL}`);
      const data = await response.json();
      setSentences(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.error("Error fetching sentences:", error);
    }
  };

  return (
    <div className="flex items-center flex-col">
      {error && <h1 className="text-center font-bold text-red-500">{error}</h1>}
      {sentences.length === 0 && (
        <h1 className="text-center font-bold text-red-500">
          No Items Available!
        </h1>
      )}

      {!loading &&
        sentences.length > 0 &&
        sentences.map((sentence, index) => (
          <Sentence
            sentence={sentence.sentence}
            key={Math.random() * index * 100}
          />
        ))}
    </div>
  );
};

export default Sentences;
