import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneTypeListComponent } from './plane-type-list.component';

describe('PlaneTypeListComponent', () => {
  let component: PlaneTypeListComponent;
  let fixture: ComponentFixture<PlaneTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
