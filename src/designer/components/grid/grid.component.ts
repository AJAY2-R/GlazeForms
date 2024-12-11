import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { builderComponent } from '../../../decorators/builderComponent';
import { RenderService } from '../../../services/render.service';
import { ButtonComponent } from '../button/button.component';
import { IGridProperties } from './grid.properties';
import { GlazeComponent } from 'designer/render/GlazeComponent';
import { StyleService } from 'services/style.service';
import { StyleCreator } from 'services/StyleCreator';

@builderComponent("grid")
@Component({
  selector: 'gl-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent extends GlazeComponent<IGridProperties> implements AfterViewInit {
  @ViewChild('elem', { static: true }) elem!: ElementRef<HTMLElement>;
  grid: number[][] = [];

  constructor(private renderService: RenderService) {
    super();
    this.grid = this.generateGrid();
  }

  ngAfterViewInit() {
    this.elem.nativeElement.setAttribute(this.id, '');
  }

  public override properties: IGridProperties = {
    rows: 3,
    columns: 5,
  }

  private generateGrid(): number[][] {
    return Array.from({ length: this.properties.rows }, () => Array.from({ length: this.properties.columns }, () => 0));
  }

  addComponent(row: number, col: number, event: Event) {
    this.renderService.renderComponent((event.target as HTMLElement).parentElement as HTMLElement, ButtonComponent);
  }

  override buildStyle(): Record<string, string> {
    return StyleCreator.create()
      .buildGridTemplate(this.properties.rows, this.properties.columns)
      .properties;
  }

}
