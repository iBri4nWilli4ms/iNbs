import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { TechstackPageComponent } from '../../../techstack/pages/techstack-page/techstack-page.component';
@Component({
  selector: 'app-conversmarthub-page',
  imports: [MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './conversmarthub-page.component.html',
  styleUrl: './conversmarthub-page.component.scss'
})
export class ConversmarthubPageComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(TechstackPageComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
