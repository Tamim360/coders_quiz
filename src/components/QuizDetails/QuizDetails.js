import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData()
    const { questions, total } = quiz.data
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const setCorrect = () => {
        setCorrectAnswer((prev) => prev + 1)
    }
    return (
        <div className="mt-8 p-4">
            <h2 className="font-bold text-xl mb-8">Correct Answers: {correctAnswer}/{total}</h2>
           
                {
                questions.map((question, index) => <Questions key={index} question={question} setCorrect={setCorrect} />)
            }
            
            <button className="py-2 px-4 rounded bg-violet-700 text-white font-bold my-8">Submit Answers</button>
            
        </div>
    );
};

export default QuizDetails;