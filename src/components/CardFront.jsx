import React from "react";
import CardBack from "./CardBack";

const CardFront = ({ img, sinAzucar, nuevo }) => {
  return (
    <div className="card-front">
      <img className="card-img" src={img} />
      <div className="card-tags">
        {sinAzucar && <span className="card-notsugar">Sin azucar</span>}
        {nuevo && <span className="card-new">Nuevo</span>}
      </div>
    </div>
  );
};

export default CardFront;
