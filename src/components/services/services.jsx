import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { v4 as uuidv4 } from 'uuid';

export const ServicesComponent = (props) => {
    const style = {
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
    };
    const { category, description} = props.services;
    const area = props.services.area || [];
    

    return (
        <Accordion defaultExpanded>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography variant="h6">{category}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>{description}</Typography>
                <List sx={style} component="nav" aria-label="mailbox folders">
                    
                    {

                    
                    area.map((area) => {
                        return (
                            <ListItem button key={uuidv4()} >
                                <ListItemText primary={area.name} />
                            </ListItem>
                        );
                    })
                    }

                </List>
            </AccordionDetails>
        </Accordion>
    );
};
