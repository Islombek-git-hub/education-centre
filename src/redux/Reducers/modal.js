const initialState = false;
function modal(state = initialState, action) {
  switch (action.type) {
    case "MODAL_VIDEO":
      return !state;
    default:
      return state;
  }
}
export default modal;
