import { useCallback, useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const WordsTop = () => {
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedType, setSelectedType] = useState("");
  const [wordTypes, setWordTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  const pushQueryString = (wordtype) => {
    const query = {
      type: wordtype,
    };
    const currentPath = location.pathname;
    const queryString = new URLSearchParams(query).toString();
    navigate(`${currentPath}?${queryString}`);
  };

  const handleSelection = (e) => {
    pushQueryString(e.target.value);
    setSelectedType(e.target.value);
  };

  const fetchCollectionNames = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:5000/api/words/collections"
      );
      const data = await response.json();

      setWordTypes(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }, []);

  useEffect(() => {
    fetchCollectionNames();
  }, [fetchCollectionNames]);

  return (
    <div className="flex flex-col  justify-evenly w-1/2	 p-4">
      <label htmlFor="wordTypes" className="text-lg text-center font-semibold">
        WORDTYPES
      </label>
      {error && <h1 className="text-center font-bold text-red-500">{error}</h1>}

      {loading && !error && <h1 className="text-center">Loading...</h1>}
      {!loading && (
        <select
          data-testid="wordTypes"
          className="w-full p-2 mt-1 text-center border border-black   rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={selectedType}
          onChange={handleSelection}
        >
          <option value="">Select a word type</option>
          {wordTypes.map((type) => (
            <option data-testid="type" key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default WordsTop;
