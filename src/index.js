import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShowComponents from "./components/ShowComponents";
import TestShow from "./components/TestShow";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Navbar from "./components/navbar/Navbar";

export default function Index() {
  return (
    <BrowserRouter basename="/">
      <Navbar/>
      <Routes>  
        <Route path="/" element={<TestShow />} />
        <Route path="/show" element={<ShowComponents />} />
        <Route path="/testshow" element={<App />} />  
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);

reportWebVitals();
