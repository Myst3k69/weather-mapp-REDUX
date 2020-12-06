import("../components/Weather.css");
const axios = require("axios");

// call API to get temperature
const CallAPI = (city, apiKey, setTemp, setFindedCity) => {
  // Api Call
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
    .then((response) => response.data)
    .then((data) => {
      setFindedCity(true);
      setTemp(data.main.temp);
    })
    .catch((err) => setFindedCity(false));
};

export default CallAPI;
