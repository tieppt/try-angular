import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent {
  message: string = 'Xin chao, ContactListComponent!';
  static clickCounter = 0;
  printable = false;
  tabIndex: number = 1;
  contacts = [{
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer',
      avatar: {
        round: true,
        url: '  https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 2,
      name: 'John Doe',
      job: 'Writer',
      avatar: {
        round: true,
        url: '   https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director',
      avatar: {
        round: false,
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }
  ];
  styleH3: number = 2.5;

  ngStyleH3 = {
    fontSize: '3.5em'
  };

  baseContact = {
    id: 4,
    name: 'User No. 4',
    job: 'Software Developer',
    avatar: {
      url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
    }
  };
  serverContacts = [{
      id: 1,
      name: 'Tiep Phan',
      job: 'Web Developer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 2,
      name: 'John Doe',
      job: 'Writer',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }, {
      id: 3,
      name: 'Michael Bay',
      job: 'Producer, Director',
      avatar: {
        url: 'https://placeholdit.imgix.net/~text?txtsize=36&bg=e8117f&txtclr=ffffff&txt=150%C3%97150&w=150&h=150'
      }
    }
  ];

  changeTab(tabIndex) {
    this.tabIndex = tabIndex;
  }
  getDataFromServer() {
    return JSON.parse(JSON.stringify(this.serverContacts));
  }

  getContacts() {
    if (ContactListComponent.clickCounter % 2 == 0) {
      this.contacts = this.getDataFromServer().concat(this.baseContact);
    } else {
      this.contacts = this.getDataFromServer().concat([]);
    }
    ContactListComponent.clickCounter++;
  }
  contactTrackByFn(index, item) {
    return item.id;
  }
  switchesValueChange(event: boolean, index) {
    this.contacts[index].avatar.round = event;
  }
}
