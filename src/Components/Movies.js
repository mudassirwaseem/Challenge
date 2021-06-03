import React, { useState, useEffect } from "react";
import axios from "axios";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Movies() {
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

  return (
    <div>
      <div className="container-fluid">
        <h2
          style={{
            backgroundColor: "#414141",
            color: "white",
            textAlign: "center",
            padding: "10px",
            marginBottom: "10px 0px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Populer Movies
        </h2>
      </div>

      <div className="container">
        <div className="row">
          {data
            .filter((fil) => fil.programType == "movie")
            .map((movies, index) => {
              const { title, releaseYear } = movies;

              return (
                <div key={index} className="col">
                  <img
                    src={movies.images["Poster Art"].url}
                    alt=""
                    style={{ width: "200px", height: "150px" }}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <h6>{title}</h6>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <h6>{releaseYear}</h6>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Movies;
