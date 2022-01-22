import {SET_USER_EMAIL, SET_USER_PASSWORD} from './actions';

const initialState = {
  email: '',
  password: '',
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_EMAIL:
      return {...state, email: action.payload};
    case SET_USER_PASSWORD:
      return {...state, password: action.payload};
    // case INCREASE_AGE:
    //   return {...state, age: state.age + 1};
    default:
      return state;
  }
}

export default userReducer;
