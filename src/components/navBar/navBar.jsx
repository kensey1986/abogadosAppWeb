import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import './navBar.css';
import logo from '../../assets/logo/logo.png';


export const BarNav = () => {
    return (
        <Navbar className='navBar' collapseOnSelect expand="lg" variant="dark">
            <Container>
                <Row className='container-logo'>
                    <Col className='container-logo-parte-1'>
                        <Image
                            className="logo"
                            src={logo}
                            alt="Garcia & Asociados"
                        />
                    </Col>
                    <Col className='container-logo-parte-2' >
                        <h6>COLECTIVO DE ABOGADOS.</h6>
                        <h1> <strong> Garcia & Asociados. </strong></h1>
                    </Col>
                </Row>
                <Row className='container-menu'>
                    <Col>
                        <Navbar.Toggle className='icon-menu' aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#features">INICIO</Nav.Link>
                                <NavDropdown title="SERVICIOS" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Servicio 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Servicio 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Servicio 3</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">Servicio 4</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link href="#pricing">QUIENES SOMOS</Nav.Link>
                                <Nav.Link href="#pricing">NUESTROS PROFESIONALES</Nav.Link>

                            </Nav>
                            {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                        </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}
