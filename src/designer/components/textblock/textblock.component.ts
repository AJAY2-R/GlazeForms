import { Component } from '@angular/core';
import { GlazeComponent } from 'designer/render/GlazeComponent';

@Component({
  selector: 'gl-textblock',
  imports: [],
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
