import { Type } from "@angular/core";
import { IGlazeComponent } from "models/IComponent";
import { GlazeControlRegistry } from "Registry/GlazeControlRegistry";

export function builderComponent(context: IGlazeDesignerContext) {
    return function (target: Type<IGlazeComponent>) {
        const onInit = target.prototype.ngOnInit;
        target.prototype.ngOnInit = function (...args: unknown[]) {
            GlazeControlRegistry.instance.addComponent(this.control.id, this, context);
            this.control.type = context.name;
            if (onInit) {
                onInit.apply(this, args);
            }
        }
    }
}

export interface IGlazeDesignerContext {
    name: string;
    description: string;
    states: IState[];
    properties: IGlazeProperty[];
}

export interface IGlazeProperty {
    name: string;
    editorId: string;
    title: string;
    options?: Record<string, unknown>;
    value?: unknown;
    defaultValue?: unknown;
    states?: string[];
}

export interface IState {
    name: string,
    class?: string,
    selector?: string,
}