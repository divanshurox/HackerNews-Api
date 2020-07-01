import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {BsCodeSlash} from 'react-icons/bs'

const navbar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Navbar.Brand style={{color: 'white'}}><BsCodeSlash /> HackerNews</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className='ml-auto'>
                    <Nav.Link className='pl-4'><Link to="/" style={{color: 'white'}}>Home</Link></Nav.Link>
                    <Nav.Link className='pl-4'><Link to="/top" style={{color: 'white'}}>Top</Link></Nav.Link>
                    <Nav.Link className='pl-4'><Link to="/about" style={{color: 'white'}}>About</Link></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default navbar;