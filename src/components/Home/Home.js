import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Banner } from '../Banner/Banner';
import Quizes from '../Quizes/Quizes';


export const QuizesContext = createContext([])
const Home = () => {
    const quizes = useLoaderData()
    return (
        <div className="mb-8">
            <QuizesContext.Provider value={quizes.data}>
                <Banner />
                <Quizes />
            </QuizesContext.Provider>
            
        </div>
    );
};

export default Home;