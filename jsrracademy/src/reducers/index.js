import { combineReducers } from "redux";
import formReducer from "./formReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  form: formReducer,
  auth: authReducer,
  errors: errorReducer,
});
