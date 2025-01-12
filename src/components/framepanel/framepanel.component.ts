import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent } from '../../designer/components/grid/grid.component';
import { DesignerTreeService } from 'designer/services/designer-tree.service';
import { ICoreProperties } from 'models/IComponent';
import { isEmpty } from 'lodash';

@Component({
  selector: 'gl-framepanel',
  imports: [GridComponent],
  templateUrl: './framepanel.component.html',
  styleUrl: './framepanel.component.scss',
})
export class FramepanelComponent implements AfterViewInit {
  @ViewChild('grid', { static: true }) grid!: GridComponent;

  constructor(private designerTreeService: DesignerTreeService) {}

  ngAfterViewInit() {
    const savedData = this.designerTreeService.getSavedTree();
    if (!isEmpty(savedData)) {
      const gridProperties = savedData.child?.[0] as ICoreProperties;
      this.grid.loadProperties(gridProperties);
    } else {
      this.designerTreeService.addControl(this.grid.control, 'root');
    }
  }
}
