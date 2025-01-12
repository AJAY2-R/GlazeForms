import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from '../../../decorators/builderComponent';
import { IButton } from './IButton';

@builderComponent({
  name: 'button',
  description: 'Button component',
  states: [
    {
      name: 'default',
    },
    {
      name: 'hover',
      selector: ':hover',
    },
    {
      name: 'focus',
      selector: ':focus',
    },
  ],
  properties: [
    {
      name: 'text',
      editorId: 'valueEditor',
      title: 'Text',
    },
    {
      name: 'backgroundColor',
      editorId: 'backgroundColorEditor',
      title: 'Background Color',
    },
    {
      name: 'border',
      editorId: 'borderEditor',
      title: 'Border',
    },
  ],
})
@Component({
  selector: 'gl-button',
  imports: [SelectDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends GlazeComponent<IButton> {
  constructor() {
    super();
  }
  public override initializeProperty(): void {
    this.control.properties = {
      text: 'TEST',
    };
  }
}
