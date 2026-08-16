import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  readonly projects = [
    {
      title: 'Detall Sublim',
      type: 'Proyecto Full Stack',
      description:
        'Aplicación web corporativa con catálogo de productos, solicitud de presupuestos y panel de administración para gestionar productos, categorías, solicitudes y usuarios.',
      technologies: [
        'Angular',
        'TypeScript',
        'Java',
        'Spring Boot',
        'MySQL',
        'JWT',
        'JHipster'
      ],
      image: 'images/projects/detall-sublim.jpg',
      repositoryUrl: 'https://github.com/RaulBaron373/detallSublim',
      featured: true
    }
  ] as const;
}
