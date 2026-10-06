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
  openProjectIndex: number | null = null;

  toggleProject(index: number): void {
    this.openProjectIndex = this.openProjectIndex === index ? null : index;
  } 
  readonly projects = [
    {
      number: '01',
      title: 'Detall Sublim',
      type: 'Aplicación Full Stack en producción',
      description:
        'Aplicación desarrollada para una empresa real de productos personalizados. Incluye web pública, catálogo, solicitudes de presupuesto, panel administrativo, gestión de usuarios, generación de PDFs, correo transaccional y despliegue en producción.',
      technologies: [
        'Angular 21',
        'TypeScript',
        'Java 21',
        'Spring Boot 3.4',
        'MySQL',
        'Docker',
        'Railway',
        'JWT'
      ],
      highlights: [
        {
          label: 'Producción',
          value: 'detallsublim.es'
        },
        {
          label: 'Backend',
          value: 'Spring Boot + JWT'
        },
        {
          label: 'Infraestructura',
          value: 'Railway + MySQL + Docker'
        },
        {
          label: 'Operación',
          value: 'CI/CD · backups · monitorización'
        }
      ],
      image: 'images/projects/detall-sublim.jpg',
      liveUrl: 'https://www.detallsublim.es',
      repositoryUrl: 'https://github.com/RaulBaron373/detallSublim',
      featured: true
    },
    {
      number: '02',
      title: 'Portfolio Armando Henríquez',
      type: 'Portfolio profesional · Frontend',
      description:
        'Diseño y desarrollo de un portfolio profesional orientado al sector IT, con identidad visual tecnológica, composición responsive, animaciones y microinteracciones personalizadas.',
      technologies: [
        'Angular 19',
        'TypeScript',
        'SCSS'
      ],
      highlights: [
        {
          label: 'Diseño',
          value: 'Interfaz tecnológica personalizada'
        },
        {
          label: 'Frontend',
          value: 'Angular + TypeScript + SCSS'
        },
        {
          label: 'UX',
          value: 'Responsive + animaciones'
        }
      ],
      image: 'images/projects/armando-portfolio.png',
      liveUrl: 'https://portfolio-armando-henriquez.vercel.app/',
      repositoryUrl: null,
      featured: false
    }
  ] as const;
}
