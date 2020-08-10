import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/character.scss";
import PropTypes from "prop-types";

const Character = (props) => {
  return (
    <article className="card">
      <Link to={`/character/${props.id}`}>
        <img src={props.image} className="card__img" alt={props.name} />
        <div className="atributes">
          <h3 className="card__title">{props.name}</h3>
          <p className="card__species">{props.species}</p>
          <p className="card__status">{props.status}</p>
        </div>
      </Link>
    </article>
  );
};

Character.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  status: PropTypes.string,
  species: PropTypes.string,
};

export default Character;
