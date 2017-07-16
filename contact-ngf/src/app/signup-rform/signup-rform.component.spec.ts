import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupRformComponent } from './signup-rform.component';

describe('SignupRformComponent', () => {
  let component: SignupRformComponent;
  let fixture: ComponentFixture<SignupRformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupRformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupRformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
