import React from "react";
import NavBar from "./NavBar/NavBar";
import "./style.css";
import Logo from "./Logo/Logo";

export default function Navigation() {
  return (
    <div id="navigation">
      <Logo />
      <NavBar />
    </div>
  );
}
