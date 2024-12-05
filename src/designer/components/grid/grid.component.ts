import { Component } from '@angular/core';
import { IComponent, IGlazeComponent } from '../../../models/IComponent';
import { builderComponent } from '../../../decorators/builderComponent';
import { RenderService } from '../../../services/render.service';
import { ButtonComponent } from '../button/button.component';

@builderComponent("grid")
@Component({
  selector: 'gl-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent implements IGlazeComponent {

  rows: number = 3;
  cols: number = 5;

  grid: number[][] = [];

  constructor(private renderService: RenderService) {
    this.grid = this.generateGrid();
  }

  private generateGrid(): number[][] {
    return Array.from({ length: this.rows }, () => Array.from({ length: this.cols }, () => 0));
  }


  public render(): HTMLElement {
    throw new Error('Method not implemented.');
  }
  public update(): void {
    throw new Error('Method not implemented.');
  }
  public destroy(): void {
    throw new Error('Method not implemented.');
  }

  addComponent(row: number, col: number, event: Event) {
    this.renderService.renderComponent((event.target as HTMLElement).parentElement as HTMLElement, ButtonComponent);
  }
}
