import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// import classes from "./NavBar.styles.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark light">
      <div className="container-fluid">
        <Link
          className="navbar-brand text-danger"
          to="/"
          style={{ textDecoration: "none" }}
        >
          NETFLIX
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
              <Link
                className="nav-link active text-light"
                to="/"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                to="/movies/?page=1"
                style={{ textDecoration: "none" }}
              >
                Movies
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                to="/tvShows/?page=1"
                style={{ textDecoration: "none" }}
              >
                TV Shows
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active text-light"
                to="/myList"
                style={{ textDecoration: "none" }}
              >
                My List
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-danger" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
