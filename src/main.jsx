import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Homepage2 from "./pages/Homepage2.jsx";
import LogisticsManagement from "./components/LogisticsManagement.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import Service from "./pages/Service.jsx";
import Subscription from "./pages/Subscription.jsx";
import ArchiveDop from "./components/ArchiveDop.jsx";
import Login from "./pages/Login.jsx";
import Latest from "./pages/Latest.jsx";
import NotFound from "./pages/NotFound.jsx";
import ExploreServices from "./components/ExploreServices.jsx";
import InventoryOptimization from "./components/InventoryOptimization.jsx";
import SupplierNetwork from "./components/SupplierNetwork.jsx";
import WarehouseManagement from "./components/WarehouseManagement.jsx";

const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App element={<Home />} />} />
        <Route path="/warehouse" element={<App element={<WarehouseManagement />} />} />
        <Route path="/supply" element={<App element={<SupplierNetwork />} />} />
        <Route path="/ArchiveDop" element={<App element={<ArchiveDop />} />} />
        <Route path="/homepage2" element={<App element={<Homepage2 />} />} />
        <Route path="/logi" element={<App element={<LogisticsManagement />} />} />
        <Route path="/inst" element={<App element={<InventoryOptimization />} />} />
        <Route path="/dashboards" element={<App element={<Dashboard />} />} />
        <Route path="/latest" element={<App element={<Latest />} />} />
        <Route path="/subscription" element={<App element={<Subscription />} />} />
        <Route path="/about" element={<App element={<About />} />} />
        <Route path="/services" element={<App element={<Service />} />} />
        <Route path="/contact" element={<App element={<Contact />} />} />
        <Route path="/login" element={<App element={<Login />} />} />
        <Route path="/explore-services" element={<App element={<ExploreServices />} />} />
       <Route path="*" element={<App element={<NotFound />} />} />
      </Routes>
    </HashRouter>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
      <Root/>
    </HashRouter>
  </React.StrictMode>
);