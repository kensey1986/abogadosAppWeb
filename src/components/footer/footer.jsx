import React from 'react'
import './footer.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
import logo from '../../assets/logo/logo.png';
import { FaWhatsapp } from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='container-footer'>
           <Row>
               <Col>
               <h2>
                   <strong>
               Contactar 
                   </strong>
                   <span><a className='icon-whatsapp' href="https://wa.me/573114775792" target="_blank" rel="noopener noreferrer"><FaWhatsapp/></a></span>
               </h2>
               <h5>PRINCIPAL:</h5>
               <span>AV. 4. Nº 11-17 </span>
               <h5>EDIFICIO BEN-HUR</h5>
               <p>CÚCUTA - NORTE DE SANTANDER</p>
               <p>Email: colectivodeabogadosgarcia-asociados@hotmail.com</p>
               </Col>
               <Col className='container-logo-footer'>
               <Image 
                            className="logo-footer"
                            src={logo}
                            alt="Garcia & Asociados"
                        />
               </Col>
           </Row>
        </div>
    )
}
