import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            
            <Player
                src='https://assets5.lottiefiles.com/packages/lf20_bry2jt1u.json'
                className="w-1/3 mb-8"
                autoplay
                loop
            />
            <p className="text-2xl font-bold">Not Found!!</p>
            <Link className="font-bold italic text-violet-600" to='/'>Go to Home page</Link>
        </div>
    );
};

export default Error;