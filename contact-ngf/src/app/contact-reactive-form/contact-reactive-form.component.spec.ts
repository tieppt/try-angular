import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactReactiveFormComponent } from './contact-reactive-form.component';

describe('ContactReactiveFormComponent', () => {
  let component: ContactReactiveFormComponent;
  let fixture: ComponentFixture<ContactReactiveFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactReactiveFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
