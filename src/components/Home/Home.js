import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Home = () => {
    const quizzes = useLoaderData();


    console.log(quizzes)
    return (
        <div>
            {
                quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
            }
        </div>
    );
};

export default Home;