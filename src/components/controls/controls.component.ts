import { Component } from '@angular/core';
import { DragDirective } from 'designer/directives/drag.directive';
import { ComponentMetadata } from 'Registry/ComponentsMetadata';
import { GlazeFormRegistry } from 'Registry/GlazeFormRegistry';

@Component({
  selector: 'gl-controls',
  imports: [DragDirective],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  controls: string[] = [];
  constructor(private componentMetadata: ComponentMetadata) {
    this.controls = componentMetadata.components;
  }

  onClick() {
    console.log(GlazeFormRegistry.getAllComponents());
  }
}
