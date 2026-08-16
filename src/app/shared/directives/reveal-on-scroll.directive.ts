import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, HostBinding, NgZone, OnDestroy, inject } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly elementRef = inject(ElementRef<HTMLElement>);
  private readonly document = inject(DOCUMENT);
  private readonly ngZone = inject(NgZone);

  private observer?: IntersectionObserver;

  @HostBinding('class.reveal-on-scroll')
  readonly hasRevealClass = true;

  @HostBinding('class.is-revealed')
  isRevealed = false;

  ngAfterViewInit(): void {
    const windowRef = this.document.defaultView;

    if (!windowRef) {
      this.isRevealed = true;
      return;
    }

    const prefersReducedMotion = windowRef.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const supportsIntersectionObserver = 'IntersectionObserver' in windowRef;

    if (prefersReducedMotion || !supportsIntersectionObserver) {
      this.isRevealed = true;
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      this.observer = new windowRef.IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) {
            return;
          }

          this.ngZone.run(() => {
            this.isRevealed = true;
          });

          this.observer?.disconnect();
        },
        {
          root: null,
          rootMargin: '0px 0px -12% 0px',
          threshold: 0.18
        }
      );

      this.observer.observe(this.elementRef.nativeElement);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
