import { Component, ElementRef, Input, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'gl-selection-overlay',
  imports: [],
  templateUrl: './selection-overlay.component.html',
  styleUrl: './selection-overlay.component.scss'
})
export class SelectionOverlayComponent implements AfterViewInit, OnDestroy {
  @Input() targetElement?: HTMLElement;
  private resizeObserver!: ResizeObserver;
  private mutationObserver!: MutationObserver;

  constructor(private elementRef: ElementRef) {
  }
  ngAfterViewInit() {
    this.setOverlay();
    this.resizeObserver = new ResizeObserver(() => this.setOverlay());
    this.resizeObserver.observe(this.targetElement as Element);
    this.mutationObserver = new MutationObserver(() => this.setOverlay());
    this.mutationObserver.observe(this.targetElement as Element, { attributes: true, childList: true, subtree: true });
  }

  setOverlay() {
    if (this.targetElement) {
      const targetRect = this.targetElement.getBoundingClientRect();
      const overlay = this.elementRef.nativeElement as HTMLElement;
      overlay.style.left = targetRect.left + 'px';
      overlay.style.top = targetRect.top + 'px';
      overlay.style.width = targetRect.width + 'px';
      overlay.style.height = targetRect.height + 'px';
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.mutationObserver?.disconnect();
  }

}
