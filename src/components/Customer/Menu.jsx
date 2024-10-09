import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import AppleIcon from '@mui/icons-material/Apple'; // Exemple d'icône pour Fruits
import LocalDrinkIcon from '@mui/icons-material/LocalDrink';

const categories = [
  'Fruits', 'Légumes', 'Viandes', 'Poissons',
  'Produits laitiers', 'Céréales', 'Boissons', 'Snacks'
];

const types = {
  Fruits: [{ name: 'Pomme', price: 1 }, { name: 'Banane', price: 0.5 }, { name: 'Orange', price: 0.8 }],
  Légumes: [{ name: 'Carotte', price: 0.3 }, { name: 'Brocoli', price: 1.2 }, { name: 'Épinard', price: 1 },],
  Viandes: [{ name: 'Poulet', price: 5 }, { name: 'Bœuf', price: 7 }, { name: 'Porc', price: 6 }],
  Poissons: [{ name: 'Saumon', price: 10 }, { name: 'Thon', price: 8 }, { name: 'Truite', price: 9 }],
  'Produits laitiers': [{ name: 'Lait', price: 1.5 }, { name: 'Fromage', price: 3 }, { name: 'Yaourt', price: 2 }],
  Céréales: [{ name: 'Riz', price: 2 }, { name: 'Blé', price: 1.8 }, { name: 'Avoine', price: 2.5 }],
  Boissons: [{ name: 'Eau', price: 0.5 }, { name: 'Jus', price: 2 }, { name: 'Soda', price: 1.5 }],
  Snacks: [{ name: 'Chips', price: 1 }, { name: 'Biscuits', price: 1.2 }, { name: 'Noix', price: 2 }]
};



const Item = styled(Paper)(({ theme, bgcolor }) => ({
  backgroundColor: bgcolor || '#98d6a9',
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [quantities, setQuantities] = useState({});


  const handleQuantityChange = (type, delta) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [type]: Math.max(0, (prevQuantities[type] || 0) + delta)
    }));
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Fruits':
        return <AppleIcon style={{ position: 'absolute', top: 8, left: 8, backgroundColor:'black' }} />;
      case 'Boissons':
        return <LocalDrinkIcon style={{ position: 'absolute', top: 8, left: 8 }} />;
      // Ajoutez d'autres cas pour les autres catégories avec les icônes appropriées
      default:
        return null;
    }
  };

  return (
    <>
      <Grid container spacing={4} sx={{ p: 2, backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
        {categories.map((category, index) => (
          <Grid item xs={3} key={index}>
            <Item
              bgcolor={index % 2 === 0 ? '#ffcccb' : '#d1c4e9'}
              elevation={3}
              onClick={() => setSelectedCategory(category)}
            >
             {getCategoryIcon(category)}
              {category}
              <Typography variant="body2">
                {types[category].length} items
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" style={{ marginTop: '20px', textAlign:'center' }}>
        {selectedCategory ? `Types of ${selectedCategory}` : 'Pas d\'éléments'}
      </Typography>

      <Grid container spacing={4} style={{ marginTop: '10px' }} sx={{ p: 2, backgroundColor: 'black', color: 'white', textAlign: 'center' }}>
        {selectedCategory && types[selectedCategory] ? (
          types[selectedCategory].map((type, index) => (
            <Grid item xs={3} key={index}>
              <Item bgcolor={index % 2 === 0 ? '#c8e6c9' : '#ffe0b2'} elevation={3}>
                {type.name}
                <Typography variant="body2">
                  ${type.price.toFixed(2)}
                </Typography>
                <div>
                  <IconButton onClick={() => handleQuantityChange(type.name, -1)}>
                    <RemoveIcon />
                  </IconButton>
                  {quantities[type.name] || 0}
                  <IconButton onClick={() => handleQuantityChange(type.name, 1)}>
                    <AddIcon />
                  </IconButton>
                </div>
              </Item>
            </Grid>
          ))
        ) : (
          <Typography variant="body1" style={{ marginTop: '10px' }}>
            Pas d'éléments
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Menu;
