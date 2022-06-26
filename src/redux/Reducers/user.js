export const USER = "USER";

const initialState = {
  data: {
    course: false,
  },
};

function user(state = initialState, action) {
  switch (action.type) {
    case USER:
      return { data: action.payload };
    default:
      return state;
  }
}
export default user;
