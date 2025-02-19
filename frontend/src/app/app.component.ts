import { Component, effect, Inject, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import { FooterComponent } from './core/layout/footer/footer.component';
import { ConversmarthubPageComponent } from './features/conversmarthub/pages/conversmarthub-page/conversmarthub-page.component';
import { AboutMinimalPageComponent } from './features/about/pages/about-minimal-page/about-minimal-page.component';
import { isPlatformBrowser } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DirectionalButtonComponent } from './shared/components/directional-button/directional-button.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DirectionalButtonComponent, ConversmarthubPageComponent, AboutMinimalPageComponent, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }
  // Creamos un Signal para manejar el estado
  isContentHidden = signal(false);

  toggleContent() {
    this.isContentHidden.update((value) => !value); // Alterna el valor del Signal
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {

      const loadingScreen = document.getElementById('loading-screen');
      if (loadingScreen) {
        setTimeout(() => {
          loadingScreen.classList.add('hidden');
        }, 700); // Puedes ajustar el tiempo si quieres que la animación sea más lenta o rápida
      }
    }
  }

}
