import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ quiz }) => {
  return (
    <div className="border p-4 bg-violet-700 text-white">
      <img className="w-full" src={quiz.logo} alt="" />
      <h3 className="text-2xl font-bold my-3">{quiz.name}</h3>
      <div className="flex items-center justify-between mt-8">
        <p className="font-bold">Total Quiz: {quiz.total}</p>
        <button className="font-bold py-2 px-4 rounded text-violet-600 bg-white hover:shadow-xl">
          <Link to={`/quiz/${quiz.id}`}>Take the quiz</Link>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
