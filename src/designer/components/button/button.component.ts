import { Component, ElementRef } from '@angular/core';
import { builderComponent } from '../../../decorators/builderComponent';
import { IGlazeComponent } from '../../../models/IComponent';
import { GlazeComponent } from 'designer/render/GlazeComponent';
import { ICoreStyle } from 'models/ICore.Properties';

@builderComponent("button")
@Component({
  selector: 'gl-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent extends GlazeComponent {

  constructor() {
    super();
  }

}
