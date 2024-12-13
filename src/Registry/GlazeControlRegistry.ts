import { Type } from "@angular/core";
import { Subject } from "rxjs";
import { IGlazeComponent } from "../models/IComponent";
import { StyleRegistry } from "./StyleRegistry";

export class GlazeControlRegistry {
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
