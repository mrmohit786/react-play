import { NavLink, Outlet } from "react-router-dom";
import { isActiveStyle } from "../../utils";

function HooksExample() {

  return (
    <div className="hooks-wrapper">
      <div className="hooks-menu">
        <h3>Hooks</h3>
        <ul>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks/UseState"}>
              UseState
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks/UseEffect"}>
              UseEffect
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks/UseReducer"}>
              UseReducer
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks/UseMemo"}>
              UseMemo
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/hooks/UseRef"}>
              UseRef
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="hooks-item">
        <Outlet />
      </div>
    </div>
  );
}

export default HooksExample;
