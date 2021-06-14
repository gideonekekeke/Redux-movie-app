import React, { useEffect, useState } from "react";
import { Button } from "antd";
import WatchlistingCard from "./WatchlistingCard";
import { connect } from "react-redux";
import Payment from "../Screen/Payment";
function CartList({ watch }) {
  const [totalCost, setTotalCost] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let cost = 0;
    let items = 0;

    watch.forEach((el) => {
      cost += el.qty * el.price;
      items += el.qty;
    });

    setTotalCost(cost);
    setTotalItems(items);
  }, [setTotalCost, setTotalItems, totalItems, totalCost, watch]);

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          height: "100vh",
          width: "300px",
          backgroundColor: "#032541",
          position: "sticky",
          top: 0,
          marginTop: "-30px",
        }}
      >
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // margin: "10px",
            marginTop: "30px",
            color: "white",
          }}
        >
          <div
            style={{
              margin: "30px",
            }}
          >
            <div
              style={{
                margin: "10px",
              }}
            >
              SUMMARY
            </div>
            <br />
            <div
              style={{
                margin: "10px",
              }}
            >
              Total item Selected : {totalItems}
            </div>
            <div
              style={{
                margin: "10px",
              }}
            >
              TotalCost : {Math.ceil(totalCost)}
            </div>
            <br />
            <Payment r={totalCost} />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          // backgroundColor: "red",
          width: "80%",
        }}
      >
        {watch.map((item) => (
          <WatchlistingCard key={item.id} t={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    watch: state.movie.watchlist,
  };
};

export default connect(mapStateToProps)(CartList);
