import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container className='container'>
                    <div>
                        <Navbar.Brand className='brand' href="/home">Smart Education</Navbar.Brand>
                    </div>
                    <div>
                        <Nav className="me-auto">
                            <Link to='/home'>Home</Link>
                            <Link to='/topics'>Topics</Link>
                            <Link to='/statistics'>Statistics</Link>
                            <Link to='/blog'>Blog</Link>
                        </Nav>
                    </div>
                </Container>
            </Navbar>
        </div>

    );
};

export default Header;