import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
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
