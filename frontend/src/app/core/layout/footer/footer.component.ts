import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-footer',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatIcon],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentLanguage: string = "es";


  changeLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    // this.translateService.use(this.currentLanguage); // Usando ngx-translate, por ejemplo.
  }
}
