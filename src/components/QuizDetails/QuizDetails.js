import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData()
    const { questions, total } = quiz.data
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [isHidden, setIsHidden] = useState(true)
    const setCorrect = () => {
        setCorrectAnswer((prev) => prev + 1)
    }
    return (
        <div className="mt-8 p-4">
            <h2 className="font-bold text-xl mb-8">Correct Answers: {correctAnswer}/{total}</h2>

            <div onClick={() => setIsHidden(true)} className={`${isHidden ? 'scale-0' : 'scale-100'} bg-slate-900/70 flex justify-center items-center w-full h-screen z-10 fixed top-0 left-0`}>
                <div className="max-w-xl p-8 rounded bg-green-600 text-white">
                    <h2 className="text-xl font-bold">Congrats on completion the quiz.</h2>
                    <h2 className="text-2xl font-bold">Your Score is: {correctAnswer}/{total}</h2>
                </div>
            </div>
           
                {
                questions.map((question, index) => <Questions key={index} question={question} setCorrect={setCorrect} />)
            }
            
            <button onClick={() => setIsHidden(false)} className="py-2 px-4 rounded bg-violet-700 text-white font-bold my-8">Submit Answers</button>
            
        </div>
    );
};

export default QuizDetails;