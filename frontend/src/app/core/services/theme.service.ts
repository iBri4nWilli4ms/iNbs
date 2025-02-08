import { Injectable, inject, effect, signal, PLATFORM_ID } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Theme } from '../models/theme'; // Importa el tipo Theme

const THEME_KEY = 'theme-preference';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID); // Detecta si estamos en el cliente o servidor

  private theme = signal<Theme>(this.getStoredTheme()); // Signal para el estado del tema

  constructor() {
    this.setupThemeEffect();
  }

  getTheme(): Theme {
    return this.theme();
  }

  toggleTheme(): void {
    this.theme.set(this.theme() === 'light' ? 'dark' : 'light');
  }

  private setupThemeEffect(): void {
    effect(() => {
      this.applyThemeToBody(this.theme());
    });
  }


  private applyThemeToBody(theme: Theme): void {
    this.document.body.className = `${theme}-theme`;
  }

  private getStoredTheme(): Theme {
    if (isPlatformBrowser(this.platformId)) {
      let storedTheme = localStorage.getItem(THEME_KEY);
      if (storedTheme) {
        return storedTheme as Theme;
      }
      // Detecta las preferencias del sistema si no hay tema guardado
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light'; // Valor predeterminado para SSR
  }

}
