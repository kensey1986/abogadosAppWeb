import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { v4 as uuidv4 } from "uuid";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";

export const ServicesComponent = (props) => {
    const style = {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
    };
    const { category, description } = props.services;
    const area = props.services.area || [];

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {category}
                    </Typography>
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography >{description}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            
                            <List sx={style} component="nav" aria-label="mailbox folders">
                                {area.map((area) => {
                                    return (
                                        <ListItem button key={uuidv4()}>
                                            <ListItemText primary={area.name} />
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </Card>
        </Grid>

        // <Accordion defaultExpanded>
        //     <AccordionSummary
        //         expandIcon={<ExpandMoreIcon />}
        //         aria-controls="panel1a-content"
        //         id="panel1a-header"
        //     >
        //     <Typography variant="h6">{category}</Typography>
        //     </AccordionSummary>
        //     <AccordionDetails>
        //         <Typography>{description}</Typography>
        //         <List sx={style} component="nav" aria-label="mailbox folders">

        //             {

        //             area.map((area) => {
        //                 return (
        //                     <ListItem button key={uuidv4()} >
        //                         <ListItemText primary={area.name} />
        //                     </ListItem>
        //                 );
        //             })
        //             }

        //         </List>
        //     </AccordionDetails>
        // </Accordion>
    );
};
