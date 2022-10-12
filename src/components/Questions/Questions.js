import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye } from 'react-icons/fa'

const Questions = ({ question , setCorrect }) => {
    const {id, question: title, options, correctAnswer, total} = question;
    const [clicked, setClicked] = useState(null)
    const [showCorrect, setShowCorrect] = useState(null)

    const showCorrectAnswer = () => {
        setShowCorrect(true)
        toast.success(`Correct Answer is: ${correctAnswer}`, {
            position: "top-center",
            autoClose: 1500
        })
    }

    const checkAnswer = (e) => {
        setClicked(true)
        const isCorrect = e.target.innerText === correctAnswer
        if (isCorrect) {
            setCorrect()
            e.target.classList.add('bg-green-700')
            toast.success("Yay! you made it bro...", {
                position: "top-center",
                autoClose: 1500
            })
        } else {
            e.target.classList.add('bg-red-700')
            toast.error("Opps! Wrong answer!", {
                position: "top-center",
                autoClose: 1500
            })
        }
    }

    return (
        <div>
            
            <div className={`${clicked && 'pointer-events-none'} border rounded p-3 m-2 max-w-2xl mx-auto bg-slate-50 shadow-xl ${showCorrect && 'pointer-events-none'}`}>
                <div className="md:flex justify-between items-center">
                    <h2 className="text-xl font-bold">{title}</h2>
                    <button onClick={() => showCorrectAnswer()} className="font-bold mt-8 md:mt-0 md:ml-8" title="Show Answer"><FaEye/></button>
                </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 max-w-xl mx-auto gap-3 my-8`}>
                {
                        options.map(option => {
                            if (showCorrect) {
                                if (option === correctAnswer) {
                                    return (
                                        <button className={`bg-green-600 py-4 px-4 w-full rounded inline-block font-bold text-white`}>{option}</button>
                                    )
                                } else {
                                    return (
                                        <button onClick={(e) => checkAnswer(e)} className={`bg-violet-600 py-4 px-4 w-full rounded inline-block font-bold text-white`}>{option}</button>
                                    )
                               }
                            } else {
                                return (
                                    <button onClick={(e) => checkAnswer(e)} className={`bg-violet-600 py-4 px-4 w-full rounded inline-block font-bold text-white`}>{option}</button>
                                )
                           }
                        })
                }
            </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Questions;