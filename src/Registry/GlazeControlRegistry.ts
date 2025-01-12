import { IGlazeComponent } from '../models/IComponent';
import { IGlazeDesignerContext } from 'decorators/builderComponent';

export class GlazeControlRegistry {
  private _glazeContextMap: Map<string, IGlazeDesignerContext> =
    new Map();
  private _glazeComponentMap: Map<string, IGlazeComponent> = new Map();
  private static _instance: GlazeControlRegistry;

  public addContext(id: string, context: IGlazeDesignerContext): void {
    this._glazeContextMap.set(id, context);
  }

  public addComponent(id: string, component: IGlazeComponent): void {
    this._glazeComponentMap.set(id, component);
  }

  public static get instance(): GlazeControlRegistry {
    if (!this._instance) {
      this._instance = new GlazeControlRegistry();
    }
    return this._instance;
  }

  public getComponent(id: string) {
    return this._glazeComponentMap.get(id);
  }

  public getAllComponents() {
    return this._glazeComponentMap;
  }

  public getContext(id: string) {
    return this._glazeContextMap.get(id);
  }

  public updateComponent(oldId: string, newId: string, component: IGlazeComponent) {
    this._glazeComponentMap.set(newId, component);
    this._glazeComponentMap.delete(oldId);
  }

}
