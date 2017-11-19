import { Action } from "redux";

export enum Actions {
  SetColor,
  SetStrokeWidth
}

export interface ColorAction extends Action {
  color: string;
}
export const setColor = (color: string): ColorAction => ({ type: Actions.SetColor, color });

export interface StrokeWidthAction extends Action {
  strokeWidth: number;
}
export const setStrokeWidth = (strokeWidth: number): StrokeWidthAction =>
  ({ type: Actions.SetStrokeWidth, strokeWidth });
