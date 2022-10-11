import React from 'react';
import './Quiz.css'


const Quiz = ({ quiz }) => {
    const { id, name, logo, total } = quiz;
    return (

        <div>
            <img src={logo} alt='' />
            <div className='d-flex'>
                <p>{name}</p>
                <p>Quizzes: {total}</p>
                <button btn btn-dark>Let's Start</button>
            </div>
        </div>
    );
};

export default Quiz;