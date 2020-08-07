import React from "react";

const App = (props) => {
  return (
    <article className="card">
      <img src={props.image} className="card__img" alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__status">{props.status}</p>
      <p className="card__species">{props.species}</p>
      <button className="card__btn">Ver en detalle</button>
    </article>
  );
};

export default App;
