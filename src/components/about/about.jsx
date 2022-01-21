import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import mision from '../../assets/logo/misionpage.jpg'
import vision from '../../assets/logo/visionpage.jpg'



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const About = () => {
    return (
        <Container  sx={{  marginLeft: {  xl:24 }, marginY: { xs: 2  }, }}>
            <Grid container spacing={5} >
                <Grid item xs={12} md={6} xl={6} lg={6}  >
                    <Item>
                        <Card variant="outlined" sx={{ height: {xs:710, sm:630, md:750, lg:665} }}>
                            <CardMedia
                                component="img"
                                sx={{ height: {xs:200, sm:300, lg:330} }}
                                image={mision}
                                alt="Mision"
                            />
                            <CardContent >
                                <Typography sx={{ textAlign: 'center'}}gutterBottom variant="h5" component="div">
                                    MISIÓN
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify'}}>
                                    El Colectivo de abogados <strong> GARCIA Y ASOCIADOS S.A.S.</strong>, es una organización no
                                    gubernamental de Derechos Humanos con animo de lucro, que persigue como fin esencial,
                                    acercar el derecho a las comunidades mas vulnerables de los diferentes sectores sociales y culturales.
                                    Conformada por profesionales del derecho con excelentes capacidades, experiencia, destrezas y técnicas;
                                    que cuenta con el apoyo y acompañamiento constante de estudiantes en formación con enfoque social, becarios,
                                    auxiliares juristas y de otras áreas, quienes basados en su conocimiento defienden y promueven los Derechos
                                    Humanos desde la perspectiva integral, partiendo de su indivisibilidad y la interdependencia de todos los derecho
                                    y libertades, para contribuir con esto a la lucha contra la impunidad y la construcción de una sociedad en paz,
                                    justa y equitativa.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
               
                <Grid item xs={12} md={6} xl={6} lg={6} sx={{ mr:0, pr:0 }}>
                <Item>
                        <Card variant="outlined" sx={{ height: {xs:590, sm:550, md:750, lg:665} }}>
                            <CardMedia
                                component="img"
                                sx={{ height: {xs:200, sm:300, lg:330} }}
                                image={vision}
                                alt="Vision"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                     VISIÓN
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify'}}>
                                Colectivo de abogados <strong> GARCIA Y ASOCIADOS S.A.S.</strong> se constituye en Norte de Santander para satisfacer la necesidad de
                                    protección de derechos humanos, el cumplimiento de los acuerdos internacionales del Derecho Internacional humanitario
                                    y la defensa de los intereses personales y colectivos de todos los ciudadanos del territorio Colombiano, con el firme
                                    propósito de convertirnos a corto plazo en un reconocido colectivo a nivel nacional, esto como respuesta a un excelente
                                    trabajo social enfocado al servicio y asistencia en la construcción de una sociedad justa, democrática y equitativa.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>

            </Grid>


        </Container>


    )
}

export default About
