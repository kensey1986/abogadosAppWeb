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
import people from '../../assets/all/people.jpg'



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const HistoryComponent = () => {
    return (
        <Container  sx={{  marginLeft: {  xl:24 }, marginY: { xs: 2  }, }}>
            <Grid container spacing={5} >
            <Grid item xs={12} md={3}  lg={3}  >
            </Grid>
                <Grid item xs={12} md={6} xl={6} lg={6}  >
                    <Item>
                        <Card variant="outlined" sx={{ height: {xs:710, sm:630, md:750, lg:665} }}>
                            <CardMedia
                                component="img"
                                sx={{ height: {xs:200, sm:300, lg:330} }}
                                image={people}
                                alt="informacion"
                            />
                            <CardContent >
                                <Typography sx={{ textAlign: 'center'}}gutterBottom variant="h5" component="div">
                                    NOSOTROS
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify'}}>
                                   Lorem <strong> GARCIA Y ASOCIADOS S.A.S.</strong>ipsum dolor sit amet consectetur adipisicing elit. Nam ratione repudiandae reprehenderit exercitationem ipsam numquam debitis repellendus nulla recusandae expedita quas, corporis ab sequi minima modi quidem rem? Aperiam, ratione.
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus ipsam itaque ducimus blanditiis in recusandae dicta reprehenderit nesciunt esse consectetur, veniam architecto, fuga ut sequi! Similique quibusdam voluptatum architecto iste!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
            </Grid>


        </Container>


    )
}

export default HistoryComponent
