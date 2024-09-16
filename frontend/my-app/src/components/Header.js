import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import Person4Icon from "@mui/icons-material/Person4";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Addcart from "./Addtocart/Addcart";

export default function Header() {
  const [showComponent, setShowComponent] = useState(false);
  const toggleComponent = () => {
    setShowComponent(!showComponent);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg nvcolor">
        <div className="container-fluid ">
          <Link className="navbar-brand fastfire" to="/">
            FastFire
            <FastfoodIcon
              style={{ fontSize: "33px" }}
              className="per1"
            ></FastfoodIcon>
          </Link>
          <form class="d-flex sear">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <Link className="navbar-brand fastfire fastfire1" to="/signin">
            login
          </Link>
          <Link className="navbar-brand fastfire" to="/signup">
            Signup
          </Link>
          <div className="collapse navbar-collapse proadd" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <div className="dropdown">
                <Person4Icon className="dropdown-toggle per1"  data-bs-toggle="dropdown" aria-expanded="false"
                  style={{ fontSize: "33px" }}
                ></Person4Icon>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <Link className="dropdown-item" to="/orders">
                        My Orders
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="#">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item linav">
                <Link>
                  <AddShoppingCartIcon
                    onClick={toggleComponent}
                    style={{ fontSize: "33px" }}
                    className="per1"
                  ></AddShoppingCartIcon>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="cartdisplay">
        {showComponent && <Addcart onClose={toggleComponent} />}
      </div>
    </div>
  );
}
