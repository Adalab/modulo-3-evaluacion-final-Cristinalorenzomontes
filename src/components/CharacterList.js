import React from "react";
import Character from "./Character";

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        image={character.image}
        name={character.name}
        status={character.status}
        species={character.species}
      />
    );
  });

  return <section className="cards">{htmlCode}</section>;
};

export default CharacterList;
