import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MOCK_TECH_STACK } from '../../models/techstack.mock';
import { TechStackItem } from '../../models/techstack.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-techstack-page',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './techstack-page.component.html',
  styleUrl: './techstack-page.component.scss'
})
export class TechstackPageComponent {
  techStack: TechStackItem[] = MOCK_TECH_STACK;
  constructor(
    public dialogRef: MatDialogRef<TechstackPageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }
}


