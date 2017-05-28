import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'tpc-contact-reactive-form',
  templateUrl: './contact-reactive-form.component.html',
  styleUrls: ['./contact-reactive-form.component.scss']
})
export class ContactReactiveFormComponent implements OnInit {
  rfContact: FormGroup;
  constructor() { }

  ngOnInit() {
    this.rfContact = new FormGroup({
      contactName: new FormControl(),
      email: new FormControl(),
      social: new FormGroup({
        facebook: new FormControl(),
        twitter: new FormControl(),
        website: new FormControl()
      }),
      tel: new FormControl()
    });
  }

  onSubmit() {
    // Do something awesome
    console.log(this.rfContact);
  }
}
