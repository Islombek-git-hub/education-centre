import { USER } from "../Reducers/user";

export const modalFun = () => ({ type: "MODAL_VIDEO" });

export const getUser = (user) => (dispatch) => {
  dispatch({ type: USER, payload: user });
};
