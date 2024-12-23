import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/render/GlazeComponent';
import { builderComponent } from '../../../decorators/builderComponent';

@builderComponent('button')
@Component({
  selector: 'gl-button',
  imports: [SelectDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent extends GlazeComponent {
  constructor() {
    super();
  }
  public override initializeProperty(): void {
    this.control.properties = {
      text: 'TEST',
    };
  }
}
