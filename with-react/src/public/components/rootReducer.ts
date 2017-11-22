import { combineReducers } from "redux";
import { myData } from "./myDataReducer";
import { StoreState } from "./StoreState";

export const rootReducer = combineReducers<StoreState>({ myData });
