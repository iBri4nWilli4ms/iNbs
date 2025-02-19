import { Component, Input, Output, EventEmitter, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-directional-button',
  imports: [MatIconModule, MatButtonModule],
  templateUrl: './directional-button.component.html',
  styleUrl: './directional-button.component.scss'
})
export class DirectionalButtonComponent {
  @Input() isContentHidden!: Signal<boolean>;
  @Output() toggle = new EventEmitter<void>();

  get buttonText(): string {
    return this.isContentHidden() ? 'Back to Presentation' : 'About Me';
  }

  get buttonIcon(): string {
    return this.isContentHidden() ? 'keyboard_arrow_up' : 'keyboard_arrow_down';
  }

  onClick() {
    this.toggle.emit();
  }
}
