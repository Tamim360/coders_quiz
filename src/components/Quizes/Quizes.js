import React, { useContext } from 'react';
import { QuizesContext } from '../Home/Home';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const quizes = useContext(QuizesContext)
    return (
        <div>
            <h2 className="text-4xl font-semibold border-b-2 inline-block">All Quizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 mt-8">
                {
                    quizes.map(quiz => <Quiz key={quiz.id} quiz={quiz}/>)
                }
            </div>
        </div>
    );
};

export default Quizes;