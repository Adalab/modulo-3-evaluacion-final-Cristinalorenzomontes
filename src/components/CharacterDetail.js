import React from "react";
import { Link } from "react-router-dom";

const CharacterDetail = (props) => {
  return (
    <div className="modal">
      <div className="modal__dialog">
        <div className="modal__content">
          <header className="modal__header">
            <h2 className="modal__title"> Personaje: {props.name}</h2>
            <Link to="/">
              <span className="modal__close icon fas fa-times"></span>
            </Link>
          </header>
          <section>
            <img className="card__img" src={props.image} alt={props.name} />
            <ul className="card__detail">
              <li> Specie: {props.species} </li>
              <li> Status: {props.status} </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
