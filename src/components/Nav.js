import React from "react";
import logo from "../../public/img/logo.png";

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="rbnb logo" className="nav-logo" />
    </nav>
  );
}

export default Nav;
