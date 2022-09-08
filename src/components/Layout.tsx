import { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/main.scss";

import { Footer } from "../components/Pages/Footer";

export const Layout = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="wrapper">
        <header>
          <Link to="/" className="home">
            <h2>buona mascella</h2>
          </Link>

          <nav>
            <ul
              className={isMobile ? "nav-links-mobile" : "nav-links"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <Link to="/meny" className="meny">
                  <h3 className="underline-animation">MENY</h3>
                </Link>
              </li>
              <li>
                <Link to="/booking" className="booking">
                  <h3 className="underline-animation">BOKA BORD</h3>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="contact">
                  <h3 className="underline-animation">KONTAKT</h3>
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
        <Footer />
      </div>
    </>
  );
};
