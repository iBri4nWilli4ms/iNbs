import { Component, OnInit, Renderer2, ElementRef, inject, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemeService } from '../../../core/services/theme.service';
// import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  isScrolled = signal(false); // Signal para el estado de scroll

  themeService = inject(ThemeService);

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(): void {
    const mainContent = this.el.nativeElement.closest('body').querySelector('.main-content');
    if (mainContent) {
      this.renderer.listen(mainContent, 'scroll', () => {
        this.isScrolled.set((mainContent as HTMLElement).scrollTop > 50); // Ajusta el valor según sea necesario

      });
    }
  }



}