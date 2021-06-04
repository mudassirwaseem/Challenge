import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./compo";

function Home() {
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
      <div className="container-fluid ">
        {/* <h2
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
          Home
        </h2> */}
        <Header name="Home" />
        <div className="container">
          <div className="row">
            {data.map((Alldata, index) => {
              return (
                <div key={index} className="col">
                  <img
                    src={Alldata.images["Poster Art"].url}
                    alt=""
                    style={{ width: "200px", height: "150px" }}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "flex-start" }}
                  >
                    <h6>{Alldata.title}</h6>
                  </div>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <h6>{Alldata.releaseYear}</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
