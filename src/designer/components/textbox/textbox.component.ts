import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/render/GlazeComponent';

@Component({
  selector: 'gl-textbox',
  imports: [SelectDirective],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent extends GlazeComponent {
  constructor() {
    super();
  }
}
