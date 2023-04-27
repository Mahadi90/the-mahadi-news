import React from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container>
        {/* top navbar */}
      <div className="text-center">
        <img className="w-50 mt-4 rounded" src={logo} alt="" />
        <p className="text-secondary ">Journalism Without Fear or Favour</p>
        <p className="fw-bold">{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex my-3 p-3 bg-secondary">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger bg-white rounded" speed={50}>
        Shahin Notir Pola k Dhore Fel.
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...........     
        </Marquee>
      </div>

      {/* main navbar */}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="mb-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">
              <Link className="text-decoration-none text-white" to='/'>Home</Link>
            </Nav.Link>
            <Nav.Link className="text-white" href="#pricing">About</Nav.Link>
            <Nav.Link className="text-white" href="#pricing">Career</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="text-white" href="#deets">Profile</Nav.Link>
            <Nav.Link className="text-white" eventKey={2} href="#memes">
            <Button variant="danger">Login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Container>
  );
};

export default Header;
