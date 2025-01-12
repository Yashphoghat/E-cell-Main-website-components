import './App.css';
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutSection from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
