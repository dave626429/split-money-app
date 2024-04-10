import React from "react";
import NavBar from "./navbar/NavBar";
import "./style.css";
import Logo from "./logo/Logo";

export default function Navigation() {
  return (
    <div id="navigation">
      <Logo />
      <NavBar />
    </div>
  );
}
