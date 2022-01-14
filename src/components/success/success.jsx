import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Success = () => {
    return (
        <div>
            <Row className="justify-content-md-center">
                <Col  xs lg="6">
                    <Card >
                        <Card.Img variant="top" src="http://garciayasociados.discoil.com.co/assets/images/mision.jpg" />
                        <Card.Body>
                            <Card.Title>MISIÓN</Card.Title>
                            <Card.Text>
                                El Colectivo de abogados GARCIA Y ASOCIADOS S.A.S., es una organización no 
                                gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial, 
                                acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales. 
                                Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas; 
                                que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios,
                                auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos
                                Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho 
                                y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz, 
                                justa y equitativa.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col  xs lg="6">
                    <Card >
                        <Card.Img variant="top" src="http://garciayasociados.discoil.com.co/assets/images/vision.jpg" />
                        <Card.Body>
                            <Card.Title>VISIÓN</Card.Title>
                            <Card.Text>
                            Colectivo de abogados GARCIA Y ASOCIADOS S.A.S. se constituye en Norte de Santander para satisfacer la necesidad de
                            protección de derechos humanos, el cumplimiento de los acuerdos internacionales del Derecho Internacional humanitario
                            y la defensa de los intereses personales y colectivos de todos los ciudadanos del territorio Colombiano, con el firme
                            propósito de convertirnos a corto plazo en un reconocido colectivo a nivel nacional, esto como respuesta a un excelente
                            trabajo social enfocado al servicio y asistencia en la construcción de una sociedad justa, democrática y equitativa.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
                
            </Row>
        </div>
    )
}

export default Success
