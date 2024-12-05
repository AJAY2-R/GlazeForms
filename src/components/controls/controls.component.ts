import { Component } from '@angular/core';
import { ComponentRegistery } from '../../Registery/ComponentRegister';
import { GlazeFormRegistery } from '../../Registery/GlazeFormRegistery';

@Component({
  selector: 'gl-controls',
  imports: [],
  templateUrl: './controls.component.html',
  styleUrl: './controls.component.scss'
})
export class ControlsComponent {
  controls = ComponentRegistery.components;
  
  onClick(){
    console.log(GlazeFormRegistery.getAllComponents());
  }
}
