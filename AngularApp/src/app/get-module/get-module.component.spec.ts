import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetModuleComponent } from './get-module.component';

describe('GetModuleComponent', () => {
  let component: GetModuleComponent;
  let fixture: ComponentFixture<GetModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
