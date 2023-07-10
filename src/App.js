import {Routes,Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/createaccount"/>
      <Route path="/cart"/>
    </Routes>
  );
}

export default App;
