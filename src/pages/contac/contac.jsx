import React, { useContext, Fragment } from "react";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Contac = () => {
  const cards = [1];
  return (
    <>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Nuestra Ubicación
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              Nos encontramos ubicados en el centro de la ciudad en la Av. 4 No.
              17-11 Edificio Ben-Hur.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button href="https://wa.me/573114775792" target="_blank" variant="contained" endIcon={<SendIcon />} >Escríbenos</Button>
              <Button href="mailto:colectivodeabogadosgarcia-asociados@hotmail.com" variant="outlined" endIcon={<EmailIcon />}>Correo Electronico</Button>
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md" height="520">
          {/* End hero unit */}
          <Grid container spacing={4} justifyContent="center" alignItems="center" >
            
              <Grid item={true} xs={12}  >
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="iframe"
                    sx={{ height:500
                     
                    }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1760.4547686364153!2d-72.50247936394729!3d7.885943152201291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e66459e769ba77f%3A0x52036d2b1142dbb!2sCOLECTIVO%20DE%20ABOGADOS%20GARCIA%20Y%20ASOCIADOS!5e0!3m2!1sen!2sus!4v1656073672607!5m2!1sen!2sus"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Dirección 
                    </Typography>
                    <Typography>
                    Avenida 4 #11-17 Oficina 201 ed BEN HUR, Cúcuta, Norte de Santander, Colombia.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">View</Button>
                    <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
        </Container>
      </main>
    </>
  );
};
