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
  selectedState: IState = { name: 'default' };
  private onLoad() {
    this.designerService.onControlChange$.subscribe(() => {
      this.properties = [];
      const type = this.designerService.getControlType()!;
      this.context = GlazeControlRegistry.instance.getContext(type);
      this.states = this.context?.states || [];
      this.onPropertyChange('default');
    });
  }

  private getProperty(key: string) {
    const value = this.designerService.getProperty(key, this.selectedState.name !== 'default' ? this.selectedState.name : undefined);
    return value;
  }

  onPropertyChange(state: string) {
    if (this.context) {
      this.properties = this.context.properties
        .filter((prop) => prop?.editorId && (!prop.states || prop.states.includes(state)))
        .map((prop) => ({
          ...prop,
          value: this.getProperty(prop.name),
        }))

    }
  }

  onStateChange(event: Event) {
    const state = (event.target as HTMLSelectElement).value;
    if (state) {
      this.selectedState = this.states.find((s) => s.name === state) || { name: 'default' };
      this.onPropertyChange(state);
    }
  }
}
