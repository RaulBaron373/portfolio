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

  readonly areas = [
    {
      number: '01',
      label: 'Frontend',
      value: 'Angular · TypeScript'
    },
    {
      number: '02',
      label: 'Backend',
      value: 'Java · Spring Boot'
    },
    {
      number: '03',
      label: 'Datos',
      value: 'MySQL · SQL'
    },
    {
      number: '04',
      label: 'Ubicación',
      value: 'Madrid · España'
    }
  ] as const;
}
