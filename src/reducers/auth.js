import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, SET_USER_DATA_SUCCESS } from './types';

const initialState = {
  token: null,
  loading: false,
  error: null,
  user_data: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA_SUCCESS: 
      return{
        ...state,
        user_data: action.payload
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user_data: action.payload,
        loading: false,
        error: null
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;