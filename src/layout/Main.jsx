import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Home/shared/Header/Header';
import LeftNav from '../pages/Home/shared/LeftNav/LeftNav';
import RIghtNav from '../pages/Home/shared/RIghtNav/RIghtNav';

const Main = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                    <Outlet/>
                    </Col>
                    <Col lg={3}>
                    <RIghtNav></RIghtNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;