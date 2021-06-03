import React from "react";
import { Link } from "react-router-dom";

function Hometask1() {
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
          Home{" "}
        </h2>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          padding: 100,
        }}
      >
        <Link to="/Series">
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
            }}
          >
            {" "}
            <h2>Populer Series</h2>
          </button>
        </Link>

        <Link to="/Movies">
          <button
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
            }}
          >
            {" "}
            <h2>Populer Movies</h2>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Hometask1;
