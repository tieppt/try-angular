import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseGroupComponent } from './collapse-group.component';

describe('CollapseGroupComponent', () => {
  let component: CollapseGroupComponent;
  let fixture: ComponentFixture<CollapseGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
