import { Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderService {
  public viewContainerRef!: ViewContainerRef

  renderComponent<T = Type<any>>(ref: HTMLElement | ViewContainerRef, component: Type<T>, injector?: Injector): T {
    if (ref instanceof HTMLElement) {
      ref.innerHTML = '';
      const elemComponent = this.viewContainerRef.createComponent(component);
      ref.appendChild(elemComponent.location.nativeElement);
      return elemComponent.instance as T;
    } else {
      ref.clear();
      const cmp = ref.createComponent(component, { injector });
      return cmp.instance as T;
    }
  }
}
