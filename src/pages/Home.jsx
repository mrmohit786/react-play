import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const isActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  };
  return (
    <main>
      <aside>
        <h4>React Concepts I have learn so far:</h4>
        <ul>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks"}>
              Hooks
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/redux"}>
              Redux
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/contextApi"}>
              Context Api
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/examples"}>
              Other concepts Examples
            </NavLink>
          </li>
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Home;
