import { Component } from '@angular/core';
import { GlazeComponent } from 'designer/render/GlazeComponent';

@Component({
  selector: 'gl-textbox',
  imports: [],
  templateUrl: './textbox.component.html',
  styleUrl: './textbox.component.scss'
})
export class TextboxComponent extends GlazeComponent {
  constructor() {
    super();
  }
}
