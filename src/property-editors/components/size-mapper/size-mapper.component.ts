import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISize } from 'models/ICore.Properties';
import { size } from './size';

@Component({
  selector: 'gl-size-mapper',
  imports: [FormsModule, CommonModule],
  templateUrl: './size-mapper.component.html',
  styleUrl: './size-mapper.component.scss'
})
export class SizeMapperComponent {
  @Input() set units(units: string[]) {
    this._units = units;
  }
  get units() {
    return this._units;
  }
  private _units = ["px", "em", "rem", "%", "vw", "vh"];

  @Input() size: ISize = size();
  @Output() sizeChange = new EventEmitter<ISize>();

  onValueChange() {
    this.sizeChange.emit(this.size);
  }
}
