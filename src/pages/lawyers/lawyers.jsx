import React, { Component, useContext } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { DataContext } from "../../context/Context";
import { v4 as uuidv4 } from 'uuid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
export const Lawyers = () => {
    const { data } = useContext(DataContext);
    console.log(data);

    const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
    return (
        <Container sx={{ marginLeft: { xl: 24 }, marginY: { xs: 2 }, }}>
            <Grid container spacing={3} >

                {
                    data.map((lawyers) => {
                        return (
                            <Grid item={true} item xs={12} md={6} xl={6} lg={4} key={uuidv4()}>
                                <Item>
                                    <Card >
                                        <CardHeader sx={{ minHeight:100}}
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                   {lawyers.initial}
                                                </Avatar>
                                            }
                                           
                                            title={lawyers.name}
                                            subheader=" Cel: 315 444 22 33"
                                        />
                                        <CardMedia
                                            component="img"
                                            sx={{ marginLeft:10, height:{ xs: 200, sm: 300, lg: 300 }, width:{ xs: 200, sm: 300, lg: 214 }}}
                                            image={lawyers.img}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                           
                                        </CardContent>
                                        <CardActions disableSpacing>
                                        <Typography variant="h6" color="text.secondary">
                                        Bibliografía.
                                            </Typography>
                                            <ExpandMore
                                                expand={expanded}
                                                onClick={handleExpandClick}
                                                aria-expanded={expanded}
                                                aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography sx={{ textAlign: 'justify' }} paragraph>
                                                   {lawyers.description}
                                                </Typography>
                                                
                                            </CardContent>
                                        </Collapse>
                                    </Card>
                                </Item>
                            </Grid>
                        )
                    })
                }



            </Grid>


        </Container>

    );
};
