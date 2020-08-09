import React from "react";
import "../stylesheet/characterList.scss";
import Character from "./Character";

const CharacterList = (props) => {
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

export default CharacterList;
