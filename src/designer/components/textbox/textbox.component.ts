import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from 'decorators/builderComponent';

@builderComponent({
  name: 'textbox',
  description: 'Textbox component',
  states: [],
  properties: [
    {
      name: 'text',
      editorId: 'valueEditor',
      title: 'Text',
      type: "property"
    },
    {
      name: 'backgroundColor',
      editorId: 'backgroundColorEditor',
      title: 'Background Color',
      type: "style"
    },
    {
      name: 'border',
      editorId: 'borderEditor',
      title: 'Border',
      type: "style"
    }
  ],
})
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
