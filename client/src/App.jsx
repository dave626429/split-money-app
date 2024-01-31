import { useState } from "react";
import "./App.css";
import { Main, Navigation } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div id="app">
      <Navigation />
      <Main />
    </div>
  );
}

export default App;
