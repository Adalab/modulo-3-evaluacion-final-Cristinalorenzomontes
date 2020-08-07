import React, { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import getApiData from "../services/api";

const App = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div>
      <h1>Hola bebé</h1>
      <CharacterList characters={characters} />
    </div>
  );
};

export default App;
