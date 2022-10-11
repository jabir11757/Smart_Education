import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css'


const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (

        <div className='quiz-container shadow p-3 mb-5 bg-body rounded'>


            <img src={logo} alt='' />

            <div className='quiz-details'>
                <p><small>{name}</small></p>
                <p><small>Quizzes: {total}</small></p>
                <Link to={`/quiz/${id}`} className='button'>
                    <button className='btn btn-dark'>Start</button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;