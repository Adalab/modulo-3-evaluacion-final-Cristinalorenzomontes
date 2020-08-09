import React from "react";
import { Link } from "react-router-dom";

const Character = (props) => {
  return (
    <article className="card">
      <img src={props.image} className="card__img" alt={props.name} />
      <h3 className="card__title">{props.name}</h3>
      <p className="card__species">{props.species}</p>
      <Link to={`/character/${props.id}`}>
        <button className="card__btn">Click here to see in detail</button>
      </Link>
    </article>
  );
};

export default Character;
