import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { IGlazeTree } from 'models/IComponent';
import { DataSaveService } from 'services/data-save.service';

@Injectable({
  providedIn: 'root',
})
export class DesignerTreeService {
  private rootTree!: IGlazeTree;
  private controlTreeMap: Map<string, { self: IGlazeTree; parent: string }> = new Map();

  constructor(private dataSaveService: DataSaveService) {
    this.loadSavedTree();
  }

  public addControl(control: IGlazeTree, parentId: string) {
    const parent = this.controlTreeMap.get(parentId);
    if (parent) {
      if (!parent.self.child) {
        parent.self.child = [];
      }
      parent.self.child.push(control);
      this.controlTreeMap.set(control.id, {
        self: control,
        parent: parent.self.id,
      });
    }
  }

  public removeControl(controlId: string) {
    const control = this.controlTreeMap.get(controlId);
    if (control) {
      const parent = this.controlTreeMap.get(control.parent);
      if (parent) {
        parent.self.child = parent.self.child?.filter((child) => child !== control.self);
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

  getChildComponents(controlId: string) {
    return this.controlTreeMap.get(controlId)?.self.child || [];
  }

  loadSavedTree() {
    this.rootTree = this.getSavedTree();
    if (!isEmpty(this.rootTree)) {
      this.loadChildComponents(this.rootTree);
    } else {
      this.rootTree = {
        id: 'root',
        type: 'root',
        parentProperties: { parentId: '' },
        name: 'root',
        properties: {},
        child: [],
      };
    }
    this.controlTreeMap.set('root', { self: this.rootTree, parent: '' });
  }

  private loadChildComponents(control: IGlazeTree) {
    control.child?.forEach((child) => {
      this.controlTreeMap.set(child.id, { self: child, parent: control.id });
      this.loadChildComponents(child);
    });
  }

  getSavedTree() {
    return this.dataSaveService.getData<IGlazeTree>('designer-tree');
  }

  clearSavedTree() {
    this.dataSaveService.clearData('designer-tree');
  }

  saveData() {
    this.dataSaveService.saveData('designer-tree', this.rootTree);
  }
}
