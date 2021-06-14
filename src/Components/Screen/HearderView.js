import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
function HearderView({ view }) {
  const [counter, setCounter] = useState(0);

  React.useEffect(() => {
    let newCounter = 0;
    view.forEach((el) => {
      newCounter += el.qty;
    });
    setCounter(newCounter);
  }, [counter, view]);
  return (
    <div
      style={{
        height: "70px",
        width: "100%",
        backgroundColor: "#032541",
        color: "white",
        position: "sticky",
        zIndex: "100",
        top: 0,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <div style={{ fontSize: "17px", fontWeight: "bold" }}>
            MOVIE-STORE
          </div>
        </Link>
        <Link to="/watch" style={{ textDecoration: "none", color: "white" }}>
          <div
            style={{
              display: "flex",
              fontWeight: "bold",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ShoppingCartOutlined />
            WatchList :{" "}
            <div style={{ marginLeft: "5px", fontSize: "15px" }}>
              {counter}
            </div>{" "}
          </div>
        </Link>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    view: state.movie.watchlist,
  };
};

export default connect(mapStateToProps)(HearderView);
