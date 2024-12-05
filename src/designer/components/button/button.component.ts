import { Component } from '@angular/core';
import { builderComponent } from '../../../decorators/builderComponent';
import { IGlazeComponent } from '../../../models/IComponent';

@builderComponent("button")
@Component({
  selector: 'gl-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent implements IGlazeComponent {

  public render(): HTMLElement {
    throw new Error('Method not implemented.');
  }
  public update(): void {
    throw new Error('Method not implemented.');
  }
  public destroy(): void {
    throw new Error('Method not implemented.');
  }

}
