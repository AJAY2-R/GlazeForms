import { Component, ViewContainerRef } from '@angular/core';
import { SidepanelComponent } from "../components/sidepanel/sidepanel.component";
import { FramepanelComponent } from "../components/framepanel/framepanel.component";
import { RenderService } from '../services/render.service';

@Component({
  selector: 'app-root',
  imports: [SidepanelComponent, FramepanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef, private renderService: RenderService) {
    this.renderService.viewContainerRef = viewContainerRef;
  }
}
