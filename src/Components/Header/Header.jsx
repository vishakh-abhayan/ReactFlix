import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
      <div className="Header">
        <div className="Image">
          <img
            src="https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png"
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
