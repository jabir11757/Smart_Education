import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'
import video3 from '../../videos/video3.mp4'

const CourseVideo = () => {

    const courses = [
        {
            title: "React JS",
            video: video2
        },
        {
            title: "JavaScript",
            video: video1
        },
        {
            title: "CSS",
            video: video3
        },
    ]
    return (
        <div>
            <h1 className='text-2xl font-bold mt-10'>Course Video</h1>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    courses.map(course =>
                        <div className="card shadow-2xl">
                            <div className="card-body">
                                <h2 className="card-title">{course.title}</h2>
                            </div>
                            <video src={course.video} controls />
                        </div>)
                }
            </div>

            <button className='btn btn-outline'><Link to='/topics'>Go to Course Topics</Link></button>
        </div>
    );
};

export default CourseVideo;