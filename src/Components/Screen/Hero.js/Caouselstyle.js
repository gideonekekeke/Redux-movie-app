import React from "react";
// import "./carostyle.css";
import { Button } from "antd";

function Caousel({ pic, direction, title, desc, BG, btn, MT }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "300px",
          backgroundImage: `url(${pic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "600px",
            backgroundColor: "rgba(0%, 0%, 0%, 0.76)",
            fontFamily: "Poppins",
            justifyContent: "center",
            alignItems: direction,
            padding: "0 50px",
          }}
        >
          <div
            className="profit_name"
            style={{
              fontSize: "30px",
              fontFamily: "poppins",
              margin: "0px",
              lineHeight: "1.8",
              color: "white",
            }}
          >
            {title}
          </div>

          <div
            className="profit_desc"
            style={{
              width: "500px",
              color: "white",
              textAlign: "center",
              fontSize: "15px",
            }}
          >
            {desc}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Caousel;
