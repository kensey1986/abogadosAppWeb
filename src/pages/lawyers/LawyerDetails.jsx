import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../context/Context";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

export const LawyersDetails = (props) => {
  let params = useParams();
  const { data } = useContext(DataContext);
  const id = parseInt(params.lawyersId);
  const detail = data.filter((datos) => datos.id === id);
  const { name, img} = detail[0];
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
