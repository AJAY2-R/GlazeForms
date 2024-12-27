import { Component, Inject } from '@angular/core';
import { IGlazeProperty } from 'decorators/builderComponent';
import { PropertyEditor } from 'property-editors/propertyEditor';
import { EDITOR_CONTEXT } from 'property-editors/propertyEditors';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'gl-value-editor',
  imports: [FormsModule],
  templateUrl: './value-editor.component.html',
  styleUrl: './value-editor.component.scss'
})
export class ValueEditorComponent extends PropertyEditor {
  value!: string | number;
  type!: string;
  constructor(@Inject(EDITOR_CONTEXT) public context: IGlazeProperty) {
    super(context.name);
    console.log(context);
    this.value = context.value as string | number;
    if (context.options && context.options['type']) {
      this.type = context.options['type'] as string;
    }
  }

  onChange() {
    super.update(this.value);
  }
}
