import React from 'react'
import './Footer.scss'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Logo} from '../Logo'
const Footer = () => {
    return (
        <footer>
            <Navbar >
                <Container fluid >
                    <Navbar.Brand href="#"><Logo fill='#fff'/></Navbar.Brand>
                </Container>
                <Nav className="fs-5 text-white-50">
                    <Nav.Link href="#">Услуги</Nav.Link>
                    <Nav.Link href="#">Контакты</Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    )
}
export default Footer