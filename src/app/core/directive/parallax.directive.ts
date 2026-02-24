import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appParallax]',
  standalone: true
})
export class ParallaxDirective {

  constructor(private el: ElementRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {

    const depth = this.el.nativeElement.getAttribute('data-depth') || 0.5;

    const x = (window.innerWidth - event.pageX * depth) / 90;
    const y = (window.innerHeight - event.pageY * depth) / 90;

    this.el.nativeElement.style.transform =
      `translateX(${x}px) translateY(${y}px)`;
  }
}