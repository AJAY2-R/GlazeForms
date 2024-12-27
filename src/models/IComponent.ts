import { Type } from "@angular/core";
import { ICoreStyle } from "./ICore.Properties";

export abstract class IGlazeComponent<T extends ICoreStyle = ICoreStyle> {
    public abstract render(): void;
    public abstract update(): void;
    public abstract destroy(): void;
    public abstract control: ICoreProperties<T>;
    public abstract initializeProperty(): void;
    public abstract buildStyle(): Record<string, string>;
    public abstract get properties(): T;
    public abstract setProperty(propertyName: string, value: unknown): void;
    public abstract getProperty(propertyName: string): unknown;
}

export type IComponent = Type<IGlazeComponent>

export interface ICoreProperties<T extends ICoreStyle = ICoreStyle> {
    id: string;
    type: string;
    parentProperties: IParentProperties;
    name: string;
    properties: T;
};

export type IParentProperties = Record<string, unknown>;