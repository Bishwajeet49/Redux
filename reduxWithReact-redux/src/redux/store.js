import { createStore,combineReducers,applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import accountReducer from "./Reducers/accountReducer";
import bonousReducer from "./Reducers/bonusReducer";

const store=createStore(combineReducers({
    acc:accountReducer,
    bns:bonousReducer
},
applyMiddleware( logger,thunk)
))

export default store;