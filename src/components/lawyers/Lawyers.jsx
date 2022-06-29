import React from 'react';

import { Link } from "react-router-dom";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { styled } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const LawyersComponent = (props) => {

  const [expanded, setExpanded] = React.useState(false);
    
    const handleExpandClick = (e) => {
        console.log(e)
        setExpanded(!expanded);
    };

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

const LinkStyle = styled(Link)(() => ({
    textDecoration: 'none',
    
}));

const {name, img, num, whts, description, initial, id} = props.lawyers;

  return (
    <Card >
                                        <CardHeader sx={{ minHeight: 100 }}
                                            avatar={
                                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                    {initial}
                                                </Avatar>
                                            }
                                            title={name}
                                        />
                                        <CardMedia
                                            component="img"
                                            sx={{ marginLeft: 10, height: { xs: 200, sm: 300, lg: 300 }, width: { xs: 200, sm: 300, lg: 214 } }}
                                            image={img}
                                            alt="Paella dish"
                                        />
                                        <CardContent>
                                            <Typography sx={{ textAlign: 'left' }}
                                                variant="h6" color="text.secondary">
                                                Contacto.
                                            </Typography>
                                            <Typography sx={{ textAlign: 'right' }}
                                                variant="body2" color="text.secondary">
                                                Cel: {num}
                                            </Typography>
                                            <Typography sx={{ textAlign: 'right' }}
                                                variant="body2" color="text.secondary">
                                                Whts: {whts}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <LinkStyle
                                                to={`/lawyers/${id}`}>
                                                <Button
                                                    variant="text"
                                                    color="secondary"
                                                    size="small"

                                                >
                                                    !Historias de exitos¡
                                                </Button>
                                            </LinkStyle>

                                        </CardActions>
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
                                                    {description}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
                                    </Card>
  )
}
