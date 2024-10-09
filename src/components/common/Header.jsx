import React from 'react'
import { TextField, IconButton  } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px', backgroundColor: 'black', color: 'white' }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <RestaurantMenuIcon style={{ color: 'white' }} />
      <span style={{ marginLeft: '10px', fontSize: '24px' }}>Le Baron</span>
    </div>
    <TextField
      variant="outlined"
      placeholder="Search"
      size="small"
      style={{ backgroundColor: 'gray' ,borderRadius: '4px' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
     
    />
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ marginRight: '10px' }}>Table 5 - John Doe</span>
          <IconButton style={{ color: 'white' }}>
            <EditIcon />
          </IconButton>
        </div>
      </header>
    
  )
}

export default Header
