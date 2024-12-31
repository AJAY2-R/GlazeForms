import { Component } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from 'decorators/builderComponent';

@builderComponent({
  name: 'Textblock',
  description: 'Textblock component',
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
  selector: 'gl-textblock',
  imports: [SelectDirective],
  templateUrl: './textblock.component.html',
  styleUrl: './textblock.component.scss'
})
export class TextblockComponent extends GlazeComponent {
  onDoubleClick(element: HTMLDivElement) {
    element.contentEditable = 'true';
  }

  onBlur(element: HTMLDivElement) {
    element.contentEditable = 'false';
  }
}
