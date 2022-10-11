import React, { useState } from 'react';
import './Questions.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Questions = ({ question , setCorrect }) => {
    const {id, question: title, options, correctAnswer, total} = question;
    const [clicked, setClicked] = useState(null)

    const checkAnswer = (e) => {
        setClicked(true)
        const isCorrect = e.target.innerText === correctAnswer
        if (isCorrect) {
            setCorrect()
            e.target.classList.add('green')
            toast.success("Yay! you made it bro...", {
                position: "top-center",
                autoClose: 1500
            })
        } else {
            e.target.classList.add('red')
            toast.error("Opps! Wrong answer!", {
                position: "top-center",
                autoClose: 1500
            })
        }
    }
    return (
        <div>
            
            <div className="border rounded p-3 m-2 max-w-2xl mx-auto bg-slate-50">
            <h2 className="text-xl font-bold">{title}</h2>
            <div className={`${clicked && 'pointer-events-none'} grid grid-cols-1 md:grid-cols-2 max-w-xl mx-auto gap-3 my-8`}>
                {
                        options.map(option => <button onClick={(e) => checkAnswer(e)} className={`bg-violet-600 py-4 px-4 w-full rounded inline-block font-bold text-white`}>{option}</button>)
                }
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Questions;