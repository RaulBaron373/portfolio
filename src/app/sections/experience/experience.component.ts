import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  openedItemIndex: number | null = null;

  toggleItem(index: number): void {
    this.openedItemIndex = this.openedItemIndex === index ? null : index;
  }
  
  readonly experienceItems = [
    {
      type: 'Experiencia',
      title: 'Desarrollador Web en prácticas',
      organization: 'SmartBits Business IT Solutions',
      period: 'Oct 2025 — Dic 2025',
      description:
        'Participación en proyectos web reales, realizando implementación de interfaces, adaptación responsive y mejoras sobre sitios existentes.',
      technologies: ['WordPress', 'BeTheme', 'Figma', 'PHP', 'TypeScript']
    },
    {
      type: 'Formación',
      title: 'Técnico Superior en Desarrollo de Aplicaciones Web',
      organization: 'CESUR',
      period: 'Sep 2023 — May 2026',
      description:
        'Formación especializada en desarrollo web frontend y backend, programación, bases de datos y desarrollo de aplicaciones.',
      technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'MySQL']
    },
    {
      type: 'Formación',
      title: 'Bootcamp Full Stack',
      organization: 'Bootcamp Nicolás Salgado',
      period: 'Jun 2024 — May 2025',
      description:
        'Formación práctica orientada al desarrollo Full Stack y a la construcción de aplicaciones web completas.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Java']
    }
  ] as const;
}
