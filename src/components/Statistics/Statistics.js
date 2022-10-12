import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const totalData = useLoaderData()
    const data = totalData.data.map(singleTotal => {
       return { name: singleTotal.name, total: singleTotal.total }
    })
    return (
        <div className="flex flex-col items-center mt-32">
        <ResponsiveContainer width="80%" height={300}>
            <LineChart data={data}>
                <Line type="monotone" dataKey="total" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
            <p className="text-violet-600 font-bold mt-8">Total Quizes</p>
        </div>
    );
};

export default Statistics;