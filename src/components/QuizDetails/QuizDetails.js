import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const QuizDetails = () => {
    const quiz = useLoaderData()
    const {questions} = quiz.data
    console.log(quiz.title);
    return (
        <div className="mt-8 p-4">
            
           
                {
                    questions.map((question, index) => <Questions key={index} question={question}/>)
                }
            
        </div>
    );
};

export default QuizDetails;