import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'tpc-signup-tform',
  templateUrl: './signup-tform.component.html',
  styleUrls: ['./signup-tform.component.scss']
})
export class SignupTformComponent implements OnInit {
  validatePass: boolean = true;
  list = ['admin', 'manager'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: FormGroup) {
    console.log(form);
  }

  toggle() {
    const el = 'admin';
    if (this.list.includes(el)) {
      this.list = this.list.filter(x => x !== el);
    } else {
      this.list = [...this.list, el];
    }
  }

}
