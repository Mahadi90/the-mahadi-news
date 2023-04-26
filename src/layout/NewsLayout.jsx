import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Home/shared/Foorter/Footer';
import Header from '../pages/Home/shared/Header/Header';
import RIghtNav from '../pages/Home/shared/RIghtNav/RIghtNav';

const NewsLayout = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg={9}>
                    <Outlet/>
                    </Col>
                    <Col lg={3}>
                    <RIghtNav></RIghtNav>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default NewsLayout;