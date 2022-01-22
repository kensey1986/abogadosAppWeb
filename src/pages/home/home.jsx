import {CarrouselAuto} from '../../components/carousel/carousel'
import AboutComponent from '../../components/about/about'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import React from 'react'

export const Home = () => {
    return (
        <div className='container-home'>
        <Row>
            <Col xs={12}>
           <CarrouselAuto/>
            </Col>
            <Col xs={12}>
           <AboutComponent/>
            </Col>
        </Row>
        </div>
    )
}


