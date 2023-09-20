import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  " id="navbar">
        <div className="container ">
          <Link className="navbar-brand text-dark-50 fs-2 fw-bold" to="/">
            travel<b className="fs-1">R</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3 fw-bold ">
              <li className="nav-item d-flex">
                <Link className="nav-link px-4 text-dark-50" to="/testshow">
                  ADD
                </Link>
                <Link className="nav-link px-4 text-dark-50" to="/show" >
                  TABLE
                </Link>

              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
