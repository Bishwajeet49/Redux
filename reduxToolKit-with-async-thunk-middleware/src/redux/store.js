
// import {createStore,applyMiddleware,combineReducers} from 'redux';

// import logger from "redux-logger";
// import thunk from "redux-thunk";
// import accountReducer from "./Reducers/accountReducer";
// import bonousReducer from "./Reducers/bonusReducer";


// const store=createStore(
//     combineReducers({
//         acc:accountReducer,
//          bns:bonousReducer
//     }),
//     applyMiddleware(logger,thunk)
//     );

// export default store;
import accountReducer from "./slices/accountSlices";
import bonusReducer from "./slices/bonusSlice";
import rewardReducer from "./reducers/rewardReducer"; // this reducer created from createAction and createReducer
import { configureStore } from "@reduxjs/toolkit";

const store=configureStore({
    reducer:{
        acc:accountReducer,
        bns:bonusReducer,
        rwd:rewardReducer,
    }
})
export default store;