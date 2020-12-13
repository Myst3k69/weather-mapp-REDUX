const selectCityReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECT_CITY":
      return [action.payload];
    default:
      return state;
  }
};

export default selectCityReducer;
