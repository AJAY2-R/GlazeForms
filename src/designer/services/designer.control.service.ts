import { Injectable } from '@angular/core';
import { IGlazeComponent } from 'models/IComponent';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DesignerControlService {
  private _selectedControl = '';
  private onControlSelected$: BehaviorSubject<string> =
    new BehaviorSubject<string>('');

  setSelectedControl(control: string) {
    setTimeout(() => {
      if (this.selectedControl != control) {
        this._selectedControl = control;
        this.onControlSelected$.next(control);
      }
    });
  }

  get onControlChange$() {
    return this.onControlSelected$.asObservable();
  }

  getProperties(controlId: string = this._selectedControl) {
    const control = GlazeControlRegistry.instance.getAllComponents().get(controlId);
    return control?.component.properties;
  }

  getControlComponent(controlId: string = this._selectedControl): IGlazeComponent {
    return GlazeControlRegistry.instance.getComponent(controlId)!.component;
  }

  get selectedControl() {
    return this._selectedControl;
  }
}
