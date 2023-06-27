"use client"
import React from "react";
import {BsStarFill, BsStar, BsStarHalf} from "react-icons/bs"

const StarRating = ({ rating } : {rating : number} ) => {
  //rating = 4
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<BsStarFill color="E49B0F" key={i} />);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(<BsStarHalf color="#E49B0F" key={i} />);
    } else {
      stars.push(<BsStar color="#E49B0F" key={i} />);
    }
  }
  return (
  <div className="flex justify-center items-center">
    {stars}
  </div>);
};

export default StarRating;