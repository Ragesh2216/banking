import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Scrooltop from "./components/Scrooltop";
import './App.css';

function App({ element }) {
  return (
    <>
    <Scrooltop/>
      <Navbar />
      {element}
      <Footer />
     
    </>
  );
}

export default App;
