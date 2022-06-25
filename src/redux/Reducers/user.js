const initialState = false;
function modal(state = initialState, action) {
  switch (action.type) {
    case "USER":
      return !state;
    default:
      return state;
  }
}
export default modal;
