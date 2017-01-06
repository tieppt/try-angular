import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tp-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.scss'],
  inputs: ['avatarUrl:avatar-url']
})
export class ContactImageDetailComponent implements OnInit {
  @Input() round: boolean = false;
  _avatarUrl: string = '';

  constructor() {

  }

  get avatarUrl() {
    return this._avatarUrl;
  }

  set avatarUrl(value: string) {
    this._avatarUrl = value.trim();
  }

  ngOnInit() {
    if (!this.avatarUrl) {
      throw new Error('avatarUrl is required!');
    }
  }
}
