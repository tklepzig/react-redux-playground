import * as React from "react";
import { connect, Dispatch } from "react-redux";
import { setValue, SetValueAction } from "./actions";
import { Input } from "./Input";
import { Slider } from "./Slider";
import { StoreState } from "./StoreState";

export interface StartProps {
    value: number;
}

interface StartDispatchProps {
    valueChanged: (e: any) => SetValueAction;
}

class Start extends React.Component<StartProps & StartDispatchProps> {
    public render() {
        return [
            <Slider value={this.props.value} valueChanged={this.props.valueChanged} key="slider" />,
            <Input value={this.props.value} valueChanged={this.props.valueChanged} key="input" />
        ];
    }
}

function mapStateToProps(state: StoreState) {
    return { value: state.myData.value };
}

function mapDispatchToProps(dispatch: Dispatch<StoreState>) {
    return { valueChanged: (e: any) => dispatch(setValue(e.target.value)) };
}

export default connect<StartProps, StartDispatchProps, {}, StoreState>(
    mapStateToProps,
    mapDispatchToProps
)(Start as React.ComponentClass<StartProps & StartDispatchProps>);
