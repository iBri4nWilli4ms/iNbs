import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Engine } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { NgxParticlesModule } from '@tsparticles/angular';
import type { IOptions, RecursivePartial } from '@tsparticles/engine';

@Component({
  selector: 'app-particles',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss']
})
export class ParticlesComponent {
  isBrowser: boolean;
  particlesOptions: RecursivePartial<IOptions>;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.particlesOptions = {
      fullScreen: { enable: true },
      fpsLimit: 120,
      particles: {
        number: { value: 100 }, // 80 Número de partículas
        color: { value: '#ffffff' },
        move: {
          enable: true,
          speed: 1.5,
          direction: 'none',
          outModes: { default: 'out' },
        },
        opacity: { value: 0.5 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 150,   // 150 Distancia máxima para conectar partículas
          color: '#ffffff',
          opacity: 0.4,
          width: 1,
          frecuenly: 1,
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
        },
      },
    }
  }

  async particlesInit(engine: Engine): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      await loadSlim(engine);
    }
  }
}
