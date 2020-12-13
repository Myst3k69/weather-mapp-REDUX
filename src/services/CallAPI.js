const axios = require("axios");

// call API to get temperature
const CallAPI = (city, apiKey, setTemp, setFindedCity, coord, setCoord) => {
  // Api Call
  axios
    .get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
    .then((response) => {
      return response.data, console.log(response.data);
    })
    .then((data) => {
      setCoord(...coord, data.coord);
      setFindedCity(true);
      setTemp(data.main.temp);
    })
    .catch((err) => setFindedCity(false));
};

export default CallAPI;
