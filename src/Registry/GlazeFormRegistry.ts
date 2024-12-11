import { Type } from "@angular/core";
import { IGlazeComponent } from "../models/IComponent";
import { Subject } from "rxjs";
import { StyleRegistry } from "./StyleRegistry";

export class GlazeFormRegistry {
    private static _glazeMap: Map<string, Type<IGlazeComponent>> = new Map();

    public static addComponent(id: string, glaze: Type<IGlazeComponent>): void {
        this._glazeMap.set(id, glaze);
        StyleRegistry.addStyle(id, '');
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
