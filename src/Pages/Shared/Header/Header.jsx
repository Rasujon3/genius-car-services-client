import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo.png";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} height={"30px"} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <CustomLink
                  className="nav-link"
                  aria-current="page"
                  to="home#services"
                >
                  Services
                </CustomLink>
              </li>
              <li className="nav-item">
                <CustomLink className="nav-link" to="home#experts">
                  Experts
                </CustomLink>
              </li>
            </ul>
            <div className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <CustomLink
                    className="nav-link"
                    aria-current="page"
                    to="/about"
                  >
                    About
                  </CustomLink>
                </li>
                {user ? (
                  <li className="nav-item">
                    <Link
                      onClick={() => signOut(auth)}
                      className="nav-link"
                      to="/login"
                    >
                      Logout
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <CustomLink className="nav-link" to="/login">
                      Login
                    </CustomLink>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
