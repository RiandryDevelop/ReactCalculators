import React from "react";
import { NavLink } from "react-router-dom";
import "./CSS/nav-bar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink
                className="nav-link active anim-bottom-blue to-center "
                aria-current="page"
                to="./"
              >
                Calculator-1
              </NavLink>
              <NavLink
                className="nav-link  anim-bottom-red to-center "
                to="./Calculator2"
              >
                Calculator-2
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
