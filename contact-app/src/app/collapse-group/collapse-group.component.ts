import { Component, OnInit, AfterContentInit, Input, ContentChildren, QueryList, OnDestroy } from '@angular/core';
import { CollapseComponent } from "../collapse/collapse.component";
import { Subscription } from "rxjs/Rx";

@Component({
  selector: 'tp-collapse-group',
  templateUrl: './collapse-group.component.html',
  styleUrls: ['./collapse-group.component.scss']
})
export class CollapseGroupComponent implements OnInit, AfterContentInit, OnDestroy {
  @ContentChildren(CollapseComponent) collapses: QueryList<CollapseComponent>;
  @Input() multiple: boolean = true;

  private _subscriptions: Subscription[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.collapses.forEach(collapse => {
      let subscription = collapse.selectedChange.subscribe(coll => {
        if (!this.multiple && coll.selected) {
          this.toggleCollapse(coll);
        }
      });
      this._subscriptions.push(subscription);
    });
  }

  toggleCollapse(collapse) {
    this.collapses.forEach(c => {
      if (c.collapseId != collapse.collapseId) {
        c.selected = false;
      }
    });
  }

  ngOnDestroy() {
    if (this._subscriptions && this._subscriptions.length) {
      this._subscriptions.forEach(sub => sub.unsubscribe());
    }
    this._subscriptions = [];
  }

}
