import { Injectable } from '@angular/core';
import { IGlazeTree } from 'models/IComponent';

@Injectable({
  providedIn: 'root'
})
export class DesignerTreeService {
  private rootTree: IGlazeTree = {
    id: 'root',
    type: 'root',
    parentProperties: {},
    name: 'root',
    properties: {},
    child: []
  }
  private controlTreeMap: Map<string, { self: IGlazeTree, parent: string }> = new Map();
  constructor() {
    this.controlTreeMap.set('root', { self: this.rootTree, parent: '' });
  }


  public addControl(control: IGlazeTree, parentId: string) {
    const parent = this.controlTreeMap.get(parentId);
    if (parent) {
      if (!parent.self.child) {
        parent.self.child = [];
      }
      parent.self.child.push(control);
      this.controlTreeMap.set(control.id, { self: control, parent: parent.self.id });
    }
    this.saveTree();
  }

  public removeControl(controlId: string) {
    const control = this.controlTreeMap.get(controlId);
    if (control) {
      const parent = this.controlTreeMap.get(control.parent);
      if (parent) {
        parent.self.child = parent.self.child?.filter(child => child !== control.self);
        this.controlTreeMap.delete(controlId);
      }
    }
  }

  public getControl(controlId: string) {
    return this.controlTreeMap.get(controlId)?.self;
  }

  public getParent(controlId: string) {
    const control = this.controlTreeMap.get(controlId);
    return control ? this.controlTreeMap.get(control.parent)?.self : null;
  }

  private saveTree() {
    localStorage.setItem('designerTree', JSON.stringify(this.rootTree));
  }

  getSavedTree(): IGlazeTree {
    return JSON.parse(localStorage.getItem('designerTree') || '{}');
  }

  getChildComponents(controlId: string) {
    return this.controlTreeMap.get(controlId)?.self.child || [];
  }

}
