import React, { useContext } from "react";
import logo from "../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { AuthContext } from "../../../../providers/AuthProvider";
import NavigationBAr from "../../../NavigationBAr";

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
      <NavigationBAr/>
    </Container>
  );
};

export default Header;
