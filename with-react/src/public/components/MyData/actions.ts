import { Action } from "redux";
import { Actions } from "../../models/Actions";

export interface SetValueAction extends Action {
    value: number;
}

export const setValue = (value: number): SetValueAction => ({ type: Actions.SetValue, value });
