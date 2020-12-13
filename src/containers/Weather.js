import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LineChart from "./LineChart";
import RadarChart from "./RadarChart";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import useFetch from "../services/useAPI";
import Loader from "react-loader-spinner";

import { resetCity } from "../actions";
import { seletCity } from "../actions";
import { CRow, CCol } from "@coreui/react";

import("../App.css");
import("react-loader-spinner/dist/loader/css/react-spinner-loader.css");

const Weather = () => {
  // History

  let history = useHistory();
  // Store
  const cityList = useSelector((state) => state.cities);

  const dispatch = useDispatch();

  //custom Hook
  const [loader, setLoader] = useFetch(cityList);

  // Function to clean datas before coming back on Home Page

  const backHome = () => {
    history.push("/");
    dispatch(seletCity(""));
    dispatch(resetCity());
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* Display a loader while API fetching */}

      {!loader ? (
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

            <button className="homeButton" onClick={() => backHome()}>
              Autres villes{" "}
            </button>
          </header>
          {/* Display error message if city has not been found */}
          {cityList.length > 0 ? (
            <>
              {/* Change the background hot/cold depending on temperature */}

              <main>
                <CRow style={{ marginTop: "50px" }}>
                  <CCol md="2">
                    <Nav className="navCity"></Nav>
                  </CCol>
                  <CCol md="5">
                    <LineChart></LineChart>
                  </CCol>
                  <CCol md="5">
                    <RadarChart></RadarChart>
                  </CCol>
                </CRow>
              </main>

              <footer>
                <h3>Test technique SAFECUBE</h3>{" "}
              </footer>
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
