import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SparkleComponent } from './sparkle.component';

describe('SparkleComponent', () => {
  let component: SparkleComponent;
  let fixture: ComponentFixture<SparkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SparkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SparkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
