import { SEND_CONTACT } from "../actions/types";

const initialState = {
  isSentContact: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEND_CONTACT:
      return {
        ...state,
        isSentContact: true,
      };
    default:
      return state;
  }
}
