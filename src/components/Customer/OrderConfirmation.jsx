import React from 'react'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const OrderConfirmation = () => {
  return (
    <Container>
    <Typography variant="h4" component="h2" gutterBottom>
      Confirmation de Commande
    </Typography>
    <Typography variant="body1">
      Merci pour votre commande !
    </Typography>
  </Container>
  )
}

export default OrderConfirmation
