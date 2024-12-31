import { ComponentRef, Injectable, ViewContainerRef } from '@angular/core';
import { SelectionOverlayComponent } from './selection-overlay.component';

@Injectable({
  providedIn: 'root'
})
export class SelectionOverlayService {
  componentRef?: ComponentRef<SelectionOverlayComponent>;
  viewContainerRef!: ViewContainerRef

  setOverlay(targetElement: HTMLElement, show: boolean) {
    if (show === false) {
      this.componentRef?.destroy();
      this.componentRef = undefined;
    } else {
      if (this.componentRef) {
        this.componentRef.destroy();
      }
      this.componentRef = this.viewContainerRef.createComponent(SelectionOverlayComponent);
      this.componentRef.instance.targetElement = targetElement;
    }
  }

}
