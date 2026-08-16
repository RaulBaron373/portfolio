import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
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
