import { combineReducers } from "redux";
import { Api } from "./Api";
import entities from "./entities";

export default combineReducers({
  entities: entities,
  [Api.reducerPath]: Api.reducer,
});
