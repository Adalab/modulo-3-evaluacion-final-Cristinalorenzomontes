import React from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/api";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    getApiData().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  renderCharacterDetail(props) {
    console.log(props);
    const routeCharacterId = parseInt(props.match.params.characterId);
    const character = this.state.characters.find(
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
  }

  render() {
    return (
      <div>
        <h1>Rick & Morty</h1>
        <Switch>
          <Route exact path="/">
            <CharacterList characters={this.state.characters} />
          </Route>
          <Route
            path="/character/:characterId"
            render={this.renderCharacterDetail}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
