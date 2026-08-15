import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should render the navbar and hero content', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-navbar')).not.toBeNull();
    expect(compiled.querySelector('app-hero')).not.toBeNull();
    expect(compiled.querySelector('h1')?.textContent).toContain('Raúl Barón Gómez');
    expect(compiled.textContent).toContain('Desarrollador Full Stack Junior');
    expect(compiled.textContent).toContain('Ver proyectos');
    expect(compiled.textContent).toContain('Descargar CV');
  });
});
