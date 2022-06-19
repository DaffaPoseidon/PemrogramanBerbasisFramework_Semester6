import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
  <>
    <Navbar />
    <Header />
    <Routes>
      <Route path='/' element={<Cards />} />
      <Route path='/cart/:id' element={<CardsDetails />} />
    </Routes>
    <Footer />
  </>
  );
}

export default App;
