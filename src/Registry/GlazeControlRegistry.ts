import { IGlazeComponent } from "../models/IComponent";
import { StyleRegistry } from "./StyleRegistry";
import { IGlazeDesignerContext } from "decorators/builderComponent";

export class GlazeControlRegistry {
    private _glazeMap: Map<string, { component: IGlazeComponent, context: IGlazeDesignerContext }> = new Map();
    private static _instance: GlazeControlRegistry;
    public addComponent(id: string, component: IGlazeComponent, context: IGlazeDesignerContext): void {
        this._glazeMap.set(id, { component, context });
        StyleRegistry.addStyle(id, '');
    }

    public static get instance(): GlazeControlRegistry {
        if (!this._instance) {
            this._instance = new GlazeControlRegistry();
        }
        return this._instance;
    }

    public getComponent(name: string) {
        return this._glazeMap.get(name);
    }

    public getAllComponents() {
        return this._glazeMap;
    }


}
