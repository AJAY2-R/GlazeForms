import { Directive, input, InputSignal } from '@angular/core';
import { DesignerTreeService } from 'designer/services/designer-tree.service';
import { IGridParentProperties } from 'models/IComponent';

@Directive({
  selector: '[glRenderchild]'
})
export class RenderchildDirective {

  id:InputSignal<string> = input.required<string>();
  constructor(private designerTreeService: DesignerTreeService) { }

  getChildComponentProperties(row: number, col: number) {
    return this.designerTreeService
      .getChildComponents(this.id())
      .find((c) => {
        const parentProperties = c.parentProperties as IGridParentProperties;
        return parentProperties.row === row && parentProperties.column === col;
      });
  }
}
