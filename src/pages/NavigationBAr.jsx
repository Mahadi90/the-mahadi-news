import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const NavigationBAr = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
      logOut()
      // .then(result => console.log(result.user))
      // .catch(error => console.log(error))
    }

    return (
        <div>
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
                <Button onClick={handleLogout} variant="dark">Log out</Button>
              ) : (
                <Link to="/login">
                  <Button variant="danger">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </div>
    );
};

export default NavigationBAr;