import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './Header.scss'

import { Logo } from '../Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Service from '../../pages/Service';
import Contacts from '../../pages/Contacts';
import Login from '../../pages/Login'

const Header = (props) => {
    return (
        <header>

            <Navbar fixed='top' className="bg-body-transparent">
                <Container fluid >
                    <Navbar.Brand href="/"><Logo fill='#222' /></Navbar.Brand>
                </Container>
                <Nav
                    className="fs-5"
                >
                    <Nav.Link href="/service">Услуги</Nav.Link>
                    <Nav.Link href="/contacts">Контакты</Nav.Link>
                    <Nav.Link href="#"><FontAwesomeIcon icon={faBagShopping} /></Nav.Link>
                    <Nav.Link href="/login"><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>
                    <Router>
                        <Routes>
                            <Route exact path='/service' element={Service} />
                            <Route exact path='/contacts' Component={Contacts} />
                            <Route exact path='/login' Component={Login} />
                        </Routes>
                    </Router>
                </Nav>
            </Navbar>
            <div className='Text'>
                <div className="Title">
                    <h1>{props.title}</h1>
                </div>
                <div className="Description">
                    <p>{props.description}</p>
                </div>
            </div>

        </header>

    )
}

export default Header