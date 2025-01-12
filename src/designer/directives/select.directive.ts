import { AfterViewInit, Directive, ElementRef, HostListener, input, ViewContainerRef } from '@angular/core';
import { SelectionOverlayService } from 'designer/components/render/selection-overlay/selection-overlay.service';
import { DesignerControlService } from 'designer/services/designer.control.service';

@Directive({
  selector: '[glSelect]'
})
export class SelectDirective implements AfterViewInit {

  id = input.required<string>({ alias: 'glSelect' });
  constructor(private elementRef: ElementRef<HTMLElement>, private designerService: DesignerControlService,
    private selectionOverlayService: SelectionOverlayService, viewContainerRef: ViewContainerRef) {
    this.selectionOverlayService.viewContainerRef = viewContainerRef;
  }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.setAttribute(this.id(), '');
    this.designerService.setSelectedControl(this.id());
    this.toggleHighlight(true);
  }

  @HostListener('click', ['$event']) onClick(event: MouseEvent) {
    this.designerService.setSelectedControl(this.id());
    this.toggleHighlight(true);
    event.stopPropagation();
    event.preventDefault();
  }

  toggleHighlight(value: boolean) {
    if (value) {
      this.selectionOverlayService.setOverlay(this.elementRef.nativeElement, value);
    }
  }

}
