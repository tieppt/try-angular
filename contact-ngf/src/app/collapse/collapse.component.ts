import { Component, OnInit, Input, ViewEncapsulation, Output, EventEmitter } from '@angular/core';

export interface DataCollapseChange {
  collapseId: string;
  selected: boolean;
}

let uuid: number = 1;

@Component({
  selector: 'tp-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CollapseComponent implements OnInit {
  @Input() title: string = '';
  @Input() selected: boolean = false;
  @Output() selectedChange: EventEmitter<DataCollapseChange> = new EventEmitter<DataCollapseChange>();
  private _id: number;
  constructor() { }

  ngOnInit() {
    this._id = ++uuid;
  }

  get collapseId() {
    return 'tp-collapse-' + this._id;
  }

  toggleSelected() {
    this.selected = !this.selected;
    this.selectedChange.emit({
      collapseId: this.collapseId,
      selected: this.selected
    });
  }
}
