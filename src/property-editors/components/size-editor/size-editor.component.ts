import { Component } from '@angular/core';
import { SizeMapperComponent } from "../size-mapper/size-mapper.component";
import { PropertyEditor } from 'property-editors/propertyEditor';
import { ISize } from 'models/ICore.Properties';

@Component({
  selector: 'gl-size-editor',
  imports: [SizeMapperComponent],
  templateUrl: './size-editor.component.html',
  styleUrl: './size-editor.component.scss'
})
export class SizeEditorComponent extends PropertyEditor<ISize> {
  units: string[] = ["px", "em", "rem", "%", "vw", "vh"]

  constructor() {
    super()
  }

  override initialize(): void {
    super.initialize();
    if (this.context) {
      if (this.context.options && this.context.options['units']) {
        this.units = this.context.options['units'] as string[];
      }
    }
  }

  onValueChange() {
    super.update(this.value);
  }
}
