import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
                            <Grid item={true}  xs={12} sm={12} md={6}  lg={4}  key={uuidv4()}>
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
