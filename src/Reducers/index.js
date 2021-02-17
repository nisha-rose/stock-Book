// import IssueConstants from './../Constants/IssueConstants';
import { combineReducers } from 'redux';
import loginReducer from './LoginReducer'; 
import StockReducert from './StockReducer';

const initState = {
  user: '',
  Stock: []
}

 

export default combineReducers({
  login:loginReducer,
  stock: StockReducert
});