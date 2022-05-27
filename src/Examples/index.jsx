import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { isActiveStyle } from "../utils";

const Examples = () => {
  return (
    <div className="example-wrapper">
      <div className="example-menu">
        <h3>Redux</h3>
        <ul>
          <li>
            <NavLink
              style={isActiveStyle}
              to={"/examples/higherOrderComponent"}
            >
              Higher Order Component
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/examples/googleMaps"}>
              Google Maps Integrations
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/examples/axiosRequest"}>
              Axios Request
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="example-item">
        <Outlet />
      </div>
    </div>
  );
};

export default Examples;
