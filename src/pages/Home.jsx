import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Home = () => {
  const isActiveStyle = ({ isActive }) => {
    return {
      color: isActive ? "red" : "blue",
    };
  };

  return (
    <div>
      <h2>React Concepts</h2>
      <NavLink style={isActiveStyle} to={"/hooks"}>
        Hooks Examples
      </NavLink>
      <NavLink style={isActiveStyle} to={"/reduxSetup"}>
        Redux setup
      </NavLink>
      <NavLink style={isActiveStyle} to={"/reduxToolkitSetup"}>
        Redux Toolkit setup
      </NavLink>
      <NavLink style={isActiveStyle} to={"/contextApi"}>
        context Api
      </NavLink>
      <NavLink style={isActiveStyle} to={"/higherOrderComponent"}>
        higher Order Component
      </NavLink>
      <NavLink style={isActiveStyle} to={"/googleMaps"}>
      google Maps
      </NavLink>
      <NavLink style={isActiveStyle} to={"/googlePage"}>
      google Page
      </NavLink>
      <Outlet />
    </div>
  );
};

export default Home;
