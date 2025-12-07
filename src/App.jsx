import Footer from "./components/Footer";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Scrooltop from "./components/Scrooltop";
import './App.css';

function App({ element }) {
  return (
    <><HashRouter>
          
       
    <Scrooltop/>
      <Navbar />
      {element}
      <Footer />
      </HashRouter>
    </>
  );
}

export default App;
