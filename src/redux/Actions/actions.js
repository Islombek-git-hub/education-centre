import USER from "../Reducers/user";

export const modalFun = () => ({ type: "MODAL_VIDEO" });

export const getUser = (user) => async (dispatch) => {
  try {
    await dispatch({ type: USER, payload: user });
  } catch (error) {
    await console.log(error);
  }
};
