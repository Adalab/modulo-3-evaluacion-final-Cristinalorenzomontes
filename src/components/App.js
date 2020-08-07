import React from "react";
import api from "../services/api";

api().then((data) => {
  console.log(data);
});

const App = () => {
  return <div></div>;
};

export default App;
