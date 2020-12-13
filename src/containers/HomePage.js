import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCity } from "../actions";
import { seletCity } from "../actions";
import "../App.css";

const HomePage = () => {
  const dispatch = useDispatch();

  // States
  const [cities, setCities] = useState([]);
  const [cityOne, setCityOne] = useState("");
  const [cityTwo, setCityTwo] = useState("");
  const [cityThree, setCityThree] = useState("");
  const [cityFour, setCityFour] = useState("");
  const [emptysearch, setEmptySearch] = useState(true);

  let history = useHistory();

  //Redirect to result page
  const getForecast = (e) => {
    e.preventDefault();
    dispatch(setCity(cityOne));
    dispatch(setCity(cityTwo));
    dispatch(setCity(cityThree));
    dispatch(setCity(cityFour));
    dispatch(seletCity(cityOne));
    cities.push(cityOne, cityTwo, cityThree, cityFour);

    if (cityOne != "" && cityTwo != "" && cityThree != "" && cityFour != "") {
      setEmptySearch(false);
      history.push({
        pathname: "/weather",
      });
    } else setEmptySearch(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <form style={{ width: "300px", marginLeft: "40%" }}>
          <input
            type="text"
            placeholder="Entrer ville"
            value={cityOne}
            onChange={(e) => setCityOne(e.target.value)}
          />
          <input
            type="text"
            placeholder="Entrer ville"
            value={cityTwo}
            onChange={(e) => setCityTwo(e.target.value)}
          />
          <input
            type="text"
            placeholder="Entrer ville"
            value={cityThree}
            onChange={(e) => setCityThree(e.target.value)}
          />
          <input
            type="text"
            placeholder="Entrer ville"
            value={cityFour}
            style={{ marginBottom: "20px" }}
            onChange={(e) => setCityFour(e.target.value)}
          />

          <button type="submit" onClick={(e) => getForecast(e)}>
            {" "}
            Prévisions{" "}
          </button>

          {/* Detect if user does not fill a city */}
          {emptysearch ? <h4>Merci de saisir quatre villes</h4> : ""}
        </form>
      </main>
      <footer>Test technique SAFECUBE</footer>
    </div>
  );
};

export default HomePage;
