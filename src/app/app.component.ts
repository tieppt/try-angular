import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Contact Application!';
  messages = [];
  onClick() {
    console.log('Clicked');
  }
  onInput(event) {
    console.log(event);
    this.messages.push(event.target.value);
  }
}
