import * as React from "react";

export interface InputProps {
    value: number;
    valueChanged: (e: any) => void;
}

export const Input: React.SFC<InputProps> =
    (props) => <input type="number" onChange={props.valueChanged} value={props.value} />;
