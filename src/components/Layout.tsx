import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../styles/main.scss";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <header>
          <Link to="/">
            <h2>LOGO</h2>
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/meny">
                  <h3>Meny</h3>
                </Link>
              </li>
              <li>
                <Link to="/booking">
                  <h3>Boka bord</h3>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <h3>Kontakt</h3>
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
