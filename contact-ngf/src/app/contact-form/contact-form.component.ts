import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tpc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  contact = {
    "contactName": "Tiep Phan",
    "email": "abc@deg.com",
    "facebook": "facebook.com",
    "twitter": "twitter.com",
    "website": "tiepphan.com",
    "tel": "1234-5678-90"
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formValue) {
    // Do something awesome
    console.log(formValue);
    // throw Error('something go wrong')
  }

}
