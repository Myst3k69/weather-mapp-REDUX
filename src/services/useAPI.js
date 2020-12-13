import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateCity } from "../actions";;
const axios = require("axios");

export default function useFetch(cityList) {
  //State

  const [loader, setLoader] = useState();

  // Constants

  const apiKey = process.env.REACT_APP_API_KEY;

  // Store
  const dispatch = useDispatch();

  // Function

  const currentWeather = (city, apiKey) => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      )
      .then((response) => {
        OnecallAPI(
          response.data["coord"].lat,
          response.data["coord"].lon,
          apiKey,
          city
        );
      })

      .catch((err) => {
        console.log("err response : ", err);
      });
  };

  const OnecallAPI = (lat, lon, apiKey, city) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,minutely&appid=${apiKey}`
      )
      .then((response) => {
        dispatch(
          updateCity(
            city,
            { lat: response.data.lat, lon: response.data.lon },
            response.data.daily
          )
        );
      })

      .catch((err) => {});
  };

  // Api Call

  useEffect(() => {
    cityList.map((cit) => currentWeather(cit.city, apiKey));
    setTimeout(() => {
      setLoader(true);
    }, 1000);
  }, []);

  return [loader, setLoader];
}
