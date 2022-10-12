import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './QuizTopic.css'

const QuizTopic = () => {

    const quizData = useLoaderData();

    const { questions } = quizData.data;

    return (
        <div className='container'>

            <div className='quiz'>

                {
                    questions.map(topics => <QuizDetails key={topics.id} topics={topics} />)
                }

            </div>

        </div>
    );
};

export default QuizTopic;