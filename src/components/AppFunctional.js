import React, { useEffect, useState } from "react";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";
import getApiData from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const renderCharacterDetail = () => {
    const character = characters[3];
    if (character) {
      return (
        <CharacterDetail
          image={character.image}
          name={character.name}
          status={character.status}
          species={character.species}
        />
      );
    }
  };

  return (
    <div>
      <h1>Rick y Morty</h1>
      <CharacterList characters={characters} />
      {renderCharacterDetail()}
    </div>
  );
};

export default App;
