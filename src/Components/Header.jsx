import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import myImage from "../Assets/recipe\ finder.png";

const Header = () => {
  return (
    <header>
    <div className="container">
      <img src={myImage} alt="image" className="logo" />
      <h1 id="header">RECIPE FINDER</h1>
      <div className="buttons">
        <nav>
          <div className="item-1">
            <button>
              <Link className="button-1" to="/">
                Home
              </Link>
            </button>
            <button>
              <Link className="button-2" to="/favorites">
                Favorites
              </Link>
            </button>
          </div>
        </nav>
      </div>
    </div>
    <hr />
  </header>
  
 
  );
};

export default Header;
