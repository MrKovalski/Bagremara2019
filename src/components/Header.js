import React, { Component } from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from "gatsby";
class Header extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="eventNav">
                <Navbar.Brand as={Link} to="/">
                    <div className="navTitle">BAGREMARA <span>2019</span></div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/prijava">PRIJAVA</Nav.Link>
                        <Nav.Link as={Link} to="/informacije">INFORMACIJE</Nav.Link>
                        <Nav.Link as={Link} to="/smestaj">SMEŠTAJ</Nav.Link >
                        <Nav.Link as={Link} to="/radionice">RADIONICE</Nav.Link>
                        <Nav.Link as={Link} to="/raspored">RASPORED</Nav.Link>
                        <Nav.Link as={Link} to="/poruke">PORUKE</Nav.Link>    
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;