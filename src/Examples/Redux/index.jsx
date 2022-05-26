import { NavLink, Outlet } from "react-router-dom";
import { isActiveStyle } from "../../utils";

const Redux = () => {
  return (
    <div className="redux-wrapper">
      <div className="redux-menu">
        <h3>Redux</h3>
        <ul>
          <li>
            <NavLink style={isActiveStyle} to={"/redux/ReduxSetup"}>
              Redux Setup
            </NavLink>
          </li>
          <li>
            <NavLink style={isActiveStyle} to={"/redux/ReduxToolkitSetup"}>
              Redux Toolkit Setup
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="redux-item">
        <Outlet />
      </div>
    </div>
  );
};

export default Redux;
