import { Outlet } from "react-router-dom";
import "../styles/main.scss";

export const Layout = () => {
  return (
    <>
      <div className="wrapper">
        <p>ehhh test</p>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
};
