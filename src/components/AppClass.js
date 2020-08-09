import React from "react";
import { Route, Switch } from "react-router-dom";
import getApiData from "../services/api";
// import Filters from "./Filters";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      // filterName: "",
      // filterStatus: "all",
    };
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    // this.handleFilters = this.handleFilters.bind(this);
  }

  // characters.sort(function (a, b) {
  //   if (a.name < b.name) return -1;
  //   if (a.name > b.name) return 1;
  //   return 0;
  // });

  componentDidMount() {
    getApiData().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  // handleFilters(data) {
  //   this.setState({
  //     [data.key]: data.value,
  //   });
  // }

  renderCharacterDetail(props) {
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

  // renderFilteredProducts() {
  //   return this.state.characters
  //     .filter((character) => {
  //       return character.name.includes(this.state.filterName);
  //     })
  //     .filter((character) => {
  //       return character.status === this.state.filterStatus;
  //     });
  // }

  render() {
    return (
      <div>
        <h1>Rick & Morty</h1>
        <Switch>
          <Route exact path="/">
            {/* <Filters
              filterName={this.state.filterName}
              filterStatus={this.state.filterStatus}
              handleFilters={this.handleFilters}
            /> */}
            <CharacterList characters={this.state.characters} />
            {/* <CharacterList characters={this.renderFilteredProducts()} /> */}
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
