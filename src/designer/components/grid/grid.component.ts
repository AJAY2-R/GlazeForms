import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { IGlDragData } from 'designer/directives/drag.model';
import { DropDirective } from 'designer/directives/drop.directive';
import { SelectDirective } from 'designer/directives/select.directive';
import { GlazeComponent } from 'designer/render/GlazeComponent';
import { ComponentMetadataService } from 'Registry/ComponentsMetadata';
import { StyleCreator } from 'services/StyleCreator';
import { builderComponent } from '../../../decorators/builderComponent';
import { RenderService } from '../../../services/render.service';
import { IGridProperties } from './grid.properties';

@builderComponent("grid")
@Component({
  selector: 'gl-grid',
  imports: [DropDirective,SelectDirective],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent extends GlazeComponent<IGridProperties> implements AfterViewInit {
  @ViewChild('elem', { static: true }) elem!: ElementRef<HTMLElement>;
  grid: number[][] = [];

  constructor(private renderService: RenderService, private componentMetadata: ComponentMetadataService) {
    super();
    this.grid = this.generateGrid();
  }

  ngAfterViewInit() {
    this.elem.nativeElement.setAttribute(this.control.id, '');
    super.update();
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
    this.addComponent(data.type, row, col, data.event);
  }

  override initializeProperty(): void {
    this.control.properties = {
      rows: 3,
      columns: 3
    }
  }

}
