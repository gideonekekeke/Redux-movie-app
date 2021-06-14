import React from "react";
import { connect } from "react-redux";
import pic from "../img/1.jpg";
import DisplayCard from "./DisplayCard";
import { Button } from "antd";
import { addToWatchList } from "../State/actionState";
import Trailer from "./Trailer";

function SingleCard({ single, adding }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",

            width: "100%",
            // marginLeft: "300px",
            width: "100%",
            marginTop: "50px",
          }}
        >
          <div
            style={{
              height: "450px",
              width: "300px",
              background: "silver",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
          >
            <img
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
              src={single.image}
            />
          </div>
          <div
            style={{
              // marginLeft: "30px",
              height: "450px",
              width: "500px",
              backgroundColor: "#032541",
              borderTopRightRadius: "10px",
              borderBottomRightRadius: "10px",
              color: "white",
            }}
          >
            <div
              style={{
                margin: "20px",
                textTransform: "uppercase",
                display: "flex",
                // justifyContent: "center",
                alignItems: "center",
              }}
            >
              {single.title}
              <div
                style={{
                  height: "30px",
                  width: "30px",
                  borderRadius: "50px",
                  border: "3px solid tomato",
                  marginLeft: "20px",
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
            <div style={{ margin: "20px" }}>{single.description}</div>
            {/* <br /> */}
            <div>
              <Button
                style={{ margin: "20px", height: "50px", width: "150px" }}
              >
                Season
              </Button>
              <Trailer />
              {/* <br /> */}
              <Button
                onClick={() => {
                  adding(single.id);
                }}
                type="primary"
                danger
                style={{
                  margin: "20px",
                  height: "50px",
                  width: "200px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Add To Watchlist
              </Button>
            </div>
          </div>
        </div>
        <h2 style={{ marginTop: "30px" }}>Recent View</h2>
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    single: state.movie.currentState,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    adding: (id) => {
      dispatch(addToWatchList(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCard);
