import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from 'decorators/builderComponent';

@builderComponent({
  name: 'Textbox',
  description: 'Textbox component',
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
