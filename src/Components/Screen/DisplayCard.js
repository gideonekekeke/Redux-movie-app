import React from "react";
import pic from "../img/1.jpg";
import { Button } from "antd";
import "antd/dist/antd.css";
import { addToWatchList, viewMovie } from "../State/actionState";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function DisplayCard({ r, watch, single }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <div
          style={{
            // height: "430px",
            width: "250px",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 5px 7px -2px  rgba(0, 0, 0, 0.35)",
            paddingBottom: "3px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "250px",
              backgroundColor: "white",
            }}
          >
            <img
              src={r.image}
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "90%",
            }}
          >
            <div
              style={{
                height: "40px",
                width: "40px",
                borderRadius: "50px",
                backgroundColor: "#032541",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "10px",
              }}
            >
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50px",
                  border: "3px solid white",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "5px",
                  }}
                >
                  85%
                </div>
              </div>
            </div>
            <div style={{ fontWeight: "bold", color: "#40A9FF" }}>
              $ {r.price}
            </div>
          </div>
          <h3 style={{ margin: "10px" }}>{r.title}</h3>
          <p style={{ margin: "10px", fontSize: "12px" }}>June 12, 2021</p>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={() => {
                watch(r.id);
              }}
              type="primary"
              style={{
                width: "120px",
                height: "50px",
                borderRadius: "5px",
              }}
            >
              {" "}
              Add Watchlist
            </Button>
            <Link to={`/singleView/${r.id}`}>
              <Button
                onClick={() => {
                  single(r);
                }}
                style={{
                  width: "120px",
                  height: "50px",
                  // backgroundColor: "tomato",
                  color: "white",
                  borderRadius: "5px",
                  backgroundColor: "#032541",
                }}
              >
                Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    watch: (id) => {
      dispatch(addToWatchList(id));
    },
    single: (item) => {
      dispatch(viewMovie(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(DisplayCard);
