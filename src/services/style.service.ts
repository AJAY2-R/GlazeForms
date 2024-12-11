import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ICoreStyle, ISize } from 'models/ICore.Properties';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private _styleElements: Map<string, HTMLStyleElement> = new Map();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public buildStyle(id: string, style: Record<string, string>) {
    if (this._styleElements.has(id)) {
      this._styleElements.get(id)!.innerHTML = this.generateStyle(id, style);
    } else {
      this.createStyleElement(id).innerHTML = this.generateStyle(id, style);
    }
  }

  static size(size: ISize) {
    return `${size.size}${size.unit}`;
  }

  private createStyleElement(id: string): HTMLStyleElement {
    const styleElement = this.document.createElement('style');
    styleElement.id = id;
    this.document.head.appendChild(styleElement);
    this._styleElements.set(id, styleElement);
    return styleElement;
  }

  private generateStyle(id: string, properties: Record<string, string>) {
    let style = `[${id}] { `;
    for (const [key, value] of Object.entries(properties)) {
      style += `${key}: ${value}; `;
    }
    return style + ' }';
  }

}
