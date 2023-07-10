import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Page404 from "./pages/Page404";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/createaccount"/>
      <Route path="/cart"/>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
