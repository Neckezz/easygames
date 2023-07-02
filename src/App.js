import Header from './components/header'
import NewArticles from './components/newarticles';
import Products from './components/products';
import Footer from './components/footer'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <NewArticles/>
      <Products/>
      <Footer/>
    </Router>
  );
}

export default App;
