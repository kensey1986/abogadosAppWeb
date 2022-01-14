import {CarrouselAuto} from '../../components/carousel/carousel'
import About from '../../components/about/about'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css';

import React from 'react'

export const Home = () => {
    return (
        <div className='container-home'>
        <Row>
            <Col xs={12}>
           <CarrouselAuto/>
            </Col>
            <Col xs={12}>
           <About/>
            </Col>
        </Row>
        </div>
    )
}


