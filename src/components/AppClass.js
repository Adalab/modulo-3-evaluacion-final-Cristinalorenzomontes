import React from "react";
import getApiData from "../services/api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount() {
    getApiData().then((data) => {
      this.setState({
        characters: data,
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Hola bebé</h1>
      </div>
    );
  }
}

export default App;
