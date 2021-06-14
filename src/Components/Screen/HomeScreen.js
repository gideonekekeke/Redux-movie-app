import React from "react";
import DisplayCard from "./DisplayCard";
import { connect, useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addMovie } from "../State/actionState";
import { useEffect } from "react";
import Carouselbody from "./Hero.js/Carouselbody";

function HomeScreen({ view }) {
  const dispatch = useDispatch();

  const getData = async () => {
    const res = await axios.get(
      "https://redux-movie-api.herokuapp.com/api/movies"
    );
    // https://redux-movie-api.herokuapp.com/api/movies
    if (res) {
      dispatch(addMovie(res.data));
      console.log(res.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Carouselbody />
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        # Explore Products
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {view.map((item) => (
          <DisplayCard key={item.id} r={item} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    view: state.movie.movieDataBase,
  };
};

export default connect(mapStateToProps)(HomeScreen);
