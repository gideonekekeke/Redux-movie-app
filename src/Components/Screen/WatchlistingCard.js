import React, { useState } from "react";
import { Button } from "antd";
import pic from "../img/1.jpg";
import { adjustWatchList, removeFromWatchList } from "../State/actionState";
import { connect } from "react-redux";

function WatchlistingCard({ t, quantity, remove }) {
  const [r, setR] = useState(t.qty);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        flexWrap: "wrap",
        // width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          flexWrap: "wrap",
          // width: "70%",
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
              src={t.image}
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
                <div></div>
              </div>
            </div>
            <div style={{ fontWeight: "bold", color: "#40A9FF" }}>
              $ {t.price}
            </div>
          </div>
          <h3 style={{ margin: "10px" }}>{t.title}</h3>
          <p style={{ margin: "10px", fontSize: "12px" }}>June 10, 2021</p>

          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <input
              mmin="1"
              value={t}
              onChange={(e) => {
                setR(e.target.value);
                quantity(t.id, e.target.value);
              }}
              // placeholder="enter quantity"
              type="number"
              style={{
                width: "120px",
                height: "50px",
                borderRadius: "5px",
                // backgroundColor: "#032541",
              }}
            />{" "}
            <Button
              onClick={() => {
                remove(t.id);
              }}
              type="primary"
              danger
              style={{
                width: "120px",
                height: "50px",
                // backgroundColor: "tomato",
                color: "white",
                borderRadius: "5px",
                // backgroundColor: "#032541",
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    quantity: (id) => {
      dispatch(adjustWatchList(id));
    },
    remove: (id, value) => {
      dispatch(removeFromWatchList(id, value));
    },
  };
};

export default connect(null, mapDispatchToProps)(WatchlistingCard);
