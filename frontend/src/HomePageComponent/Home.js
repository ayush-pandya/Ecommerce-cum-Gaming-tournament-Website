import React from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Header from "./Header";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";
function home() {
  return (
    <div className="Home">
      <Header />
      <div className="carousel">
        <Carousel />
        {/* <div className="carousel_track-container">
          <ul className="carousel_track">
            <li className="carousel_slide">
              <img className="carousel_image" src="img/img1.jpg" alt="" />
            </li>
            <li className="carousel_slide">
              <img className="carousel_image" src="img/img2.png" alt="" />
            </li>
            <li className="carousel_slide">
              <img className="carousel_image" src="img/img1.jpg" alt="" />
            </li>
          </ul>
        </div>
        <button className="carousel_button carousel_button--left">
          <KeyboardArrowLeftIcon />
        </button>
        <button className="carousel_button carousel_button--right">
          <KeyboardArrowRightIcon />
        </button>

        <div className="carousel_nav">
          <button
            className="carousel_indicator current-slide"
            onClick={addEventListener("click", (e) => {
              const currentSlide = track.querySelector(".current-slide");
              // const nextSlide
              console.log(currentSlide);
            })}
          ></button>
          <button className="carousel_indicator"></button>
          <button className="carousel_indicator"></button>
        </div> */}
      </div>
      <div className="Products">
        <div className="Row1">
          <Link to="/ProductPage" className="product_link">
            <div className="home_product processor">
              <span className="product_name">Processor</span>
            </div>
          </Link>
          <Link to="/ram" className="product_link">
            <div className="home_product ram">
              <span className="product_name">Ram</span>
            </div>
          </Link>
          <Link to="/motherboard" className="product_link">
            <div className="home_product motherboard">
              <span className="product_name">Motherboard</span>
            </div>
          </Link>
          <Link to="/gpu" className="product_link">
            <div className="home_product gpu">
              <span className="product_name">GPUs</span>
            </div>
          </Link>
        </div>
        <div className="Row2">
          <Link to="/games" className="product_link">
            <div className="home_product games">
              <span className="product_name">Games</span>
            </div>
          </Link>
          <Link to="/giftcards" className="product_link">
            <div className="home_product giftcards">
              <span className="product_name">Giftcards</span>
            </div>
          </Link>
          <Link to="/tornament" className="product_link">
            <div className="home_product tornament">
              <span className="product_name">Tornament Page</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default home;
