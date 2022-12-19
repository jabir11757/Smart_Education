import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Topics.css'

const Topics = () => {
    const quizzes = useLoaderData();

    return (
        <div>
            <h1 className='text-2xl font-bold my-16'>Course Topics</h1>

            <div className='container'>

                {
                    quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default Topics;