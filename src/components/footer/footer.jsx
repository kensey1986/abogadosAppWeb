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
               <h1>
                   <strong>
               Contactar 
                   </strong>
                   <span className='icon-whatsapp'><FaWhatsapp/></span>
               </h1>
               <h4>PRINCIPAL:</h4>
               <span>AV. 4. Nº 11-17 </span>
               <h5>EDIFICIO BEN-HUR</h5>
               <span>CÚCUTA - NORTE DE SANTANDER</span>
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
