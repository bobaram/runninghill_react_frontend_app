import WordsTop from "./WordsTop";
import WordsBottom from "./WordsBottom";

const WordList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-screen">
        <div className="flex items-center flex-col">
          <WordsTop />
          <WordsBottom />
        </div>
      </div>
    </div>
  );
};

export default WordList;
