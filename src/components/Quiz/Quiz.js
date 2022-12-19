import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'


const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (

        <div className='quiz-container shadow p-3 mb-5 bg-body rounded'>
            <img src={logo} alt='' />

            <div className='quiz-details'>
                <div className='flex mt-2'>
                    <p className='me-2 font-bold'><small>{name}</small></p>
                    <p><small>Quizzes: {total}</small></p>
                </div>
                <Link to={`/quiz/${id}`} className='button'>
                    <button className='btn btn-outline'>Start</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;