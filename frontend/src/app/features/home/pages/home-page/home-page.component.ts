import { Component, effect, HostListener, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { trigger, transition, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { ScrollService } from '../../../../core/services/scroll.service';




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
  sections = ['about', 'technologies', 'projects', 'contact'];
  scrollService = inject(ScrollService)
  activeSection = this.scrollService.activeSection; // Signal para el estado del tema


  constructor() {
    this.scrollService.activeSection.set('about');
  }

  setActiveSection(sectionId: string): void {
    this.scrollService.setActiveSection(sectionId); // Delega al servicio
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
