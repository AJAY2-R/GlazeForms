import { Component, inject } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { builderComponent } from 'decorators/builderComponent';
import { ITextblock } from './textblock';
import { PropertyEditorService } from 'designer/services/property.editor.service';

@builderComponent({
  name: 'textblock',
  description: 'Textblock component',
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
  selector: 'gl-textblock',
  imports: [SelectDirective],
  templateUrl: './textblock.component.html',
  styleUrl: './textblock.component.scss'
})
export class TextblockComponent extends GlazeComponent<ITextblock> {
  private propertyEditorService = inject(PropertyEditorService);

  override initializeProperty(): void {
    this.control.properties.text = 'Textblock';
  }

  onDoubleClick(element: HTMLDivElement) {
    element.contentEditable = 'true';
  }

  onBlur(element: HTMLDivElement) {
    element.contentEditable = 'false';
    this.properties.text = element.innerText;
    this.propertyEditorService.updatePropertyEditor("text", this.properties.text);
  }
}
