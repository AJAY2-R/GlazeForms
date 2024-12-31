import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyEditor } from 'property-editors/propertyEditor';

@Component({
  selector: 'gl-background-color-editor',
  imports: [FormsModule],
  templateUrl: './background-color-editor.component.html',
  styleUrl: './background-color-editor.component.scss'
})
export class BackgroundColorEditorComponent extends PropertyEditor {
  constructor() {
    super();
  }

  onChange() {
    super.update(this.value);
  }

}
