import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Main from "./Components/Main.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <Main />
  </React.StrictMode>
);
