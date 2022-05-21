import React from "react";
import { Link } from "react-router-dom";
import computer from "../Assets/Images/computer.jpg";
import motherboard from "../Assets/Images/mother-board.jpg";
import ram from "../Assets/Images/mother-boards.jpg";
import networking from "../Assets/Images/social-networking.jpg";

const Banner = () => {
  return (
    <div class="carousel w-full">
  <div id="slide1" class="carousel-item relative w-full h-96">
    <img src={networking} class="w-full" alt=""/> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full h-96">
    <img src={motherboard} class="w-full" alt="" /> 
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full h-96">
    <img src={computer} class="w-full" alt=""/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full h-96">
    <img src={ram} class="w-full" alt=""/>
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Banner;
