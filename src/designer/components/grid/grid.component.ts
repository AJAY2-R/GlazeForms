import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/components/render/GlazeComponent';
import { StyleCreator } from 'services/StyleCreator';
import { builderComponent, IState } from '../../../decorators/builderComponent';
import { IGridProperties } from './grid.properties';
import { IGlazeStyle } from 'models/IComponent';
import { getGlazeStyle } from 'designer/services/style.service';
import { GridCellComponent } from '../grid-cell/grid-cell.component';

@builderComponent({
  name: 'grid',
  description: 'Grid component',
  states: [
    {
      name: 'default',
    },
    {
      name: 'hover',
      selector: ':hover',
    },
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
      type: "property"
    },
    {
      name: 'columns',
      editorId: 'valueEditor',
      title: 'Columns',
      options: {
        type: 'number',
      },
      states: ['default'],
      type: "property"
    },
    {
      name: 'backgroundColor',
      editorId: 'backgroundColorEditor',
      title: 'Background Color',
      states: ['default', 'hover'],
      type: "style"
    },
    {
      name: 'border',
      editorId: 'borderEditor',
      title: 'Border',
      type: "style"
    },
  ],
})
@Component({
  selector: 'gl-grid',
  imports: [GridCellComponent, SelectDirective],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent
  extends GlazeComponent<IGridProperties>
  implements AfterViewInit {
  @ViewChild('elem', { static: true }) elem!: ElementRef<HTMLElement>;
  grid: number[][] = [];

  constructor() {
    super();
    this.grid = this.generateGrid();
  }

  ngAfterViewInit() {
    super.update(this.properties);
  }

  private generateGrid(): number[][] {
    return Array.from({ length: this.properties.rows }, () =>
      Array.from({ length: this.properties.columns }, () => 0),
    );
  }



  override buildStyle(
    properties: IGridProperties,
    stateProperties?: IState,
  ): IGlazeStyle {
    const style = StyleCreator.create().buildCore(properties);
    if (properties.rows && properties.columns) {
      style.buildGridTemplate(properties.rows, properties.columns);
    }
    return getGlazeStyle(
      style.properties,
      stateProperties?.class,
      stateProperties?.selector,
    );
  }

  override initializeProperty(): void {
    this.control.properties.rows = 3;
    this.control.properties.columns = 3;
  }

  override update(): void {
    this.grid = this.generateGrid();
    super.update(this.properties);
  }

}
