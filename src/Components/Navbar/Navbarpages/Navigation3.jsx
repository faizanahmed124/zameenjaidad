import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Features from '../Dropdownpages/Features';
import Plans from '../Dropdownpages/Plans';
import Accontants from '../Dropdownpages/Accountants';
import Apps from '../Dropdownpages/Apps';
import Support from '../Dropdownpages/Support';
import { Link } from "react-router-dom";


const Navigation3 = () => {
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-2">
          <Container fluid>
            <Navbar.Brand className="me-0">
              <Link to="/">
                <img 
                  src="/assets/images/Logo.png"
                  alt="Monmatics Logo" 
                  className="img-fluid" 
                  style={{ maxHeight: '50px', width: 'auto' }}
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Link to="/">
                    <img 
                      src="/assets/images/Logo.png"
                      alt="Monmatics Logo" 
                      className="img-fluid" 
                      style={{ maxHeight: '40px', width: 'auto' }}
                    />
                  </Link>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href=""><Features/></Nav.Link>
                  <Nav.Link href=""><Plans/></Nav.Link>
                  <Nav.Link href=""><Accontants/></Nav.Link>
                  <Nav.Link href=""><Apps/></Nav.Link>
                  <Nav.Link href=""><Support/></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Navigation3;