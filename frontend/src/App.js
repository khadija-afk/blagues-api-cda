import { useState } from "react";
import JokeCard from "./components/JokeCard";
import api from "./services/api";

function App() {
  const [joke, setJoke] = useState("");

  const getRandomJoke = async () => {
    const res = await api.get("/blagues/random");
    setJoke(res.data.contenu);
  };

  return (
    <div className="container">
      <h1>😂 Blagues Carambar</h1>
      <button onClick={getRandomJoke}>Nouvelle blague</button>
      <JokeCard joke={joke} />
    </div>
  );
}

export default App;
