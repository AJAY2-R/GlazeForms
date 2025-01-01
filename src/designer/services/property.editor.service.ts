import { Injectable } from '@angular/core';
import { IPropertyEditor } from 'models/IPropertyEditor';

@Injectable({
  providedIn: 'root'
})
export class PropertyEditorService {
  private propertyEditorMap: Map<string, IPropertyEditor> = new Map();
  constructor() { }

  clearPropertyEditorMap() {
    this.propertyEditorMap.clear();
  }

  addPropertyEditor(name: string, propertyEditor: IPropertyEditor) {
    this.propertyEditorMap.set(name, propertyEditor);
  }

  updatePropertyEditor(name: string, value: unknown) {
    const propertyEditor = this.propertyEditorMap.get(name);
    if (propertyEditor) {
      propertyEditor.update(value);
    }
  }

}
