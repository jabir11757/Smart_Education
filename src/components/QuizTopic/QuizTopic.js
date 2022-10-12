import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import Toast from '../Toast/Toast';
import './QuizTopic.css'

const QuizTopic = () => {

    const quizData = useLoaderData();
    // console.log(quizData.data.questions[0].options)
    const { questions } = quizData.data.questions;


    return (
        <div className='container'>

            <div className='quiz'>

                <h6>{ }</h6>
                {/* {
                    questions.map(topics => <QuizDetails key={topics.id} topics={topics} />)
                } */}

                <div className="row row-cols-2">
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" />
                        </div>
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                        <Toast />
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" />
                        </div>
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" />
                        </div>
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" />
                        </div>
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizTopic;