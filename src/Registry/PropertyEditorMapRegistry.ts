import { Type } from "@angular/core";
import { PropertyEditor } from "property-editors/propertyEditor";
import { PROPERTY_EDITORS } from "property-editors/propertyEditors";

export class PropertyEditorMapRegistry {
    private static _instance: PropertyEditorMapRegistry;
    private _registry: Map<string, Type<PropertyEditor>> = Object.keys(PROPERTY_EDITORS).reduce((acc, key) => {
        acc.set(key, PROPERTY_EDITORS[key]);
        return acc;
    }, new Map<string, Type<PropertyEditor>>());

    private constructor() { }

    public static get instance(): PropertyEditorMapRegistry {
        if (!this._instance) {
            this._instance = new PropertyEditorMapRegistry();
        }

        return this._instance;
    }

    public get(id: string): Type<PropertyEditor> {
        return this._registry.get(id) || PropertyEditor;
    }
}