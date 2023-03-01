import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="Header">
        <div className="Image">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
        </div>
        <div className="List">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Store</a>
            </li>
            <li>
              <a href="/">Channels</a>
            </li>
          </ul>
        </div>
        <div className="Info">
          <div className="Avthar">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
              alt=""
            />
          </div>
          <div className="userId">
            <p>Vishakh...</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
