import { ElementRef, inject, InjectionToken, Injector, ViewChild } from "@angular/core";
import { IGlazeComponent } from "models/IComponent";
import { ICoreStyle } from "models/ICore.Properties";
import { StyleService } from "services/style.service";
import { StyleCreator } from "services/StyleCreator";

export class GlazeComponent<T extends ICoreStyle = ICoreStyle> implements IGlazeComponent {

    styleService = inject(StyleService);
    injector = Injector.create({
        providers: [
            { provide: COMPONENT_ID, useFactory: getUID }
        ]
    })

    public id = this.injector.get(COMPONENT_ID);
    public properties!: T;

    render() {
        console.log('render');
    }

    update() {
        this.styleService.buildStyle(this.id, this.buildStyle());
    }

    destroy() {
        console.log('destroy');
    }

    buildStyle() {
        return StyleCreator.create()
            .buildBackground(this.properties.backgroundColor)
            .buildBorder(this.properties.border)
            .properties;
    }

}

export const COMPONENT_ID = new InjectionToken<string>('COMPONENT_ID');

export function getUID(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}