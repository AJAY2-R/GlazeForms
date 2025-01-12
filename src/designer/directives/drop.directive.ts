import { Directive, ElementRef, HostListener, output } from '@angular/core';
import { IGlDragData } from './drag.model';

@Directive({
  selector: '[glDrop]'
})
export class DropDirective {
  ondrop = output<IGlDragData>();

  constructor(private elementRef: ElementRef<HTMLElement>) { }


  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    this.toggleHighlight(true)
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    this.toggleHighlight(false)
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    const type = event.dataTransfer!.getData('text') as string;
    this.ondrop.emit({ type: type, event: event });
    this.toggleHighlight(false)
  }

  @HostListener('mouseover', ['$event']) onHover(event: MouseEvent) {
    if (this.elementRef.nativeElement == event.target) {
      this.toggleHighlight(true)
    }
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: MouseEvent) {
    if (this.elementRef.nativeElement == event.target) {
       this.toggleHighlight(false)
    }
  }

  private toggleHighlight(value:boolean) {
    this.elementRef.nativeElement.classList.toggle('gl-cell-highlight',value)
  }

}
