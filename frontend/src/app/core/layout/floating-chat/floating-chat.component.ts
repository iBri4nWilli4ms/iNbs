import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-floating-chat',
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './floating-chat.component.html',
  styleUrl: './floating-chat.component.scss'
})
export class FloatingChatComponent {


  private isChatOpenSubject = new BehaviorSubject<boolean>(false);
  isChatOpen$ = this.isChatOpenSubject.asObservable();

  toggleChat() {
    this.isChatOpenSubject.next(!this.isChatOpenSubject.value);
  }

  closeChat() {
    this.isChatOpenSubject.next(false);
  }
}
