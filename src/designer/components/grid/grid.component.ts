import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IGlDragData } from 'designer/directives/drag.model';
import { DropDirective } from 'designer/directives/drop.directive';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { StyleCreator } from 'services/StyleCreator';
import { builderComponent } from '../../../decorators/builderComponent';
import { IGridProperties } from './grid.properties';

@builderComponent({
  name: 'Grid',
  description: 'Grid component',
  states: [
    {
      name: 'default',
    },
    {
      name:"hover",
      selector:":hover"
    }
  ],
  properties: [
    {
      name: 'rows',
      editorId: 'valueEditor',
      title: 'Rows',
      options: {
        type: 'number',
      },
      states: ['default'],
    },
    {
      name: 'columns',
      editorId: 'valueEditor',
      title: 'Columns',
      options: {
        type: 'number',
      },
      states: ['default'],
    },
    {
      name: 'backgroundColor',
      editorId: 'backgroundColorEditor',
      title: 'Background Color',
      states: ['default',"hover"],
    },
    {
      name: 'border',
      editorId: 'borderEditor',
      title: 'Border',
    },
  ],
})
@Component({
  selector: 'gl-grid',
  imports: [DropDirective, SelectDirective],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss',
})
export class GridComponent
  extends GlazeComponent<IGridProperties>
  implements AfterViewInit
{
  @ViewChild('elem', { static: true }) elem!: ElementRef<HTMLElement>;
  grid: number[][] = [];

  constructor() {
    super();
    this.grid = this.generateGrid();
  }

  ngAfterViewInit() {
    super.update();
  }

  private generateGrid(): number[][] {
    return Array.from({ length: this.properties.rows }, () =>
      Array.from({ length: this.properties.columns }, () => 0),
    );
  }

  addComponent(componentName: string, row: number, col: number, event: Event) {
    this.designerService.addControl(
      event.target as HTMLElement,
      componentName,
      this.control.id,
      { row, col, id: this.control.id },
    );
  }

  override buildStyle(): Record<string, string> {
    return StyleCreator.create()
      .buildGridTemplate(this.properties.rows, this.properties.columns)
      .buildCore(this.properties);
  }

  onDrop(data: IGlDragData, row: number, col: number) {
    this.addComponent(data.type, row, col, data.event);
  }

  override initializeProperty(): void {
    this.control.properties.rows = 3;
    this.control.properties.columns = 3;
  }

  override update(): void {
    this.grid = this.generateGrid();
    super.update();
  }
}
