import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import logo from "../images/logo.png";
import getApiData from "../services/api";
import "../stylesheet/Reset.scss";
import "../stylesheet/App.scss";
import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filterName, setNameFilter] = useState("");
  const [filterStatus, setStatusFilter] = useState("all");

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  characters.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });

  const handleFilter = (data) => {
    if (data.key === "nameFilter") {
      setNameFilter(data.value);
    } else if (data.key === "status") {
      setStatusFilter(data.value);
    }
  };

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

  const filteredCharacters = characters
    .filter((character) => {
      return character.name.toUpperCase().includes(filterName.toUpperCase());
    })
    .filter((character) => {
      if (filterStatus === "all") {
        return true;
      } else {
        return character.status === filterStatus;
      }
    });

  return (
    <div className="App">
      <header>
        <h1>
          {" "}
          <img
            className="logo"
            src={logo}
            alt="logo"
            title="Logo Rick & Morty"
          ></img>
        </h1>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <Filters
              handleFilter={handleFilter}
              filterName={filterName}
              filterStatus={filterStatus}
            />
            <CharacterList
              characters={filteredCharacters}
              filterName={filterName}
            />
          </Route>
          <Route
            path="/character/:characterId"
            render={renderCharacterDetail}
          />
        </Switch>
      </main>
    </div>
  );
};

export default App;
