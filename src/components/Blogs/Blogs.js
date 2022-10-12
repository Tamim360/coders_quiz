import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])
    
    return (
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                blogs.map((blog, index) => {
                    return (
                        <Link className="p-4 rounded border shadow-xl hover:shadow-2xl" key={index} to={`/blog/${blog.id}`} state={blog}>
                            <img className="w-full" src={blog.image} alt={blog.title} />
                            <h2 className="text-2xl font-bold my-4">{blog.title}</h2>
                            <p className="font-semibold">{blog.description}</p>
                            <button className="text-violet-600 py-2 px-4 rounded font-bold mt-4 inline-block">Read More</button>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default Blogs;