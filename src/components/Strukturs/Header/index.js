import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <Link to="/" className="brand-link">
                Tomatik
              </Link>
            </h1>
          </div>

          <nav className="header-nav">
            <ul className="list-reset">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/manfaat">Manfaat</Link>
              </li>
              <li>
                <Link to="/merawat">Merawat</Link>
              </li>
              <li>
                <Link to="/penyakit">Penyakit</Link>
              </li>
              <li>
                <Link to="/hama">Hama</Link>
              </li>
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
