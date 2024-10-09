import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/Customer/Menu';
import OrderConfirmation from './components/Customer/OrderConfirmation';
import { Grid, Paper, TextField, IconButton  } from '@mui/material';
import Navbar from './components/common/Navbar';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EditIcon from '@mui/icons-material/Edit';

function App() {
  return (
    
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'black' }}>
      <Header/>
      <main style={{ flex:1, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
        <Grid container spacing={1} style={{ width: '100%' }} >
          <Grid item xs={3}>
            <Paper style={{ marginTop: '0px' }}>
             <Navbar/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper>
            <Menu />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <OrderConfirmation />
            </Paper>
          </Grid>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}

export default App;
