import {BrowserRouter as Router,Routes,Route,theme} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
      <Cards></Cards>
      <Routes>
      </Routes>   
      </Router>
      
    </>
  );
}
export default App;
