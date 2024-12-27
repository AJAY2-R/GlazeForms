import { Injectable, Type } from "@angular/core";
import { GlazeComponent } from "@glaze/components";
import { COMPONENTS } from "./components";

@Injectable({
    providedIn: 'root'
})
export class ComponentMetadataService {
    private _components: Map<string, Type<GlazeComponent>> = Object.keys(COMPONENTS).reduce((acc, key) => {
        acc.set(key, COMPONENTS[key]);
        return acc;
    }, new Map<string, Type<GlazeComponent>>());

    public registerComponent(name: string, component: Type<GlazeComponent>) {
        this._components.set(name, component);
    }

    public getComponent(name: string): Type<GlazeComponent> {
        return this._components.get(name)!;
    }

    public get components(): string[] {
        return Array.from(this._components.keys());
    }
}
