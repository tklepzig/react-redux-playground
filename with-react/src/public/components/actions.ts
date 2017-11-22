import { Action } from "redux";

export enum Actions {
    SetValue
}

export interface SetValueAction extends Action {
    value: number;
}

export const setValue = (value: number): SetValueAction => ({ type: Actions.SetValue, value });
