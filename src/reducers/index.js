import loggedReducer from "./isLogged"
import cityList from './cityList'
import selectedCity from "./selectCity"
import {combineReducers} from 'redux'


const allReducers = combineReducers({

cities : cityList,
isLogged : loggedReducer,
selectedCity : selectedCity

})

export default allReducers;