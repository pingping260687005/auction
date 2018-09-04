import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { 快速建一个组件Component } from './快速建一个组件.component';

describe('快速建一个组件Component', () => {
  let component: 快速建一个组件Component;
  let fixture: ComponentFixture<快速建一个组件Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 快速建一个组件Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(快速建一个组件Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
