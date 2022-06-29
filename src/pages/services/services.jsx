import React, { Component, useContext } from 'react';
import "./services.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "@mui/material/Container";
import { DataContext } from "../../context/Context";
import { ServicesComponent } from '../../components/services/services';
import { v4 as uuidv4 } from 'uuid';
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

export const Services = () => {
  const { services } = useContext(DataContext);
 
  return (
    
    <main>

      {/* <div className='container-service'>
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
    </div> */}
    <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nuestros  Servicios 
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Lorem GARCIA Y ASOCIADOS S.A.S.ipsum dolor sit amet consectetur adipisicing elit. Nam ratione repudiandae reprehenderit 
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
              mb={2}
            >
              <Button href="https://wa.me/573114775792" target="_blank" variant="contained" endIcon={<SendIcon />} >Escríbenos</Button>
              <Button href="mailto:colectivodeabogadosgarcia-asociados@hotmail.com" variant="outlined" endIcon={<EmailIcon />}>Correo Electronico</Button >
            </Stack>
          </Container>
      <Container maxWidth="sm">
        <div>
          {
            services.map(services => {
              return (<ServicesComponent services ={services} key={uuidv4()}>

              </ServicesComponent>)
            })
          }
        </div>
      </Container>
    </main>
  );
};
