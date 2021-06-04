import React from "react";

function Header(props) {
  return (
    <div>
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
        {props.name}
      </h2>
    </div>
  );
}

export default Header;
