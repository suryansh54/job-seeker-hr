import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHrComponent } from './list-hr.component';

describe('ListHrComponent', () => {
  let component: ListHrComponent;
  let fixture: ComponentFixture<ListHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
