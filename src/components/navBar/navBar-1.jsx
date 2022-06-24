import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';

import logo from '../../assets/logo/logo.png'
import { withThemeCreator } from '@mui/styles';



const drawerWidth = 225;
// const pages = ['INICIO', 'SERVICIOS', 'QUIENES SOMOS', 'NUESTROS PROFESIONALES', 'CONTACTANOS'];
const pagesMenu = [{
    "name": "INICIO",
    "link": "/"
},
{
    "name": "SERVICIOS",
    "link": "/services"
},
{
    "name": "QUIENES SOMOS",
    "link": "/about"
},
{
    "name": "NUESTROS PROFESIONALES",
    "link": "/lawyers"
},
{
    "name": "Contacto",
    "link": "/contac"
},
];


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    background: ' #8D292B!important',
    fontFamily: 'Poppins!impoprtant',
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));
const TitleLogo = styled('div')(() => ({
    flexGrow: 1,
    marginTop: '0.125rem'

}));

const TitleLogoMobil = styled('div')(() => ({
    background: '#C2383A!important',
    marginTop: '25px',
    marginLeft: '20px'

}));

const ContainerImg = styled('img')(() => ({
    maxWidth: '95px'

}));

const LinkStyle = styled(Link)(() => ({
    textDecoration: 'none',
    '&:hover': {
        // backgroundColor: '#C2383A',
    },
}));

export const NavBar1 = () => {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ display: { md: 'none' }, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <ContainerImg src={logo} alt="Garcia&Asociados"
                            sx={{ mr: 3, ...(open && { display: 'none' }) }} />
                        <TitleLogo sx={{ ...(open && { display: 'none' }) }}>
                            <Typography variant="span">
                                COLECTIVO DE ABOGADOS
                            </Typography>

                            <Typography variant="h6">
                                GARCIA & ASOCIADOS
                            </Typography>
                        </TitleLogo>
                        <Box sx={{ mr: 2, mt: 0, display: { xs: 'none', md: 'flex' }, ...(open && { display: 'none' }) }}>
                            {pagesMenu.map((page) => (
                                <LinkStyle
                                    to={`${page.link}`} key={page.name}>
                                    <Button
                                        key={page}
                                        variant="text"
                                        color="primary"
                                        sx={{ ":hover": { backgroundColor: '#C2383A' } , ml: 2, mt: 4, color: 'white', display: 'block' }}
                                        
                                    >
                                        {page.name}
                                    </Button>
                                </LinkStyle>
                            ))}
                        </Box>
                        <ContainerImg src={logo} alt="Garcia&Asociados" sx={{ ml: 6, display: { lg: 'none' }, ...(!open && { display: 'none' }) }} />
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                            background: '#C2383A'
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <TitleLogoMobil>
                        <Typography variant="h6" color="white">
                            <strong>
                                COLECTIVO DE ABOGADOS
                            </strong>
                        </Typography>

                        <DrawerHeader>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <Divider />
                    </TitleLogoMobil>

                    <List>
                        {pagesMenu.map((page, index) => (

                            <ListItem button key={page.name}>
                                <LinkStyle
                                    to={`${page.link}`}>
                               
                                <ListItemText sx={{ color: 'whitesmoke'}} primary={page.name} />
                                </LinkStyle>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />

                </Drawer>
                <Main open={open}>
                    <DrawerHeader />

                </Main>
            </Box>
        </>

    );
}