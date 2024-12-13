import { Directive, ElementRef, HostListener, output } from '@angular/core';
import { IGlDragData } from './drag.model';

@Directive({
  selector: '[glDrop]'
})
export class DropDirective {
  ondrop = output<IGlDragData>();

  constructor(private elementRef: ElementRef) { }


  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
    if (this.elementRef.nativeElement == event.target) {
      this.elementRef.nativeElement.style.border = '1px dashed blue';
    }
  }

  @HostListener('dragleave', ['$event']) onDragLeave(event: DragEvent) {
    event.preventDefault();
    if (this.elementRef.nativeElement == event.target) {
      this.elementRef.nativeElement.style.border = '';
    }
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
    const type = event.dataTransfer!.getData('text') as string;
    this.ondrop.emit({ type: type, event: event });
  }

  @HostListener('mouseover', ['$event']) onHover(event: MouseEvent) {
    if (this.elementRef.nativeElement == event.target) {
      this.elementRef.nativeElement.style.border = '1px dashed blue';
    }
  }

  @HostListener('mouseleave', ['$event']) onLeave(event: MouseEvent) {
    if (this.elementRef.nativeElement == event.target) {
      this.elementRef.nativeElement.style.border = '';
    }
  }

}
