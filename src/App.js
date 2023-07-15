import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
import Header from "./components/header"
import Footer from "./components/footer"
function App() {
  return (
    <div className="app">
    <Header/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/video-games/:id"/>
      <Route path="/createaccount"/>
      <Route path="/cart"/>
      <Route path="*" element={<Page404 />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
