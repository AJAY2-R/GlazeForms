import { Injectable, Type } from "@angular/core";
import { ButtonComponent } from "designer/components/button/button.component";
import { GridComponent } from "designer/components/grid/grid.component";
import { TextblockComponent } from "designer/components/textblock/textblock.component";
import { TextboxComponent } from "designer/components/textbox/textbox.component";
import { GlazeComponent } from "designer/render/GlazeComponent";


export const components: Record<string, Type<GlazeComponent>> = {
    "grid": GridComponent,
    "button": ButtonComponent,
    "textbox": TextboxComponent,
    "textblock": TextblockComponent
}


@Injectable({
    providedIn: 'root'
})
export class ComponentMetadata {
    private _components: Map<string, Type<GlazeComponent>> = Object.keys(components).reduce((acc, key) => {
        acc.set(key, components[key]);
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
