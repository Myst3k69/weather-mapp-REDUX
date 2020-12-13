
import cityList from './cityList'
import selectedCity from "./selectCity"
import {combineReducers} from 'redux'


const allReducers = combineReducers({

cities : cityList,
selectedCity : selectedCity

})

export default allReducers;