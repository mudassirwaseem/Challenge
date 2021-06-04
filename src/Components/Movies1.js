import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./compo";

function Movies1() {
  const [data, setdata] = useState([]);
  const [year, setyear] = useState(2014);

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
        <Header name="Populer Movies" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2>Sort</h2>
        <select
          style={{
            width: "200px",
            height: "30px",
            border: "none",
            borderBottom: "2px solid black",
            margin: "10px",
            outline: "none",
          }}
          onChange={(e) => setyear(e.target.value)}
        >
          <option selected value="2014">
            2014
          </option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
        </select>
      </div>

      <div className="container">
        <div className="row">
          {data
            .filter(
              (fil) =>
                fil.programType == "movie" && fil.releaseYear == Number(year)
            )
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

export default Movies1;
