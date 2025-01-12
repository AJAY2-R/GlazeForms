import { Type } from '@angular/core';
import { IGlazeComponent } from 'models/IComponent';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';

export function builderComponent(context: IGlazeDesignerContext) {
  return function (target: Type<IGlazeComponent>) {
    initializeDefaultContext(context);
    GlazeControlRegistry.instance.addContext(context.name, context);
    const onInit = target.prototype.ngOnInit;
    target.prototype.ngOnInit = function (...args: unknown[]) {
      this.control.type = context.name;
      if (onInit) {
        onInit.apply(this, args);
      }
    };
  };
}

function initializeDefaultContext(context: IGlazeDesignerContext) {
  if (context.states.length === 0) {
    context.states.push({ name: 'default' });
  }
}

export interface IGlazeDesignerContext {
  name: string;
  description: string;
  states: IState[];
  properties: IGlazeProperty[];
}

export interface IGlazeProperty {
  name: string;
  editorId: string;
  title: string;
  options?: Record<string, unknown>;
  value?: unknown;
  defaultValue?: unknown;
  states?: string[];
}

export interface IState {
  name: string;
  class?: string;
  selector?: string;
}
