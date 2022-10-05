import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeptGridComponent } from './dept-grid.component';

describe('DeptGridComponent', () => {
  let component: DeptGridComponent;
  let fixture: ComponentFixture<DeptGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeptGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeptGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
