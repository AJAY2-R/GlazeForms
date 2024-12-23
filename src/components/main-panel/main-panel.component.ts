import { Component } from '@angular/core';
import { ControlsComponent } from "../controls/controls.component";
import { FramepanelComponent } from "../framepanel/framepanel.component";
import { SidepanelComponent } from "../sidepanel/sidepanel.component";
import { ComponentEditorComponent } from "../component-editor/component-editor.component";

@Component({
  selector: 'gl-main-panel',
  imports: [SidepanelComponent, FramepanelComponent, ControlsComponent, ComponentEditorComponent],
  templateUrl: './main-panel.component.html',
  styleUrl: './main-panel.component.scss'
})
export class MainPanelComponent {

}
