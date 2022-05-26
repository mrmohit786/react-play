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
            <NavLink style={isActiveStyle} to={"/higherOrderComponent"}>
              Other concepts Examples
            </NavLink>
          </li>
          {/* <NavLink style={isActiveStyle} to={"/googleMaps"}>
        google Maps
        </NavLink>
        <NavLink style={isActiveStyle} to={"/googlePage"}>
        google Page
      </NavLink> */}
        </ul>
      </aside>
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default Home;
