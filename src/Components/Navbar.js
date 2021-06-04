import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://mumer01.github.io/publicApis/BoxOffice.json")
      .then((res) => {
        console.log(res.data.entries);
        setdata(res.data.entries);
      })
      .catch((err) => {
        console.log(err.data);
      });
  }, []);

  console.log("data===>", data);

  return (
    <div className="container-fluid ">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary m-0">
        <div className="container">
          <h1 className="navbar-brand" style={{ fontSize: 30 }}>
            GOK Stream
          </h1>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto" style={{ marginLeft: "auto" }}>
              <li className="nav-item ">
                <NavLink
                  to={{
                    pathname: "/",
                    aboutprops: {
                      alldata: data,
                    },
                  }}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to={{
                    pathname: "/Series",
                    aboutprops: {
                      alldata: data,
                    },
                  }}
                  className="nav-link"
                >
                  Series
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink to="/Movies" className="nav-link">
                  Movies
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
