import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoppyComponent } from './poppy.component';

describe('PoppyComponent', () => {
  let component: PoppyComponent;
  let fixture: ComponentFixture<PoppyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoppyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoppyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
