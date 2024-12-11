import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { builderComponent } from '../../../decorators/builderComponent';
import { RenderService } from '../../../services/render.service';
import { ButtonComponent } from '../button/button.component';
import { IGridProperties } from './grid.properties';
import { GlazeComponent } from 'designer/render/GlazeComponent';
import { StyleService } from 'services/style.service';
import { StyleCreator } from 'services/StyleCreator';
import { DropDirective } from 'designer/directives/drop.directive';
import { IGlDragData } from 'designer/directives/drag.model';
import { ComponentMetadata } from 'Registry/ComponentsMetadata';

@builderComponent("grid")
@Component({
  selector: 'gl-grid',
  imports: [DropDirective],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent extends GlazeComponent<IGridProperties> implements AfterViewInit {
  @ViewChild('elem', { static: true }) elem!: ElementRef<HTMLElement>;
  grid: number[][] = [];

  constructor(private renderService: RenderService, private componentMetadata: ComponentMetadata) {
    super();
    this.grid = this.generateGrid();
  }

  ngAfterViewInit() {
    this.elem.nativeElement.setAttribute(this.id, '');
    super.update();
  }

  public override properties: IGridProperties = {
    rows: 5,
    columns: 5,
  }

  private generateGrid(): number[][] {
    return Array.from({ length: this.properties.rows }, () => Array.from({ length: this.properties.columns }, () => 0));
  }

  addComponent(componentName: string, row: number, col: number, event: Event) {
    this.renderService.renderComponent(event.target as HTMLElement, this.componentMetadata.getComponent(componentName));
  }

  override buildStyle(): Record<string, string> {
    return StyleCreator.create()
      .buildGridTemplate(this.properties.rows, this.properties.columns)
      .properties;
  }

  onDrop(data: IGlDragData, row: number, col: number) {
    this.addComponent(data.data, row, col, data.event);
  }

}
