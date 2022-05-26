import React from "react";
import ManageIcon from "./manageIcon.png";
import "./googlePageStyles.css";

const GooglePage = () => {
  return (
    <>
      <nav className="nav">
        <ul className="menu-wrapper">
          <li className="menu-item">Gmail</li>
          <li className="menu-item">Images</li>
          <li className="menu-item">
            <img className="manage-icon" src={ManageIcon} alt="" />
          </li>
          <li className="menu-item">
            <img
              className="avatar"
              src="https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg"
              alt="avatar"
            />
          </li>
        </ul>
      </nav>
      <main className="container">
        <div className="google-image-wrapper">
          <img
            className="google-image"
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
            alt="Google"
          />
        </div>
        <input className="input-type" type="text" name="" id="" />
        <div>
          <button className="btn">Google Search</button>
          <button  className="btn">I'm Feeling Lucky</button>
        </div>
      </main>
    </>
  );
};

export default GooglePage;
