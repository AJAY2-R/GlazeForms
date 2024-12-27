import { inject } from "@angular/core";
import { DesignerControlService } from "designer/services/designer.control.service";
import { IPropertyEditor } from "models/IPropertyEditor";

export class PropertyEditor implements IPropertyEditor {
    designerService = inject(DesignerControlService);
    private component = this.designerService.getControlComponent();
    constructor(private propertyName: string) {
        //
    }

    initialize(): void {
        //
    }
    update(value: unknown): void {
        this.component.setProperty(this.propertyName, value);
    }
}