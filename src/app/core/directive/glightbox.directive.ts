import { AfterViewInit, Directive, OnDestroy } from '@angular/core';
import GLightbox from 'glightbox';

@Directive({
  selector: '[appGlightbox]'
})
export class GlightboxDirective implements AfterViewInit, OnDestroy {

  private lightbox: any;

  ngAfterViewInit(): void {
    this.lightbox = GLightbox({
      selector: '[appGlightbox]',
      openEffect: 'fade',
      closeEffect: 'fade'
    });
  }

  ngOnDestroy(): void {
    if (this.lightbox) {
      this.lightbox.destroy();
    }
  }
}