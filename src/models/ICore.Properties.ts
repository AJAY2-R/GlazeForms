export interface ICoreStyle {
  backgroundColor?: string;
  size?: IControlSize;
  border?: IBorder;
  margin?: IMargin;
  padding?: IPadding;
  [key: string]: unknown;
}
export interface IControlSize {
  width: ISize;
  height: ISize;
}
export interface IBorder {
  width: ISize;
  style: string;
  color: string;
}
export interface IMargin {
  top: ISize;
  right: ISize;
  bottom: ISize;
  left: ISize;
}
export interface IPadding {
  top: ISize;
  right: ISize;
  bottom: ISize;
  left: ISize;
}

export interface ISize {
  size?: number;
  unit: Size;
}

export enum Size {
  px = 'px',
  em = 'em',
  rem = 'rem',
  percent = '%',
}
