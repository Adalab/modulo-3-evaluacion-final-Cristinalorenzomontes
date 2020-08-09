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
          origin={character.origin}
          gender={character.gender}
          episodes={character.episodes}
        />
      );
    } else {
      return <p>Character not found</p>;
    }
  };

  return (
    <div>
      <h1>Rick & Morty</h1>

      <Switch>
        <Route exact path="/">
          <CharacterList characters={characters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
