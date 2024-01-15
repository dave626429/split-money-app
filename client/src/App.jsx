import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Main from "./components/Main/Main";

function App() {
  return (
    <div id="app">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
