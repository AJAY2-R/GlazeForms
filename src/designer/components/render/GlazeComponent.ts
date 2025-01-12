/* eslint-disable @typescript-eslint/no-unused-vars */
import { AfterViewInit, Component, inject, Injector } from '@angular/core';
import { IState } from 'decorators/builderComponent';
import { DesignerControlService } from 'designer/services/designer.control.service';
import { COMPONENT_ID, getUID } from 'designer/services/guid';
import { getGlazeStyle } from 'designer/services/style.service';
import { ICoreProperties, IGlazeComponent, IGlazeStyle } from 'models/IComponent';
import { ICoreStyle } from 'models/ICore.Properties';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { StyleService } from 'services/style.service';
import { StyleCreator } from 'services/StyleCreator';

export class GlazeComponent<T extends ICoreStyle = ICoreStyle> implements IGlazeComponent {
  styleService = inject(StyleService);
  injector = Injector.create({
    providers: [{ provide: COMPONENT_ID, useFactory: getUID }],
  });

  public control: ICoreProperties<T> = {
    id: this.injector.get(COMPONENT_ID),
    type: '',
    parentProperties: { parentId: '' },
    name: '',
    properties: {
      states: {},
    } as T,
  };

  public designerService: DesignerControlService = inject(DesignerControlService);
  constructor() {
    this.initializeProperty();
    if (!this.properties.states) {
      this.properties.states = {};
    }
  }

  render() {
    console.log('render');
  }

  update(properties: ICoreStyle) {
    this.styleService.buildStyle(this.control.id, this.buildStyles());
  }

  destroy() {
    console.log('destroy');
  }

  buildStyle(properties: ICoreStyle, stateProperties?: IState): IGlazeStyle {
    const styleProperties = StyleCreator.create().buildCore(properties).properties;
    return getGlazeStyle(styleProperties, stateProperties?.class, stateProperties?.selector);
  }

  public initializeProperty(): void {}

  get properties(): T {
    return this.control.properties;
  }

  setProperty(propertyName: string, value: unknown): void {
    (this.control.properties as ICoreStyle)[propertyName] = value;
    this.update(this.control.properties);
  }

  setStateProperty(propertyName: string, value: unknown, state: IState): void {
    const properties = this.control.properties.states as Record<string, ICoreStyle>;
    if (!properties[state.name]) {
      properties[state.name] = {};
    }
    properties[state.name][propertyName] = value;
    this.update(this.control.properties);
  }

  getProperty(propertyName: string, state?: string): unknown {
    if (!state) {
      return (this.control.properties as ICoreStyle)[propertyName];
    } else {
      return (this.control.properties.states as Record<string, ICoreStyle>)?.[state]?.[
        propertyName
      ];
    }
  }

  private buildStyles() {
    const styles: IGlazeStyle[] = [];
    const context = GlazeControlRegistry.instance.getComponent(
      this.designerService.selectedControl,
    )?.context;
    styles.push(this.buildStyle(this.control.properties));
    if (this.control.properties.states) {
      Object.keys(this.control.properties.states).forEach((state) => {
        const stateProperties = context?.states?.find((s) => s.name === state);
        styles.push(
          this.buildStyle(
            (this.control.properties.states as Record<string, ICoreStyle>)[state],
            stateProperties,
          ),
        );
      });
    }
    return styles;
  }

  loadProperties(properties: ICoreProperties) {
    this.control = properties as ICoreProperties<T>;
  }
}
