import { GET_ERRORS, SEND_CONTACT, CLEAR_ERRORS } from "./types";
import axios from "axios";

// Send Contact Details
export const sendContact = (userData) => (dispatch) => {
  dispatch(clearErrors());
  axios
    .post("/send", userData)
    .then((res) => {
      dispatch({
        type: SEND_CONTACT,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};
