import React, { useState } from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Counter from './Counter';
import Todo from './Todo';
import Formre from './Formre';



const drawerWidth = 240;

function Sam(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
 const [menu, setMenu] = useState('CRUD')
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };



  const handleMenuClick = (menu) => {
    setMenu(menu)
  }
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Form','Counter','Todo' ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => handleMenuClick(text)} >
              {/* <ListItemIcon>
                {index % 2 === 0 ? <AddCircleIcon/> : <MailIcon />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  // const imgPath = '../';
 

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            My Projects
          </Typography>
        </Toolbar>
       
      </AppBar>
    
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >

        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer} 
        </Drawer>
       
      </Box>
      
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {menu === 'Form' && <Formre />} 

        {menu ===  'Counter' && <Counter/> }
        {menu === 'Todo' && <Todo/>}
      
       
      </Box>
    


    </Box>
   
    </>
  );
}

Sam.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sam;