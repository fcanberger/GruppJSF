import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/main.scss";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(true);

  return (
    <>
      <div className="wrapper">
        <header>
          <Link to="/">
            <h2>LOGO</h2>
          </Link>

          <nav>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links-desktop"}>
              <li>
                <Link to="/meny" onClick={() => setIsMobile(!isMobile)}>
                  <h3>Meny</h3>
                </Link>
              </li>
              <li>
                <Link to="/booking" onClick={() => setIsMobile(!isMobile)}>
                  <h3>Boka bord</h3>
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsMobile(!isMobile)}>
                  <h3>Kontakt</h3>
                </Link>
              </li>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <li className="fas fa-times"></li>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </nav>
        </header>

        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
