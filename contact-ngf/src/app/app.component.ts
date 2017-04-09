import { Component, OnInit } from '@angular/core';
import { POSTS } from './services/post';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: any = {
    name: "Tiep phan",
    dob: new Date('01-01-1990')
  }
  temp = 35;
  ngOnInit() {
    setTimeout(() => {
      this.user.name = 'Tiep Phan tuan';
      this.user.dob.setDate(11);
    }, 1000);
  }
}
