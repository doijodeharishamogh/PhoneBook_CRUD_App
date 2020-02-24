import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostModuleComponent } from './post-module.component';

describe('PostModuleComponent', () => {
  let component: PostModuleComponent;
  let fixture: ComponentFixture<PostModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
