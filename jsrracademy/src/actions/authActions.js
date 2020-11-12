import TEST_DISPATCH from "./types";

// Login Student
export const loginStudent = (userData) => {
  return {
    type: TEST_DISPATCH,
    payload: userData,
  };
};
