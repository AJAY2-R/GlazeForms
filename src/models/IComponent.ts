import { Type } from "@angular/core";
import { ICoreStyle } from "./ICore.Properties";
import { IState } from "decorators/builderComponent";

export abstract class IGlazeComponent<T extends ICoreStyle = ICoreStyle> {
    public abstract render(): void;
    public abstract update(properties: T, options?: IState): void;
    public abstract destroy(): void;
    public abstract control: ICoreProperties<T>;
    public abstract initializeProperty(): void;
    public abstract buildStyle(properties: T, stateProperties?: IState): IGlazeStyle;
    public abstract get properties(): T;
    public abstract setProperty(propertyName: string, value: unknown): void;
    public abstract setStateProperty(propertyName: string, value: unknown, state: IState): void;
    public abstract getProperty(propertyName: string, state?: string): unknown;
    public abstract loadProperties(properties: ICoreProperties<T>): void;
}

export type IComponent = Type<IGlazeComponent>

export interface ICoreProperties<T extends ICoreStyle = ICoreStyle> {
    id: string;
    type: string;
    parentProperties: IParentProperties;
    name: string;
    properties: T;
};

export interface IParentProperties{
    parentId: string;
}

export interface IGridParentProperties extends IParentProperties {
    row: number;
    column: number;
    rowSpan?: number;
    columnSpan?: number;
}

export interface IGlazeTree extends ICoreProperties {
    child?: ICoreProperties[];
}

export interface IGlazeStateOptions {
    state: string;
    selector: string;
}

export interface IGlazeStyle {
    styles: Record<string, string>;
    className?: string;
    selector?: string;
}