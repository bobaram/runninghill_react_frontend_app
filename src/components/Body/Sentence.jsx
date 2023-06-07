const Sentence = (props) => {
  return (
    <div className="bg-gray-200 text-center w-1/2 text-black p-4 my-2 transition duration-300 hover:bg-gray-300 hover:text-gray-800">
      <p className="font-semibold">{props.sentence}</p>
    </div>
  );
};

export default Sentence;
