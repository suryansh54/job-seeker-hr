import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHrComponent } from './create-hr.component';

describe('CreateHrComponent', () => {
  let component: CreateHrComponent;
  let fixture: ComponentFixture<CreateHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
