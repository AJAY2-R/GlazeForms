import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from '../../../decorators/builderComponent';
import { IButton } from './IButton';

@builderComponent({
  name: 'Button',
  description: 'Button component',
  properties: [
    {
      name: 'text',
      editorId: 'valueEditor',
      title: 'Text',
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
