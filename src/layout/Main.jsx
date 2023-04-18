import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../shared/Foorter/Footer';
import Header from '../shared/Header/Header';
import LeftNav from '../shared/LeftNav/LeftNav';
import RIghtNav from '../shared/RIghtNav/RIghtNav';

const Main = () => {
    return (
        <div>
           <Header/>

           <Container>
            <Row>
                <Col lg={3}>
                <LeftNav/>
                </Col>
                <Col lg={6}>
                <h2>Main Content is comming.....</h2>
                </Col>
                <Col lg={3}>
                <RIghtNav/>
                </Col>
            </Row>
           </Container>

           <Footer/>
        </div>
    );
};

export default Main;