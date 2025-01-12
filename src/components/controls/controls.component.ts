import { Component } from '@angular/core';
import { DragDirective } from 'designer/directives/drag.directive';
import { DesignerTreeService } from 'designer/services/designer-tree.service';
import { ComponentMetadataService } from 'Registry/ComponentsMetadata';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';

@Component({
  selector: 'gl-controls',
  imports: [DragDirective],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  controls: string[] = [];
  constructor(private componentMetadata: ComponentMetadataService,private designerTreeService: DesignerTreeService) {
    this.controls = this.componentMetadata.components;
  }

  onSave(){
    this.designerTreeService.saveData();
    GlazeControlRegistry.instance.saveRegistry();
  }

  onClearSavedData(){
    this.designerTreeService.clearSavedTree();
    GlazeControlRegistry.instance.clearRegistry();
  }

}
