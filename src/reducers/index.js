import { combineReducers } from 'redux';
import {reducer as notificationsReducer} from 'reapop';
import authReducer from './auth';
import productReducer from './products';
const rootReducer = combineReducers({
    notifications: notificationsReducer(),
    auth: authReducer,
    products: productReducer,
  });
  
  export default rootReducer;