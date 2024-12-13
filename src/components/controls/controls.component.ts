import { Component } from '@angular/core';
import { DragDirective } from 'designer/directives/drag.directive';
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
  constructor(private componentMetadata: ComponentMetadataService) {
    this.controls = componentMetadata.components;
  }

  onClick() {
    console.log(GlazeControlRegistry.getAllComponents());
  }
}
