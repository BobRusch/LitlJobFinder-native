import { combineReducers } from "redux";

import auth from "./Auth.reducer";
import jobs from "./jobs.reducer";

export default combineReducers({
  auth,
  jobs,
});
