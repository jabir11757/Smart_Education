import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css'

const Blog = () => {
    return (
        <div className='blog-container'>

            <h2 className='mb-5 text-success text-2xl font-bold'>We need to know</h2>
            <Accordion >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><p className='fw-bold'>What is the purpose of react router ?</p></Accordion.Header>
                    <Accordion.Body>
                        React Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><p className='fw-bold'>How does context API works ?</p></Accordion.Header>
                    <Accordion.Body>
                        The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><p className='fw-bold'>What do know about useRef ?</p></Accordion.Header>
                    <Accordion.Body>
                        The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                        useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;