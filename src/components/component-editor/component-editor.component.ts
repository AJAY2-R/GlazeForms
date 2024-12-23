import { Component } from '@angular/core';
import { DesignerControlService } from 'designer/services/designer.control.service';
import { ICoreStyle } from 'models/ICore.Properties';

@Component({
  selector: 'gl-component-editor',
  imports: [],
  templateUrl: './component-editor.component.html',
  styleUrl: './component-editor.component.scss',
})
export class ComponentEditorComponent {
  constructor(private designerService: DesignerControlService) {
    this.designerService.onControlChange$.subscribe(() => {
      this.properties = this.designerService.getProperties();
      this.keys = Object.keys(this.properties ?? {});
    });
  }
  properties?: ICoreStyle;
  keys: string[] = [];
}
