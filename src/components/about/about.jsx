import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

const About = () => {
    return (
        <div className='mt-2 mx-3'>
            <Row>
                <Col xs={12} lg={6}>
                    <Card >
                        <Card.Img className='img-card fluid' variant="top" src="http://garciayasociados.discoil.com.co/assets/images/mision.jpg" />
                        <Card.Body >
                            <Card.Title> <strong>MISIÓN.</strong></Card.Title>
                            <Card.Text className='text-justify cards-text' >
                                El Colectivo de abogados <strong> GARCIA Y ASOCIADOS S.A.S. </strong>, es una organización no
                                gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial,
                                acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales.
                                Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas;
                                que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios,
                                auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos
                                Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho
                                y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz,
                                justa y equitativa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} lg={6}>
                    <Card >
                        <Card.Img className='img-card fluid' variant="top" src="http://garciayasociados.discoil.com.co/assets/images/vision.jpg" />
                        <Card.Body >
                            <Card.Title> <strong>VISIÓN.</strong></Card.Title>
                            <Card.Text className='text-justify cards-text'>
                                    Colectivo de abogados <strong> GARCIA Y ASOCIADOS S.A.S. </strong>. se constituye en Norte de Santander para satisfacer la necesidad de
                                    protección de derechos humanos, el cumplimiento de los acuerdos internacionales del Derecho Internacional humanitario
                                    y la defensa de los intereses personales y colectivos de todos los ciudadanos del territorio Colombiano, con el firme
                                    propósito de convertirnos a corto plazo en un reconocido colectivo a nivel nacional, esto como respuesta a un excelente
                                    trabajo social enfocado al servicio y asistencia en la construcción de una sociedad justa, democrática y equitativa.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
        </div>
    )
}

export default About
