import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap';
import CardsScreen from './screens/CardsScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Container>
        <Routes>
        <Route path="/" element={<CardsScreen/>}/>
        </Routes>
      </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
