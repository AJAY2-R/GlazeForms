import { ICoreStyle } from "@glaze/models";

export interface IGridProperties extends ICoreStyle {
    rows: number;
    columns: number;
    states: IGridStates;
}

export interface IGridStates {
    hover: ICoreStyle;
}