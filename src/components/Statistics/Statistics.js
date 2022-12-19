import React from 'react';
import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import './Statistics.css'

const data = [
    {
        name: 'React.JS',
        total: 8,
    },
    {
        name: 'JavaScript',
        total: 9,
    },
    {
        name: 'CSS',
        total: 8,
    },
    {
        name: 'Git',
        total: 11,
    },

];

const Statistics = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold mt-6'>Course Statistics</h1>
            <div className='statics'>
                <LineChart height={400} width={500} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;