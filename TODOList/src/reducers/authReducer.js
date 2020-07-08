import TYPES from '../const/types';

const INITIAL_STATE = {
  email: '',
  password: ''
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.EMAIL_CHANGED:
      return {...state, email: action.payload};
    case TYPES.PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case TYPES.password:
        return {...state, user: action.payload};
    default:
      return state;
  }
};

export default authReducer;
