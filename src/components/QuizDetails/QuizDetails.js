import React from 'react';

const QuizDetails = ({ topics }) => {
    const { correctAnswer, id, question } = topics.data.questions;

    console.log(question)
    return (
        <div>
            {/* <h2>{questions.length} </h2> */}
        </div>
    );
};

export default QuizDetails;