import { ElementRef, Injectable, ViewContainerRef } from '@angular/core';
import { IComponent, IGlazeComponent } from '../models/IComponent';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  public viewContainerRef!: ViewContainerRef

  renderComponent(elementRef: HTMLElement, component: IComponent) {
    elementRef.innerHTML = '';
    const elemComponent = this.viewContainerRef.createComponent(component);
    elementRef.appendChild(elemComponent.location.nativeElement);
  }
}
