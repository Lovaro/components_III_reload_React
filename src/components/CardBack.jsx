import React from "react";
//import IoMdHeart from "react-icons/src/icons";
import { IoMdHeart } from "react-icons/io";

const CardBack = () => {
  return (
    <div className="card-back">
      <h1 className="card-back-title">Tarta de manzana</h1>
      <p>Puntuación:</p>
      <IoMdHeart />
      <p>Dificultad:</p>
      <span className="card-time">Tiempo 30min:</span>
    </div>
  );
};

export default CardBack;
