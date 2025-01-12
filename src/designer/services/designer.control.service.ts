import { Injectable, ViewContainerRef } from '@angular/core';
import { IGlazeComponent, IParentProperties } from 'models/IComponent';
import { ComponentMetadataService } from 'Registry/ComponentsMetadata';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { Subject } from 'rxjs';
import { RenderService } from 'services/render.service';
import { DesignerTreeService } from './designer-tree.service';
import { PropertyEditorService } from './property.editor.service';
import { IState } from 'decorators/builderComponent';

@Injectable({
  providedIn: 'root',
})
export class DesignerControlService {
  private _selectedControl = '';
  private onControlSelected$: Subject<string> =
    new Subject<string>();

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
    return control?.properties;
  }

  getProperty(propertyName: string, state?: string, controlId: string = this._selectedControl,) {
    const control = GlazeControlRegistry.instance.getComponent(controlId);
    return control?.getProperty(propertyName, state);
  }

  getControlComponent(controlId: string = this._selectedControl): IGlazeComponent {
    return GlazeControlRegistry.instance.getComponent(controlId)!;
  }

  get selectedControl() {
    return this._selectedControl;
  }

  addControl(elem: HTMLElement | ViewContainerRef, controlName: string, parentId: string, parentProperties: IParentProperties) {
    const component = this.renderComponent(elem, controlName);
    component.control.parentProperties = parentProperties;
    this.designerTreeService.addControl(component.control, parentId);
    return component;
  }

  setControlProperty(propertyName: string, value: unknown, controlId: string = this._selectedControl) {
    const control = GlazeControlRegistry.instance.getComponent(controlId);
    control?.setProperty(propertyName, value);
  }

  setControlStateProperty(propertyName: string, value: unknown, state: IState, controlId: string = this._selectedControl) {
    const control = GlazeControlRegistry.instance.getComponent(controlId);
    control?.setStateProperty(propertyName, value, state);
  }

  getChildComponents(controlId: string) {
    return this.designerTreeService.getChildComponents(controlId);
  }

  renderComponent(elem: HTMLElement | ViewContainerRef, controlName: string) {
    const component = this.renderService.renderComponent(elem, this.componentMetadata.getComponent(controlName));
    GlazeControlRegistry.instance.addComponent(component.control.id, component);
    return component;
  }

  getControlType(controlId: string = this._selectedControl) {
    return GlazeControlRegistry.instance.getComponent(controlId)?.control.type;
  }
}