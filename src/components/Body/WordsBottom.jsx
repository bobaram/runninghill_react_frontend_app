import { useContext, useState, useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { SentenceContext } from "../context/Context";
const WordsBottom = () => {
  const context = useContext(SentenceContext);

  const [words, setWords] = useState([]);
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(" ");

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const wordType = queryParams.get("type");
  const fetchWords = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/words/wordlist?type=${wordType}`
      );

      const data = await response.json();

      setWords(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, [wordType]);

  useEffect(() => {
    fetchWords();
  }, [fetchWords]);

  return (
    <div className=" border border-black shadow w-3/4  p-4">
      <h2 className="text-lg text-center font-semibold">Matching Words</h2>
      {/* Display the words here based on the selected type */}
      {/* Replace the placeholder with your actual word list */}
      {error && <h1 className="text-center font-bold text-red-500">{error}</h1>}

      <div
        onClick={context.updateSentenceFn}
        className="hidden md:grid grid-cols-4  gap-4 mt-4 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400"
        style={{ maxHeight: "400px" }}
      >
        {!loading &&
          words.map((word, index) => (
            <div
              id="word"
              key={Math.random() * 1000 * index}
              className="cursor-pointer text-white rounded-full mt-1 ml-2 p-3 flex items-center   
          transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
              style={{ width: "fit-content" }}
            >
              {word.word}
            </div>
          ))}
      </div>

      {!loading && (
        <select
          value={context.word}
          onChange={context.handleSelection}
          className="w-full p-2 mt-4 border border-black  rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
        >
          <option value="">Select a word</option>
          {words.map((word, index) => (
            <option key={Math.random() * 1000 * index} value={word.word}>
              {word.word}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default WordsBottom;
