import React from "react";
import './App.css';
import Weather from "./Weather";
import Footer from "./Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather app</h1>
        <Weather />
      </header>
      <Footer />
    </div>
  );
}

export default App;
