import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const Blog = () => {
    const location = useLocation()
    const {title, image, content} = location.state
    return (
        <div className="max-w-xl mx-auto mt-4 p-4">
            <button className="mx-3  font-bold"><Link className="flex items-center justify-between gap-2" to='/blogs'><FaArrowLeft />go back</Link></button>
            <img className="w-full mt-8" src={image} alt="" />
            <h2 className="text-2xl font-bold my-8">{title}</h2>
            <p className="font-semibold mb-4">{content}</p>
        </div>
    );
};

export default Blog;