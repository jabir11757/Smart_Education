import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='home-bg'>
                <div className='home-container'>
                    <h3>Intro</h3>
                    <h6 className='my-4'>It's a Big platform to increase knowledge.
                        Anyone can attend here to spread out him/herself.
                        So, its a big opportunity for all students.
                        Please, don't be late to join with us.
                    </h6>
                    <button className='btn btn-dark text-white rounded mb-5'>Join Now</button>
                </div>
            </div>
        </div>
    );
};

export default Home;