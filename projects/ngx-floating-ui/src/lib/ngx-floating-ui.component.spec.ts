import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFloatingUiComponent } from './ngx-floating-ui.component';

describe('NgxFloatingUiComponent', () => {
  let component: NgxFloatingUiComponent;
  let fixture: ComponentFixture<NgxFloatingUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFloatingUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFloatingUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
