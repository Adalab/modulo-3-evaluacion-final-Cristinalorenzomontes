import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/character.scss";

const Character = (props) => {
  return (
    <article className="card">
      <img src={props.image} className="card__img" alt={props.name} />
      <div className="atributes">
        <h3 className="card__title">{props.name}</h3>
        <p className="card__species">{props.species}</p>
        <p className="card__status">{props.status}</p>
      </div>
      <Link to={`/character/${props.id}`}>
        <button className="card__btn">Click here to see in detail</button>
      </Link>
    </article>
  );
};

export default Character;
