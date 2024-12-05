import { Type } from "@angular/core";
import { IGlazeComponent } from "../models/IComponent";
import { Subject } from "rxjs";

export class GlazeFormRegistery {
    private static _glazeMap: Map<string, Type<IGlazeComponent>> = new Map();

    public static addComponent(glaze: Type<IGlazeComponent>): void {
        this._glazeMap.set(getUID(), glaze);
        this.$componentAdded.next(glaze);
    }

    public static getComponent(name: string) {
        return this._glazeMap.get(name);
    }

    public static getAllComponents() {
        return this._glazeMap;
    }

    public static $componentAdded = new Subject<Type<IGlazeComponent>>();
}
export function getUID(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}