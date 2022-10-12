import React from 'react';
import './QuizDetails.css'
import { EyeIcon } from '@heroicons/react/24/solid'
import Card from '../Card/Card';
import { toast } from 'react-toastify';
import Toast from '../Toast/Toast';


const QuizDetails = ({ topics }) => {
    const { question, options, correctAnswer } = topics;

    const answerHandler = () => {
        toast(correctAnswer);
    }

    return (
        <div className='questions-container'>
            <div className='queIcon'>
                <h6 className='mx-4 my-4'>{question}</h6>
                <EyeIcon onClick={answerHandler} className='icon' />
            </div>
            <div className='options-container'>
                <div className='card shadow p-3 mb-5 bg-body rounded'>
                    {
                        options.map(option => <Card
                            key={option.id}
                            option={option}
                        />)
                    }
                </div>
                <Toast answerHandler={answerHandler} />


            </div>
        </div>





    );

};



export default QuizDetails;



