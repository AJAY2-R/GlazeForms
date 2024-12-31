import { Component } from '@angular/core';
import { PropertyEditor } from 'property-editors/propertyEditor';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'gl-value-editor',
  imports: [FormsModule],
  templateUrl: './value-editor.component.html',
  styleUrl: './value-editor.component.scss'
})
export class ValueEditorComponent extends PropertyEditor<string | number> {
  type!: string;
  constructor() {
    super();
    if (this.context.options && this.context.options['type']) {
      this.type = this.context.options['type'] as string;
    }
  }

  onChange() {
    super.update(this.value);
  }
}
