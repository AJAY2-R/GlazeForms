import { Type } from "@angular/core";
import { IGlazeComponent } from "../models/IComponent";
import { GlazeFormRegistry } from "Registry/GlazeFormRegistry";

export function builderComponent(name: string) {
    return function (target: Type<IGlazeComponent>) {
        const onInit = target.prototype.ngOnInit;
        target.prototype.ngOnInit = function (...args: any[]) {
            GlazeFormRegistry.addComponent(this.COMPONENT_ID, target);
            if (onInit) {
                onInit.apply(this, args);
            }
        }
    }
}