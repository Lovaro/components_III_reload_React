import React from "react";
import pasteleriaRecetas from "./api";
import Card from "./components/Card";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    //<div className="card-container">
    //<Card className="Card-body" info={pasteleriaRecetas[0]} />
    //</div> al hacer la funcion en cardcontainer solo llamando a su componente ya me corre los map y el codigo del principio se borra
    <CardContainer />
  );
}

export default App;
