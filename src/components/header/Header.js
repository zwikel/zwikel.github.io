import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

import "./Header.css";

function Header() {
    return (
        <Navbar collapseOnSelect expand="md" fixed='top' variant="dark" className="header-navbar">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link style={{color: "white"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{color: "white"}} href="#about">About</Nav.Link>
                        <Nav.Link style={{color: "white"}} href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;