import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root.reducer";
import logger from "../middlewares/logger";
import fetchUsers from "../middlewares/userMiddlware";

const middlewares = [logger, fetchUsers];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;