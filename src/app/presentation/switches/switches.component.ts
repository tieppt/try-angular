import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tp-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
  @Input() checked: boolean = false;
  @Output('checkedChange') change = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
  emitChangeValue(event) {
    // event.stopPropagation();
    this.change.emit(event.target.checked);
  }
}
