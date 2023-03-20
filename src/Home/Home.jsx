import React from "react";
import wallpaper from "../Assests/image.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <img src={wallpaper} alt="wallpaper" />

        <div className="content">
          <h1>Dessert | Bar | Kitchen</h1>
          <p>
            The Barn is a global food experience and our dessert bar is
            legendary!
          </p>

          <button>Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Home;
