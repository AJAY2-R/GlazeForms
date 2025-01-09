import { IBorder } from "property-editors/components/border-editor/border";

export interface ICoreStyle {
  backgroundColor?: string;
  size?: IControlSize;
  border?: IBorder;
  margin?: IMargin;
  padding?: IPadding;
  states?: unknown;
  [key: string]: unknown;
}
export interface IControlSize {
  width: ISize;
  height: ISize;
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
  value: number;
  unit: Size;
}

export enum Size {
  Pixel = 'px',
  Em = 'em',
  Rem = 'rem',
  Percent = '%',
  ViewportWidth = 'vw',
  ViewportHeight = 'vh',
  Auto = 'auto'
}


export function getSize(size: ISize) {
  return `${size.value}${size.unit}`;
}
