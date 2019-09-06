import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducnameComponent } from './producname.component';

describe('ProducnameComponent', () => {
  let component: ProducnameComponent;
  let fixture: ComponentFixture<ProducnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProducnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
