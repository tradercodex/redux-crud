import { combineReducers } from 'redux'
import productosReducers from './productosReducers' 

export default combineReducers({
    productos: productosReducers
});