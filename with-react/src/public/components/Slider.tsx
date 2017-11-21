import * as React from "react";

export interface SliderProps {
    value: number;
    valueChanged: (e: any) => void;
}

export const Slider: React.SFC<SliderProps> =
    (props) => <input type="range" onChange={props.valueChanged} value={props.value} min="0" max="100" />;
