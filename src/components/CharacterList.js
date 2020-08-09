import React from "react";
import "../stylesheet/characterList.scss";
import Character from "./Character";

import PropTypes from "prop-types";

const CharacterList = (props) => {
  if (props.characters.length === 0) {
    return <p className="error">Character not found, try again!</p>;
  }
  const htmlCode = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        id={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
        origin={character.origin}
        episodes={character.episodes}
      />
    );
  });

  return <section className="cards">{htmlCode}</section>;
};

CharacterList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  status: PropTypes.string,
  specie: PropTypes.string,
  origin: PropTypes.string,
  gender: PropTypes.string,
  episodes: PropTypes.number,
};

export default CharacterList;
