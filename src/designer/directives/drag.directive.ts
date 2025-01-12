import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[glDrag]'
})
export class DragDirective {

  data = input.required<string>();
  constructor(private elementRef: ElementRef<HTMLElement>) {
    this.elementRef.nativeElement.draggable = true;
  }

  @HostListener('dragstart', ['$event']) onDragStart(event: DragEvent) {
    event.dataTransfer!.setData('text', this.data());
  }

  @HostListener('dragover', ['$event']) onDragOver(event: DragEvent) {
    event.preventDefault();
  }

  @HostListener('drop', ['$event']) onDrop(event: DragEvent) {
    event.preventDefault();
  }

}
