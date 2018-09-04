import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasouralComponent } from './casoural.component';

describe('CasouralComponent', () => {
  let component: CasouralComponent;
  let fixture: ComponentFixture<CasouralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasouralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasouralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
