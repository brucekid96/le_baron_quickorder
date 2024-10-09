import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
    <Typography variant="body1">
      &copy; 2024 Le Baron QuickOrder. Tous droits réservés.
    </Typography>
  </Box>
  )
}

export default Footer
