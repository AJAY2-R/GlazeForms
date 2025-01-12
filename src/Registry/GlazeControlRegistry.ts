import { inject } from '@angular/core';
import { IGlazeComponent } from '../models/IComponent';
import { IGlazeDesignerContext } from 'decorators/builderComponent';
import { DataSaveService } from 'services/data-save.service';
import { isEmpty } from 'lodash';

export class GlazeControlRegistry {
  private _glazeMap: Map<string, { component: IGlazeComponent; context: IGlazeDesignerContext }> =
    new Map();
  private static _instance: GlazeControlRegistry;
  private dataSaveService = inject(DataSaveService);

  public addComponent(
    id: string,
    component: IGlazeComponent,
    context: IGlazeDesignerContext,
  ): void {
    this._glazeMap.set(id, { component, context });
  }

  public static get instance(): GlazeControlRegistry {
    if (!this._instance) {
      this._instance = new GlazeControlRegistry();
      this._instance.loadSavedRegistry();
    }
    return this._instance;
  }

  public getComponent(name: string) {
    return this._glazeMap.get(name);
  }

  public getAllComponents() {
    return this._glazeMap;
  }

  private loadSavedRegistry() {
    const registry =
      this.dataSaveService.getMapData('glazeRegistry');
    if (!isEmpty(registry)) {
      this._glazeMap = registry;
    }
  }

  saveRegistry() {
    this.dataSaveService.saveMapData('glazeRegistry', this._glazeMap);
  }

  clearRegistry() {
    this.dataSaveService.clearData('glazeRegistry');
  }
}
