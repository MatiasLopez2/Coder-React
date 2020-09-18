import React from 'react';
import {Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import style from 'bootstrap/dist/css/bootstrap.css';
import CartIcon from './cardicon';

class myNav extends React.Component{

    render(){

        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">E-commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#products">Productos</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                    <CartIcon/>
            </Navbar>
        )
    }
}

export default myNav;