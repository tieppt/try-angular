import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SwitchesComponent } from "./presentation/switches/switches.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'app works!';
  @ViewChild('nameInput') name: ElementRef;
  @ViewChild('switches') switches: SwitchesComponent;
  sayHello() {
    this.switches.toggle();
  }
  ngAfterViewInit() {
    this.name.nativeElement.focus();
  }
}
