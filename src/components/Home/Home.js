import React from 'react';
import CourseVideo from '../CourseVideo/CourseVideo'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-bg'>
                <div className='home-container'>
                    <h6 className='text-3xl'>Stay with <span className='font-bold text-success'>Smart Education</span> & stay hungry to grab knowledge.</h6>
                </div>
            </div>
            <CourseVideo />
        </div>
    );
};

export default Home;