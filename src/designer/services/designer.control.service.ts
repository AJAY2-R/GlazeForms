import { Injectable } from '@angular/core';
import { IGlazeComponent } from 'models/IComponent';
import { ComponentMetadataService } from 'Registry/ComponentsMetadata';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { BehaviorSubject } from 'rxjs';
import { RenderService } from 'services/render.service';
import { DesignerTreeService } from './designer-tree.service';
import { PropertyEditorService } from './property.editor.service';

@Injectable({
  providedIn: 'root',
})
export class DesignerControlService {
  private _selectedControl = '';
  private onControlSelected$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  constructor(private renderService: RenderService, private componentMetadata: ComponentMetadataService,
    private designerTreeService: DesignerTreeService, private propertyEditorService: PropertyEditorService) {
  }

  setSelectedControl(control: string) {
    setTimeout(() => {
      if (this.selectedControl != control) {
        this._selectedControl = control;
        this.propertyEditorService.clearPropertyEditorMap();
        this.onControlSelected$.next(control);
      }
    }, 100);
  }

  get onControlChange$() {
    return this.onControlSelected$.asObservable();
  }

  getProperties(controlId: string = this._selectedControl) {
    const control = GlazeControlRegistry.instance.getAllComponents().get(controlId);
    return control?.component.properties;
  }

  getControlComponent(controlId: string = this._selectedControl): IGlazeComponent {
    return GlazeControlRegistry.instance.getComponent(controlId)!.component;
  }

  get selectedControl() {
    return this._selectedControl;
  }

  addControl(elem: HTMLElement, controlName: string, parentId: string, parentProperties: Record<string, unknown>) {
    const component = this.renderService.renderComponent(elem, this.componentMetadata.getComponent(controlName));
    component.control.parentProperties = parentProperties;
    this.designerTreeService.addControl(component.control, parentId);
  }

  setControlProperty(propertyName: string, value: unknown, controlId: string = this._selectedControl) {
    const control = GlazeControlRegistry.instance.getComponent(controlId);
    control?.component.setProperty(propertyName, value);
  }
}