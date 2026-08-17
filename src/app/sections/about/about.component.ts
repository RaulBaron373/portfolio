import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  readonly profileImagePath = '/images/profile.jpg';

  isDetailsOpen = false;

  toggleDetails(): void {
    this.isDetailsOpen = !this.isDetailsOpen;
  }

  readonly facts = [
    {
      label: 'Titulación',
      value: 'Técnico Superior en Desarrollo de Aplicaciones Web'
    },
    {
      label: 'Ubicación',
      value: 'Madrid, España'
    },
    {
      label: 'Stack principal',
      value: 'Angular · TypeScript · Java · Spring Boot'
    },
    {
      label: 'Herramientas',
      value: 'Git · GitHub · Figma · WordPress'
    },
    {
      label: 'Bases de datos',
      value: 'MySQL · SQL'
    },
    {
      label: 'Disponibilidad',
      value: 'Abierto a oportunidades junior'
    }
  ] as const;
}
