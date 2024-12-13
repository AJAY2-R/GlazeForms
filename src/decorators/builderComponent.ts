import { Type } from "@angular/core";
import { IGlazeComponent } from "models/IComponent";
import { GlazeControlRegistry } from "Registry/GlazeControlRegistry";

export function builderComponent(name: string) {
    return function (target: Type<IGlazeComponent>) {
        const onInit = target.prototype.ngOnInit;
        target.prototype.ngOnInit = function (...args: unknown[]) {
            GlazeControlRegistry.addComponent(this.control.id, target);
            this.control.type = name;
            if (onInit) {
                onInit.apply(this, args);
            }
        }
    }
}