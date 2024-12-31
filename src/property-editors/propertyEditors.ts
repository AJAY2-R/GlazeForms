import { InjectionToken, Type } from "@angular/core";
import { PropertyEditor } from "./propertyEditor";
import { ValueEditorComponent } from "./components/value-editor/value-editor.component";
import { IGlazeProperty } from "decorators/builderComponent";
import { BackgroundColorEditorComponent } from "./components/background-color-editor/background-color-editor.component";
import { BorderEditorComponent } from "./components/border-editor/border-editor.component";
import { SizeEditorComponent } from "./components/size-editor/size-editor.component";

export const PROPERTY_EDITORS: Record<string, Type<PropertyEditor>> = {
    "valueEditor": ValueEditorComponent,
    "backgroundColorEditor": BackgroundColorEditorComponent,
    "borderEditor": BorderEditorComponent,
    "sizeEditor": SizeEditorComponent,
} as const;

export const EDITOR_CONTEXT = new InjectionToken<IGlazeProperty>('EDITOR_CONTEXT');