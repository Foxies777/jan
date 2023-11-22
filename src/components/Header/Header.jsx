import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './Header.scss'

import { Logo } from '../Logo'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faCircleUser } from '@fortawesome/free-solid-svg-icons'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Service from '../../pages/Service'
import Contacts from '../../pages/Contacts'
import Login from '../../pages/Login'
import App from '../../App';

const Header = (props) => {
    return (
        <>
            <header>

                <Navbar fixed='top' className="bg-body-transparent">
                    <Container fluid >
                        <Navbar.Brand href="/App"><Logo fill='#222' /></Navbar.Brand>
                    </Container>
                    <Nav
                        className="fs-5"
                    >
                        <Nav.Link href="/service">Услуги</Nav.Link>
                        <Nav.Link href="/contacts">Контакты</Nav.Link>
                        <Nav.Link href="#"><FontAwesomeIcon icon={faBagShopping} /></Nav.Link>
                        <Nav.Link href="/login"><FontAwesomeIcon icon={faCircleUser} /></Nav.Link>

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
            <Router>
                <Routes>
                    <Route exact path='/App' element={<App/>}/>
                    <Route exact path='/service' element={<Service/>} />
                    <Route exact path='/contacts' element={<Contacts/>} />
                    <Route exact path='/login' element={<Login/>} />
                </Routes>
            </Router>
        </>
    )
}

export default Header