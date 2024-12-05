import { Type } from "@angular/core";
import { GlazeFormRegistery } from "../Registery/GlazeFormRegistery";
import { IGlazeComponent } from "../models/IComponent";

export function builderComponent(name: string) {
    return function (target: Type<IGlazeComponent>) {
        const onInit = target.prototype.ngOnInit;
        target.prototype.ngOnInit = function (...args: any[]) {
            GlazeFormRegistery.addComponent(target);
            if (onInit) {
                onInit.apply(this, args);
            }
        }
    }
}