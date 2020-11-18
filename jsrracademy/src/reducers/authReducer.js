import { SET_CURRENT_STUDENT, SET_CURRENT_STAFF } from "../actions/types";
import isEmpty from "../validation/is-empty";

const initialState = {
  isStudentAuth: false,
  isStaffAuth: false,
  student: {},
  staff: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_STUDENT:
      return {
        ...state,
        isStudentAuth: !isEmpty(action.payload),
        student: action.payload,
      };
    case SET_CURRENT_STAFF:
      return {
        ...state,
        isStaffAuth: !isEmpty(action.payload),
        staff: action.payload,
      };
    default:
      return state;
  }
}
