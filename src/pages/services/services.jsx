import React, { useContext } from 'react';
import "./services.css";
import Container from "@mui/material/Container";
import { DataContext } from "../../context/Context";
import { ServicesComponent } from '../../components/services/services';
import { v4 as uuidv4 } from 'uuid';
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

import Grid from '@mui/material/Grid';

export const Services = () => {
  const { services } = useContext(DataContext);
 
  return (
    
    <main>
      
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

          <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {
             services.map(services => {
              return (<ServicesComponent services ={services} key={uuidv4()}>

              </ServicesComponent>)
            }) 
            }
          </Grid>
        </Container>


      {/* <Container maxWidth="sm">
        <div>
          {
            services.map(services => {
              return (<ServicesComponent services ={services} key={uuidv4()}>

              </ServicesComponent>)
            })
          }
        </div>
      </Container> */}
    </main>
  );
};
