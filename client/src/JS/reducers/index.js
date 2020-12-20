import { GET_USERS, EDIT_USER, DELETE_USER, ADD_USER } from "../const";

const initState = {
  users: [],
  loading: true,
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_USER:
      return { ...state, users: [action.payload, ...state.users] };
    case DELETE_USER:
    case EDIT_USER:
      return { ...state, loading: true };
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };
    default:
      return state;
  }
}
