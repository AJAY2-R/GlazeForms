import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { IGlazeStyle } from 'models/IComponent';

@Injectable({
  providedIn: 'root'
})
export class StyleService {

  private _styleElements: Map<string, HTMLStyleElement> = new Map();

  constructor(@Inject(DOCUMENT) private document: Document) { }

  public buildStyle(id: string, style: IGlazeStyle[]) {
    if (this._styleElements.has(id)) {
      this._styleElements.get(id)!.innerHTML = this.generateStyle(id, style);
    } else {
      this.createStyleElement(id).innerHTML = this.generateStyle(id, style);
    }
  }

  private createStyleElement(id: string): HTMLStyleElement {
    const styleElement = this.document.createElement('style');
    styleElement.id = id;
    this.document.head.appendChild(styleElement);
    this._styleElements.set(id, styleElement);
    return styleElement;
  }

  private generateStyle(id: string, properties: IGlazeStyle[]): string {
    return properties.map((style) => {
      return this.getStyle(this.buildStyleClass(id, style.className, style.selector), style.styles);
    }).join('\n');
  }

  private getStyle(styleClass: string, properties: Record<string, string>) {
    let style = `${styleClass} { `;
    for (const [key, value] of Object.entries(properties)) {
      style += `${key}: ${value}; `;
    }
    return style + ' }';
  }

  buildStyleClass(id: string, className?: string, selector?: string) {
    return `[${id}]${className || ''}${selector || ''}`;
  }
}
