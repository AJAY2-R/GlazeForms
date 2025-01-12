import { Component, ViewChild, OnInit } from '@angular/core';
import { GridComponent } from '../../designer/components/grid/grid.component';
import { DesignerTreeService } from 'designer/services/designer-tree.service';
import { ICoreProperties } from 'models/IComponent';
import { isEmpty } from 'lodash';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { DesignerControlService } from 'designer/services/designer.control.service';

@Component({
  selector: 'gl-framepanel',
  imports: [GridComponent],
  templateUrl: './framepanel.component.html',
  styleUrl: './framepanel.component.scss',
})
export class FramepanelComponent implements OnInit {
  @ViewChild('grid', { static: true }) grid!: GridComponent;

  constructor(private designerTreeService: DesignerTreeService, private designerControlService: DesignerControlService) { }

  ngOnInit() {
    const savedData = this.designerTreeService.getSavedTree();
    let id = this.grid.control.id;
    if (!isEmpty(savedData)) {
      const gridProperties = savedData.child?.[0] as ICoreProperties;
      this.grid.loadProperties(gridProperties);
      id = gridProperties.id;
    } else {
      this.designerTreeService.addControl(this.grid.control, 'root');
    }
    GlazeControlRegistry.instance.addComponent(id, this.grid);
    this.designerControlService.setSelectedControl(id);
  }
}
