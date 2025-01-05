import { Component } from '@angular/core';
import {
  IGlazeDesignerContext,
  IGlazeProperty,
  IState,
} from 'decorators/builderComponent';
import { DesignerControlService } from 'designer/services/designer.control.service';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { PropertyEditorComponent } from '../property-editor/property-editor.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gl-component-editor',
  imports: [PropertyEditorComponent, FormsModule, CommonModule],
  templateUrl: './component-editor.component.html',
  styleUrl: './component-editor.component.scss',
})
export class ComponentEditorComponent {
  constructor(private designerService: DesignerControlService) {
    this.onLoad();
  }
  properties: IGlazeProperty[] = [];
  states: IState[] = [];
  context?: IGlazeDesignerContext;
  selectedState: string = 'default';
  private onLoad() {
    this.designerService.onControlChange$.subscribe(() => {
      this.properties = [];
      this.context = GlazeControlRegistry.instance.getComponent(
        this.designerService.selectedControl,
      )?.context;
      this.states = this.context?.states || [];
      this.onPropertyChange('default');
    });
  }

  private getProperty(key: string) {
    return this.designerService.getProperties()?.[key];
  }

  onPropertyChange(state: string) {
    if (this.context) {
      this.properties = this.context.properties
        .filter((prop) => prop?.editorId)
        .map((prop) => ({
          ...prop,
          value: this.getProperty(prop.name),
        }))
        .filter((key) => !key.states || key.states.includes(state));
    }
  }
  onStateChange() {
    if (this.selectedState) {
      this.onPropertyChange(this.selectedState);
    }
  }
}
