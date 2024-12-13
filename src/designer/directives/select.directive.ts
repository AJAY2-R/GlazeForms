import { AfterViewInit, Directive, ElementRef, HostListener, input } from '@angular/core';
import { DesignerControlService } from 'designer/services/designer.control.service';

@Directive({
  selector: '[glSelect]'
})
export class SelectDirective implements AfterViewInit {

  id = input.required<string>({ alias: 'glSelect' });
  constructor(private elementRef: ElementRef<HTMLElement>, private designerService: DesignerControlService) {
  }

  ngAfterViewInit(): void {
    this.designerService.onControlChange$.subscribe(control => {
      this.toggleHighlight(control === this.id());
    });
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.designerService.setSelectedControl(this.id());
    this.toggleHighlight(true);
    event.stopPropagation();
    event.preventDefault();
  }

  toggleHighlight(value: boolean) {
    this.elementRef.nativeElement.classList.toggle('gl-highlight', value);
  }


}
