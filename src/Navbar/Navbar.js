import React from "react";
import { Button, Container } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css'



function Navbars() {
    return (
        <>

            <Navbar expand="lg" className="navbar" id="navbar">
                <Container>
                    <Navbar.Brand href="#home" className="logo"><img src={require('../assert/clogo.png')} width={40} height={40} alt="" className="logos" /> LiveWeather</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto header_color">
                            <Nav.Link href="#home" className="header_color">Home</Nav.Link>
                            <Nav.Link href="#link" className="header_color">About</Nav.Link>
                            <Nav.Link href="#link" className="header_color">Map</Nav.Link>
                            
                            <Nav.Link href="#link" className="header_color">Contact</Nav.Link>
                        </Nav>
                        <Nav>
                            <Button className="btns">Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Navbars