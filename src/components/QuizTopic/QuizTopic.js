import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './QuizTopic.css'

const QuizTopic = () => {
    const quizData = useLoaderData();
    console.log(quizData)


    return (
        <div className='container'>
            {/* <h2>Quiz of {quizData.data.questions[0].question}</h2> */}

            <div className='quiz'>

                <h6>questions.................</h6>

                <div className="row row-cols-2">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div className="col">
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                    <div className="col">
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                    <div className="col">
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                    <div className="col">
                        <p>ki obostha tomar, din kal kemon jay ?</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default QuizTopic;