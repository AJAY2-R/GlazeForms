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
    const getRandomLetters = (length: number): string => {
        const chars = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };
    const randomPart = getRandomLetters(8);
    const timestampPart = Date.now().toString(36).replace(/\d/g, (d) => String.fromCharCode(97 + parseInt(d, 10)));
    return `${randomPart}${timestampPart}`;
}

