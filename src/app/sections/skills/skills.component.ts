import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  openGroupIndex: number | null = null;

  toggleGroup(index: number): void {
    this.openGroupIndex = this.openGroupIndex === index ? null : index;
  }
  readonly skillGroups = [
    {
      title: 'Frontend',
      icon: '/images/skills/frontend.png',
      skills: ['Angular', 'TypeScript', 'HTML', 'SCSS']
    },
    {
      title: 'Backend',
      icon: '/images/skills/backend.png',
      skills: ['Java', 'Spring Boot', 'REST API', 'JWT']
    },
    {
      title: 'Bases de datos',
      icon: '/images/skills/bases-de-datos.png',
      skills: ['MySQL', 'SQL']
    },
    {
      title: 'Herramientas',
      icon: '/images/skills/herramientas.png',
      skills: ['Git', 'GitHub', 'Figma', 'WordPress', 'JHipster']
    }
  ] as const;
}
