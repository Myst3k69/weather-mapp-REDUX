const cityList = (state = "", action) => {
  switch (action.type) {
    case "SET":
      return [...state, action.payload];

    case "UPDATE":
      const { city, coord, forecastTemp } = action.payload;

      const existingCity = state.find((state) => state.city === city);
      if (existingCity) {
        existingCity.coord = coord;
        existingCity.forecastTemp = forecastTemp;
      }

      return state;

    case "RESET":
      return "";

    default:
      return state;
  }
};
export default cityList;
