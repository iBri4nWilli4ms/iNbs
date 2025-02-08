import { Component, HostListener } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';




export const morphTransition = trigger('morphTransition', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.9)' }),
    animate('500ms ease-in-out', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
  transition(':leave', [
    animate('500ms ease-in-out', style({ opacity: 0, transform: 'scale(0.9)' })),
  ]),
]);


@Component({
  selector: 'app-home-page',
  imports: [MatButtonModule, MatDividerModule, MatListModule, MatIconModule, CommonModule, MatInputModule, MatCardModule, MatGridListModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  animations: [morphTransition]
})
export class HomePageComponent {
  activeSection: string = 'about';
  sections = ['about', 'technologies', 'projects', 'contact'];

  setActiveSection(section: string): void {
    this.activeSection = section;
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollPosition = window.scrollY;

    // Detectar la sección activa
    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          this.activeSection = section;
        }
      }
    });
  }







  // Datos de Proyectos
  projects = [
    {
      title: 'Proyecto 1: Ecommerce App',
      description: 'Una aplicación de comercio electrónico construida con Angular y Firebase.',
      image: 'assets/projects/project1.jpg',
      link: 'https://example.com/proyecto1',
    },
    {
      title: 'Proyecto 2: Dashboard Admin',
      description: 'Un panel de administración con gráficos dinámicos usando Chart.js y Node.js.',
      image: 'assets/projects/project2.jpg',
      link: 'https://example.com/proyecto2',
    },
    {
      title: 'Proyecto 3: Blog Personal',
      description: 'Un blog personal minimalista desarrollado con React y Markdown.',
      image: 'assets/projects/project3.jpg',
      link: 'https://example.com/proyecto3',
    },
  ];

  // Datos de Tecnologías
  technologies = [
    { name: 'Angular', icon: 'code' },
    { name: 'React', icon: 'javascript' },
    { name: 'Node.js', icon: 'storage' },
    { name: 'TypeScript', icon: 'text_snippet' },
    { name: 'Firebase', icon: 'cloud' },
    { name: 'MongoDB', icon: 'database' },
    { name: 'Docker', icon: 'settings' },
    { name: 'Git', icon: 'source_control' },
  ];


}
