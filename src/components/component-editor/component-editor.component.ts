import { Component } from '@angular/core';
import { IGlazeProperty } from 'decorators/builderComponent';
import { DesignerControlService } from 'designer/services/designer.control.service';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { PropertyEditorComponent } from "../property-editor/property-editor.component";

@Component({
  selector: 'gl-component-editor',
  imports: [PropertyEditorComponent],
  templateUrl: './component-editor.component.html',
  styleUrl: './component-editor.component.scss',
})
export class ComponentEditorComponent {

  constructor(private designerService: DesignerControlService) {
    this.onLoad();
  }
  properties: IGlazeProperty[] = [];

  private onLoad() {
    this.designerService.onControlChange$.subscribe(() => {
      this.properties = [];
      const context = GlazeControlRegistry.instance.getComponent(this.designerService.selectedControl)?.context;
      if (context) {
        const keys = Object.keys(this.designerService.getProperties() ?? {});
        this.properties = keys.map((key) => {
          const contextProps = context.properties.find((prop) => prop.name === key);
          if (contextProps?.editorId) {
            return {
              name: key,
              title: contextProps.title,
              editorId: contextProps.editorId,
              value: this.getProperty(key),
              defaultValue: contextProps?.defaultValue,
              options: contextProps?.options,
            } as IGlazeProperty;
          } else {
            return null;
          }
        }).filter((key) => key !== null);
      }
    });
  }

  private getProperty(key: string) {
    return this.designerService.getProperties()?.[key];
  }

}
