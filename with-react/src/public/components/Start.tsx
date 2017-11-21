import * as React from "react";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { AnyAction, combineReducers, Dispatch, Reducer } from "redux";
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
    valueChanged: (e: any) => void;
}

// Map Redux state to component props
const mapStateToProps =
    (state: StateFromProps) => ({ value: state.value });

// Map Redux actions to component props
const mapDispatchToProps =
    (dispatch: Dispatch<number>) => ({ valueChanged: (e: any) => dispatch(setValue(e.target.value as number)) });

// Connected Component
export default connect<StateFromProps, DispatchFromProps, void, StartProps>(
    mapStateToProps,
    mapDispatchToProps
)(Start as React.ComponentClass<StartProps>);

// action
export const setValue = (v: number): AnyAction => ({ type: "setValue", value: v });

// reducer
const value: Reducer<number> = (state = 0, action: AnyAction) => {
    switch (action.type) {
        case "setValue":
            return action.value;
        default:
            return state;
    }
};

interface StoreState {
    value: number;
}

export const reducers = combineReducers<StoreState>({ value });
