import { combineReducers } from "redux";
import { myData } from "./components/MyData/reducers";
import { StoreState } from "./models/StoreState";

export const rootReducer = combineReducers<StoreState>({ myData });
