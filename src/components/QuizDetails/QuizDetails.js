import React from 'react';

const QuizDetails = ({ topics }) => {
    const { question, options, correctAnswer } = topics;

    console.log(topics)



    return (
        <div>
            <h6>{question}</h6>
            <div className="row row-cols-2">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" />
                    </div>
                    <p>{options[0]}</p>
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" />
                    </div>
                    <p>{options[1]}</p>
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" />
                    </div>
                    <p>{options[2]}</p>
                </div>
            </div>
            <div className="row row-cols-2">
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" />
                    </div>
                    <p>{options[3]}</p>
                </div>
            </div>
        </div>
    );
};

export default QuizDetails;