import React, { useContext } from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { user } = useContext(AuthContext);

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
          Shahin Notir Pola k Dhore Fel. Match Highlights: Germany vs Spain — as
          it happened ! Match Highlights: Germany vs Spain as...........
        </Marquee>
      </div>

      {/* main navbar */}
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="mb-4"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
            
                <Link className="text-decoration-none text-white mx-2" to="/">
                  Home
                </Link>
                <Link className="text-decoration-none text-white mx-2">
                  About
                </Link>
                <Link className="text-decoration-none text-white mx-2">
                  Career
                </Link>
            </Nav>
            <Nav>
              {user && (
                <Nav.Link className="text-white" href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}

              {user ? (
                <Button variant="danger">Log Out</Button>
              ) : (
                <Link to="/login">
                  <Button variant="danger">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
