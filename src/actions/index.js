export const setCity = (city, coord) => {
  return {
    type: "SET",
    payload: {
      city: city,
      coord: coord,
    },
  };
};

export const updateCity = (city, coord, temp) => {
  return {
    type: "UPDATE",
    payload: {
      city: city,
      coord: coord,
      forecastTemp: temp,
    },
  };
};

export const seletCity = (city) => {
  return {
    type: "SELECT_CITY",
    payload: {
      selectedCity: city,
    },
  };
};

export const resetCity = () => {
  return {
    type: "RESET",
  };
};

export const isLoadded = () => {
  return {
    type: "SIGN_IN",
  };
};
