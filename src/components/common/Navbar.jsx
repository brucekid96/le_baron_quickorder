import React from 'react'
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from '@mui/material/colors';

const navbar = () => {
  return (
    <List component="nav" style={{ width: '260px', paddingLeft: 0 ,marginTop:'-30px' }} sx={{ p: 7, backgroundColor: 'black', color: 'gray', textAlign: 'left' }} >
      <ListItem button sx={{ '&:hover': { backgroundColor:'gray',color:'white'}}} >
        <ListItemIcon sx={{color:'gray'}}>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button sx={{ '&:hover': { backgroundColor:'gray',color:'white'}}}>
        <ListItemIcon sx={{color:'gray'}}>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button sx={{ '&:hover': { backgroundColor:'gray',color:'white'}}}>
        <ListItemIcon sx={{color:'gray'}}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <ListItem button sx={{ '&:hover': { backgroundColor:'gray',color:'white'}}}>
        <ListItemIcon sx={{color:'gray'}}>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Contact" />
      </ListItem>
    </List>
  )
}

export default navbar
