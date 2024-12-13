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
    console.log("UPDATED SELECTED CONTROL", control);
    setTimeout(() => {
      console.log("PRoperties", this.getProperties());
    }, 1000);
    this._selectedControl = control;
    this.onControlSelected$.next(control);
  }

  get onControlChange$() {
    return this.onControlSelected$.asObservable();
  }

  getProperties(controlId: string = this._selectedControl) {
    return GlazeControlRegistry.getAllComponents().get(controlId)!.prototype.control.properties;
  }

  get selectedControl() {
    return this._selectedControl;
  }
}
