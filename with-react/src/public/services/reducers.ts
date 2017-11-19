import { Action, combineReducers, Reducer } from "redux";
import { Actions, ColorAction, StrokeWidthAction } from "./actions";

interface PenState {
    color: string;
    strokeWidth: number;
}

const pen: Reducer<PenState> =
    (state = { color: "#1d1d1d", strokeWidth: 4 }, action: Action) => {
        switch (action.type) {
            case Actions.SetColor:
                const { color } = action as ColorAction;

                if (color === "#1d1d1d") {
                    return { ...state, color, strokeWidth: 4 };
                }
                return { ...state, color, strokeWidth: 10 };

            case Actions.SetStrokeWidth:
                const { strokeWidth } = action as StrokeWidthAction;

                return { ...state, strokeWidth };
            default:
                return state;
        }
    };

export default combineReducers({ pen });
