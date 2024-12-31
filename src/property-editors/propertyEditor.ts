import { inject } from "@angular/core";
import { IGlazeProperty } from "decorators/builderComponent";
import { DesignerControlService } from "designer/services/designer.control.service";
import { IPropertyEditor } from "models/IPropertyEditor";
import { EDITOR_CONTEXT } from 'property-editors/propertyEditors';

/**
 * The `PropertyEditor` class implements the `IPropertyEditor` interface and provides
 * functionality to manage and update property values for a given component within the
 * designer control service.
 *
 * @template T - The type of the property value.
 *
 * @remarks
 * This class uses Angular's dependency injection to obtain instances of `DesignerControlService`
 * and `EDITOR_CONTEXT`. It initializes the property value based on the context and provides
 * methods to update the property value.
 */
export class PropertyEditor<T = unknown> implements IPropertyEditor {
    designerService = inject(DesignerControlService);
    private component = this.designerService.getControlComponent();
    public context: IGlazeProperty = inject(EDITOR_CONTEXT);
    private propertyName: string = this.context.name;

    constructor() {
        this.initialize();
    }
    value!: T;

    initialize(): void {
        if (this.context) {
            if (this.context.value) {
                this.value = this.context.value as T;
            }
        }
    }

    update(value: unknown): void {
        this.component.setProperty(this.propertyName, value);
    }
}