import React from "react";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import getApiData from "../services/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
    this.renderCharacterDetail.bind(this);
  }

  componentDidMount() {
    getApiData().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  renderCharacterDetail() {
    const character = this.state.characters[1];
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
  }

  render() {
    return (
      <div>
        <h1>Hola bebé</h1>
        <CharacterList characters={this.state.characters} />
        {this.renderCharacterDetail()}
      </div>
    );
  }
}

export default App;
