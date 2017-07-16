import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTformComponent } from './signup-tform.component';

describe('SignupTformComponent', () => {
  let component: SignupTformComponent;
  let fixture: ComponentFixture<SignupTformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupTformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupTformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
