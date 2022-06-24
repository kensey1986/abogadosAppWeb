import React, { Component, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/Context";

import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { v4 as uuidv4 } from "uuid";

export const LawyersDetails = (props) => {
  let params = useParams();
  const { data } = useContext(DataContext);
  const id = parseInt(params.lawyersId);
  const detail = data.filter((datos) => datos.id === id);
  const { name, img, num, whts, description, initial } = detail[0];
  // useEffect(() => {
  // }, []);

  return (
    <Container sx={{ marginLeft: { xl: 24 }, marginY: { xs: 2 } }}>
      <Grid container spacing={3} justifyContent="center">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            image={img}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
          </CardActions>
        </Card>
        <Container sx={{ width: { sm: 520, lg: 520 } }}>
          <Typography variant="h5" mb={2} mt={2} >Caso de exito 1</Typography>
          <Typography variant="body1"  mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="h5" mb={2}>Caso de exito 2</Typography>
          <Typography variant="body1"  mb={8}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
          <Typography variant="h5" mb={2}>Caso de exito 3</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam.
          </Typography>
        </Container>
      </Grid>
    </Container>
  );
};
