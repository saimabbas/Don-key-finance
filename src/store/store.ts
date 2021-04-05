import { createStore, compose, applyMiddleware } from "redux";
import { rootReducer } from "../reducers";
import thunk from "redux-thunk";
import { apiMiddleware } from "reducers/apiMiddleware";
//@ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, apiMiddleware)));
