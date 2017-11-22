import { AnyAction, Reducer } from "redux";
import { Actions } from "../../models/Actions";
import { StartProps } from "./MyData";

export const myData: Reducer<StartProps> = (state = { value: 0 }, action: AnyAction): StartProps => {
    switch (action.type) {
        case Actions.SetValue:
            return { value: action.value };
        default:
            return state;
    }
};
