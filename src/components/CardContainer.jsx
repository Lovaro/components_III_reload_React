import React from "react";
import Card from "./Card";
import ListaRecetas from "../api";

const CardContainer = () => {
  return (
    <div className="card-list-recetas">
      {ListaRecetas.map((receta) => (
        <Card info={receta} key={receta.id} />
      ))}
    </div>
  );
};

export default CardContainer;
