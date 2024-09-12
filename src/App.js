import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Menu from './components/Customer/Menu';
import OrderConfirmation from './components/Customer/OrderConfirmation';

function App() {
  return (
    <div className="App">
    <Header />
    <main>
      <Menu />
      <OrderConfirmation />
    </main>
    <Footer />
  </div>
  );
}

export default App;
