import React from 'react';
import './services.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Services = () => {
    return (
        <div className='container-service'>
            <div class="jumbotron">
                <h1 class="display-4">Nuestros Servicios</h1>
                <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr class="my-4" />
                <Card style={{ width: '18rem' }}>
                    <Card.Header>Featured</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Cras justo odio</ListGroup.Item>
                        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
        </div>
    )
}
