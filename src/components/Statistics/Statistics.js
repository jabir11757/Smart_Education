import React from 'react';
import { XAxis, YAxis, Tooltip, LineChart, Line } from 'recharts';
import './Statistics.css'

const data = [
    {
        name: 'React.JS',
        total: 8,
        // pv: 2400,
        // amt: 2400,
    },
    {
        name: 'JavaScript',
        total: 9,
        // pv: 1398,
        // amt: 2210,
    },
    {
        name: 'CSS',
        total: 8,
        // pv: 9800,
        // amt: 2290,
    },
    {
        name: 'Git',
        total: 11,
        // pv: 3908,
        // amt: 2000,
    },

];

const Statistics = () => {
    return (
        <div className='statics'>
            <LineChart height={400} width={500} data={data}>
                <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Statistics;