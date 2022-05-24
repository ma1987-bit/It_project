import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import image from './Logo.png'
import './logo.css'



export default function NavBar() {
  return (
 
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
     
      <Navbar.Brand href="./">
      <img src={image} alt="" 
          className="logo" 
          />
       JML
      </Navbar.Brand>
     
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse  id="responsive-navbar-nav">
        <Nav >
          <Nav.Link as={Link} to={"/"}>Vergelijkbaar</Nav.Link>
          <Nav.Link as={Link} to={"/Searchgeschidenis"}>Zoekgeschiedenis</Nav.Link>
          <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    
  );
}
