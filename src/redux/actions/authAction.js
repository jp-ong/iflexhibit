import axios from "axios";
import { AUTH_LOADING, AUTH_SUCCESS, AUTH_ERROR } from "redux/types/authTypes";

const API_URL = "https://iflexhibit-api.herokuapp.com";

function setLoading() {
  return { type: AUTH_LOADING };
}

export const authUser = () => (dispatch) => {
  dispatch(setLoading());
  axios
    .get(API_URL + "/api/users/user", { withCredentials: true })
    .then((response) => {
      return dispatch({
        type: AUTH_SUCCESS,
        payload: { user: response.data.user },
      });
    })
    .catch(() => {
      return dispatch({ type: AUTH_ERROR });
    });
};
