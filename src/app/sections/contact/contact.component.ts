import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealOnScrollDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  readonly email = 'raul_bg1998@hotmail.com';

  readonly socialLinks = [
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/raulbarongomez/'
    },
    {
      label: 'GitHub',
      url: 'https://github.com/RaulBaron373'
    }
  ] as const;
}
