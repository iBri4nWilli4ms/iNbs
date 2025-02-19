import { isPlatformBrowser } from '@angular/common';
import { Injectable, signal, effect, PLATFORM_ID, Inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  activeSection = signal<string>(''); // ID de la sección activa
  isScrolled = signal(false); // Indica si el usuario ha hecho scroll


  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.setupScrollListener();
    }
  }


  private setupScrollListener(): void {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.addEventListener('scroll', this.onScroll.bind(this));
    }
  }

  private onScroll(event: Event): void {
    const mainContent = event.target as HTMLElement;
    const scrollTop = mainContent.scrollTop;

    // Actualizar estado de scroll
    this.isScrolled.set(scrollTop > 50);

    // Detectar sección activa
    const sections = document.querySelectorAll('.section');
    let activeSectionId = '';
    sections.forEach((section: Element) => {
      const htmlSection = section as HTMLElement; // Conversión explícita a HTMLElement
      const rect = htmlSection.getBoundingClientRect();
      if (rect.top >= -500 && rect.top <= 500) { // Umbral ajustado
        activeSectionId = htmlSection.id;
      }
    });

    // Actualizar la sección activa solo si cambia
    if (activeSectionId && activeSectionId !== this.activeSection()) {
      this.activeSection.set(activeSectionId);
      this.scrollToSection(activeSectionId); // Desplaza suavemente hacia la sección

    }
  }
  private scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector('.header') as HTMLElement; // Encabezado fijo
      const headerOffset = header ? header.offsetHeight : 0; // Altura dinámica del encabezado

      const rect = element.getBoundingClientRect(); // Posición relativa al viewport
      const offsetPosition = window.scrollY + rect.top - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
  setActiveSection(sectionId: string): void {
    this.activeSection.set(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}