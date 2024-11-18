import React from "react";
import { NavLink, Link } from "react-router-dom"; // Menggunakan NavLink untuk routing selain Sign Up

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <NavLink to="/" className="brand-link">
                Tomatik
              </NavLink>
            </h1>
          </div>

          <nav className="header-nav">
            <ul className="list-reset">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manfaat"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Manfaat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/merawat"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Merawat
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/penyakit"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Penyakit
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hama"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  Hama
                </NavLink>
              </li>
              {/* Tombol Sign Up tetap menggunakan Link */}
              <li>
                <Link to="/signup" className="button">
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
