import React, { useEffect, useState } from "react";
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
    </div>
  );
};

export default App;
