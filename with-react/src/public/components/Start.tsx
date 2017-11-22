import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { Action, AnyAction, combineReducers, Dispatch, Reducer } from "redux";
import { Input } from "./Input";
import { Slider } from "./Slider";

type StartProps = StateFromProps & DispatchFromProps;

class Start extends React.Component<StartProps> {
    constructor(props: StartProps) {
        super();
    }

    public render() {
        return [
            <Slider value={this.props.value} valueChanged={this.props.valueChanged} key="slider" />,
            <Input value={this.props.value} valueChanged={this.props.valueChanged} key="input" />
        ];
    }
}

interface StateFromProps {
    value: number;
}

interface DispatchFromProps {
    valueChanged: (e: any) => SetValueAction;
}

// Map Redux state to component props
const mapStateToProps = (state: StoreState) => ({ value: state.myData.value });

// Map Redux actions to component props
const mapDispatchToProps =
    (dispatch: Dispatch<StoreState>) => ({ valueChanged: (e: any) => dispatch(setValue(e.target.value)) });

// Connected Component
export default connect<StateFromProps, DispatchFromProps, {}, StoreState>(
    mapStateToProps,
    mapDispatchToProps
)(Start as React.ComponentClass<StartProps>);

// action
export enum Actions {
    SetValue
}

export interface SetValueAction extends Action {
    value: number;
}

export const setValue = (value: number): SetValueAction => ({ type: Actions.SetValue, value });

// reducer
const myData: Reducer<StateFromProps> = (state = { value: 0 }, action: AnyAction): StateFromProps => {
    switch (action.type) {
        case Actions.SetValue:
            return { value: action.value };
        default:
            return state;
    }
};

interface StoreState {
    myData: { value: number };
}

export const reducers = combineReducers<StoreState>({ myData });
