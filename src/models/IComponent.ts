import { Type } from "@angular/core";

export abstract class IGlazeComponent {
    public abstract render(): HTMLElement;
    public abstract update(): void;
    public abstract destroy(): void;
}

export type IComponent = Type<IGlazeComponent>