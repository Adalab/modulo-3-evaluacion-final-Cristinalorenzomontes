import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/api";
import CharacterDetail from "./CharacterDetail";
import CharacterList from "./CharacterList";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const renderCharacterDetail = (props) => {
    console.log(props);
    const routeCharacterId = parseInt(props.match.params.characterId);
    const character = characters.find(
      (character) => character.id === routeCharacterId
    );
    if (character) {
      return (
        <CharacterDetail
          image={character.image}
          name={character.name}
          status={character.status}
          specie={character.species}
        />
      );
    }
  };

  return (
    <div>
      <h1>Rick y Morty</h1>
      <CharacterList characters={characters} />

      <Switch>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
