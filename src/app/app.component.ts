/* eslint-disable @angular-eslint/component-selector */
import { Component, ViewContainerRef } from '@angular/core';
import { MainPanelComponent } from "../components/main-panel/main-panel.component";
import { RenderService } from '../services/render.service';

@Component({
  selector: 'app-root',
  imports: [MainPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private viewContainerRef: ViewContainerRef, private renderService: RenderService) {
    this.renderService.viewContainerRef = viewContainerRef;
  }
}
