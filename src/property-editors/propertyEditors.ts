import { InjectionToken, Type } from "@angular/core";
import { PropertyEditor } from "./propertyEditor";
import { ValueEditorComponent } from "./components/value-editor/value-editor.component";

export const PROPERTY_EDITORS: Record<string, Type<PropertyEditor>> = {
    "valueEditor": ValueEditorComponent
} as const;

export const EDITOR_CONTEXT = new InjectionToken<string>('EDITOR_CONTEXT');