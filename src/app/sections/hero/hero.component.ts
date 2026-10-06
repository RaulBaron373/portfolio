import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly profile = {
    eyebrow: 'Full Stack Developer · Madrid',
    name: 'Raúl Barón Gómez',
    headline: 'Desarrollo productos web de principio a producción.',
    stack: 'Angular · TypeScript · Java · Spring Boot',
    description:
      'Desarrollador Full Stack especializado en crear aplicaciones web completas, desde interfaces responsive y APIs REST hasta persistencia, seguridad y despliegue en producción.',
    status: 'Disponible para oportunidades'
  } as const;

  readonly stats = [
    {
      value: '02',
      label: 'Proyectos desplegados'
    },
    {
      value: '01',
      label: 'Full Stack en producción'
    }
  ] as const;

  readonly productionProject = {
    name: 'Detall Sublim',
    status: 'LIVE',
    domain: 'detallsublim.es',
    url: 'https://www.detallsublim.es',
    stack: 'Angular 21 · Spring Boot 3.4 · MySQL'
  } as const;

  readonly githubUrl = 'https://github.com/RaulBaron373';
  readonly linkedInUrl = 'https://www.linkedin.com/in/raulbarongomez/';
  readonly projectsUrl = '#proyectos';
}
