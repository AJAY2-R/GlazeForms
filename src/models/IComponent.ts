import { Type } from "@angular/core";

export abstract class IGlazeComponent<T = unknown> {
    public abstract render(): void;
    public abstract update(): void;
    public abstract destroy(): void;
    public abstract properties: T;
    public id: string = '';
}

export type IComponent = Type<IGlazeComponent>