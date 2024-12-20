import { Injectable } from '@angular/core';
import { GlazeControlRegistry } from 'Registry/GlazeControlRegistry';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignerControlService {

  private _selectedControl = '';
  private onControlSelected$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  setSelectedControl(control: string) {
    if(this.selectedControl != control){
      this._selectedControl = control;
      this.onControlSelected$.next(control);
    }
  }

  get onControlChange$() {
    return this.onControlSelected$.asObservable();
  }

  getProperties(controlId: string = this._selectedControl) {
    const component = GlazeControlRegistry.getAllComponents().get(controlId)!;
    return component.properties;
  }

  get selectedControl() {
    return this._selectedControl;
  }
}
