import { Directive, ElementRef, HostBinding, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective {
  private observer!: IntersectionObserver;
  @HostBinding('class.animate-fadeInUp') isVisible = false;
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.isVisible = true;
          this.observer.unobserve(this.el.nativeElement);
        }
      },
      {
        threshold: 0.1
      }
    );
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

}
