import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState("home");

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-left">
            <p>
              temur<span>.</span>
            </p>
          </div>

          <div className="header-right">
            <ul>
              <li className="">
                <Link
                  to={"/"}
                  className={`not-active  ${active === "home" ? "active" : ""}`}
                  onClick={() => setActive("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={"/about"}
                  className={`not-active  ${active === "active" ? "active" : ""}`}
                  onClick={() => setActive("active")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to={"/projects"}
                  className={`not-active  ${active === "project" ? "active" : ""}`}
                  onClick={() => setActive("project")}
                >
                  Projects
                </Link>
              </li>``

              <button className="header-btn">Hire Me</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
