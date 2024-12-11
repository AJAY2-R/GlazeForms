import { Component } from '@angular/core';
import { ComponentRegistry } from 'Registry/ComponentRegister';
import { GlazeFormRegistry } from 'Registry/GlazeFormRegistry';

@Component({
  selector: 'gl-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  controls = ComponentRegistry.components;

  onClick() {
    console.log(GlazeFormRegistry.getAllComponents());
  }
}
