import React from 'react';

const Questions = ({ question }) => {
    const {id, question: title, options, correctAnswer} = question;
    // console.log(question);
    return (
        <div>
            <div className="border rounded p-3 m-2 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-xl mx-auto gap-3 my-8">
                {
                    options.map(option => <button className="py-4 px-4 w-full rounded bg-violet-600 inline-block font-bold text-white">{option}</button>)
                }
            </div>
        </div>
        </div>
    );
};

export default Questions;