const selectCityReducer = (state = "", action) => {
  switch (action.type) {
    case "SELECT_CITY":
      // return  [...state, action.payload];
      return [action.payload];
    default:
      return state;
  }
};

export default selectCityReducer;
