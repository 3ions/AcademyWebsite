import axios from "axios";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_STAFF, SET_CURRENT_STUDENT } from "./types";
import setAuthToken from "../utils/setAuthToken";

// Login Student - Get Student Token
export const loginStudent = (studentData) => (dispatch) => {
  axios
    .post("/students/login", studentData)
    .then((res) => {
      //Save to localStorage
      const { token } = res.data;

      // Set token to ls
      localStorage.setItem("jwtStudentToken", token);

      //Set token to Auth header
      setAuthToken(token);

      // Decode token to get student data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentStudent(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Login Staffs
export const loginStaff = (staffData) => (dispatch) => {
  axios
    .post("/staffs/login", staffData)
    .then((res) => {
      //Save to localStorage
      const { token } = res.data;

      // Set token to ls
      localStorage.setItem("jwtStaffToken", token);

      //Set token to Auth header
      setAuthToken(token);

      // Decode token to get staff data
      const decoded = jwt_decode(token);

      // Set current user
      dispatch(setCurrentStaff(decoded));
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set logged in student
export const setCurrentStudent = (decoded) => {
  return {
    type: SET_CURRENT_STUDENT,
    payload: decoded,
  };
};

// Set logged in staff
export const setCurrentStaff = (decoded) => {
  return {
    type: SET_CURRENT_STAFF,
    payload: decoded,
  };
};

// Logout Student
export const logoutStudent = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtStudentToken");

  // Remove auth header for future requests
  setAuthToken(false);

  // Set user to {} so that isAuthenticated is set false
  dispatch(setCurrentStudent({}));
};

// Logout Staff
export const logoutStaff = () => (dispatch) => {
  // Remove token from localStorage
  localStorage.removeItem("jwtStaffToken");

  // Remove auth header for future requests
  setAuthToken(false);

  // Set user to {} so that isAuthenticated is set false
  dispatch(setCurrentStaff({}));
};
