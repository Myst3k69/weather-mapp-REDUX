import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCity } from "../actions";
import { seletCity } from "../actions";
import Alert from "./Alert";
import "../App.css";

const HomePage = () => {
  const dispatch = useDispatch();

  // States
  const [cities, setCities] = useState([]);

  const [cityOne, setCityOne] = useState("");
  const [cityTwo, setCityTwo] = useState("");
  const [cityThree, setCityThree] = useState("");
  const [cityFour, setCityFour] = useState("");
  const [emptysearch, setEmptySearch] = useState(false);
  const [nbInputs, setNbInputs] = useState(["input-0"]);

  let history = useHistory();

  //Redirect to result page
  const getForecast = (e) => {
    e.preventDefault();

    // Aucune ville renseignée
    if (cityOne.length === 0) {
      console.log("aucune ville remplie");
      setEmptySearch(true);
    } else {
      // Une ville est remplie mais n'est pas validée par le formulaire (cas de la première ville)
      if (cities.length === 0) {
        dispatch(setCity(cityOne));
        dispatch(seletCity(cityOne));
        history.push({
          pathname: "/weather",
        });
      }

      // Cas avec des villes de renseignées dans cities
      else {
        dispatch(setCity(cityOne));
        dispatch(seletCity(cityOne));
        cities.map((city) => dispatch(setCity(city)));
        history.push({
          pathname: "/weather",
        });
      }
    }
  };

  // Add city input

  const addCity = (e) => {

e.preventDefault()


    // Add inputs
    let newInput = `input-${nbInputs.length}`;
    setNbInputs((prevState) => prevState.concat([newInput]));

   
    //Record values of cities
    setCities((prev) => [...prev, cityOne]);
    setCityOne("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
      </header>
      <main>
        <form style={{ width: "300px"}}>

      {/* Generate inputs dynamically */}
        {nbInputs
          ? nbInputs.map((input, i) => {
              console.log("length : ", nbInputs.length);
              return (
                <>

                
        {emptysearch ? (
          <Alert
            type="warning"
            message="Merci de saisir au moins une ville"
          ></Alert>
        ) : (
          ""
        )}
                  <input
                    type="text"
                    placeholder="Entrer ville"
                    value={cities[i]}
                    key={i}
                    onChange={(e) => setCityOne(e.target.value)}
                  />
                  {i === nbInputs.length - 1 ? (
                    <button  style={{backgroundColor:"#0d86ff"}} onClick={(e) => addCity(e)}>Add city</button>
                  ) : (
                    ""
                  )}
                </>
              );
            })
          : ""}


        <button type="submit"  onClick={(e) => getForecast(e)}>
          {" "}
          Prévisions{" "}
        </button>
        </form>
      </main>
      <footer>Test technique SAFECUBE</footer>
    </div>
  );
};

export default HomePage;
