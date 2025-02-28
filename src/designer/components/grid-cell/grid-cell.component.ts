import { CommonModule } from '@angular/common';
import { Component, input, InputSignal, ViewChild, ViewContainerRef, OnChanges } from '@angular/core';
import { IGlDragData } from 'designer/directives/drag.model';
import { DropDirective } from 'designer/directives/drop.directive';
import { DesignerTreeService } from 'designer/services/designer-tree.service';
import { DesignerControlService } from 'designer/services/designer.control.service';
import { IGridParentProperties } from 'models/IComponent';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';

@Component({
  selector: 'gl-grid-cell',
  imports: [DropDirective, CommonModule],
  templateUrl: './grid-cell.component.html',
  styleUrl: './grid-cell.component.scss',
})
export class GridCellComponent implements OnChanges {
  id: InputSignal<string> = input.required<string>();
  row: InputSignal<number> = input.required<number>();
  col: InputSignal<number> = input.required<number>();
  @ViewChild('child', { static: true, read: ViewContainerRef }) child!: ViewContainerRef;
  hasChild = false;
  constructor(private designerService: DesignerControlService,
    private designerTreeService: DesignerTreeService) { }

  onDrop(data: IGlDragData) {
    this.addComponent(data.type);
  }

  ngOnChanges() {
    this.getChildComponent(this.row(), this.col());
  }

  addComponent(componentName: string) {
    this.hasChild = true;
    const component = this.designerService.addControl(
      this.child,
      componentName,
      this.id(),
      { parentId: this.id(), row: this.row(), column: this.col() } as IGridParentProperties,
    );
    this.designerService.setSelectedControl(component.control.id);
  }

  getChildComponent(row: number, col: number) {
    const childComponents = this.designerTreeService.getChildComponents(this.id());
    const prop = childComponents.find((c) => {
      const parentProperties = c.parentProperties as IGridParentProperties;
      return parentProperties.row === row && parentProperties.column === col;
    });
    if (prop) {
      this.hasChild = true;
      const component = this.designerService.renderComponent(this.child, prop.type);
      GlazeControlRegistry.instance.updateComponent(component.control.id, prop.id, component);
      component.loadProperties(prop);
    }
  }
}
