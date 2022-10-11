import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const quizzes = useLoaderData();


    console.log(quizzes)
    return (
        <div>
            <div>
                <h3 className='mt-4'>Intro</h3>
                <h6 className='my-4'>It's a Big platform to increase knowledge.
                    Anyone can attend here to spread out him/herself.
                    So, its a big opportunity for all students.
                    Please, don't be late to join with us.
                </h6>
                <button className='btn btn-dark text-white rounded mb-5'>Join Now</button>
            </div>
            <div className='home'>

                {
                    quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                }
            </div>
        </div>
    );
};

export default Home;