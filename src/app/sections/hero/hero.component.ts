import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  readonly profile = {
    name: 'Raúl Barón Gómez',
    role: 'Desarrollador Full Stack Junior',
    stack: 'Angular · TypeScript · Java · Spring Boot',
    description:
      'Técnico Superior en Desarrollo de Aplicaciones Web, enfocado en crear aplicaciones web modernas combinando frontend, APIs REST y gestión de datos.'
  } as const;

  readonly githubUrl = 'https://github.com/RaulBaron373';
  readonly linkedInUrl = 'https://www.linkedin.com/in/raulbarongomez/';
  readonly projectsUrl = 'https://github.com/RaulBaron373';
}
