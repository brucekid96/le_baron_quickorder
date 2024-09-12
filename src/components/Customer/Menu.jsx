import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Menu = () => {
  return (
    <div>
      <Typography variant="h4" component="h2" gutterBottom>
        Menu
      </Typography>
      <Card sx={{ minWidth: 275, marginBottom: 2 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Article 1
          </Typography>
          <Typography variant="body2">
            Description de l'article 1.
          </Typography>
          </CardContent>
      </Card>
      {/* Ajoutez plus de cartes pour chaque article du menu */}
    </div>
  )
}

export default Menu
