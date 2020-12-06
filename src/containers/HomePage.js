import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../App.css";

const HomePage = () => {
  // States
  const [city, setCity] = useState("");
  const [emptysearch, setEmptySearch] = useState(true);
  let history = useHistory();

  //Redirect to result page
  const getForecast = (e) => {
    e.preventDefault();

    if (city !== "") {
      setEmptySearch(true);
      history.push({
        pathname: "/weather",
        city: city,
      });
    } else setEmptySearch(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <form>
          <input
            type="text"
            placeholder="Entrer ville"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <button type="submit" onClick={(e) => getForecast(e)}>
            {" "}
            Prévisions{" "}
          </button>

          {/* Detect if user does not fill a city */}
          {!emptysearch ? <h3>Merci de saisir une ville</h3> : ""}
        </form>
      </main>
      <footer>Test technique WeCount</footer>
      ...
    </div>
  );
};

export default HomePage;
