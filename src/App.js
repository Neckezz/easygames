import Header from './components/header'
import NewArticles from './components/newarticles';
import Preorder from './components/preorder';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <NewArticles/>
      <Preorder/>
    </div>
    </Router>
  );
}

export default App;
