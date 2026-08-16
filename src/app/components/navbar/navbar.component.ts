import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  private readonly document = inject(DOCUMENT);
  private observer?: IntersectionObserver;
  private readonly visibleSections = new Map<string, number>();

  isMenuOpen = false;
  activeSectionId = 'inicio';

  readonly navLinks = [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Sobre mí', href: '#sobre-mi' },
    { label: 'Trayectoria', href: '#trayectoria' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Tecnologías', href: '#tecnologias' },
    { label: 'Contacto', href: '#contacto' }
  ] as const;

  ngAfterViewInit(): void {
    this.setupSectionObserver();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  onNavLinkClick(sectionHref: string): void {
    this.setActiveSection(sectionHref);
    this.closeMenu();
  }

  isActiveSection(sectionHref: string): boolean {
    return sectionHref === `#${this.activeSectionId}`;
  }

  private setupSectionObserver(): void {
    const sections = this.navLinks
      .map((link) => this.document.getElementById(this.getSectionId(link.href)))
      .filter((section): section is HTMLElement => section !== null);

    if (!sections.length) {
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.id;

          if (entry.isIntersecting) {
            this.visibleSections.set(sectionId, entry.intersectionRatio);
          } else {
            this.visibleSections.delete(sectionId);
          }
        }

        const mostVisibleSection = [...this.visibleSections.entries()].sort(
          (firstSection, secondSection) => secondSection[1] - firstSection[1]
        )[0];

        if (mostVisibleSection) {
          this.activeSectionId = mostVisibleSection[0];
        }
      },
      {
        root: null,
        rootMargin: '-25% 0px -45% 0px',
        threshold: [0.2, 0.35, 0.5, 0.65]
      }
    );

    for (const section of sections) {
      this.observer.observe(section);
    }
  }

  private setActiveSection(sectionHref: string): void {
    this.activeSectionId = this.getSectionId(sectionHref);
  }

  private getSectionId(sectionHref: string): string {
    return sectionHref.replace('#', '');
  }
}
