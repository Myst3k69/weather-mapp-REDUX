import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CallAPI from "../services/CallAPI.js";
import Loader from "react-loader-spinner";
import("../components/Weather.css");
import("react-loader-spinner/dist/loader/css/react-spinner-loader.css");



const Weather = (props) => {
 

  // Constants
  const city = props.location.city;
  const apiKey = process.env.REACT_APP_API_KEY;

  //states
  const [temp, setTemp] = useState();
  const [findedCity, setFindedCity] = useState();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    //   API Call
    setTimeout(() => {
      CallAPI(city, apiKey, setTemp, setFindedCity);
      setLoader(false);
    }, 1000);
  }, [city]);

  return (
    <>

     {/* Display a loader while API fetching */}
      {loader ? (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          style={{ marginLeft: "50%", marginTop: "20%" }}
          
        />
      ) : (
        <div className="App">
          <header className="App-header">
            <h1>React Weather App</h1>
          </header>
        {/* Display error message if city has not been found */}
          {findedCity ? (
            <>

                {/* Change the background hot/cold depending on temperature */}
              <main className={temp < 15 ? "cold" : "hot"}>
                <h2>
                  {city.toUpperCase()} : {Math.round(temp * 10) / 10} ° C
                </h2>
                {temp < 15 ? <h3>Il fait froid !</h3> : <h3> Il fait chaud</h3>}
                <Link to="/">
                  <button>Autre ville </button>
                </Link>
              </main>
              <footer>Test technique WeCount</footer>
            </>
          ) : (
            <h3 style={{ textAlign: "center" }}>
              Ville non trouvée. Merci de saisir un autre nom de ville :{" "}
              <Link to="/">Ici</Link>
            </h3>
          )}
        </div>
      )}
    </>
  );
};

export default Weather;
