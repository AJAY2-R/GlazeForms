import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { GridComponent } from "../../designer/components/grid/grid.component";
import { DesignerTreeService } from 'designer/services/designer-tree.service';

@Component({
  selector: 'gl-framepanel',
  imports: [GridComponent],
  templateUrl: './framepanel.component.html',
  styleUrl: './framepanel.component.scss'
})
export class FramepanelComponent implements AfterViewInit {
  @ViewChild('grid', { static: true }) grid!: GridComponent;
  constructor(private designerTreeService: DesignerTreeService) { }

  ngAfterViewInit() {
    this.designerTreeService.addControl(this.grid.control, 'root')
  }

}
