import Header from './components/header'
import NewArticles from './components/newarticles';
import Products from './components/products';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Header />
      <NewArticles/>
      <Products/>
    </Router>
  );
}

export default App;
