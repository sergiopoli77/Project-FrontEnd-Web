import React from "react";
import { NavLink, Link } from "react-router-dom"; // Menggunakan NavLink untuk routing selain Sign Up
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <div className="brand">
            <h1 className="m-0">
              <NavLink to="/" className="brand-link">
                {header.title}
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
                  {header.nav1}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/manfaat"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {header.nav2}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/merawat"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {header.nav3}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/penyakit"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {header.nav4}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/hama"
                  className={({ isActive }) => (isActive ? "active-link" : "")}
                >
                  {header.nav5}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
