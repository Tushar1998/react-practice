import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/root.reducer";
import logger from "../middlewares/logger";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
