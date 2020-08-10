import React from "react";
import "../stylesheet/characterDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CharacterDetail = (props) => {
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <Link to="/">
      <div className="container">
        <div className="modal">
          <div className="modal__dialog">
            <div className="modal__content" onClick={handleModalContentClick}>
              <header className="modal__header">
                <h2 className="modal__title"> Character: {props.name}</h2>
                <Link to="/">
                  <span className="return">Return</span>
                </Link>
              </header>
              <section>
                <img className="card__img" src={props.image} alt={props.name} />
                <ul className="card__detail">
                  <li> Specie: {props.specie} </li>
                  <li> Status: {props.status === "Alive" ? "👽" : "💀"} </li>
                  <li> Origin: {props.origin} </li>
                  <li> Gender: {props.gender} </li>
                  <li> Episodes: {props.episodes} </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
CharacterDetail.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  origin: PropTypes.string,
  gender: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterDetail;
