import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contact Application!';
  messages: string[] = [];
  message: string = '';
  onClick() {
    this.messages.push(this.message);
    this.message = '';
  }
}
