import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTableRowComponent } from './field-table-row.component';

describe('FieldTableRowComponent', () => {
  let component: FieldTableRowComponent;
  let fixture: ComponentFixture<FieldTableRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTableRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTableRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
