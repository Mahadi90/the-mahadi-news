import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter, FaInstagram } from 'react-icons/fa';
import Qzon from "../Q-zone/Qzon";
import bgImg from '../../assets/bg.png'

const RIghtNav = () => {
  return (
    <div className="">
     <div>
     <h4>Login With</h4>
      <Button className="mb-2 w-100" variant="outline-danger"> <FaGoogle/> Login with Google</Button>
      <Button className="mb-2 w-100" variant="outline-secondary"><FaGithub/> Login with Github</Button>
      <Button className="mb-2 w-100" variant="outline-primary"><FaFacebook/> Login with Facebook</Button>
     </div>
     <div className="my-3">
        <h4>Find US On</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook className="text-primary"/> FaceBook</ListGroup.Item>
      <ListGroup.Item><FaTwitter className="text-primary"/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram className="text-danger"/> Instagram</ListGroup.Item>
    </ListGroup>
     </div>
     <Qzon/>
     <div className="my-3 position-relative text-white text-center">
      <img className="img-fluid" src={bgImg} alt="" />
      <div className="position-absolute top-0 start-0 text-center">
        <h3 className="text-white mt-5">Create an Amazing Newspaper</h3>
        <p className="my-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button className="btn btn-danger">Learn More</Button>
      </div>
     </div>
    </div>
  );
};

export default RIghtNav;
