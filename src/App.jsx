import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App({ element }) {


  const { pathname } = useLocation();
  const hideFooter = pathname === "/login";
const hideNavbar = pathname === "/login";
  return (
    <>
     {!hideNavbar && <Navbar />}
      {element}
      {!hideFooter && <Footer />}
    </>
  );
}
