import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PropertyEditor } from 'property-editors/propertyEditor';
import { SizeMapperComponent } from "../size-mapper/size-mapper.component";
import { border, IBorder } from './border';

@Component({
  selector: 'gl-border-editor',
  imports: [FormsModule, SizeMapperComponent],
  templateUrl: './border-editor.component.html',
  styleUrl: './border-editor.component.scss'
})
export class BorderEditorComponent extends PropertyEditor<IBorder> {
  override value = border();

  constructor() {
    super();
  }

  override initialize(): void {
    if (this.context) {
      if (this.context.value) {
        this.value = this.context.value as IBorder;
      }
    }
  }

  onChange() {
    super.update(this.value);
  }

}
