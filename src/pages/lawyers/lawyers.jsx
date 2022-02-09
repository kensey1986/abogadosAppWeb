import React, { Component, useContext } from 'react';
import { Link } from "react-router-dom";
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
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { LawyersComponent } from '../../components/lawyers/Lawyers';
import { DataContext } from "../../context/Context";
import { v4 as uuidv4 } from 'uuid';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const Lawyers = () => {
    const { data } = useContext(DataContext);
    console.log(data);

    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = (e) => {
        console.log(e)
        setExpanded(!expanded);
    };


    return (
        <Container sx={{ marginLeft: { xl: 24 }, marginY: { xs: 2 }, }}>
            <Grid container spacing={3} >

                {
                    data.map((lawyers) => {
                        return (
                            <Grid item={true} item xs={12} sm={12} md={6}  lg={4}  key={uuidv4()}>
                                <Item>
                                    <LawyersComponent 
                                    lawyers={lawyers} 
                                    expanded={expanded}
                                    handleExpandClick={handleExpandClick}/>
                                </Item>
                            </Grid>
                        )
                    })
                }



            </Grid>


        </Container>

    );
};
