import React from "react";
import { Carousel } from "antd";

import "antd/dist/antd.css";
import Caousel from "./Caouselstyle";
import pic from "../../img/1.jpg";
import pic1 from "../../img/2.jpg";
import pic2 from "../../img/3.jpg";
import pic3 from "../../img/5.jpg";

function Carouselbody() {
  const contentStyle = {
    // height: "500px",
    // color: "#fff",
    // lineHeight: "10px",
    // textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic}
              direction="center"
              BG="#E5D304"
              title="What your Best Collection of movies"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic1}
              direction="center"
              BG=""
              title="Explore WatchList"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic2}
              direction="center"
              BG="#EF0303"
              title="Watch Trailer of Favourite Movie"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <Caousel
              pic={pic3}
              direction="center"
              BG="#478E02"
              title="Pay To get your Favourite movie"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Carouselbody;
